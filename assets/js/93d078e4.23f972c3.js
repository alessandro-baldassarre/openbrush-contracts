"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[71188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1,title:"PSP1155"},i=void 0,s={unversionedId:"smart-contracts/PSP1155/psp1155",id:"version-1.2.0/smart-contracts/PSP1155/psp1155",title:"PSP1155",description:"This example shows how you can reuse the implementation of PSP1155 token. Also, this example shows how you can customize the logic, for example, to track the number of token types with uniqueids, adding a new token type with the addtype function.",source:"@site/versioned_docs/version-1.2.0/smart-contracts/PSP1155/psp1155.md",sourceDirName:"smart-contracts/PSP1155",slug:"/smart-contracts/PSP1155/",permalink:"/openbrush-contracts/1.2.0/smart-contracts/PSP1155/",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-1.2.0/smart-contracts/PSP1155/psp1155.md",tags:[],version:"1.2.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PSP1155"},sidebar:"tutorialSidebar",previous:{title:"PSP721 Burnable",permalink:"/openbrush-contracts/1.2.0/smart-contracts/PSP721/Extensions/burnable"},next:{title:"PSP1155 Metadata",permalink:"/openbrush-contracts/1.2.0/smart-contracts/PSP1155/Extensions/metadata"}},p={},l=[{value:"Step 1: Include dependencies",id:"step-1-include-dependencies",level:2},{value:"Step 2: Add imports and enable unstable feature",id:"step-2-add-imports-and-enable-unstable-feature",level:2},{value:"Step 3: Define storage",id:"step-3-define-storage",level:2},{value:"Step 4: Inherit logic",id:"step-4-inherit-logic",level:2},{value:"Step 5: Define constructor",id:"step-5-define-constructor",level:2},{value:"Step 6: Customize your contract",id:"step-6-customize-your-contract",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp1155"},"PSP1155")," token. Also, this example shows how you can customize the logic, for example, to track the number of token types with ",(0,a.kt)("inlineCode",{parentName:"p"},"unique_ids"),", adding a new token type with the ",(0,a.kt)("inlineCode",{parentName:"p"},"add_type")," function."),(0,a.kt)("h2",{id:"step-1-include-dependencies"},"Step 1: Include dependencies"),(0,a.kt)("p",null,"Include ",(0,a.kt)("inlineCode",{parentName:"p"},"brush")," as dependency in the cargo file or you can use ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,a.kt)("inlineCode",{parentName:"a"},"Cargo.toml"))," template.\nAfter you need to enable default implementation of PSP1155 via ",(0,a.kt)("inlineCode",{parentName:"p"},"brush")," feature."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'brush = { tag = "v1.2.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false, features = ["psp1155"] }\n')),(0,a.kt)("h2",{id:"step-2-add-imports-and-enable-unstable-feature"},"Step 2: Add imports and enable unstable feature"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"brush::contract")," macro instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,a.kt)("strong",{parentName:"p"},"everything")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"brush::contracts::psp1155"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[brush::contract]\npub mod my_psp1155 {\n    use brush::contracts::psp1155::*;\n    use ink_prelude::{\n        string::String,\n        vec,\n    };\n...\n')),(0,a.kt)("h2",{id:"step-3-define-storage"},"Step 3: Define storage"),(0,a.kt)("p",null,"Declare storage struct and declare the field related to the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP1155Storage")," trait. Then you need to derive the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP1155Storage")," trait and mark the corresponding field with the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[PSP1155StorageField]")," attribute. Deriving this trait allows you to reuse the default implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP1155"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Default, PSP1155Storage)]\n#[ink(storage)]\npub struct MyPSP1155 {\n    #[PSP1155StorageField]\n    psp1155: PSP1155Data,\n}\n")),(0,a.kt)("h2",{id:"step-4-inherit-logic"},"Step 4: Inherit logic"),(0,a.kt)("p",null,"Inherit implementations of the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP1155")," trait. You can customize (override) methods in this ",(0,a.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl PSP1155 for MyPSP1155 {}\n")),(0,a.kt)("h2",{id:"step-5-define-constructor"},"Step 5: Define constructor"),(0,a.kt)("p",null,"Define constructor. Your basic version of the ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP1155")," contract is ready!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyPSP1155 {\n    #[ink(constructor)]\n    pub fn new() -> Self {\n        Self::default()\n    }\n}\n")),(0,a.kt)("h2",{id:"step-6-customize-your-contract"},"Step 6: Customize your contract"),(0,a.kt)("p",null,"Customize it by adding logic for denying of minting some tokens.\nWe can deny minting of token with id by ",(0,a.kt)("inlineCode",{parentName:"p"},"deny")," function.\nId will be added to ",(0,a.kt)("inlineCode",{parentName:"p"},"denied_ids")," map.\nIf someone tries to mint token with denied id, we will reject transaction."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Default, PSP1155Storage)]\n#[ink(storage)]\npub struct MyPSP1155 {\n    #[PSP1155StorageField]\n    psp1155: PSP1155Data,\n    denied_ids: StorageHashMap<Id, ()>,\n}\n\nimpl PSP1155 for MyPSP1155 {}\n\nimpl MyPSP1155 {\n    #[ink(constructor)]\n    pub fn new() -> Self {\n        Self::default()\n    }\n\n    #[ink(message)]\n    pub fn deny(&mut self, id: Id) {\n        self.denied_ids.insert(id, ());\n    }\n\n    #[ink(message)]\n    pub fn mint_tokens(&mut self, id: Id, amount: Balance) -> Result<(), PSP1155Error> {\n        if self.denied_ids.get(&id).is_some() {\n            return Err(PSP1155Error::Custom(String::from("Id is denied")))\n        }\n        self._mint_to(Self::env().caller(), vec![(id, amount)])\n    }\n}\n')),(0,a.kt)("p",null,"You can check an example of the usage of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/psp1155"},"PSP1155"),"."),(0,a.kt)("p",null,"Also you can use extensions for PSP1155 token:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"Extensions/metadata"},"PSP1155Metadata"),": metadata for PSP1155."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"Extensions/mintable"},"PSP1155Mintable"),": creation of new tokens."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"Extensions/burnable"},"PSP1155Burnable"),": destruction of contract's tokens."))}u.isMDXComponent=!0}}]);