function P(n){window.enmity.plugins.registerPlugin(n)}const f=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts;const C=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings;const w=window.enmity.modules.common.Users,N=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme;const S=window.enmity.modules.common.Linking,B=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components;const v=window.enmity.modules.common.Locale;window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function V(n){return window.enmity.patcher.create(n)}var s="ConfirmActions",I="1.0.3",M="Prevent you from accidentally doing what you didn't expected to do",D=[{name:"mafu",id:"519760564755365888"}],L="#d2691e",x={name:s,version:I,description:M,authors:D,color:L};const{components:i}=window.enmity;i.Alert,i.Button,i.FlatList;const k=i.Image;i.ImageBackground,i.KeyboardAvoidingView,i.Modal,i.Pressable,i.RefreshControl;const $=i.ScrollView;i.SectionList,i.StatusBar,i.StyleSheet,i.Switch;const _=i.Text;i.TextInput,i.TouchableHighlight,i.TouchableOpacity,i.TouchableWithoutFeedback,i.Touchable;const T=i.View;i.VirtualizedList,i.Form,i.FormArrow,i.FormCTA,i.FormCTAButton,i.FormCardSection,i.FormCheckbox,i.FormDivider,i.FormHint,i.FormIcon,i.FormInput,i.FormLabel,i.FormRadio;const l=i.FormRow,b=i.FormSection;i.FormSelect,i.FormSubLabel;const g=i.FormSwitch;i.FormTernaryCheckBox,i.FormText,i.FormTextColors,i.FormTextSizes;function d(n){return window.enmity.assets.getIDByName(n)}const y={byProps:(...n)=>window.enmity.modules.filters.byProps(...n),byName:(n,r)=>window.enmity.modules.filters.byName(n,r),byTypeName:(n,r)=>window.enmity.modules.filters.byTypeName(n,r),byDisplayName:(n,r)=>window.enmity.modules.filters.byDisplayName(n,r)};function U(...n){return window.enmity.modules.bulk(...n)}function q(...n){return window.enmity.modules.getByProps(...n)}window.enmity.modules.common;const O=d("camera"),G=d("hub-invite"),A=d("ic_invites_24px"),H=d("ic_pins"),z=d("ic_call_ended"),K=d("ic_mic_muted_24px"),Y=d("ic_friends_list_24px"),j=d("ic_friend_wave_24px"),W=d("ic_message_delete"),J=d("img_account_sync_github_white"),Q=d("Discord"),X=d("img_account_sync_twitter_white"),Z=q("acceptInviteAndTransitionToInviteChannel");var ee=({settings:n})=>{const r=B.createThemedStyleSheet({container:{flexDirection:"row",justifyContent:"center",alignItems:"center"},image:{width:70,height:70,marginTop:20,marginLeft:20},title:{flexDirection:"column"},name:{fontSize:30,paddingTop:20,paddingLeft:20,paddingRight:30,color:f.ThemeColorMap.HEADER_PRIMARY},author:{fontSize:15,paddingLeft:50,color:f.ThemeColorMap.HEADER_SECONDARY},info:{height:45,paddingTop:3,paddingBottom:3,justifyContent:"center",alignItems:"center"},footer:{color:f.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",paddingTop:10,paddingBottom:20}});return o.createElement($,null,o.createElement(T,{style:r.container},o.createElement(k,{source:{uri:"https://avatars.githubusercontent.com/u/43488869"},style:r.image}),o.createElement(T,{style:r.title},o.createElement(_,{style:r.name},"ConfirmActions"),o.createElement(_,{style:r.author},"by mafu"))),o.createElement(b,{title:"REMOVE CONFIRMATION"},o.createElement(l,{label:"Deleting Message",leading:o.createElement(l.Icon,{source:W}),trailing:o.createElement(g,{value:n.getBoolean("delete_message",!1),onValueChange:e=>{n.set("delete_message",e)}})}),o.createElement(l,{label:"Pinning Message",leading:o.createElement(l.Icon,{source:H}),trailing:o.createElement(g,{value:n.getBoolean("pin_message",!1),onValueChange:e=>{n.set("pin_message",e)}})}),o.createElement(l,{label:"Trust protocol",leading:o.createElement(l.Icon,{source:A}),trailing:o.createElement(g,{value:n.getBoolean("trust_protocol",!1),onValueChange:e=>{n.set("trust_protocol",e)}})})),o.createElement(b,{title:"ADD CONFIRMATION"},o.createElement(l,{label:"Enable Camera",leading:o.createElement(l.Icon,{source:O}),trailing:o.createElement(g,{value:n.getBoolean("camera",!1),onValueChange:e=>{n.set("camera",e)}})}),o.createElement(l,{label:"Unmute",leading:o.createElement(l.Icon,{source:K}),trailing:o.createElement(g,{value:n.getBoolean("mute",!1),onValueChange:e=>{n.set("mute",e)}})}),o.createElement(l,{label:"Call",leading:o.createElement(l.Icon,{source:z}),trailing:o.createElement(g,{value:n.getBoolean("call",!1),onValueChange:e=>{n.set("call",e)}})}),o.createElement(l,{label:"Accept Invitation",leading:o.createElement(l.Icon,{source:A}),trailing:o.createElement(g,{value:n.getBoolean("accept_invite",!1),onValueChange:e=>{n.set("accept_invite",e)}})}),o.createElement(l,{label:"Create Invitation",leading:o.createElement(l.Icon,{source:G}),trailing:o.createElement(g,{value:n.getBoolean("create_invite",!1),onValueChange:e=>{n.set("create_invite",e)}})}),o.createElement(l,{label:"Add/Remove/Block Friend",leading:o.createElement(l.Icon,{source:Y}),trailing:o.createElement(g,{value:n.getBoolean("manage_friend",!1),onValueChange:e=>{n.set("manage_friend",e)}})}),o.createElement(l,{label:"Accept/Cancel FriendRequest",leading:o.createElement(l.Icon,{source:j}),trailing:o.createElement(g,{value:n.getBoolean("friend_request",!1),onValueChange:e=>{n.set("friend_request",e)}})})),o.createElement(b,{title:"INFORMATION"},o.createElement(l,{label:"Follow me on Twitter",style:r.info,trailing:l.Arrow,leading:o.createElement(l.Icon,{source:X}),onPress:()=>{S.openURL("https://twitter.com/m4fn3")}}),o.createElement(l,{label:"Visit my server for help",style:r.info,trailing:l.Arrow,leading:o.createElement(l.Icon,{source:Q}),onPress:()=>{Z.acceptInviteAndTransitionToInviteChannel({inviteKey:"TrCqPTCrdq",context:{location:"Invite Button Embed"},callback:()=>{N.pop()}})}}),o.createElement(l,{label:"Check Source on GitHub",style:r.info,trailing:l.Arrow,leading:o.createElement(l.Icon,{source:J}),onPress:()=>{S.openURL("https://github.com/m4fn3/ConfirmActions")},onLongPress:()=>n.set("_owner",!n.get("_owner"))})),o.createElement(_,{style:r.footer},`v${I}`))};function c(n,r,e){return window.enmity.settings.get(n,r,e)}const u=V("ConfirmActions"),[F,te,h,R,ne,oe,ie]=U(y.byProps("acceptInvite"),y.byProps("openLazy","hideActionSheet"),y.byProps("removeFriend"),y.byProps("setVideoEnabled"),y.byProps("handleStartCall"),y.byProps("getVoiceSettings"),y.byProps("getGuild"));function p(n,r,e){C.show({title:r,body:`Are you sure you want to ${e}?`,confirmText:"Yes",cancelText:"No",onConfirm:n})}const ae={...x,onStart(){u.instead(R,"setVideoEnabled",(e,t,a)=>{t[0]&&c(s,"camera",!1)?p(()=>{a.apply(e,t)},"Enable Camera","enable camera"):a.apply(e,t)}),u.instead(ne,"handleStartCall",(e,t,a)=>{c(s,"call",!1)?p(()=>{a.apply(e,t)},`${t[1]?"Video":"Voice"} Call`,`start ${t[1]?"video":"voice"} call`):a.apply(e,t)}),u.instead(F,"acceptInvite",(e,t,a)=>{var m;["Invite Button Embed","Markdown Link"].includes((m=t[0].context)==null?void 0:m.location)&&c(s,"accept_invite",!1)?F.resolveInvite(t[0].inviteKey,"Deep Link").then(E=>{p(()=>{a.apply(e,t)},"Accept Invitation",`accept invitation to **${E.invite.guild.name}(#${E.invite.channel.name})** `)}):a.apply(e,t)}),u.instead(te,"openLazy",(e,t,a)=>{if(t[1].startsWith("instant-invite")&&c(s,"create_invite",!1)){let m=ie.getGuild(t[2].channel.guild_id).name,E=t[2].channel.name;p(()=>{a.apply(e,t)},"Create Invitation",`create invitation of **${m}(#${E})** `)}else a.apply(e,t)});let n=!1,r=!1;u.instead(h,"removeRelationship",(e,t,a)=>{if(n){n=!1,a.apply(e,t);return}if(c(s,"manage_friend",!1)){let m=w.getUser(t[0]).username;p(()=>{a.apply(e,t)},"Remove Friend",`remove **${m}** from friends`)}else a.apply(e,t)}),u.instead(h,"addRelationship",(e,t,a)=>{if(r){r=!1,a.apply(e,t);return}if(t[0].type===2&&c(s,"manage_friend",!1)){let m=w.getUser(t[0].userId).username;p(()=>{a.apply(e,t)},"Block User",`block **${m}**`)}else if(t[0].type===void 0&&c(s,"manage_friend",!1)){let m=w.getUser(t[0].userId).username;p(()=>{a.apply(e,t)},"Add Friend",`add **${m}** to friends`)}else a.apply(e,t)}),u.instead(h,"acceptFriendRequest",(e,t,a)=>{if(c(s,"friend_request",!1)){let m=w.getUser(t[0].userId).username;p(()=>{r=!0,a.apply(e,t)},"Accept FriendRequest",`accept friend request from **${m}**`)}else a.apply(e,t)}),u.instead(h,"cancelFriendRequest",(e,t,a)=>{if(c(s,"friend_request",!1)){let m=w.getUser(t[0]).username;p(()=>{n=!0,a.apply(e,t)},"Cancel FriendRequest",`cancel friend request from **${m}**`)}else a.apply(e,t)}),u.instead(C,"show",(e,t,a)=>{t[0].title===v.Messages.DELETE_MESSAGE&&c(s,"delete_message",!1)||(t[0].title===v.Messages.PIN_MESSAGE||t[0].title===v.Messages.UNPIN_MESSAGE)&&c(s,"pin_message",!1)||t[0].secondaryConfirmText===v.Messages.MASKED_LINK_TRUST_THIS_PROTOCOL&&c(s,"trust_protocol",!1)?t[0].onConfirm():a.apply(e,t)}),u.instead(R,"toggleSelfMute",(e,t,a)=>{oe.getDeprecatedVoiceSettings().mute&&c(s,"mute",!1)?p(()=>{a.apply(e,t)},"Unmute","unmute"):a.apply(e,t)})},onStop(){u.unpatchAll()},getSettingsPanel({settings:n}){return o.createElement(ee,{settings:n})}};P(ae);
