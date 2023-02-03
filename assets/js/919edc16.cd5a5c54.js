"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[3815],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(b,i(i({ref:n},p),{},{components:t})):r.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},93650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:3,title:"Ownable"},i=void 0,l={unversionedId:"smart-contracts/ownable",id:"version-2.1.0/smart-contracts/ownable",title:"Ownable",description:"This example shows how you can use the implementation of ownable to provide only owner rights for contract's functions.",source:"@site/versioned_docs/version-2.1.0/smart-contracts/ownable.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/ownable",permalink:"/openbrush-contracts/2.1.0/smart-contracts/ownable",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-2.1.0/smart-contracts/ownable.md",tags:[],version:"2.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Ownable"},sidebar:"tutorialSidebar",previous:{title:"Access Control",permalink:"/openbrush-contracts/2.1.0/smart-contracts/access-control"},next:{title:"Proxy",permalink:"/openbrush-contracts/2.1.0/smart-contracts/proxy"}},s={},c=[{value:"Step 1: Include dependencies",id:"step-1-include-dependencies",level:2},{value:"Step 2: Add imports and enable unstable feature",id:"step-2-add-imports-and-enable-unstable-feature",level:2},{value:"Step 3: Define storage",id:"step-3-define-storage",level:2},{value:"Step 4: Inherit logic",id:"step-4-inherit-logic",level:2},{value:"Step 5: Define constructor",id:"step-5-define-constructor",level:2},{value:"Step 6: Customize your contract",id:"step-6-customize-your-contract",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows how you can use the implementation of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/access/ownable"},"ownable")," to provide ",(0,a.kt)("inlineCode",{parentName:"p"},"only owner")," rights for contract's functions."),(0,a.kt)("h2",{id:"step-1-include-dependencies"},"Step 1: Include dependencies"),(0,a.kt)("p",null,"Include ",(0,a.kt)("inlineCode",{parentName:"p"},"openbrush")," as dependency in the cargo file or you can use ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,a.kt)("inlineCode",{parentName:"a"},"Cargo.toml"))," template.\nAfter you need to enable default implementation of Ownable via ",(0,a.kt)("inlineCode",{parentName:"p"},"openbrush")," features."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'openbrush = { version = "~2.1.0", default-features = false, features = ["ownable"] }\n')),(0,a.kt)("h2",{id:"step-2-add-imports-and-enable-unstable-feature"},"Step 2: Add imports and enable unstable feature"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"openbrush::contract")," macro instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,a.kt)("strong",{parentName:"p"},"everything")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::ownable"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_ownable {\n    use openbrush::{\n        contracts::ownable::*,\n        modifiers,\n    };\n    use ink_storage::traits::SpreadAllocate;\n...\n')),(0,a.kt)("h2",{id:"step-3-define-storage"},"Step 3: Define storage"),(0,a.kt)("p",null,"Declare storage struct and declare the field related to ",(0,a.kt)("inlineCode",{parentName:"p"},"OwnableStorage")," trait. Then you need to derive the ",(0,a.kt)("inlineCode",{parentName:"p"},"OwnableStorage")," trait and mark the corresponding field with the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[OwnableStorageField]")," attribute. Deriving this trait allows you to reuse the default implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"Ownable"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, SpreadAllocate, OwnableStorage)]\npub struct MyOwnable {\n    #[OwnableStorageField]\n    ownable: OwnableData,\n}\n")),(0,a.kt)("h2",{id:"step-4-inherit-logic"},"Step 4: Inherit logic"),(0,a.kt)("p",null,"Inherit implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Ownable")," trait. You can customize (override) methods in this ",(0,a.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl Ownable for MyOwnable {}\n")),(0,a.kt)("h2",{id:"step-5-define-constructor"},"Step 5: Define constructor"),(0,a.kt)("p",null,"Define the constructor and initialize the owner with the contract initiator. Your basic version of ",(0,a.kt)("inlineCode",{parentName:"p"},"Ownable")," contract is ready!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyOwnable {\n    #[ink(constructor)]\n    pub fn new() -> Self {\n        ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n            let caller = instance.env().caller();\n            instance._init_with_owner(caller);\n        })\n    }\n}\n")),(0,a.kt)("h2",{id:"step-6-customize-your-contract"},"Step 6: Customize your contract"),(0,a.kt)("p",null,"Customize it by adding ownable logic. We will add a ",(0,a.kt)("inlineCode",{parentName:"p"},"owner_function")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"MyOwnable")," implemenation and add the ",(0,a.kt)("inlineCode",{parentName:"p"},"only_owner")," modifier, which will verify that the caller of the function is the owner."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_ownable {\n    use openbrush::{\n        contracts::ownable::*,\n        modifiers,\n    };\n    use ink_storage::traits::SpreadAllocate;\n\n\n   #[ink(storage)]\n   #[derive(Default, SpreadAllocate, OwnableStorage)]\n   pub struct MyOwnable {\n      #[OwnableStorageField]\n      ownable: OwnableData,\n   }\n\n   impl Ownable for MyOwnable {}\n    \n   impl MyOwnable {\n      \n      #[ink(constructor)]\n      pub fn new() -> Self {\n        ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n            let caller = instance.env().caller();\n            instance._init_with_owner(caller);\n        })\n      }\n\n      #[ink(message)]\n      #[modifiers(only_owner)]\n      pub fn owner_function(&mut self) -> Result<(), OwnableError> {\n         todo!()\n      }\n   }\n}\n\n')),(0,a.kt)("p",null,"You can check an example of the usage of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/ownable"},"Ownable"),"."))}u.isMDXComponent=!0}}]);