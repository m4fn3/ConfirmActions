function R(n){window.enmity.plugins.registerPlugin(n)}const E=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts;const _=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings;const w=window.enmity.modules.common.Users,N=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme;const S=window.enmity.modules.common.Linking,P=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components;const f=window.enmity.modules.common.Locale;window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function B(n){return window.enmity.patcher.create(n)}var c="ConfirmActions",I="1.0.0",V="Prevent you from accidentally doing what you didn't expected to do",D=[{name:"mafu",id:"519760564755365888"}],x="#d2691e",M={name:c,version:I,description:V,authors:D,color:x};const{components:i}=window.enmity;i.Alert,i.Button,i.FlatList;const L=i.Image;i.ImageBackground,i.KeyboardAvoidingView,i.Modal,i.Pressable,i.RefreshControl;const k=i.ScrollView;i.SectionList,i.StatusBar,i.StyleSheet,i.Switch;const b=i.Text;i.TextInput,i.TouchableHighlight,i.TouchableOpacity,i.TouchableWithoutFeedback,i.Touchable;const T=i.View;i.VirtualizedList,i.Form,i.FormArrow,i.FormCTA,i.FormCTAButton,i.FormCardSection,i.FormCheckbox,i.FormDivider,i.FormHint,i.FormIcon,i.FormInput,i.FormLabel,i.FormRadio;const l=i.FormRow,C=i.FormSection;i.FormSelect,i.FormSubLabel;const p=i.FormSwitch;i.FormTernaryCheckBox,i.FormText,i.FormTextColors,i.FormTextSizes;function s(n){return window.enmity.assets.getIDByName(n)}const y={byProps:(...n)=>window.enmity.modules.filters.byProps(...n),byName:(n,m)=>window.enmity.modules.filters.byName(n,m),byTypeName:(n,m)=>window.enmity.modules.filters.byTypeName(n,m),byDisplayName:(n,m)=>window.enmity.modules.filters.byDisplayName(n,m)};function $(...n){return window.enmity.modules.bulk(...n)}function q(...n){return window.enmity.modules.getByProps(...n)}window.enmity.modules.common;const U=s("camera"),O=s("hub-invite"),G=s("ic_invites_24px"),z=s("ic_pins"),H=s("ic_call_ended"),Y=s("ic_mic_muted_24px"),K=s("ic_friends_list_24px"),j=s("ic_friend_wave_24px"),W=s("ic_message_delete"),J=s("img_account_sync_github_white"),Q=s("Discord"),X=s("img_account_sync_twitter_white"),Z=q("acceptInviteAndTransitionToInviteChannel");var ee=({settings:n})=>{const m=P.createThemedStyleSheet({container:{flexDirection:"row",justifyContent:"center",alignItems:"center"},image:{width:70,height:70,marginTop:20,marginLeft:20},title:{flexDirection:"column"},name:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:E.ThemeColorMap.HEADER_PRIMARY},author:{fontSize:15,paddingLeft:50,color:E.ThemeColorMap.HEADER_SECONDARY},info:{height:45,paddingTop:3,paddingBottom:3,justifyContent:"center",alignItems:"center"},footer:{color:E.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",paddingTop:10,paddingBottom:20}});return o.createElement(k,null,o.createElement(T,{style:m.container},o.createElement(L,{source:{uri:"https://avatars.githubusercontent.com/u/43488869"},style:m.image}),o.createElement(T,{style:m.title},o.createElement(b,{style:m.name},"ConfirmActions"),o.createElement(b,{style:m.author},"by mafu"))),o.createElement(C,{title:"REMOVE CONFIRMATION"},o.createElement(l,{label:"Deleting Message",leading:o.createElement(l.Icon,{source:W}),trailing:o.createElement(p,{value:n.getBoolean("delete_message",!1),onValueChange:e=>{n.set("delete_message",e)}})}),o.createElement(l,{label:"Pinning Message",leading:o.createElement(l.Icon,{source:z}),trailing:o.createElement(p,{value:n.getBoolean("pin_message",!1),onValueChange:e=>{n.set("pin_message",e)}})})),o.createElement(C,{title:"ADD CONFIRMATION"},o.createElement(l,{label:"Enable Camera",leading:o.createElement(l.Icon,{source:U}),trailing:o.createElement(p,{value:n.getBoolean("camera",!1),onValueChange:e=>{n.set("camera",e)}})}),o.createElement(l,{label:"Unmute",leading:o.createElement(l.Icon,{source:Y}),trailing:o.createElement(p,{value:n.getBoolean("mute",!1),onValueChange:e=>{n.set("mute",e)}})}),o.createElement(l,{label:"Call",leading:o.createElement(l.Icon,{source:H}),trailing:o.createElement(p,{value:n.getBoolean("call",!1),onValueChange:e=>{n.set("call",e)}})}),o.createElement(l,{label:"Accept Invitation",leading:o.createElement(l.Icon,{source:G}),trailing:o.createElement(p,{value:n.getBoolean("accept_invite",!1),onValueChange:e=>{n.set("accept_invite",e)}})}),o.createElement(l,{label:"Create Invitation",leading:o.createElement(l.Icon,{source:O}),trailing:o.createElement(p,{value:n.getBoolean("create_invite",!1),onValueChange:e=>{n.set("create_invite",e)}})}),o.createElement(l,{label:"Add/Remove/Block Friend",leading:o.createElement(l.Icon,{source:K}),trailing:o.createElement(p,{value:n.getBoolean("manage_friend",!1),onValueChange:e=>{n.set("manage_friend",e)}})}),o.createElement(l,{label:"Accept/Cancel FriendRequest",leading:o.createElement(l.Icon,{source:j}),trailing:o.createElement(p,{value:n.getBoolean("friend_request",!1),onValueChange:e=>{n.set("friend_request",e)}})})),o.createElement(C,{title:"INFORMATION"},o.createElement(l,{label:"Follow me on Twitter",style:m.info,trailing:l.Arrow,leading:o.createElement(l.Icon,{source:X}),onPress:()=>{S.openURL("https://twitter.com/m4fn3")}}),o.createElement(l,{label:"Visit my server for help",style:m.info,trailing:l.Arrow,leading:o.createElement(l.Icon,{source:Q}),onPress:()=>{Z.acceptInviteAndTransitionToInviteChannel({inviteKey:"TrCqPTCrdq",context:{location:"Invite Button Embed"},callback:()=>{N.pop()}})}}),o.createElement(l,{label:"Check Source on GitHub",style:m.info,trailing:l.Arrow,leading:o.createElement(l.Icon,{source:J}),onPress:()=>{S.openURL("https://github.com/m4fn3/ConfirmActions")}})),o.createElement(b,{style:m.footer},`v${I}`))};function d(n,m,e){return window.enmity.settings.get(n,m,e)}const u=B("ConfirmActions"),[A,te,v,F,ne,oe,ie]=$(y.byProps("acceptInvite"),y.byProps("openLazy","hideActionSheet"),y.byProps("removeFriend"),y.byProps("setVideoEnabled"),y.byProps("handleStartCall"),y.byProps("getVoiceSettings"),y.byProps("getGuild"));function g(n,m,e){_.show({title:m,body:`Are you sure you want to ${e}?`,confirmText:"Yes",cancelText:"No",onConfirm:n})}const ae={...M,onStart(){u.instead(F,"setVideoEnabled",(e,t,a)=>{t[0]&&d(c,"camera")?g(()=>{a.apply(e,t)},"Enable Camera","enable camera"):a.apply(e,t)}),u.instead(ne,"handleStartCall",(e,t,a)=>{d(c,"call")?g(()=>{a.apply(e,t)},`${t[1]?"Video":"Voice"} Call`,`start ${t[1]?"video":"voice"} call`):a.apply(e,t)}),u.instead(A,"acceptInvite",(e,t,a)=>{var r;["Invite Button Embed","Markdown Link"].includes((r=t[0].context)==null?void 0:r.location)&&d(c,"accept_invite")?A.resolveInvite(t[0].inviteKey,"Deep Link").then(h=>{g(()=>{a.apply(e,t)},"Accept Invitation",`accept invitation to **${h.invite.guild.name}(#${h.invite.channel.name})** `)}):a.apply(e,t)}),u.instead(te,"openLazy",(e,t,a)=>{if(t[1].startsWith("instant-invite")&&d(c,"create_invite")){let r=ie.getGuild(t[2].channel.guild_id).name,h=t[2].channel.name;g(()=>{a.apply(e,t)},"Create Invitation",`create invitation of **${r}(#${h})** `)}else a.apply(e,t)});let n=!1,m=!1;u.instead(v,"removeRelationship",(e,t,a)=>{if(n){n=!1,a.apply(e,t);return}if(d(c,"manage_friend")){let r=w.getUser(t[0]).username;g(()=>{a.apply(e,t)},"Remove Friend",`remove **${r}** from friends`)}else a.apply(e,t)}),u.instead(v,"addRelationship",(e,t,a)=>{if(m){m=!1,a.apply(e,t);return}if(t[0].type===2&&d(c,"manage_friend")){let r=w.getUser(t[0].userId).username;g(()=>{a.apply(e,t)},"Block User",`block **${r}**`)}else if(t[0].type===void 0&&d(c,"manage_friend")){let r=w.getUser(t[0].userId).username;g(()=>{a.apply(e,t)},"Add Friend",`add **${r}** to friends`)}else a.apply(e,t)}),u.instead(v,"acceptFriendRequest",(e,t,a)=>{if(d(c,"friend_request")){let r=w.getUser(t[0].userId).username;g(()=>{m=!0,a.apply(e,t)},"Accept FriendRequest",`accept friend request from **${r}**`)}else a.apply(e,t)}),u.instead(v,"cancelFriendRequest",(e,t,a)=>{if(d(c,"friend_request")){let r=w.getUser(t[0]).username;g(()=>{n=!0,a.apply(e,t)},"Cancel FriendRequest",`cancel friend request from **${r}**`)}else a.apply(e,t)}),u.instead(_,"show",(e,t,a)=>{t[0].title===f.Messages.DELETE_MESSAGE&&d(c,"delete_message")||(t[0].title===f.Messages.PIN_MESSAGE||t[0].title===f.Messages.UNPIN_MESSAGE)&&d(c,"pin_message")?t[0].onConfirm():a.apply(e,t)}),u.instead(F,"toggleSelfMute",(e,t,a)=>{oe.getDeprecatedVoiceSettings().mute&&d(c,"mute")?g(()=>{a.apply(e,t)},"Unmute","unmute"):a.apply(e,t)})},onStop(){u.unpatchAll()},getSettingsPanel({settings:n}){return o.createElement(ee,{settings:n})}};R(ae);