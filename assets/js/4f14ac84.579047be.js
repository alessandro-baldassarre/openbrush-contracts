"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[64867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>P});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,P=u["".concat(c,".").concat(b)]||u[b]||m[b]||a;return n?r.createElement(P,i(i({ref:t},l),{},{components:n})):r.createElement(P,i({ref:t},l))}));function P(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},18594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:2,title:"PSP34 Mintable"},i=void 0,s={unversionedId:"smart-contracts/PSP34/Extensions/mintable",id:"version-1.6.0/smart-contracts/PSP34/Extensions/mintable",title:"PSP34 Mintable",description:"This example shows how you can reuse the implementation of PSP34 token with PSP34Mintable extension.",source:"@site/versioned_docs/version-1.6.0/smart-contracts/PSP34/Extensions/mintable.md",sourceDirName:"smart-contracts/PSP34/Extensions",slug:"/smart-contracts/PSP34/Extensions/mintable",permalink:"/openbrush-contracts/1.6.0/smart-contracts/PSP34/Extensions/mintable",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-1.6.0/smart-contracts/PSP34/Extensions/mintable.md",tags:[],version:"1.6.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"PSP34 Mintable"},sidebar:"tutorialSidebar",previous:{title:"PSP34 Metadata",permalink:"/openbrush-contracts/1.6.0/smart-contracts/PSP34/Extensions/metadata"},next:{title:"PSP34 Burnable",permalink:"/openbrush-contracts/1.6.0/smart-contracts/PSP34/Extensions/burnable"}},c={},p=[{value:"How to use this extension",id:"how-to-use-this-extension",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp34"},"PSP34")," token with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp34/src/extensions/mintable.rs"},"PSP34Mintable")," extension."),(0,o.kt)("h2",{id:"how-to-use-this-extension"},"How to use this extension"),(0,o.kt)("p",null,"For your smart contract to use this extension, you only need to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP34Mintable")," trait in your ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP34")," smart contract. Add import for ",(0,o.kt)("inlineCode",{parentName:"p"},"brush::contracts::psp34::extensions::mintable::*"),", inherit the implementation for ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP34Mintable")," trait, where you can also customize (override) the original functions from ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP34Mintable"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use brush::contracts::psp34::extensions::mintable::*;\n\nimpl PSP34Mintable for MyPSP34 {}\n")),(0,o.kt)("p",null,"And that's it! Your ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP34")," is now extended by the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP34Mintable")," extension and ready to use its functions!\nYou can check an example of the usage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/psp34_extensions/mintable"},"PSP34 Mintable"),"."),(0,o.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,o.kt)("a",{parentName:"p",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP34/"},"PSP34"),"."))}u.isMDXComponent=!0}}]);