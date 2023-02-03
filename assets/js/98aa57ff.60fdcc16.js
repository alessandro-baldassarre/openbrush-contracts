"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[48134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:7,title:"PSP22 Capped"},s=void 0,i={unversionedId:"smart-contracts/PSP22/Extensions/capped",id:"version-3.0.0-beta/smart-contracts/PSP22/Extensions/capped",title:"PSP22 Capped",description:"This example shows how you can reuse the implementation of PSP22 token with the PSP22Capped extension.",source:"@site/versioned_docs/version-3.0.0-beta/smart-contracts/PSP22/Extensions/capped.md",sourceDirName:"smart-contracts/PSP22/Extensions",slug:"/smart-contracts/PSP22/Extensions/capped",permalink:"/openbrush-contracts/3.0.0-beta/smart-contracts/PSP22/Extensions/capped",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-3.0.0-beta/smart-contracts/PSP22/Extensions/capped.md",tags:[],version:"3.0.0-beta",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"PSP22 Capped"},sidebar:"tutorialSidebar",previous:{title:"PSP22 Pausable",permalink:"/openbrush-contracts/3.0.0-beta/smart-contracts/PSP22/Extensions/pausable"},next:{title:"PSP22 Token Timelock",permalink:"/openbrush-contracts/3.0.0-beta/smart-contracts/PSP22/Utils/token-timelock"}},p={},c=[{value:"Step 1: Add imports and enable unstable feature",id:"step-1-add-imports-and-enable-unstable-feature",level:2},{value:"Step 2: Define storage",id:"step-2-define-storage",level:2},{value:"Step 3: Inherit logic",id:"step-3-inherit-logic",level:2},{value:"Step 4: Define constructor",id:"step-4-define-constructor",level:2},{value:"Final code",id:"final-code",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/src/token/psp22"},"PSP22")," token with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/src/token/psp22/extensions/capped.rs"},"PSP22Capped")," extension."),(0,a.kt)("p",null,"First, you should implement basic version of ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22"),"."),(0,a.kt)("h2",{id:"step-1-add-imports-and-enable-unstable-feature"},"Step 1: Add imports and enable unstable feature"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"openbrush::contract")," macro instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,a.kt)("strong",{parentName:"p"},"everything")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::psp22::extensions::capped"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp22 {\n    use openbrush::contracts::psp22::extensions::capped::*;\n')),(0,a.kt)("h2",{id:"step-2-define-storage"},"Step 2: Define storage"),(0,a.kt)("p",null,"Declare storage struct and declare the field related to the capped module data structure.\nThen you need to derive the ",(0,a.kt)("inlineCode",{parentName:"p"},"Storage")," trait and mark the corresponding field with\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"#[storage_field]")," attribute. Deriving this trait allows you to reuse the\n",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22Capped")," extension in your ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22")," implementation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, Storage)]\npub struct Contract {\n    ...\n    #[storage_field]\n    cap: capped::Data,\n}\n")),(0,a.kt)("h2",{id:"step-3-inherit-logic"},"Step 3: Inherit logic"),(0,a.kt)("p",null,"Inherit the implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22Capped")," trait. You can customize (override)\nmethods in this ",(0,a.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,a.kt)("p",null,"Inherit the implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22")," trait."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl PSP22 for Contract {}\n\nimpl PSP22Capped for Contract {}\n")),(0,a.kt)("p",null,"Override ",(0,a.kt)("inlineCode",{parentName:"p"},"psp22::Transfer")," to check is the cap exceeded before minting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'impl psp22::Transfer for Contract {\n        fn _before_token_transfer(\n            &mut self,\n            _from: Option<&AccountId>,\n            _to: Option<&AccountId>,\n            _amount: &Balance,\n        ) -> Result<(), PSP22Error> {\n            // `is_none` means that it is minting\n            if _from.is_none() && self._is_cap_exceeded(_amount) {\n                return Err(PSP22Error::Custom(String::from("Cap exceeded")))\n            }\n            Ok(())\n        }\n    }\n')),(0,a.kt)("h2",{id:"step-4-define-constructor"},"Step 4: Define constructor"),(0,a.kt)("p",null,"Define constructor. Your ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP22Capped")," contract is ready!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl Contract {\n    #[ink(constructor)]\n    pub fn new(inital_supply: Balance) -> Self {\n        let mut instance = Self::default();\n\n        assert!(instance._init_cap(cap).is_ok());\n        assert!(instance.mint(Self::env().caller(), inital_supply).is_ok());\n        \n        instance\n    }\n}\n")),(0,a.kt)("h2",{id:"final-code"},"Final code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp22 {\n    use openbrush::{\n        contracts::psp22::extensions::{\n            capped::*,\n        },\n        traits::Storage,\n    };\n\n    #[ink(storage)]\n    #[derive(Default, Storage)]\n    pub struct Contract {\n        #[storage_field]\n        psp22: psp22::Data,\n        #[storage_field]\n        cap: capped::Data,\n    }\n\n    impl PSP22 for Contract {}\n\n    impl PSP22Capped for Contract {}\n\n    impl Contract {\n        #[ink(constructor)]\n        pub fn new(inital_supply: Balance, cap: Balance) -> Self {\n            let mut instance = Self::default();\n\n            assert!(instance._init_cap(cap).is_ok());\n            assert!(instance.mint(Self::env().caller(), inital_supply).is_ok());\n            \n            instance\n        }\n    }\n}\n')),(0,a.kt)("p",null,"You can check an implementation example of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/examples/psp22_extensions/capped"},"PSP22 Capped"),"."),(0,a.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22"},"PSP22"),"."))}u.isMDXComponent=!0}}]);