"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[87360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59699:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1,title:"PSP34"},i=void 0,s={unversionedId:"smart-contracts/PSP34/psp34",id:"version-3.0.0-beta.1/smart-contracts/PSP34/psp34",title:"PSP34",description:"This example shows how you can reuse the implementation of PSP34 token. Also, this example shows how you can customize the logic, for example, to track the number of tokens minted with next_id, increasing it with each new token minted, securing a unique id for each token.",source:"@site/versioned_docs/version-3.0.0-beta.1/smart-contracts/PSP34/psp34.md",sourceDirName:"smart-contracts/PSP34",slug:"/smart-contracts/PSP34/",permalink:"/smart-contracts/PSP34/",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-3.0.0-beta.1/smart-contracts/PSP34/psp34.md",tags:[],version:"3.0.0-beta.1",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PSP34"},sidebar:"tutorialSidebar",previous:{title:"PSP22 Burnable",permalink:"/smart-contracts/PSP22-Pallet/Extensions/burnable"},next:{title:"PSP34 Metadata",permalink:"/smart-contracts/PSP34/Extensions/metadata"}},c={},l=[{value:"Step 1: Import default implementation",id:"step-1-import-default-implementation",level:2},{value:"Step 2: Define constructor",id:"step-2-define-constructor",level:2},{value:"Step 3: Customize your contract",id:"step-3-customize-your-contract",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/contracts/src/token/psp34"},"PSP34")," token. Also, this example shows how you can customize the logic, for example, to track the number of tokens minted with ",(0,a.kt)("inlineCode",{parentName:"p"},"next_id"),", increasing it with each new token minted, securing a unique id for each token."),(0,a.kt)("h2",{id:"step-1-import-default-implementation"},"Step 1: Import default implementation"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/overview#the-default-toml-of-your-project-with-openbrush"},"default ",(0,a.kt)("inlineCode",{parentName:"a"},"Cargo.toml")),",\nyou need to import the ",(0,a.kt)("inlineCode",{parentName:"p"},"psp34")," module, enable the corresponding feature, and embed the module data structure\nas described in ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/overview#reuse-implementation-of-traits-from-openbrush"},"that section"),"."),(0,a.kt)("p",null,"The main trait is ",(0,a.kt)("inlineCode",{parentName:"p"},"PSP34"),"."),(0,a.kt)("h2",{id:"step-2-define-constructor"},"Step 2: Define constructor"),(0,a.kt)("p",null,"Define empty constructor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl Contract {\n    #[ink(constructor)]\n    pub fn new() -> Self {\n        Self::default()\n    }\n}\n")),(0,a.kt)("h2",{id:"step-3-customize-your-contract"},"Step 3: Customize your contract"),(0,a.kt)("p",null,"Customize it by adding logic for tracking the number of minted tokens.\nIt will contain a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"mint_token")," function which will handle the id of the\nnewly minted token. Also, we will add the ",(0,a.kt)("inlineCode",{parentName:"p"},"next_id: u8")," field to the structure,\nwhich will be increased with each newly minted token. This way we will make sure\nthere will always be added a token with a unique id. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[openbrush::contract]\npub mod my_psp34 {\n    use openbrush::{\n        contracts::psp34::extensions::metadata::*,\n        traits::Storage,\n    };\n\n    #[ink(storage)]\n    #[derive(Default, Storage)]\n    pub struct Contract {\n        #[storage_field]\n        psp34: psp34::Data,\n        #[storage_field]\n        metadata: Data,\n        next_id: u8,\n    }\n\n    impl PSP34 for Contract {}\n\n    impl Contract {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            Self::default()\n        }\n\n        #[ink(message)]\n        pub fn mint_token(&mut self) -> Result<(), PSP34Error> {\n            self._mint_to(Self::env().caller(), Id::U8(self.next_id))?;\n            self.next_id += 1;\n            Ok(())\n        }\n\n        #[ink(message)]\n        pub fn mint(&mut self, id: Id) -> Result<(), PSP34Error> {\n            self._mint_to(Self::env().caller(), id)\n        }\n    }\n}\n')),(0,a.kt)("p",null,"You can check an example of the usage of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts/tree/main/examples/psp34"},"PSP34"),".\nAlso you can use extensions for psp34 token:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/PSP34/extensions/metadata"},"PSP34Metadata"),": metadata for PSP34."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/PSP34/extensions/mintable"},"PSP34Mintable"),": creation of new tokens."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/PSP34/extensions/burnable"},"PSP34Burnable"),": destruction of contract's tokens."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/PSP34/extensions/enumerable"},"PSP34Enumerable"),": iterating over contract's tokens."))}u.isMDXComponent=!0}}]);