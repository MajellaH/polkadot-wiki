(self.webpackChunk=self.webpackChunk||[]).push([[1036],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1306:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,metadata:()=>l,toc:()=>c,default:()=>h});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],s={id:"build-protocol-info",title:"Polkadot Protocol Information",sidebar_label:"Polkadot Protocol"},l={unversionedId:"build-protocol-info",id:"build-protocol-info",isDocsHomePage:!1,title:"Polkadot Protocol Information",description:"This page serves as a high-level introduction to the Polkadot protocol with terminology that may be",source:"@site/../docs/build-protocol-info.md",sourceDirName:".",slug:"/build-protocol-info",permalink:"/en/zh-CN/docs/build-protocol-info",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build-protocol-info.md",version:"current",lastUpdatedBy:"Bruno \u0160kvorc",lastUpdatedAt:1624370537,formattedLastUpdatedAt:"2021/6/22",sidebar_label:"Polkadot Protocol",frontMatter:{id:"build-protocol-info",title:"Polkadot Protocol Information",sidebar_label:"Polkadot Protocol"},sidebar:"docs",previous:{title:"Polkadot Integration Guide",permalink:"/en/zh-CN/docs/build-integration"},next:{title:"Assets on Polkadot",permalink:"/en/zh-CN/docs/build-integrate-assets"}},c=[{value:"Tokens",id:"tokens",children:[{value:"Redenomination",id:"redenomination",children:[]}]},{value:"Addresses",id:"addresses",children:[{value:"Cryptography",id:"cryptography",children:[]}]},{value:"Existential Deposit",id:"existential-deposit",children:[]},{value:"Free vs. Reserved vs. Locked vs. Vesting Balance",id:"free-vs-reserved-vs-locked-vs-vesting-balance",children:[]},{value:"Extrinsics and Events",id:"extrinsics-and-events",children:[{value:"Extrinsics",id:"extrinsics",children:[]},{value:"Transaction Mortality",id:"transaction-mortality",children:[]},{value:"Unique Identifiers for Extrinsics",id:"unique-identifiers-for-extrinsics",children:[]},{value:"Events",id:"events",children:[]},{value:"Fees",id:"fees",children:[]},{value:"Encoding",id:"encoding",children:[]}]},{value:"Runtime Upgrades",id:"runtime-upgrades",children:[]},{value:"Smart Contracts",id:"smart-contracts",children:[]},{value:"Other Networks",id:"other-networks",children:[]},{value:"Other F.A.Q.",id:"other-faq",children:[]}],d={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page serves as a high-level introduction to the Polkadot protocol with terminology that may be\nspecific to Polkadot, notable differences to other chains that you may have worked with, and\npractical information for dealing with the chain."),(0,o.kt)("h2",{id:"tokens"},"Tokens"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Token decimals:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Polkadot (DOT): 10"),(0,o.kt)("li",{parentName:"ul"},"Kusama (KSM): 12"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Base unit:"),' "Planck"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Balance type:")," ",(0,o.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/u128/index.html"},(0,o.kt)("inlineCode",{parentName:"a"},"u128")))),(0,o.kt)("h3",{id:"redenomination"},"Redenomination"),(0,o.kt)("p",null,'Polkadot conducted a poll, which ended on 27 July 2020 (block 888_888), in which the stakeholders\ndecided to redenominate the DOT token. The redenomination does not change the number of base units\n(called "plancks" in Polkadot) in the network. The only change is that a single DOT token will be\n1e10 plancks instead of the original 1e12 plancks. See the Polkadot blog posts explaining the\n',(0,o.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/the-first-polkadot-vote-1fc1b8bd357b"},"details")," and the\n",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/the-results-are-in-8f6b1ca2a4e6"},"results")," of the vote."),(0,o.kt)("p",null,"The redenomination took effect 72 hours after transfers were enabled, at block 1_248_326, which\noccurred at approximately 16:50 UTC on 21 Aug 2020."),(0,o.kt)("h2",{id:"addresses"},"Addresses"),(0,o.kt)("p",null,"In Polkadot (and most Substrate chains), user accounts are identified by a 32-byte (256-bit)\n",(0,o.kt)("inlineCode",{parentName:"p"},"AccountId"),". This is simply the public key for the cryptography used by Substrate."),(0,o.kt)("p",null,'Polkadot (and Substrate) use the SS58 address format. This is a broad "meta-format" designed to\nhandle many different cryptographies and chains. It has much in common with Bitcoin\'s Base58Check\nformat such as a version prefix, a hash-based checksum suffix, and base-58 encoding.'),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)"},"SS58 page"),"\nin the Substrate wiki for encoding information and a more comprehensive list of network prefixes."),(0,o.kt)("p",null,"Relevant SS58 prefixes for this guide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Polkadot: 0"),(0,o.kt)("li",{parentName:"ul"},"Kusama: 2"),(0,o.kt)("li",{parentName:"ul"},"Westend: 42")),(0,o.kt)("h3",{id:"cryptography"},"Cryptography"),(0,o.kt)("p",null,"Polkadot supports the following ",(0,o.kt)("a",{parentName:"p",href:"learn-cryptography"},"cryptographic")," key pairs and signing\nalgorithms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ed25519"),(0,o.kt)("li",{parentName:"ul"},"Sr25519 - Schnorr signatures on the Ristretto group"),(0,o.kt)("li",{parentName:"ul"},"ECDSA signatures on secp256k1")),(0,o.kt)("p",null,"Note that the address for a secp256k1 key is the SS58 encoding of the ",(0,o.kt)("em",{parentName:"p"},"hash of the public key")," in\norder to reduce the public key from 33 bytes to 32 bytes."),(0,o.kt)("h2",{id:"existential-deposit"},"Existential Deposit"),(0,o.kt)("p",null,"Polkadot uses an ",(0,o.kt)("em",{parentName:"p"},"existential deposit")," (ED) to prevent dust accounts from bloating state. If an\naccount drops below the ED, it will be ",(0,o.kt)("em",{parentName:"p"},"reaped,")," i.e. completely removed from storage and the nonce\nreset. Polkadot's ED is 1 DOT, while Kusama's is 33.3333 microKSM (0.0000333333 KSM). You can always\nverify the existential deposit by checking the\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"chain state")," for the constant\n",(0,o.kt)("inlineCode",{parentName:"p"},"balances.existentialDeposit"),"."),(0,o.kt)("p",null,"Likewise, if you send a transfer with value below the ED to a new account, it will fail. Custodial\nwallets should set a minimum withdrawal amount that is greater than the ED to guarantee successful\nwithdrawals."),(0,o.kt)("p",null,"Wallets and custodians who track account nonces for auditing purposes should take care not to have\naccounts reaped, as users could refund the address and try making transactions from it. The Balances\npallet provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive")," function that will return an error and abort rather than\nmake the transfer if doing so would result in reaping the sender's account."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The Statemint parachain has a lower existential deposit than the Relay Chain (0.1 DOT and\n0.000003333 KSM) as well as lower transaction fees. It is highly recommended to handle balance\ntransfers on Statemint. Statemint integration is discussed in the next page of the guide.")),(0,o.kt)("h2",{id:"free-vs-reserved-vs-locked-vs-vesting-balance"},"Free vs. Reserved vs. Locked vs. Vesting Balance"),(0,o.kt)("p",null,"Account balance information is stored in\n",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/pallet_balances/struct.AccountData.html"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountData")),".\nPolkadot primarily deals with two types of balances: free and reserved."),(0,o.kt)("p",null,'For most operations, free balance is what you are interested in. It is the "power" of an account in\nstaking and governance, for example. Reserved balance represents funds that have been set aside by\nsome operation and still belong to the account holder, but cannot be used.'),(0,o.kt)("p",null,"Locks are an abstraction over free balance that prevent spending for certain purposes. Several locks\ncan operate on the same account, but they overlap rather than add. Locks are automatically added\nonto accounts when tasks are done on the network (e.g. leasing a parachain slot or voting), these\nare not customizable. For example, an account could have a free balance of 200 DOT with two locks on\nit: 150 DOT for ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer")," purposes and 100 DOT for ",(0,o.kt)("inlineCode",{parentName:"p"},"Reserve")," purposes. The account could not make a\ntransfer that brings its free balance below 150 DOT, but an operation could result in reserving DOT\nsuch that the free balance is below 150, but above 100 DOT."),(0,o.kt)("p",null,"Bonding tokens for staking and voting in governance referenda both utilize locks."),(0,o.kt)("p",null,"Vesting is another abstraction that uses locks on free balance. Vesting sets a lock that decreases\nover time until all the funds are transferable."),(0,o.kt)("p",null,"More info:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://substrate.dev/rustdocs/v3.0.0/frame_support/traits/trait.LockableCurrency.html"},"Lockable Currency")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://substrate.dev/rustdocs/v3.0.0/frame_support/traits/enum.WithdrawReason.html"},"Lock Withdraw Reasons")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://substrate.dev/rustdocs/v3.0.0/pallet_vesting/struct.Vesting.html"},"Vesting"))),(0,o.kt)("h2",{id:"extrinsics-and-events"},"Extrinsics and Events"),(0,o.kt)("h3",{id:"extrinsics"},"Extrinsics"),(0,o.kt)("p",null,"Extrinsics constitute information from the outside world and take on three forms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Inherents"),(0,o.kt)("li",{parentName:"ul"},"Signed Transactions"),(0,o.kt)("li",{parentName:"ul"},"Unsigned Transactions")),(0,o.kt)("p",null,"As an infrastructure provider, you will deal almost exclusively with signed transactions. You will,\nhowever, see other extrinsics within the blocks that you decode. Find more information in the\n",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/learn-substrate/extrinsics"},"Substrate documentation"),"."),(0,o.kt)("p",null,"Inherents contain information that is not provably true, but validators agree on based on some\nmeasure of reasonability. For example, a timestamp cannot be proved, but validators can agree that\nit is within some delta of their system clock. Inherents are not gossiped on the network, and only\nblock authors insert them into blocks."),(0,o.kt)("p",null,"Signed transactions contain a signature of the account that issued the transaction and stands to pay\na fee to have the transaction included on chain. Because the value of including signed transactions\non-chain can be recognized prior to execution, they can be gossiped on the network between nodes\nwith a low risk of spam. Signed transactions fit the concept of a transaction in Ethereum or\nBitcoin."),(0,o.kt)("p",null,"Some transactions cannot be signed by a fee-paying account and use unsigned transactions. For\nexample, when a user claims their DOT from the Ethereum DOT indicator contract to a new DOT address,\nthe new address doesn't yet have any funds with which to pay fees."),(0,o.kt)("h3",{id:"transaction-mortality"},"Transaction Mortality"),(0,o.kt)("p",null,'Extrinsics can be mortal or immortal. The transaction payload includes a block number and block hash\ncheckpoint from which a transaction is valid and a validity period (also called "era" in some\nplaces) that represents the number of blocks after the checkpoint for which the transaction is\nvalid. If the extrinsic is not included in a block within this validity window, it will be discarded\nfrom the transaction queue.'),(0,o.kt)("p",null,"The chain only stores a limited number of prior block hashes as reference. You can query this\nparameter, called ",(0,o.kt)("inlineCode",{parentName:"p"},"BlockHashCount"),", from the chain state or metadata. This parameter is set to 2400\nblocks (about four hours) at genesis. If the validity period is larger than the number of blocks\nstored on-chain, then the transaction will only be valid as long as there is a block to check it\nagainst, i.e. the minimum value of validity period and block hash count."),(0,o.kt)("p",null,'Setting the block checkpoint to zero, using the genesis hash, and a validity period of zero will\nmake the transaction "immortal".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," If an account is reaped and a user re-funds the account, then they could replay an\nimmortal transaction. Always default to using a mortal extrinsic."),(0,o.kt)("h3",{id:"unique-identifiers-for-extrinsics"},"Unique Identifiers for Extrinsics"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: The assumption that a transaction's hash is a unique identifier is the number one mistake\nthat indexing services and custodians make. This error will cause major issues for your users.\nMake sure that you read this section carefully.")),(0,o.kt)("p",null,"Many infrastructure providers on existing blockchains, e.g. Ethereum, consider a transaction's hash\nas a unique identifier. In Substrate-based chains like Polkadot, a transaction's hash only serves as\na fingerprint of the information within a transaction, and there are times when two transactions\nwith the same hash are both valid. In the case that one is invalid, the network properly handles the\ntransaction and does not charge a transaction fee to the sender nor consider the transaction in the\nblock's fullness."),(0,o.kt)("p",null,"Imagine this contrived example with a ",(0,o.kt)("a",{parentName:"p",href:"#existential-deposit"},"reaped account"),". The first and last\ntransactions are identical, and both valid."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Index"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Hash"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Origin"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Nonce"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Call"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Results"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"0"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0x01"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Account A"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Transfer 5 DOT to B"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Account A reaped")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"1"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0x02"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Account B"),(0,o.kt)("td",{parentName:"tr",align:"center"},"4"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Transfer 7 DOT to A"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Account A created (nonce = 0)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"2"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0x01"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Account A"),(0,o.kt)("td",{parentName:"tr",align:"center"},"0"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Transfer 5 DOT to B"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Successful transaction")))),(0,o.kt)("p",null,"In addition, not every extrinsic in a Substrate-based chain comes from an account as a\npublic/private key pair; Substrate, rather, has the concept of dispatch \u201corigin\u201d, which could be\ncreated from a public key account, but could also form from other means such as governance. These\norigins do not have a nonce associated with them the way that an account does. For example,\ngovernance might dispatch the same call with the same arguments multiple times, like \u201cincrease the\nvalidator set by 10%.\u201d This dispatch information (and therefore its hash) would be the same, and the\nhash would be a reliable representative of the call, but its execution would have different effects\ndepending on the chain\u2019s state at the time of dispatch."),(0,o.kt)("p",null,"The correct way to uniquely identify an extrinsic on a Substrate-based chain is to use the block ID\n(height or hash) and the extrinsic's index. Substrate defines a block as a header and an array of\nextrinsics; therefore, an index in the array at a canonical height will always uniquely identify a\ntransaction. This methodology is reflected in the Substrate codebase itself, for example to\n",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/pallet_multisig/struct.Timepoint.html"},"reference a previous transaction"),"\nfrom the Multisig pallet."),(0,o.kt)("h3",{id:"events"},"Events"),(0,o.kt)("p",null,"While extrinsics represent information from the outside world, events represent information from the\nchain. Extrinsics can trigger events. For example, the Staking pallet emits a ",(0,o.kt)("inlineCode",{parentName:"p"},"Reward")," event when\nclaiming staking rewards to tell the user how much the account was credited."),(0,o.kt)("p",null,"If you want to monitor deposits into an address, keep in mind that several transactions can initiate\na balance transfer (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"balances.transferKeepAlive")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"utility.batch")," transaction with a\ntransfer inside of it). Only monitoring ",(0,o.kt)("inlineCode",{parentName:"p"},"balances.transfer")," transactions will not be sufficient.\nMake sure that you monitor events in each block for events that contain your addresses of interest.\nMonitor events instead of transaction names to ensure that you can properly credit deposits."),(0,o.kt)("h3",{id:"fees"},"Fees"),(0,o.kt)("p",null,"Polkadot uses weight-based fees that, unlike gas, are charged ",(0,o.kt)("em",{parentName:"p"},"pre-dispatch."),' Users can also add a\n"tip" to increase transaction priority during congested periods. See the\n',(0,o.kt)("a",{parentName:"p",href:"learn-transaction-fees"},"transaction fee")," page for more info."),(0,o.kt)("h3",{id:"encoding"},"Encoding"),(0,o.kt)("p",null,"Parity's integration tools should allow you to deal with decoded data. If you'd like to bypass them\nand interact directly with the chain data or implement your own codec, Polkadot encodes block and\ntransaction data using the\n",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/advanced/codec"},"SCALE codec"),"."),(0,o.kt)("h2",{id:"runtime-upgrades"},"Runtime Upgrades"),(0,o.kt)("p",null,"Runtime upgrades allow Polkadot to change the logic of the chain without the need for a hard fork. A\nhard fork would require node operators to manually upgrade their nodes to the latest runtime\nversion. In a distributed system, this is a complex process to coordinate and communicate. Polkadot\ncan upgrade without a hard fork. The existing runtime logic is followed to update the Wasm runtime\nstored on the blockchain to a new version. The upgrade is then included in the blockchain itself,\nmeaning that all the nodes on the network execute it."),(0,o.kt)("p",null,"Generally there is no need to upgrade your nodes manually before the runtime upgrade as they will\nautomatically start to follow the new logic of the chain. Nodes only need to be updated when the\nruntime requires new host functions or there is a change in networking or consensus."),(0,o.kt)("p",null,"Transactions constructed for a given runtime version will not work on later versions. Therefore, a\ntransaction constructed based on a runtime version will not be valid in later runtime versions. If\nyou don't think you can submit a transaction before the upgrade, it is better to wait and construct\nit after the upgrade takes place."),(0,o.kt)("p",null,"Although upgrading your nodes is generally not necessary to follow an upgrade, we recommend\nfollowing the Polkadot releases and upgrading in a timely manner, especially for high priority or\ncritical releases."),(0,o.kt)("h2",{id:"smart-contracts"},"Smart Contracts"),(0,o.kt)("p",null,"The Polkadot Relay Chain does not support smart contracts."),(0,o.kt)("h2",{id:"other-networks"},"Other Networks"),(0,o.kt)("p",null,"Besides running a private network, Polkadot has two other networks where you could test\ninfrastucture prior to deploying to the Polkadot mainnet."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Kusama Canary Network:")," Kusama is Polkadot's cutting-edge cousin. Many risky features are\ndeployed to Kusama prior to making their way into Polkadot."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Westend Testnet:")," Westend is Polkadot's testnet and uses the Polkadot runtime."),(0,o.kt)("h2",{id:"other-faq"},"Other F.A.Q."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Can an account's balance change without a corresponding, on-chain transaction?")),(0,o.kt)("p",null,"No, but not all balance changes are in a ",(0,o.kt)("em",{parentName:"p"},"transaction,")," some are in ",(0,o.kt)("em",{parentName:"p"},"events.")," You will need to run\nan archive node and listen for events and transactions to track all account activity. This\nespecially applies to ",(0,o.kt)("em",{parentName:"p"},"locking")," operations if you are calculating balance as the spendable balance,\ni.e. free balance minus the maximum lock."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'What chain depth is considered "safe"?')),(0,o.kt)("p",null,"Polkadot uses a deterministic finality mechanism. Once a block is finalized, it cannot be reverted\nexcept by a hard fork. Kusama has had hard forks that had to revert four finalized blocks in order\nto cancel a runtime upgrade. Using a finalized depth of ten blocks should be safe."),(0,o.kt)("p",null,"Note that block production and finality are isolated processes in Polkadot, and the chain can have a\nlong unfinalized head."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do users need to interact with any smart contracts?")),(0,o.kt)("p",null,"No, users interact directly with the chain's logic."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Does Polkadot have state rent?")),(0,o.kt)("p",null,"No, Polkadot uses the existential deposit to prevent dust accounts and other economic mechanisms\nlike locking or reserving tokens for operations that utilize state."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What is an external source to see the current chain height?")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS explorer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://polkascan.io/"},"Polkascan block explorer"))))}h.isMDXComponent=!0}}]);