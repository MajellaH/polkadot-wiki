(self.webpackChunk=self.webpackChunk||[]).push([[98],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(k,o(o({ref:e},d),{},{components:a})):n.createElement(k,o({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},32944:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>c});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),o=["components"],i={id:"build-wallets",title:"Polkadot Wallets",sidebar_label:"Polkadot Wallets"},s=void 0,p={unversionedId:"build-wallets",id:"build-wallets",isDocsHomePage:!1,title:"Polkadot Wallets",description:"Polkadot Wallets",source:"@site/../docs/build-wallets.md",sourceDirName:".",slug:"/build-wallets",permalink:"/ru-RU/docs/build-wallets",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-wallets.md",version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1625236136,formattedLastUpdatedAt:"02.07.2021",frontMatter:{id:"build-wallets",title:"Polkadot Wallets",sidebar_label:"Polkadot Wallets"},sidebar:"docs",previous:{title:"SS58 Registry",permalink:"/ru-RU/docs/build-ss58-registry"},next:{title:"Integration Initiation",permalink:"/ru-RU/docs/build-integration"}},d=[{value:"Polkadot Wallets",id:"polkadot-wallets",children:[]},{value:"Encryption Enhancement",id:"encryption-enhancement",children:[{value:"Supported Wallets",id:"supported-wallets",children:[]}]}],u={toc:d};function c(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"polkadot-wallets"},"Polkadot Wallets"),(0,l.kt)("p",null,"The integration of a ",(0,l.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/glossary#wallet"},"wallet")," with Polkadot\nallows for simple and easy access to private keys and signing transactions. Below are some wallets\nthat support Polkadot along with their development statuses."),(0,l.kt)("p",null,"Note that inclusion does not necessarily imply endorsement of that wallet. Polkadot support can\nprovide assistance with issues related to Polkadot-JS, the Polkadot{.js} extension, or Parity\nSigner. For other wallet software, you should contact the developers of that wallet."),(0,l.kt)("h2",{id:"encryption-enhancement"},"Encryption Enhancement"),(0,l.kt)("p",null,"Some recently generated ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," account files cannot be imported (restored) into older wallet\nsoftware. This is due to an enhanced encryption method, which is also noticeable in a slight delay\nwhen encrypting/decrypting your wallet. If you are unable to load a ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," file, please ensure that\nyou are using the latest version of the wallet software. If you are still unable to load it, ensure\nthat the wallet software is using the latest version of the\n",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/api/"},"Polkadot API"),"."),(0,l.kt)("h3",{id:"supported-wallets"},"Supported Wallets"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Wallet Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Development State"),(0,l.kt)("th",{parentName:"tr",align:null},"Team Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Custody"),(0,l.kt)("th",{parentName:"tr",align:null},"Supports"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.parity.io/signer/"},"Parity Signer")," (see warning below)"),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Parity"),(0,l.kt)("td",{parentName:"tr",align:null},"iOS and Android"),(0,l.kt)("td",{parentName:"tr",align:null},"Non-custodial"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/polkadot-js/apps/releases"},"Polkadot-js Desktop")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Parity"),(0,l.kt)("td",{parentName:"tr",align:null},"Win, Mac, Linux"),(0,l.kt)("td",{parentName:"tr",align:null},"Non-custodial"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/polkadot-js/extension"},"Polkadot-js extension")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Parity"),(0,l.kt)("td",{parentName:"tr",align:null},"Browser extension"),(0,l.kt)("td",{parentName:"tr",align:null},"Non-custodial"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/#/accounts"},"Polkadot-js apps")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Parity"),(0,l.kt)("td",{parentName:"tr",align:null},"Browser"),(0,l.kt)("td",{parentName:"tr",align:null},"Non-Custodial"),(0,l.kt)("td",{parentName:"tr",align:null},"Staking")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Warning: Parity Signer currently does not allow you to see the transaction you are signing. This\nmeans that you are at risk if connected to a compromised version of Polkadot-JS. A fix is being\nworked on; please see ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-signer/issues/724"},"this GitHub issue"),"\nfor more details.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: the wallets page is currently being reviewed. Currently only Parity-developed wallets are\nlisted.")))}c.isMDXComponent=!0}}]);