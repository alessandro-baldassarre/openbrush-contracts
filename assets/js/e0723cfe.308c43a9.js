"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[73007],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:3,title:"Ownable"},i=void 0,l={unversionedId:"smart-contracts/ownable",id:"version-1.5.0/smart-contracts/ownable",title:"Ownable",description:"This example shows how you can use the implementation of ownable to provide only owner rights for contract's functions.",source:"@site/versioned_docs/version-1.5.0/smart-contracts/ownable.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/ownable",permalink:"/openbrush-contracts/1.5.0/smart-contracts/ownable",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-1.5.0/smart-contracts/ownable.md",tags:[],version:"1.5.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Ownable"},sidebar:"tutorialSidebar",previous:{title:"Access Control",permalink:"/openbrush-contracts/1.5.0/smart-contracts/access-control"},next:{title:"Proxy",permalink:"/openbrush-contracts/1.5.0/smart-contracts/proxy"}},s={},c=[{value:"Step 1: Include dependencies",id:"step-1-include-dependencies",level:2},{value:"Step 2: Add imports and enable unstable feature",id:"step-2-add-imports-and-enable-unstable-feature",level:2},{value:"Step 3: Define storage",id:"step-3-define-storage",level:2},{value:"Step 4: Inherit logic",id:"step-4-inherit-logic",level:2},{value:"Step 5: Define constructor",id:"step-5-define-constructor",level:2},{value:"Step 6: Customize your contract",id:"step-6-customize-your-contract",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows how you can use the implementation of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/access/ownable"},"ownable")," to provide ",(0,a.kt)("inlineCode",{parentName:"p"},"only owner")," rights for contract's functions."),(0,a.kt)("h2",{id:"step-1-include-dependencies"},"Step 1: Include dependencies"),(0,a.kt)("p",null,"Include ",(0,a.kt)("inlineCode",{parentName:"p"},"brush")," as dependency in the cargo file or you can use ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,a.kt)("inlineCode",{parentName:"a"},"Cargo.toml"))," template.\nAfter you need to enable default implementation of Ownable via ",(0,a.kt)("inlineCode",{parentName:"p"},"brush")," features."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'brush = { tag = "v1.5.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["ownable"] }\n')),(0,a.kt)("h2",{id:"step-2-add-imports-and-enable-unstable-feature"},"Step 2: Add imports and enable unstable feature"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"brush::contract")," macro instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,a.kt)("strong",{parentName:"p"},"everything")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"brush::contracts::ownable"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[brush::contract]\npub mod my_ownable {\n    use brush::{\n        contracts::ownable::*,\n        modifiers,\n    };\n...\n')),(0,a.kt)("h2",{id:"step-3-define-storage"},"Step 3: Define storage"),(0,a.kt)("p",null,"Declare storage struct and declare the field related to ",(0,a.kt)("inlineCode",{parentName:"p"},"OwnableStorage")," trait. Then you need to derive the ",(0,a.kt)("inlineCode",{parentName:"p"},"OwnableStorage")," trait and mark the corresponding field with the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[OwnableStorageField]")," attribute. Deriving this trait allows you to reuse the default implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"Ownable"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, OwnableStorage)]\npub struct MyOwnable {\n    #[OwnableStorageField]\n    ownable: OwnableData,\n}\n")),(0,a.kt)("h2",{id:"step-4-inherit-logic"},"Step 4: Inherit logic"),(0,a.kt)("p",null,"Inherit implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ownable")," trait. You can customize (override) methods in this ",(0,a.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl Ownable for MyOwnable {}\n")),(0,a.kt)("h2",{id:"step-5-define-constructor"},"Step 5: Define constructor"),(0,a.kt)("p",null,"Define the constructor and initialize the owner with the contract initiator. Your basic version of ",(0,a.kt)("inlineCode",{parentName:"p"},"Ownable")," contract is ready!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyOwnable {\n    #[ink(constructor)]\n    pub fn new() -> Self {\n        let mut instance = Self::default();\n        let caller = instance.env().caller();\n        instance._init_with_owner(caller);\n        instance\n    }\n}\n")),(0,a.kt)("h2",{id:"step-6-customize-your-contract"},"Step 6: Customize your contract"),(0,a.kt)("p",null,"Customize it by adding ownable logic. We will add a ",(0,a.kt)("inlineCode",{parentName:"p"},"owner_function")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"MyOwnable")," implemenation and add the ",(0,a.kt)("inlineCode",{parentName:"p"},"only_owner")," modifier, which will verify that the caller of the function is the owner."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[brush::contract]\npub mod my_ownable {\n    use brush::{\n        contracts::ownable::*,\n        modifiers,\n    };\n\n   #[ink(storage)]\n   #[derive(Default, OwnableStorage)]\n   pub struct MyOwnable {\n      #[OwnableStorageField]\n      ownable: OwnableData,\n   }\n\n   impl Ownable for MyOwnable {}\n    \n   impl MyOwnable {\n      \n      #[ink(constructor)]\n      pub fn new() -> Self {\n         let mut instance = Self::default();\n         let caller = instance.env().caller();\n         instance._init_with_owner(caller);\n         instance\n      }\n\n      #[ink(message)]\n      #[modifiers(only_owner)]\n      pub fn owner_function(&mut self) -> Result<(), OwnableError> {\n         todo!()\n      }\n   }\n}\n\n')),(0,a.kt)("p",null,"You can check an example of the usage of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/ownable"},"Ownable"),"."))}u.isMDXComponent=!0}}]);