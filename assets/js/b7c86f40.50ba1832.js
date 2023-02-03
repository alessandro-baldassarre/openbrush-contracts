"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[14078],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:1,title:"PSP37"},s=void 0,i={unversionedId:"smart-contracts/PSP37/psp37",id:"version-3.0.0-beta/smart-contracts/PSP37/psp37",title:"PSP37",description:"This example shows how you can reuse the implementation of PSP37",source:"@site/versioned_docs/version-3.0.0-beta/smart-contracts/PSP37/psp37.md",sourceDirName:"smart-contracts/PSP37",slug:"/smart-contracts/PSP37/",permalink:"/openbrush-contracts/3.0.0-beta/smart-contracts/PSP37/",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-3.0.0-beta/smart-contracts/PSP37/psp37.md",tags:[],version:"3.0.0-beta",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PSP37"},sidebar:"tutorialSidebar",previous:{title:"PSP34 Enumerable",permalink:"/openbrush-contracts/3.0.0-beta/smart-contracts/PSP34/Extensions/enumerable"},next:{title:"PSP37 Enumerable",permalink:"/openbrush-contracts/3.0.0-beta/smart-contracts/PSP37/Extensions/enumerable"}},p={},c=[{value:"Step 1: Import default implementation",id:"step-1-import-default-implementation",level:2},{value:"Step 2: Define constructor",id:"step-2-define-constructor",level:2},{value:"Step 3: Customize your contract",id:"step-3-customize-your-contract",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/token/psp37"},"PSP37"),"\ntoken. Also, this example shows how you can customize the logic, for example, to\ntrack the number of token types with ",(0,o.kt)("inlineCode",{parentName:"p"},"unique_ids"),", adding a new token type with the ",(0,o.kt)("inlineCode",{parentName:"p"},"add_type")," function."),(0,o.kt)("h2",{id:"step-1-import-default-implementation"},"Step 1: Import default implementation"),(0,o.kt)("p",null,"With ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,o.kt)("inlineCode",{parentName:"a"},"Cargo.toml")),",\nyou need to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"psp37")," module, enable the corresponding feature, and embed the module data structure\nas described in ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/overview#reuse-implementation-of-traits-from-openbrush"},"that section"),"."),(0,o.kt)("p",null,"The main trait is ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP37"),"."),(0,o.kt)("h2",{id:"step-2-define-constructor"},"Step 2: Define constructor"),(0,o.kt)("p",null,"Define empty constructor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl Contract {\n    #[ink(constructor)]\n    pub fn new() -> Self {\n        Self::default()\n    }\n}\n")),(0,o.kt)("h2",{id:"step-3-customize-your-contract"},"Step 3: Customize your contract"),(0,o.kt)("p",null,"Customize it by adding logic for denying of minting some tokens.\nWe can deny minting of token with id by ",(0,o.kt)("inlineCode",{parentName:"p"},"deny")," function.\nId will be added to ",(0,o.kt)("inlineCode",{parentName:"p"},"denied_ids")," map.\nIf someone tries to mint token with denied id, we will reject transaction."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp37 {\n    use openbrush::traits::String;\n    use ink::prelude::{\n        vec,\n    };\n    use openbrush::{\n        contracts::psp37::*,\n        storage::Mapping,\n        traits::Storage,\n    };\n\n    #[derive(Default, Storage)]\n    #[ink(storage)]\n    pub struct Contract {\n        #[storage_field]\n        psp37: psp37::Data,\n        denied_ids: Mapping<Id, ()>,\n    }\n\n    impl PSP37 for Contract {}\n\n    impl Contract {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            Self::default()\n        }\n\n        #[ink(message)]\n        pub fn deny(&mut self, id: Id) {\n            self.denied_ids.insert(&id, &());\n        }\n\n        #[ink(message)]\n        pub fn mint_tokens(&mut self, id: Id, amount: Balance) -> Result<(), PSP37Error> {\n            if self.denied_ids.get(&id).is_some() {\n                return Err(PSP37Error::Custom(String::from("Id is denied")))\n            }\n            self._mint_to(Self::env().caller(), vec![(id, amount)])\n        }\n    }\n}\n')),(0,o.kt)("p",null,"You can check an example of the usage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/examples/psp37"},"PSP37"),"."),(0,o.kt)("p",null,"Also you can use extensions for PSP37 token:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/PSP37/extensions/metadata"},"PSP37Metadata"),": metadata for PSP37."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/PSP37/extensions/mintable"},"PSP37Mintable"),": creation of new tokens."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/PSP37/extensions/burnable"},"PSP37Burnable"),": destruction of contract's tokens."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/PSP37/extensions/batch"},"PSP37Batch"),": transfer batch of tokens."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/PSP37/extensions/enumerable"},"PSP37Enumerable"),": iterates over contract's tokens."))}u.isMDXComponent=!0}}]);