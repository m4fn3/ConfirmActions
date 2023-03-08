import {FormRow, FormSwitch, FormSection, View, ScrollView, Image, Text} from 'enmity/components'
import {Constants, Navigation, React, StyleSheet} from 'enmity/metro/common'
import {Linking} from "enmity/metro/common"
// @ts-ignore
import {name, version} from '../../manifest.json'
import {getIDByName} from "enmity/api/assets"
import {getByProps} from "enmity/modules"
import {reload} from "enmity/api/native"

const CameraIcon = getIDByName('camera')
const InviteIcon = getIDByName('hub-invite')
const LinkIcon = getIDByName('ic_invites_24px')
const PinIcon = getIDByName('ic_pins')
const CallIcon = getIDByName("ic_call_ended")
const MuteIcon = getIDByName('ic_mic_muted_24px')
const FriendIcon = getIDByName('ic_friends_list_24px')
const AddIcon = getIDByName('ic_friend_wave_24px')
const DeleteIcon = getIDByName('ic_message_delete')
const GitHubIcon = getIDByName('img_account_sync_github_white')
const DiscordIcon = getIDByName('Discord')
const TwitterIcon = getIDByName('img_account_sync_twitter_white')

const Invites = getByProps('acceptInviteAndTransitionToInviteChannel')

export default ({settings}) => {
    const styles = StyleSheet.createThemedStyleSheet({
        container: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        },
        image: {
            width: 70,
            height: 70,
            marginTop: 20,
            marginLeft: 20
        },
        title: {
            flexDirection: "column",

        },
        name: {
            fontSize: 30,
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 30,
            color: Constants.ThemeColorMap.HEADER_PRIMARY,
        },
        author: {
            fontSize: 15,
            paddingLeft: 50,
            color: Constants.ThemeColorMap.HEADER_SECONDARY,
        },
        info: {
            height: 45,
            paddingTop: 3,
            paddingBottom: 3,
            justifyContent: "center",
            alignItems: "center"
        },
        footer: {
            color: Constants.ThemeColorMap.HEADER_SECONDARY,
            textAlign: 'center',
            paddingTop: 10,
            paddingBottom: 20
        }
    })
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    source={{uri: 'https://avatars.githubusercontent.com/u/43488869'}}
                    style={styles.image}
                />
                <View style={styles.title}>
                    <Text style={styles.name}>ConfirmActions</Text>
                    <Text style={styles.author}>by mafu</Text>
                </View>
            </View>
            <FormSection title="REMOVE CONFIRMATION">
                <FormRow
                    label="Deleting Message"
                    leading={<FormRow.Icon source={DeleteIcon}/>}
                    trailing={
                        <FormSwitch
                            value={settings.getBoolean("delete_message", false)}
                            onValueChange={(value) => {
                                settings.set("delete_message", value)
                            }}
                        />
                    }
                />
                <FormRow
                    label="Pinning Message"
                    leading={<FormRow.Icon source={PinIcon}/>}
                    trailing={
                        <FormSwitch
                            value={settings.getBoolean("pin_message", false)}
                            onValueChange={(value) => {
                                settings.set("pin_message", value)
                            }}
                        />
                    }
                />
            </FormSection>
            <FormSection title="ADD CONFIRMATION">
                <FormRow
                    label="Enable Camera"
                    leading={<FormRow.Icon source={CameraIcon}/>}
                    trailing={
                        <FormSwitch
                            value={settings.getBoolean("camera", false)}
                            onValueChange={(value) => {
                                settings.set("camera", value)
                            }}
                        />
                    }
                />
                <FormRow
                    label="Unmute"
                    leading={<FormRow.Icon source={MuteIcon}/>}
                    trailing={
                        <FormSwitch
                            value={settings.getBoolean("mute", false)}
                            onValueChange={(value) => {
                                settings.set("mute", value)
                            }}
                        />
                    }
                />
                {[1].filter(_ => settings.get("_owner")).map(() =>
                    <FormRow
                        label="Call"
                        leading={<FormRow.Icon source={CallIcon}/>}
                        trailing={
                            <FormSwitch
                                value={settings.getBoolean("call", false)}
                                onValueChange={(value) => {
                                    settings.set("call", value)
                                }}
                            />
                        }
                    />
                )}
                <FormRow
                    label="Accept Invitation"
                    leading={<FormRow.Icon source={LinkIcon}/>}
                    trailing={
                        <FormSwitch
                            value={settings.getBoolean("accept_invite", false)}
                            onValueChange={(value) => {
                                settings.set("accept_invite", value)
                            }}
                        />
                    }
                />
                <FormRow
                    label="Create Invitation"
                    leading={<FormRow.Icon source={InviteIcon}/>}
                    trailing={
                        <FormSwitch
                            value={settings.getBoolean("create_invite", false)}
                            onValueChange={(value) => {
                                settings.set("create_invite", value)
                            }}
                        />
                    }
                />
                <FormRow
                    label="Add/Remove/Block Friend"
                    leading={<FormRow.Icon source={FriendIcon}/>}
                    trailing={
                        <FormSwitch
                            value={settings.getBoolean("manage_friend", false)}
                            onValueChange={(value) => {
                                settings.set("manage_friend", value)
                            }}
                        />
                    }
                />
                <FormRow
                    label="Accept/Cancel FriendRequest"
                    leading={<FormRow.Icon source={AddIcon}/>}
                    trailing={
                        <FormSwitch
                            value={settings.getBoolean("friend_request", false)}
                            onValueChange={(value) => {
                                settings.set("friend_request", value)
                            }}
                        />
                    }
                />
            </FormSection>
            <FormSection title="INFORMATION">
                <FormRow
                    label="Follow me on Twitter"
                    style={styles.info}
                    trailing={FormRow.Arrow}
                    leading={<FormRow.Icon source={TwitterIcon}/>}
                    onPress={() => {
                        Linking.openURL("https://twitter.com/m4fn3")
                    }}
                />
                <FormRow
                    label="Visit my server for help"
                    style={styles.info}
                    trailing={FormRow.Arrow}
                    leading={<FormRow.Icon source={DiscordIcon}/>}
                    onPress={() => {
                        Invites.acceptInviteAndTransitionToInviteChannel({
                            inviteKey: 'TrCqPTCrdq',
                            context: {location: 'Invite Button Embed'},
                            callback: () => {
                                Navigation.pop()
                            }
                        })
                    }}
                />
                <FormRow
                    label="Check Source on GitHub"
                    style={styles.info}
                    trailing={FormRow.Arrow}
                    leading={<FormRow.Icon source={GitHubIcon}/>}
                    onPress={() => {
                        Linking.openURL("https://github.com/m4fn3/ConfirmActions")
                    }}
                    onLongPress={() => settings.set("_owner", !settings.get("_owner"))}
                />
            </FormSection>
            <Text style={styles.footer}>
                {`v${version}`}
            </Text>
        </ScrollView>
    )
}