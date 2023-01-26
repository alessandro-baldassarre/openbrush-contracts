"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[21090],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),u=p(n),h=a,f=u["".concat(i,".").concat(h)]||u[h]||m[h]||o;return n?r.createElement(f,s(s({ref:e},l),{},{components:n})):r.createElement(f,s({ref:e},l))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=h;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[u]="string"==typeof t?t:a,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86688:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1,title:"Overview"},s=void 0,c={unversionedId:"smart-contracts/overview",id:"version-1.1.0/smart-contracts/overview",title:"Overview",description:"This doc contains examples of how the library can be used and how to customize the base implementation.",source:"@site/versioned_docs/version-1.1.0/smart-contracts/overview.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/overview",permalink:"/openbrush-contracts/1.1.0/smart-contracts/overview",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-1.1.0/smart-contracts/overview.md",tags:[],version:"1.1.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/openbrush-contracts/1.1.0/"},next:{title:"Access Control",permalink:"/openbrush-contracts/1.1.0/smart-contracts/access-control"}},i={},p=[],l={toc:p};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This doc contains examples of how the library can be used and how to customize the base implementation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.1.0/smart-contracts/PSP22/"},"PSP22")," shows an example of how you can reuse the implementation of\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp22"},"psp22")," token (in the same way you can reuse\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp721"},"psp721")," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp1155"},"psp1155"),").",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.1.0/smart-contracts/PSP22/Extensions/metadata"},"PSP22Metadata"),": metadata for PSP22."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.1.0/smart-contracts/PSP22/Extensions/mintable"},"PSP22Mintable"),": creation of new tokens."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.1.0/smart-contracts/PSP22/Extensions/burnable"},"PSP22Burnable"),": destruction of own tokens."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.1.0/smart-contracts/PSP22/Extensions/wrapper"},"PSP22Wrapper"),": wrapper for PSP22 token (useful for governance tokens etc.)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.1.0/smart-contracts/PSP22/Extensions/flashmint"},"PSP22FlashMint"),": extension which allows performing flashloans of the token by minting and burning the token."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.1.0/smart-contracts/PSP22/Extensions/pausable"},"PSP22Pausable"),": example of using pausable extension in the PSP22 contract."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.1.0/smart-contracts/PSP22/Extensions/capped"},"PSP22Capped"),": extension which adds a cap for total supply of PSP22 tokens."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.1.0/smart-contracts/PSP22/Utils/token-timelock"},"PSP22TokenTimelock"),": Utility which allows token holders to lock their tokens for a specified amount of time."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.1.0/smart-contracts/access-control"},"Access Control")," shows how you can use the implementation of\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/access/access-control"},"access-control")," and\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp721"},"psp721")," together to provide rights to mint and burn NFT tokens."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.1.0/smart-contracts/ownable"},"Ownable")," shows how you can use the implementation of\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/access/ownable"},"ownable")," and\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp1155"},"psp1155")," together to provide rights to mint and burn tokens."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.1.0/smart-contracts/reentrancy-guard"},"ReentrancyGuard")," shows how you can use the implementation of\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/security/reentrancy-guard"},"non_reentrant"),"\nmodifier to prevent reentrancy during certain functions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.1.0/smart-contracts/pausable"},"Pausable")," shows how you can use the implementation of\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/security/pausable"},"pausable"),"\ncontract and modifiers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.1.0/smart-contracts/timelock-controller"},"TimelockController")," shows how you can use the implementation of\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/governance/timelock-controller"},"timelock-controller"),"\nto execute a transaction with some delay via governance."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.1.0/smart-contracts/payment-splitter"},"PaymentSplitter")," shows how you can use the implementation of\n",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/finance/payment-splitter"},"payment-splitter"),"\nto split received native tokens between participants of the contract.")))}u.isMDXComponent=!0}}]);