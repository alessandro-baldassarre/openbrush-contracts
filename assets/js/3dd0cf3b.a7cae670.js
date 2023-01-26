"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[48650],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=l(n),h=r,f=u["".concat(c,".").concat(h)]||u[h]||m[h]||o;return n?a.createElement(f,s(s({ref:e},p),{},{components:n})):a.createElement(f,s({ref:e},p))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[u]="string"==typeof t?t:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67874:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1,title:"Overview"},s=void 0,i={unversionedId:"smart-contracts/overview",id:"version-1.6.0/smart-contracts/overview",title:"Overview",description:"This doc contains description of how the OpenBrush library can be imported and used.",source:"@site/versioned_docs/version-1.6.0/smart-contracts/overview.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/overview",permalink:"/openbrush-contracts/1.6.0/smart-contracts/overview",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-1.6.0/smart-contracts/overview.md",tags:[],version:"1.6.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/openbrush-contracts/1.6.0/"},next:{title:"Access Control",permalink:"/openbrush-contracts/1.6.0/smart-contracts/access-control"}},c={},l=[{value:"The default <code>toml</code> of your project with OpenBrush:",id:"the-default-toml-of-your-project-with-openbrush",level:4}],p={toc:l};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This doc contains description of how the OpenBrush library can be imported and used. "),(0,r.kt)("p",null,"The OpenBrush is using ink! stable release ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.0.0")," branch at the moment.\nSo you should use the same version of the ink! across your project."),(0,r.kt)("h4",{id:"the-default-toml-of-your-project-with-openbrush"},"The default ",(0,r.kt)("inlineCode",{parentName:"h4"},"toml")," of your project with OpenBrush:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\n# Import of all ink! crates\nink_primitives = { tag = "v3.0.0", git = "https://github.com/paritytech/ink", default-features = false }\nink_metadata = { tag = "v3.0.0", git = "https://github.com/paritytech/ink", default-features = false, features = ["derive"], optional = true }\nink_env = { tag = "v3.0.0", git = "https://github.com/paritytech/ink", default-features = false }\nink_storage = { tag = "v3.0.0", git = "https://github.com/paritytech/ink", default-features = false }\nink_lang = { tag = "v3.0.0", git = "https://github.com/paritytech/ink", default-features = false }\nink_prelude = { tag = "v3.0.0", git = "https://github.com/paritytech/ink", default-features = false }\n\nscale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }\nscale-info = { version = "2", default-features = false, features = ["derive"], optional = true }\n\n# Brush dependency\nbrush = { tag = "v1.6.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false }\n\n[features]\ndefault = ["std"]\nstd = [\n  "ink_primitives/std",\n  "ink_metadata",\n  "ink_metadata/std",\n  "ink_env/std",\n  "ink_storage/std",\n  "ink_lang/std",\n  "scale/std",\n  "scale-info",\n  "scale-info/std",\n\n  # Brush dependency\n  "brush/std",\n]\nink-as-dependency = []\n')),(0,r.kt)("p",null,"To avoid unexpected compilation errors better to always import all ink! crates."),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"brush")," crate provides ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/blob/main/utils/brush_lang/proc_macros/lib.rs"},"macros"),"\nfor simplification of the development and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/traits"},"traits")," of\ncontracts(you can implement them by yourself, and you can use them for a cross-contract calls). "),(0,r.kt)("p",null,"The OpenBrush also provides the default implementation of traits that can be enabled via crate features.\nA list of all available features you can find ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/blob/main/Cargo.toml#L36"},"here"),".\nThe default implementation of traits requires the usage of the unstable feature ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/beta/unstable-book/language-features/min-specialization.html"},"min-specialization"),".\nYou can enable it by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"#![feature(min_specialization)]")," at the top of your root module(for more information check ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/rustdoc/unstable-features.html"},"rust official documentation"),"). "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:")),"  ink! requires put ",(0,r.kt)("inlineCode",{parentName:"p"},'#![cfg_attr(not(feature = "std"), no_std)]')," at the top of root crate.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:")),"  Some default implementations for traits provide additional methods that can be overridden.\nThese methods are defined in a separate internal trait. It has the name of the original trait + suffix ",(0,r.kt)("inlineCode",{parentName:"p"},"Internal"),".\nIf you want to override them you need to do that in the impl section of the internal trait.")),(0,r.kt)("p",null,"Also, that doc contains links to the examples of how to reuse and customize the default implementation of traits."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP22/"},"PSP22")," is an example of how you can reuse the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp22"},"psp22"),". You also can find examples of how to reuse extensions.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP22/Extensions/metadata"},"PSP22Metadata"),": metadata for PSP22."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP22/Extensions/mintable"},"PSP22Mintable"),": creation of new tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP22/Extensions/burnable"},"PSP22Burnable"),": destruction of own tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP22/Extensions/wrapper"},"PSP22Wrapper"),": wrapper for PSP22 token (useful for governance tokens etc.)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP22/Extensions/flashmint"},"PSP22FlashMint"),": extension which allows performing flashloans of the token by minting and burning the token."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP22/Extensions/pausable"},"PSP22Pausable"),": example of using pausable extension in the PSP22 contract."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP22/Extensions/capped"},"PSP22Capped"),": extension which adds a cap for total supply of PSP22 tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP22/Utils/token-timelock"},"PSP22TokenTimelock"),": Utility which allows token holders to lock their tokens for a specified amount of time."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP34/"},"PSP34")," is an example of how you can reuse the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp34"},"psp34"),". You also can find examples of how to reuse extensions.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP34/Extensions/metadata"},"PSP34Metadata"),": metadata for PSP34."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP34/Extensions/mintable"},"PSP34Mintable"),": creation of new tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP34/Extensions/burnable"},"PSP34Burnable"),": destruction of own tokens."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP1155/"},"PSP1155")," is an example of how you can reuse the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp1155"},"psp1155"),". You also can find examples of how to reuse extensions.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP1155/Extensions/metadata"},"PSP1155Metadata"),": metadata for PSP1155."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP1155/Extensions/mintable"},"PSP1155Mintable"),": creation of new tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP1155/Extensions/burnable"},"PSP1155Burnable"),": destruction of own tokens."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/access-control"},"Access Control")," shows how you can use the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/access/access_control"},"access-control")," and\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp34"},"psp34")," together to provide rights to mint and burn NFT tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/ownable"},"Ownable")," shows how you can use the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/access/ownable"},"ownable")," and\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp1155"},"psp1155")," together to provide rights to mint and burn tokens."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/reentrancy-guard"},"ReentrancyGuard")," shows how you can use the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/security/reentrancy_guard"},"non_reentrant"),"\nmodifier to prevent reentrancy during certain functions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/pausable"},"Pausable")," shows how you can use the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/security/pausable"},"pausable"),"\ncontract and modifiers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/timelock-controller"},"TimelockController")," shows how you can use the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/governance/timelock_controller"},"timelock-controller"),"\nto execute a transaction with some delay via governance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/openbrush-contracts/1.6.0/smart-contracts/payment-splitter"},"PaymentSplitter")," shows how you can use the implementation of\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/finance/payment_splitter"},"payment-splitter"),"\nto split received native tokens between participants of the contract.")))}u.isMDXComponent=!0}}]);