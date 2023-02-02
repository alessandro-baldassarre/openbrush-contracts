"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[78971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1,title:"PSP22 Metadata"},s=void 0,i={unversionedId:"smart-contracts/PSP22-Pallet/Extensions/metadata",id:"version-3.0.0-beta.1/smart-contracts/PSP22-Pallet/Extensions/metadata",title:"PSP22 Metadata",description:"This example shows how you can reuse the implementation of PSP22 token with the PSP22Metadata extension via pallet-assets chain extension.",source:"@site/versioned_docs/version-3.0.0-beta.1/smart-contracts/PSP22-Pallet/Extensions/metadata.md",sourceDirName:"smart-contracts/PSP22-Pallet/Extensions",slug:"/smart-contracts/PSP22-Pallet/Extensions/metadata",permalink:"/smart-contracts/PSP22-Pallet/Extensions/metadata",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-3.0.0-beta.1/smart-contracts/PSP22-Pallet/Extensions/metadata.md",tags:[],version:"3.0.0-beta.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PSP22 Metadata"},sidebar:"tutorialSidebar",previous:{title:"PSP22 Pallet",permalink:"/smart-contracts/PSP22-Pallet/"},next:{title:"PSP22 Mintable",permalink:"/smart-contracts/PSP22-Pallet/Extensions/mintable"}},l={},c=[{value:"Step 1: Add imports and enable unstable feature",id:"step-1-add-imports-and-enable-unstable-feature",level:2},{value:"Step 2: Define storage",id:"step-2-define-storage",level:2},{value:"Step 3: Inherit logic",id:"step-3-inherit-logic",level:2},{value:"Step 4: Define constructor",id:"step-4-define-constructor",level:2},{value:"Final code",id:"final-code",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/src/token/psp22_pallet"},"PSP22")," token with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/src/token/psp22_pallet/extensions/metadata.rs"},"PSP22Metadata")," extension via ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-assets")," chain extension."),(0,r.kt)("p",null,"First, you should implement basic version of ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22-Pallet"},"PSP22 Pallet"),"."),(0,r.kt)("h2",{id:"step-1-add-imports-and-enable-unstable-feature"},"Step 1: Add imports and enable unstable feature"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"openbrush::contract")," macro instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,r.kt)("strong",{parentName:"p"},"everything")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"openbrush::contracts::psp22_pallet::extensions::metadata"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp22_pallet {\n    use openbrush::contracts::psp22_pallet::extensions::metadata::*;\n')),(0,r.kt)("h2",{id:"step-2-define-storage"},"Step 2: Define storage"),(0,r.kt)("p",null,"Declare storage struct and declare the field related to the metadata module data structure.\nThen you need to derive the ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage")," trait and mark the corresponding field with\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"#[storage_field]")," attribute. Deriving this trait allows you to reuse the\n",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22Metadata")," extension in your ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22 Pallet")," implementation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, Storage)]\npub struct Contract {\n    #[storage_field]\n    pallet: psp22_pallet::Data,\n}\n")),(0,r.kt)("h2",{id:"step-3-inherit-logic"},"Step 3: Inherit logic"),(0,r.kt)("p",null,"Inherit the implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22Metadata")," trait. You can customize (override)\nmethods in this ",(0,r.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,r.kt)("p",null,"Inherit the implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22")," trait."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl PSP22 for Contract {}\n\nimpl PSP22Metadata for Contract {}\n")),(0,r.kt)("h2",{id:"step-4-define-constructor"},"Step 4: Define constructor"),(0,r.kt)("p",null,"Define constructor. Your ",(0,r.kt)("inlineCode",{parentName:"p"},"PSP22Metadata")," contract is ready!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'impl Contract {\n    /// During instantiation of the contract, you need to pass native tokens as a deposit\n    /// for asset creation.\n    #[ink(constructor)]\n    #[ink(payable)]\n    pub fn new(asset_id: u32, min_balance: Balance, total_supply: Balance, name: String, symbol: String, decimal: u8) -> Self {\n        \n        let mut instance = Self::default();\n\n        // The contract is admin of the asset\n        instance\n            ._create(asset_id, Self::env().account_id(), min_balance)\n            .expect("Should create an asset");\n        instance.pallet.asset_id = asset_id;\n        instance.pallet.origin = Origin::Caller;\n        assert!(instance.pallet.pallet_assets.set_metadata(asset_id, name, symbol, decimal).is_ok());\n        instance\n            ._mint_to(Self::env().caller(), total_supply)\n            .expect("Should mint");\n        \n        instance\n    }\n}\n')),(0,r.kt)("h2",{id:"final-code"},"Final code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp22_pallet_metadata {\n    use openbrush::{\n        contracts::psp22_pallet::extensions::metadata::*,\n        traits::Storage,\n    };\n    use openbrush::traits::String;\n\n    #[ink(storage)]\n    #[derive(Default, Storage)]\n    pub struct Contract {\n        #[storage_field]\n        pallet: psp22_pallet::Data,\n    }\n\n    impl PSP22 for Contract {}\n\n    impl PSP22Metadata for Contract {}\n\n    impl Contract {\n        /// During instantiation of the contract, you need to pass native tokens as a deposit\n        /// for asset creation.\n        #[ink(constructor)]\n        #[ink(payable)]\n        pub fn new(asset_id: u32, min_balance: Balance, total_supply: Balance, name: String, symbol: String, decimal: u8) -> Self {\n            \n            let mut instance = Self::default();\n\n            // The contract is admin of the asset\n            instance\n                ._create(asset_id, Self::env().account_id(), min_balance)\n                .expect("Should create an asset");\n            instance.pallet.asset_id = asset_id;\n            instance.pallet.origin = Origin::Caller;\n            assert!(instance.pallet.pallet_assets.set_metadata(asset_id, name, symbol, decimal).is_ok());\n            instance\n                ._mint_to(Self::env().caller(), total_supply)\n                .expect("Should mint");\n            \n            instance\n        }\n    }\n}\n')),(0,r.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22-Pallet"},"PSP22 Pallet"),"."))}u.isMDXComponent=!0}}]);