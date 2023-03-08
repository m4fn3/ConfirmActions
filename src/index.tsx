import {Plugin, registerPlugin} from 'enmity/managers/plugins'
import {Dialog, React, Locale, Users} from 'enmity/metro/common'
import {create} from 'enmity/patcher'
// @ts-ignore
import manifest, {name as plugin_name} from '../manifest.json'
import Settings from "./components/Settings"
import {bulk, filters} from "enmity/metro"
import {get, set} from "enmity/api/settings"

const Patcher = create('ConfirmActions')

const [
    InviteStore,
    LazyActionSheet,
    RelationshipStore,
    CallStore,
    VoiceStore,
    VoiceSettingsStore,
    GuildStore
] = bulk(
    filters.byProps("acceptInvite"),
    filters.byProps("openLazy", "hideActionSheet"),
    filters.byProps("removeFriend"),
    filters.byProps("setVideoEnabled"),
    filters.byProps("handleStartCall"),
    filters.byProps("getVoiceSettings"),
    filters.byProps("getGuild")
)

function Confirm(callback, title, text) {
    Dialog.show({
        title: title,
        body: `Are you sure you want to ${text}?`,
        confirmText: "Yes",
        cancelText: "No",
        onConfirm: callback
    })
}

const ConfirmActions: Plugin = {
    ...manifest,
    onStart() {
        // On Enable Camera
        Patcher.instead(CallStore, "setVideoEnabled", (self, args, org) => {
            if (args[0] && get(plugin_name, "camera")) {
                Confirm(() => {
                    org.apply(self, args)
                }, "Enable Camera", "enable camera")
            } else {
                org.apply(self, args)
            }
        })

        // On Start Call (User/Group)
        Patcher.instead(VoiceStore, "handleStartCall", (self, args, org) => {
            if (get(plugin_name, "call")) {
                Confirm(() => {
                    org.apply(self, args)
                }, `${args[1] ? 'Video' : 'Voice'} Call`, `start ${args[1] ? 'video' : 'voice'} call`)
            } else {
                org.apply(self, args)
            }
        })

        // On Accept Invite
        Patcher.instead(InviteStore, "acceptInvite", (self, args, org) => {
            if (["Invite Button Embed", "Markdown Link"].includes(args[0].context?.location) && get(plugin_name, "accept_invite")) {
                InviteStore.resolveInvite(args[0].inviteKey, "Deep Link").then((info) => {
                    Confirm(() => {
                        org.apply(self, args)
                    }, "Accept Invitation", `accept invitation to **${info.invite.guild.name}(#${info.invite.channel.name})** `)
                })
            } else {
                org.apply(self, args)
            }
        })

        // On Action Sheet
        Patcher.instead(LazyActionSheet, "openLazy", (self, args, org) => {
            // On Create Invite
            if (args[1].startsWith("instant-invite") && get(plugin_name, "create_invite")) {
                let guild_name = GuildStore.getGuild(args[2].channel.guild_id).name
                let channel_name = args[2].channel.name
                Confirm(() => {
                    org.apply(self, args)
                }, "Create Invitation", `create invitation of **${guild_name}(#${channel_name})** `)
            } else {
                org.apply(self, args)
            }
        })

        let pendingCancel = false
        let pendingAccept = false
        // On Remove Friend
        Patcher.instead(RelationshipStore, "removeRelationship", (self, args, org) => {
            if (pendingCancel) {
                pendingCancel = false
                org.apply(self, args)
                return
            }
            if (get(plugin_name, "manage_friend")) {
                let name = Users.getUser(args[0]).username
                Confirm(() => {
                    org.apply(self, args)
                }, "Remove Friend", `remove **${name}** from friends`)
            } else {
                org.apply(self, args)
            }
        })

        // On Block Friend
        Patcher.instead(RelationshipStore, "addRelationship", (self, args, org) => {
            if (pendingAccept) {
                pendingAccept = false
                org.apply(self, args)
                return
            }
            if (args[0].type === 2 && get(plugin_name, "manage_friend")) {
                let name = Users.getUser(args[0].userId).username
                Confirm(() => {
                    org.apply(self, args)
                }, "Block User", `block **${name}**`)
            } else if (args[0].type === undefined && get(plugin_name, "manage_friend")) {
                let name = Users.getUser(args[0].userId).username
                Confirm(() => {
                    org.apply(self, args)
                }, "Add Friend", `add **${name}** to friends`)
            } else {
                org.apply(self, args)
            }
        })

        // On Accept FriendRequest
        Patcher.instead(RelationshipStore, "acceptFriendRequest", (self, args, org) => {
            if (get(plugin_name, "friend_request")) {
                let name = Users.getUser(args[0].userId).username
                Confirm(() => {
                    pendingAccept = true
                    org.apply(self, args)
                }, "Accept FriendRequest", `accept friend request from **${name}**`)
            } else {
                org.apply(self, args)
            }
        })

        // On Cancel FriendRequest
        Patcher.instead(RelationshipStore, "cancelFriendRequest", (self, args, org) => {
            if (get(plugin_name, "friend_request")) {
                let name = Users.getUser(args[0]).username
                Confirm(() => {
                    pendingCancel = true
                    org.apply(self, args)
                }, "Cancel FriendRequest", `cancel friend request from **${name}**`)
            } else {
                org.apply(self, args)
            }
        })

        // On Alert
        Patcher.instead(Dialog, 'show', (self, args, org) => {
            // On Message Delete
            if (args[0].title === Locale.Messages.DELETE_MESSAGE && get(plugin_name, "delete_message")) {
                args[0].onConfirm()
            } else if ((args[0].title === Locale.Messages.PIN_MESSAGE || args[0].title === Locale.Messages.UNPIN_MESSAGE) && get(plugin_name, "pin_message")) {
                args[0].onConfirm()
            } else {
                org.apply(self, args)
            }
        })

        // On Mute
        Patcher.instead(CallStore, "toggleSelfMute", (self, args, org) => {
            if (VoiceSettingsStore.getDeprecatedVoiceSettings().mute && get(plugin_name, "mute")) {
                Confirm(() => {
                    org.apply(self, args)
                }, "Unmute", "unmute")
            } else {
                org.apply(self, args)
            }
        })

        // set(plugin_name, "_owner", ["519760564755365888", "896990098615337000", "1048982327809818706"].includes(Users.getCurrentUser().id))
    },
    onStop() {
        Patcher.unpatchAll()
    },
    getSettingsPanel({settings}) {
        return <Settings settings={settings}/>
    }
}

registerPlugin(ConfirmActions)
