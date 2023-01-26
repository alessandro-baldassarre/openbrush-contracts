"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[8725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},20310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1,title:"Diamond Standard"},i=void 0,c={unversionedId:"smart-contracts/diamond/diamond",id:"smart-contracts/diamond/diamond",title:"Diamond Standard",description:"This example shows how you can use the implementation of diamond standard to implement diamond standard pattern for upgradeable and unlimited contracts.",source:"@site/docs/smart-contracts/diamond/diamond.md",sourceDirName:"smart-contracts/diamond",slug:"/smart-contracts/diamond/",permalink:"/openbrush-contracts/next/smart-contracts/diamond/",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/docs/smart-contracts/diamond/diamond.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Diamond Standard"},sidebar:"tutorialSidebar",previous:{title:"Proxy",permalink:"/openbrush-contracts/next/smart-contracts/proxy"},next:{title:"Diamond Loupe",permalink:"/openbrush-contracts/next/smart-contracts/diamond/Extensions/loupe"}},s={},d=[{value:"Disclaimer",id:"disclaimer",level:2},{value:"Step 1: Import default implementation",id:"step-1-import-default-implementation",level:2},{value:"Step 2: Define constructor",id:"step-2-define-constructor",level:2},{value:"Step 3: Define forward function",id:"step-3-define-forward-function",level:2},{value:"Step 4: Customize your contract",id:"step-4-customize-your-contract",level:2}],l={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example shows how you can use the implementation of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/src/upgradeability/diamond"},"diamond standard")," to implement diamond standard pattern for upgradeable and unlimited contracts."),(0,r.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,r.kt)("p",null,"Delegate calls ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/pull/1331#discussion_r953736863"},"were marked")," as a possible attack vector in ink! Therefore the ",(0,r.kt)("inlineCode",{parentName:"p"},"Diamond")," pattern will not work within OpenBrush until this is reimplemented in ink! 4."),(0,r.kt)("h2",{id:"step-1-import-default-implementation"},"Step 1: Import default implementation"),(0,r.kt)("p",null,"With ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,r.kt)("inlineCode",{parentName:"a"},"Cargo.toml")),",\nyou need to import the ",(0,r.kt)("inlineCode",{parentName:"p"},"diamond")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," modules, enable corresponding features, and embed modules data structures\nas described in ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/overview#reuse-implementation-of-traits-from-openbrush"},"that section"),"."),(0,r.kt)("p",null,"The main trait are ",(0,r.kt)("inlineCode",{parentName:"p"},"Ownable")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Diamond"),"."),(0,r.kt)("h2",{id:"step-2-define-constructor"},"Step 2: Define constructor"),(0,r.kt)("p",null,"Define the constructor and initialize the owner with the contract initiator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl Contract {\n    #[ink(constructor)]\n    pub fn new(owner: AccountId, diamond_hash: Hash) -> Self {\n        let mut instance = Self::default();\n        \n        instance._init_with_owner(owner);\n        instance.diamond.self_hash = diamond_hash;\n        \n        instance\n    }\n}\n")),(0,r.kt)("h2",{id:"step-3-define-forward-function"},"Step 3: Define forward function"),(0,r.kt)("p",null,"Define the forward function to make delegate calls of facet contracts through the diamond contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl Contract {\n    #[ink(message, payable, selector = _)]\n    pub fn forward(&self) {\n        self._fallback();\n    }\n}\n")),(0,r.kt)("h2",{id:"step-4-customize-your-contract"},"Step 4: Customize your contract"),(0,r.kt)("p",null,"You can add more basic functionality for your diamond contract by adding functions to ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract")," implemenation,\nbut the point of the Diamond standard is not to increase the size of your contract,\nand to add upgradeable functionality to your contract via so called facets."),(0,r.kt)("p",null,"When you create a new contract (facet), which you want to make delegate calls from your\ndiamond contract to, you will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"diamond_cut")," function on your diamond contract,\nwith the code hash of your new facet and the selectors of all the functions from this\nfacet you want to use. The diamond will register them and anytime you call this function\non your diamond contract, it will make the delegate call to the facet the function belongs to.\nYou can add, remove or replace these functions anytime with the ",(0,r.kt)("inlineCode",{parentName:"p"},"diamond_cut")," function,\nsome of limitations are, that you can not add functions with the same selectors,\nwhen replacing functions, the new function needs to be from a different contract,\nthen currently in use, and when removing functions, the function needs to be registered in the diamond contract."),(0,r.kt)("p",null,"You can check an example of the usage of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/examples/diamond"},"Diamond"),"."))}u.isMDXComponent=!0}}]);