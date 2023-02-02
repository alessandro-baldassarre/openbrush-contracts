"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[47342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},P=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),P=a,b=u["".concat(l,".").concat(P)]||u[P]||m[P]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=P;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}P.displayName="MDXCreateElement"},60282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:2,title:"PSP22 Mintable"},i=void 0,s={unversionedId:"smart-contracts/PSP22-Pallet/Extensions/mintable",id:"version-3.0.0-beta.1/smart-contracts/PSP22-Pallet/Extensions/mintable",title:"PSP22 Mintable",description:"This example shows how you can reuse the implementation of",source:"@site/versioned_docs/version-3.0.0-beta.1/smart-contracts/PSP22-Pallet/Extensions/mintable.md",sourceDirName:"smart-contracts/PSP22-Pallet/Extensions",slug:"/smart-contracts/PSP22-Pallet/Extensions/mintable",permalink:"/smart-contracts/PSP22-Pallet/Extensions/mintable",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-3.0.0-beta.1/smart-contracts/PSP22-Pallet/Extensions/mintable.md",tags:[],version:"3.0.0-beta.1",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"PSP22 Mintable"},sidebar:"tutorialSidebar",previous:{title:"PSP22 Metadata",permalink:"/smart-contracts/PSP22-Pallet/Extensions/metadata"},next:{title:"PSP22 Burnable",permalink:"/smart-contracts/PSP22-Pallet/Extensions/burnable"}},l={},c=[{value:"How to use this extension",id:"how-to-use-this-extension",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows how you can reuse the implementation of\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/src/token/psp22_pallet"},"PSP22")," token with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/src/token/psp22_pallet/extensions/mintable.rs"},"PSP22Mintable")," extension via ",(0,a.kt)("inlineCode",{parentName:"p"},"pallet-assets")," chain extension."),(0,a.kt)("h2",{id:"how-to-use-this-extension"},"How to use this extension"),(0,a.kt)("p",null,"First, you should implement basic version of ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22-Pallet"},"PSP22 Pallet"),"."),(0,a.kt)("p",null,"For your smart contract to use this extension, you only need to implement the\n",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22Mintable")," trait in your ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22 Pallet")," smart contract. Add import for\n",(0,a.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::psp22_pallet::extensions::mintable::*"),", inherit the implementation for\n",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22Mintable")," trait, where you can also customize (override) the original functions\nfrom ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22Mintable"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use openbrush::contracts::psp22_pallet::extensions::mintable::*;\n\nimpl PSP22Mintable for Contract {}\n")),(0,a.kt)("p",null,"And that's it! Your ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22 Pallet")," is now extended by the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22Mintable")," extension and ready to use its functions!"))}u.isMDXComponent=!0}}]);