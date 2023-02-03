"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[72106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:2,title:"Access Control"},c=void 0,s={unversionedId:"smart-contracts/access-control",id:"version-2.0.0/smart-contracts/access-control",title:"Access Control",description:"This example shows how you can use the implementation of access-control to provide rights for usage of specific smart contract functions.",source:"@site/versioned_docs/version-2.0.0/smart-contracts/access-control.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/access-control",permalink:"/openbrush-contracts/2.0.0/smart-contracts/access-control",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-2.0.0/smart-contracts/access-control.md",tags:[],version:"2.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Access Control"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/openbrush-contracts/2.0.0/smart-contracts/overview"},next:{title:"Ownable",permalink:"/openbrush-contracts/2.0.0/smart-contracts/ownable"}},i={},l=[{value:"Step 1: Include dependencies",id:"step-1-include-dependencies",level:2},{value:"Step 2: Add imports and enable unstable feature",id:"step-2-add-imports-and-enable-unstable-feature",level:2},{value:"Step 3: Define storage",id:"step-3-define-storage",level:2},{value:"Step 4: Inherit logic",id:"step-4-inherit-logic",level:2},{value:"Step 5: Define constructor",id:"step-5-define-constructor",level:2},{value:"Step 6: Customize your contract",id:"step-6-customize-your-contract",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can use the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/src/access/access_control"},"access-control")," to provide rights for usage of specific smart contract functions."),(0,o.kt)("h2",{id:"step-1-include-dependencies"},"Step 1: Include dependencies"),(0,o.kt)("p",null,"Include ",(0,o.kt)("inlineCode",{parentName:"p"},"openbrush")," as dependency in the cargo file or you can use ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,o.kt)("inlineCode",{parentName:"a"},"Cargo.toml"))," template.\nAfter you need to enable default implementation of Access Control via ",(0,o.kt)("inlineCode",{parentName:"p"},"openbrush")," features."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'openbrush = { version = "~2.0.0", default-features = false, features = ["access_control"] }\n')),(0,o.kt)("h2",{id:"step-2-add-imports-and-enable-unstable-feature"},"Step 2: Add imports and enable unstable feature"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"openbrush::contract")," macro instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,o.kt)("strong",{parentName:"p"},"everything")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::access_control"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_access_control {\n    use openbrush::{\n        contracts::access_control::*,\n        modifiers,\n    };\n    use ink_storage::traits::SpreadAllocate;\n...\n')),(0,o.kt)("h2",{id:"step-3-define-storage"},"Step 3: Define storage"),(0,o.kt)("p",null,"Declare storage struct and declare the field related to and ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControlStorage")," trait. Then you need to derive ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControlStorage")," trait and mark the corresponding field with ",(0,o.kt)("inlineCode",{parentName:"p"},"#[AccessControlStorageField]")," attribute. Deriving this trait allows you to reuse the default implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControl"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, SpreadAllocate, AccessControlStorage)]\npub struct MyAccessControl {\n    #[AccessControlStorageField]\n    access: AccessControlData,\n}\n")),(0,o.kt)("h2",{id:"step-4-inherit-logic"},"Step 4: Inherit logic"),(0,o.kt)("p",null,"Inherit implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControl")," trait. You can customize (override) functions in this ",(0,o.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl AccessControl for MyAccessControl {}\n")),(0,o.kt)("h2",{id:"step-5-define-constructor"},"Step 5: Define constructor"),(0,o.kt)("p",null,"Define constructor. Your basic version of ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControl")," contract is ready!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyAccessControl {\n    #[ink(constructor)]\n    pub fn new() -> Self {\n        ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n        })\n    }\n}\n")),(0,o.kt)("h2",{id:"step-6-customize-your-contract"},"Step 6: Customize your contract"),(0,o.kt)("p",null,"Customize it by adding access control logic. We will add a ",(0,o.kt)("inlineCode",{parentName:"p"},"restricted_function")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"MyAccessControl")," implemenation, which will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"only_role")," modifier with ",(0,o.kt)("inlineCode",{parentName:"p"},"CALLER")," parameter, which verifies that the caller has the ",(0,o.kt)("inlineCode",{parentName:"p"},"CALLER")," role. Also, we need to update the constructor to grant the ",(0,o.kt)("inlineCode",{parentName:"p"},"CALLER")," role to the caller by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_access_control {\n    use openbrush::{\n        contracts::access_control::*,\n        modifiers,\n    };\n    use ink_storage::traits::SpreadAllocate;\n\n    #[ink(storage)]\n    #[derive(Default, SpreadAllocate, AccessControlStorage)]\n    pub struct MyAccessControl {\n        #[AccessControlStorageField]\n        access: AccessControlData,\n    }\n\n    // You can manually set the number for the role.\n    // But better to use a hash of the variable name.\n    // It will generate a unique identifier of this role.\n    // And will reduce the chance to have overlapping roles.\n    const CALLER: RoleType = ink_lang::selector_id!("CALLER");\n\n    impl AccessControl for MyAccessControl {}\n\n    impl MyAccessControl {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            ink_lang::codegen::initialize_contract(|instance: &mut Self| {\n                let caller = instance.env().caller();\n                instance._init_with_admin(caller);\n                // We grant counter role to caller in constructor, so they can increase the count\n                instance.grant_role(CALLER, caller).expect("Should grant the role");\n            })\n        }\n\n        #[ink(message)]\n        #[modifiers(only_role(CALLER))]\n        pub fn restricted_function(&mut self) -> Result<(), AccessControlError> {\n            todo!()\n        }\n    }\n}\n')),(0,o.kt)("p",null,"You can check an example of the usage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/access_control"},"Access Control"),"."))}u.isMDXComponent=!0}}]);