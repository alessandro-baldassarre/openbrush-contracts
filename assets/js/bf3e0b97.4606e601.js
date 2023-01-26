"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[89664],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:7,title:"Timelock Controller"},i=void 0,l={unversionedId:"smart-contracts/timelock-controller",id:"version-1.1.0/smart-contracts/timelock-controller",title:"Timelock Controller",description:"This example shows how you can reuse the implementation of",source:"@site/versioned_docs/version-1.1.0/smart-contracts/timelock-controller.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/timelock-controller",permalink:"/openbrush-contracts/1.1.0/smart-contracts/timelock-controller",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-1.1.0/smart-contracts/timelock-controller.md",tags:[],version:"1.1.0",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Timelock Controller"},sidebar:"tutorialSidebar",previous:{title:"Payment Splitter",permalink:"/openbrush-contracts/1.1.0/smart-contracts/payment-splitter"},next:{title:"PSP22",permalink:"/openbrush-contracts/1.1.0/smart-contracts/PSP22/"}},c={},s=[{value:"Step 1: Include dependencies",id:"step-1-include-dependencies",level:2},{value:"Step 2: Add imports",id:"step-2-add-imports",level:2},{value:"Step 3: Define storage",id:"step-3-define-storage",level:2},{value:"Step 4: Inherit logic",id:"step-4-inherit-logic",level:2},{value:"Step 5: Define constructor",id:"step-5-define-constructor",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can reuse the implementation of\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/governance/timelock-controller"},"timelock-controller"),"."),(0,o.kt)("h2",{id:"step-1-include-dependencies"},"Step 1: Include dependencies"),(0,o.kt)("p",null,"Include dependencies to ",(0,o.kt)("inlineCode",{parentName:"p"},"timelock-controller")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"brush")," in the cargo file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nink_primitives = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }\nink_metadata = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false, features = ["derive"], optional = true }\nink_env = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }\nink_storage = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }\nink_lang = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }\nink_prelude = { tag = "v3.0.0-rc6", git = "https://github.com/paritytech/ink", default-features = false }\n\nscale = { package = "parity-scale-codec", version = "2", default-features = false, features = ["derive"] }\nscale-info = { version = "1", default-features = false, features = ["derive"], optional = true }\n\n# These dependencies\ntimelock-controller = { tag = "v1.0.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false }\nbrush = { tag = "v1.0.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false }\n\n[features]\ndefault = ["std"]\nstd = [\n   "ink_primitives/std",\n   "ink_metadata",\n   "ink_metadata/std",\n   "ink_env/std",\n   "ink_storage/std",\n   "ink_lang/std",\n   "scale/std",\n   "scale-info",\n   "scale-info/std",\n\n   # These dependencies   \n   "timelock-controller/std",\n   "brush/std",\n]\n')),(0,o.kt)("h2",{id:"step-2-add-imports"},"Step 2: Add imports"),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"ink::contract")," macro by ",(0,o.kt)("inlineCode",{parentName:"p"},"brush::contract"),".\nImport ",(0,o.kt)("strong",{parentName:"p"},"everything")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"timelock_controller::traits"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[brush::contract]\npub mod my_timelock_controller {\n   use timelock_controller::traits::*;\n   use ink_prelude::vec::Vec;\n")),(0,o.kt)("h2",{id:"step-3-define-storage"},"Step 3: Define storage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TimelockController")," is an extension for ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControl"),", so you need to impl stuff related to both modules.\nDeclare storage struct and declare the fields related to ",(0,o.kt)("inlineCode",{parentName:"p"},"TimelockControllerStorage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControlStorage"),".\nThen you need to derive ",(0,o.kt)("inlineCode",{parentName:"p"},"TimelockControllerStorage")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControlStorage")," traits and mark corresponding fields\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"#[TimelockControllerStorageField]")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"#[AccessControlStorageField]")," attributes.\nDeriving these traits allows you to reuse the default implementation of ",(0,o.kt)("inlineCode",{parentName:"p"},"TimelockController"),"(and ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControl"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, AccessControlStorage, TimelockControllerStorage)]\npub struct TimelockStruct {\n   #[AccessControlStorageField]\n   access: AccessControlData,\n   #[TimelockControllerStorageField]\n   timelock: TimelockControllerData,\n}\n")),(0,o.kt)("h2",{id:"step-4-inherit-logic"},"Step 4: Inherit logic"),(0,o.kt)("p",null,"Inherit implementations of ",(0,o.kt)("inlineCode",{parentName:"p"},"TimelockController")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AccessControl")," traits. You can customize (override) methods in this ",(0,o.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// `TimelockController` is an extension for `AccessControl`, so you need to impl stuff related to both modules.\nimpl AccessControl for TimelockStruct {}\nimpl TimelockController for TimelockStruct {}\n")),(0,o.kt)("h2",{id:"step-5-define-constructor"},"Step 5: Define constructor"),(0,o.kt)("p",null,"Define constructor. Your basic version of ",(0,o.kt)("inlineCode",{parentName:"p"},"TimelockController")," contract is ready!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl TimelockStruct {\n   #[ink(constructor)]\n   pub fn new(min_delay: Timestamp, proposers: Vec<AccountId>, executors: Vec<AccountId>) -> Self {\n      let mut instance = Self::default();\n      let caller = instance.env().caller();\n      // `TimelockController` and `AccessControl` have `_init_with_admin` methods.\n      // You need to call it for each trait separately, to initialize everything for these traits.\n      AccessControl::_init_with_admin(&mut instance, caller);\n      TimelockController::_init_with_admin(&mut instance, caller, min_delay, proposers, executors);\n      instance\n   }\n}\n")))}u.isMDXComponent=!0}}]);