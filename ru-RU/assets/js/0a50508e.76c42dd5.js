(self.webpackChunk=self.webpackChunk||[]).push([[1668],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>h,kt:()=>u});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},h=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=r,f=d["".concat(i,".").concat(u)]||d[u]||p[u]||o;return t?n.createElement(f,c(c({ref:a},h),{},{components:t})):n.createElement(f,c({ref:a},h))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71863:(e,a,t)=>{"use strict";t.r(a),t.d(a,{frontMatter:()=>s,metadata:()=>i,toc:()=>l,default:()=>p});var n=t(22122),r=t(19756),o=(t(67294),t(3905)),c=["components"],s={id:"build-parachains-rococo",title:"Rococo Parachain Testnet",sidebar_label:"Rococo Parachain Test Network"},i={unversionedId:"build-parachains-rococo",id:"build-parachains-rococo",isDocsHomePage:!1,title:"Rococo Parachain Testnet",description:"Rococo is a Polkadot testnet built for testing",source:"@site/../docs/build-parachains-rococo.md",sourceDirName:".",slug:"/build-parachains-rococo",permalink:"/en/ru-RU/docs/build-parachains-rococo",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-parachains-rococo.md",version:"current",lastUpdatedBy:"Bruno \u0160kvorc",lastUpdatedAt:1624370537,formattedLastUpdatedAt:"22.06.2021",sidebar_label:"Rococo Parachain Test Network",frontMatter:{id:"build-parachains-rococo",title:"Rococo Parachain Testnet",sidebar_label:"Rococo Parachain Test Network"},sidebar:"docs",previous:{title:"Cumulus",permalink:"/en/ru-RU/docs/build-cumulus"},next:{title:"Smart Contracts",permalink:"/en/ru-RU/docs/build-smart-contracts"}},l=[{value:"What Parachains are on Rococo Now?",id:"what-parachains-are-on-rococo-now",children:[]},{value:"Obtaining ROC",id:"obtaining-roc",children:[]},{value:"Build and Register a Rococo Parathread",id:"build-and-register-a-rococo-parathread",children:[]},{value:"How to connect to a Parachain",id:"how-to-connect-to-a-parachain",children:[]},{value:"How to make Cross Chain transfers",id:"how-to-make-cross-chain-transfers",children:[{value:"Downward Transfers",id:"downward-transfers",children:[]},{value:"Upward Transfers",id:"upward-transfers",children:[]},{value:"Lateral Transfers",id:"lateral-transfers",children:[]}]}],h={toc:l};function p(e){var a=e.components,s=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},h,s,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus#rococo-crown"},"Rococo")," is a Polkadot testnet built for testing\nparachains. Rococo utilizes Cumulus and HRMP (Horizontal Relay-routed Message Passing) in order to\nsend transfers and messages between parachains and the Relay Chain. Every message is sent to the\nRelay Chain, then from the Relay Chain to the desired parachain. Rococo currently runs four test\nsystem parachains (Statemint, Tick, Trick, and Track), as well as several externally developed\nparachains."),(0,o.kt)("h2",{id:"what-parachains-are-on-rococo-now"},"What Parachains are on Rococo Now?"),(0,o.kt)("p",null,"You can see the list of included parachains\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/parachains"},"here"),". A list of\nproposed parachains is available\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/parachains/proposals"},"here"),"."),(0,o.kt)("h2",{id:"obtaining-roc"},"Obtaining ROC"),(0,o.kt)("p",null,"ROC are available in the ",(0,o.kt)("a",{parentName:"p",href:"https://app.element.io/#/room/#rococo-faucet:matrix.org"},"Rococo Faucet"),"\nchannel on Matrix. To receive ROC tokens, use the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"!drip YOUR_ROCOCO_ADDRESS\n")),(0,o.kt)("h2",{id:"build-and-register-a-rococo-parathread"},"Build and Register a Rococo Parathread"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus#rococo"},"Cumulus")," is set of tools for writing Substrate-based\nparachains."),(0,o.kt)("p",null,"If you are interested in running and launching your own parathread or parachain, Parity Technologies\nhas created a ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/cumulus-workshop/"},"cumulus parachain workshop")," to show you how.\nGet stuck or need support along the way? Join the\n",(0,o.kt)("a",{parentName:"p",href:"https://matrix.to/#/#rococo:matrix.parity.io"},"Rococo matrix chat channel")," and connect with other\nbuilders there."),(0,o.kt)("h2",{id:"how-to-connect-to-a-parachain"},"How to connect to a Parachain"),(0,o.kt)("p",null,"If you would like to connect to a parachain via ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot-JS Apps"),',\nyou may do so by clicking on the network selection at the top left hand corner of the navigation and\nselecting any parachain of choice. For the purpose of these following examples, we will be using the\nRococo testnet "Custom Node" underneath "Development", following the\n',(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/cumulus-workshop/"},"parachain workshop"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"parachains on polkadotjs",src:t(7052).Z})),(0,o.kt)("h2",{id:"how-to-make-cross-chain-transfers"},"How to make Cross Chain transfers"),(0,o.kt)("p",null,'To send a transfer between parachains, navigate to "Accounts" > "Transfer". From here, you\'ll need\nto select the parachain node that you are running. Next, enter in the amount that you\'d like to send\nto another parachain. Be sure to select the correct parachain you\'d like to send an amount to. Once\nyou\'ve hit the "Submit" button, you should see a green notification, indicating a successful\ntransfer.'),(0,o.kt)("h3",{id:"downward-transfers"},"Downward Transfers"),(0,o.kt)("p",null,"Downward transfers are when an account on the Relay Chain sends a transfer to their account on a\ndifferent parachain. This type of transfer uses a depository and mint model, meaning that when the\nDOT leave the sender's account on the Relay Chain and are transferred into an account on a\nparachain, the parachain mints a corresponding amount of tokens on the parachain."),(0,o.kt)("p",null,'For example, we can send tokens from Alice\'s account on the Relay Chain to her account on\nparachain 200. To do so, we will need to head to the "Network" > "Parachains" tab and click on the\n"Transfer to chain" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rococo downward transfer",src:t(7731).Z})),(0,o.kt)("p",null,"Notice here, that we can select which parachain to send the funds to, specify the amount to be sent,\nand add any comments or a memo for the transfer."),(0,o.kt)("h3",{id:"upward-transfers"},"Upward Transfers"),(0,o.kt)("p",null,"Upward transfers occur ",(0,o.kt)("em",{parentName:"p"},"from")," a parachain ",(0,o.kt)("em",{parentName:"p"},"to"),' an account on the Relay Chain. To proceed with this\nkind of transfer, we need to be connected to a parachain node on the network and be on the\n"Network" > "Parachains" tab. Click on the "Transfer to chain" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rococo upward transfer",src:t(83115).Z})),(0,o.kt)("p",null,"Note that the toggle should be set to off, ensuring that the funds go to the Relay Chain and not\nanother parachain."),(0,o.kt)("h3",{id:"lateral-transfers"},"Lateral Transfers"),(0,o.kt)("p",null,"This type of transfer is only possible with at least two different registered parachains. In true\nXCMP, lateral transfers would allow for messages to be sent directly from one parachain to another.\nHowever, this is not yet implemented, so the Relay Chain is helping us deliver messages for the time\nbeing. Lateral transfers work through the depository model, which means that in order to transfer\ntokens from chain 200 to chain 300, there must already be tokens owned by chain 200 deposited on\nchain 300. Lateral transfers are called HRMP, Horizontal Relay-Chain Message Passing."),(0,o.kt)("p",null,"Before we can actually send funds from one parachain to another, we must ensure that the chain's\naccount on the recipient chain has some funds in it. In this example, Alice will be sending some\nfunds from her account on parachain 200 to her account on parachain 300."),(0,o.kt)("p",null,"We can get that parachain account address, from our parachain 300's terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2020-08-26 14:46:34 Parachain Account: 5Ec4AhNv5ArwGxtngtW8qcVgzpCAu8nokvnh6vhtvvFkJtpq\n")),(0,o.kt)("p",null,"From Alice's account on the Relay Chain, she is able to send some amount to parachain 200's\ndepository."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rococo lateral transfer",src:t(92871).Z})),(0,o.kt)("p",null,"Alice is now able to send from her account on parachain 200 to her account on parachain 300."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"rococo lateral transfer part 2",src:t(32671).Z})))}p.isMDXComponent=!0},7052:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/polkadotjs_network_parachains-86a2bc53896e90d3b1846448fdd7b792.png"},7731:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/rococo-downward-transfer-b5c167bf833760e06130c7ffb91006bc.png"},92871:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/rococo-lateral-transfer-312054a2d9d0d676de02fb20a170ed64.png"},32671:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/rococo-lateral-transfer2-9d6fded610bdc51b7140adcae0c27be6.png"},83115:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/rococo-upward-transfer-d6b7d116c2a96a5a18cebe77b40620a7.png"}}]);