(self.webpackChunk=self.webpackChunk||[]).push([[3708],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=d(r),m=o,f=l["".concat(u,".").concat(m)]||l[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},39788:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>u,metadata:()=>d,toc:()=>c,default:()=>l});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],s={id:"maintain-guides-how-to-setup-sentry-node",title:"Set Up a Sentry Node - Public Node",sidebar_label:"Set Up a Sentry Node"},u=void 0,d={unversionedId:"maintain-guides-how-to-setup-sentry-node",id:"maintain-guides-how-to-setup-sentry-node",isDocsHomePage:!1,title:"Set Up a Sentry Node - Public Node",description:"DEPRECATED",source:"@site/../docs/maintain-guides-how-to-setup-sentry-node.md",sourceDirName:".",slug:"/maintain-guides-how-to-setup-sentry-node",permalink:"/docs/maintain-guides-how-to-setup-sentry-node",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-guides-how-to-setup-sentry-node.md",version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1625236136,formattedLastUpdatedAt:"7/2/2021",frontMatter:{id:"maintain-guides-how-to-setup-sentry-node",title:"Set Up a Sentry Node - Public Node",sidebar_label:"Set Up a Sentry Node"},sidebar:"docs",previous:{title:"How to use Polkadot Secure Validator Setup",permalink:"/docs/maintain-guides-how-to-use-polkadot-secure-validator"},next:{title:"How to Upgrade Your Validator",permalink:"/docs/maintain-guides-how-to-upgrade"}},c=[{value:"DEPRECATED",id:"deprecated",children:[]}],p={toc:c};function l(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"deprecated"},"DEPRECATED"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"With a recent release of Substrate and Polkadot/Kusama, support for sentry nodes are deprecated.\nDetails can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/issues/6845"},"here"),". Please stay\ntuned for further updates.")))}l.isMDXComponent=!0}}]);