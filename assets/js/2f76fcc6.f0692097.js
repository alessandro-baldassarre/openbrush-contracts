"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[82819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,p[1]=s;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84911:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:4,title:"PSP22 Wrapper"},p=void 0,s={unversionedId:"smart-contracts/PSP22/Extensions/wrapper",id:"version-2.2.0/smart-contracts/PSP22/Extensions/wrapper",title:"PSP22 Wrapper",description:"This example shows how you can reuse the implementation of PSP22 token with PSP22 Wrapper extension, which allows you to wrap your PSP22 token in a PSP22Wrapper token which can be used for example for governance.",source:"@site/versioned_docs/version-2.2.0/smart-contracts/PSP22/Extensions/wrapper.md",sourceDirName:"smart-contracts/PSP22/Extensions",slug:"/smart-contracts/PSP22/Extensions/wrapper",permalink:"/openbrush-contracts/2.2.0/smart-contracts/PSP22/Extensions/wrapper",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-2.2.0/smart-contracts/PSP22/Extensions/wrapper.md",tags:[],version:"2.2.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"PSP22 Wrapper"},sidebar:"tutorialSidebar",previous:{title:"PSP22 Burnable",permalink:"/openbrush-contracts/2.2.0/smart-contracts/PSP22/Extensions/burnable"},next:{title:"PSP22 FlashMint",permalink:"/openbrush-contracts/2.2.0/smart-contracts/PSP22/Extensions/flashmint"}},i={},c=[{value:"Step 1: Add imports and enable unstable feature",id:"step-1-add-imports-and-enable-unstable-feature",level:2},{value:"Step 2: Define storage",id:"step-2-define-storage",level:2},{value:"Step 3: Inherit logic",id:"step-3-inherit-logic",level:2},{value:"Step 4: Define constructor",id:"step-4-define-constructor",level:2},{value:"Final code",id:"final-code",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token/psp22"},"PSP22")," token with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/token/psp22/extensions/wrapper.rs"},"PSP22 Wrapper")," extension, which allows you to wrap your ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22")," token in a ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22Wrapper")," token which can be used for example for governance."),(0,a.kt)("p",null,"First, you should implement basic version of ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22"),"."),(0,a.kt)("h2",{id:"step-1-add-imports-and-enable-unstable-feature"},"Step 1: Add imports and enable unstable feature"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"openbrush::contract")," macro instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,a.kt)("strong",{parentName:"p"},"everything")," from\n",(0,a.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::psp22::extensions::wrapper"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp22_wrapper {\n    use openbrush::contracts::psp22::extensions::wrapper::*;\n...\n')),(0,a.kt)("h2",{id:"step-2-define-storage"},"Step 2: Define storage"),(0,a.kt)("p",null,"Declare storage struct and declare the field related to the wrapper module data structure.\nThen you need to derive the ",(0,a.kt)("inlineCode",{parentName:"p"},"Storage")," trait and mark the corresponding field with\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"#[storage_field]")," attribute. Deriving this trait allows you to reuse the\n",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22Wrapper")," extension in your ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22")," implementation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, SpreadAllocate, Storage)]\npub struct Contract {\n    #[storage_field]\n    psp22: psp22::Data,\n    #[storage_field]\n    wrapper: wrapper::Data,\n}\n")),(0,a.kt)("h2",{id:"step-3-inherit-logic"},"Step 3: Inherit logic"),(0,a.kt)("p",null,"Inherit implementations of ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22Wrapper")," traits.\nYou can customize (override) methods in this ",(0,a.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl PSP22 for Contract {}\n\nimpl PSP22Wrapper for Contract {}\n")),(0,a.kt)("h2",{id:"step-4-define-constructor"},"Step 4: Define constructor"),(0,a.kt)("p",null,"Define constructor where you init address of wrapper fungible token(PSP22)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl Contract {\n   #[ink(constructor)]\n   pub fn new(token_address: AccountId) -> Self {\n        ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n            instance._init(token_address);\n        })\n    }\n}\n")),(0,a.kt)("h2",{id:"final-code"},"Final code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp22_wrapper {\n    use ink_storage::traits::SpreadAllocate;\n    use openbrush::{\n        contracts::psp22::extensions::wrapper::*,\n        traits::Storage,\n    };\n\n    #[ink(storage)]\n    #[derive(Default, SpreadAllocate, Storage)]\n    pub struct Contract {\n        #[storage_field]\n        psp22: psp22::Data,\n        #[storage_field]\n        wrapper: wrapper::Data,\n    }\n\n    impl PSP22 for Contract {}\n\n    impl PSP22Wrapper for Contract {}\n\n    impl Contract {\n        #[ink(constructor)]\n        pub fn new(token_address: AccountId) -> Self {\n            ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n                instance._init(token_address);\n            })\n        }\n\n        /// Exposes the `_recover` function for message caller\n        #[ink(message)]\n        pub fn recover(&mut self) -> Result<Balance, PSP22Error> {\n            self._recover(Self::env().caller())\n        }\n    }\n}\n')),(0,a.kt)("p",null,"You can check an example of the usage of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/psp22_extensions/wrapper"},"PSP22 Wrapper"),"."),(0,a.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22"),"."))}u.isMDXComponent=!0}}]);