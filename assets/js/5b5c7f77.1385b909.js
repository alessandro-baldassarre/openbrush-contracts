"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[12386],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>f});var a=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=a.createContext({}),d=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},c=function(n){var e=d(n.components);return a.createElement(s.Provider,{value:e},n.children)},u="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,s=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),u=d(t),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return t?a.createElement(f,i(i({ref:e},c),{},{components:t})):a.createElement(f,i({ref:e},c))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[u]="string"==typeof n?n:o,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49989:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));const r={sidebar_position:5,title:"Loan contract"},i=void 0,l={unversionedId:"smart-contracts/example/loan",id:"version-1.6.0/smart-contracts/example/loan",title:"Loan contract",description:"In our project we will also implement PSP-34",source:"@site/versioned_docs/version-1.6.0/smart-contracts/example/loan.md",sourceDirName:"smart-contracts/example",slug:"/smart-contracts/example/loan",permalink:"/openbrush-contracts/1.6.0/smart-contracts/example/loan",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-1.6.0/smart-contracts/example/loan.md",tags:[],version:"1.6.0",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Loan contract"},sidebar:"tutorialSidebar",previous:{title:"Shares contract",permalink:"/openbrush-contracts/1.6.0/smart-contracts/example/shares"},next:{title:"Data and derive macro",permalink:"/openbrush-contracts/1.6.0/smart-contracts/example/data"}},s={},d=[{value:"Definition of the <code>Loan</code> trait",id:"definition-of-the-loan-trait",level:2},{value:"Add dependencies",id:"add-dependencies",level:2},{value:"Implement the contract",id:"implement-the-contract",level:2},{value:"Define the storage",id:"define-the-storage",level:2},{value:"Implement the extension traits",id:"implement-the-extension-traits",level:2},{value:"Implement the Loan trait",id:"implement-the-loan-trait",level:2},{value:"Define the constructor and add functions",id:"define-the-constructor-and-add-functions",level:2}],c={toc:d};function u(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In our project we will also implement ",(0,o.kt)("a",{parentName:"p",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP34/"},"PSP-34"),"\ntoken. This token will represent a loan of a user who borrowed some assets.\nUpon borrowing assets the contract will mint an NFT to them, which will hold\nthe information about their loan, namely the user who borrowed the assets,\naddress of the asset which was used as collateral, how much collateral was\ndeposited, what asset was borrowed, and how much, the liquidation price of\nthe loan, timestamp of when was the loan performed, and information whether\nthe loan is liquidated or not. This data will be stored in a separate storage\ntrait, which we will derive in our NFT contract. We do this to separate storage\nfrom the logic, and we will do this in the lending contract as well.\nWe do not want anybody to just mint and burn these, so we will implement\nthe ",(0,o.kt)("a",{parentName:"p",href:"/openbrush-contracts/1.6.0/smart-contracts/ownable"},"Ownable")," extension in our NFT. The mint and burn\nlogic will be covered differently, we will not be using the mintable and\nburnable extensions."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LoanContract")," will contain several methods defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Loan")," trait.\nThese methods are restricted and can be called only by an owner of the contract.\nThere is not too much logic to split it, so everything will be implemented\nin the body of the contract."),(0,o.kt)("h2",{id:"definition-of-the-loan-trait"},"Definition of the ",(0,o.kt)("inlineCode",{parentName:"h2"},"Loan")," trait"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"traits/loan.rs"),", we will define a ",(0,o.kt)("inlineCode",{parentName:"p"},"Loan")," trait.\nThat trait contains three super traits: ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP34"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP34Metadata"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Ownable"),".\nAlso, the trait contains several methods, and the definition of the ",(0,o.kt)("inlineCode",{parentName:"p"},"LoanInfo"),"\n(that structure is used during interacting with the contract\nso it is defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"traits")," instead of the body of the contract).\n",(0,o.kt)("inlineCode",{parentName:"p"},"LoanRef")," can be used by other developers to do a cross contract call to ",(0,o.kt)("inlineCode",{parentName:"p"},"LoanContract"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use brush::{\n    contracts::traits::{\n        ownable::*,\n        psp34::{\n            extensions::metadata::*,\n            *,\n        },\n    },\n    traits::{\n        AccountId,\n        Balance,\n        Timestamp,\n    },\n};\nuse ink_storage::traits::{\n    PackedLayout,\n    SpreadLayout,\n};\n\n#[cfg(feature = "std")]\nuse ink_storage::traits::StorageLayout;\n\n#[derive(Default, Debug, Clone, scale::Encode, scale::Decode, SpreadLayout, PackedLayout)]\n#[cfg_attr(feature = "std", derive(StorageLayout, scale_info::TypeInfo))]\npub struct LoanInfo {\n    pub borrower: AccountId,\n    pub collateral_token: AccountId,\n    pub collateral_amount: Balance,\n    pub borrow_token: AccountId,\n    pub borrow_amount: Balance,\n    pub liquidation_price: Balance,\n    pub timestamp: Timestamp,\n    pub liquidated: bool,\n}\n\n#[brush::wrapper]\npub type LoanRef = dyn Loan + PSP34 + PSP34Metadata + Ownable;\n\n#[brush::trait_definition]\npub trait Loan: PSP34 + PSP34Metadata + Ownable {\n    /// This function initalizes data of a loan and mint token inside it\n    #[ink(message)]\n    fn create_loan(&mut self, loan_info: LoanInfo) -> Result<(), PSP34Error>;\n\n    /// This function frees data of a loan and burn token inside it\n    #[ink(message)]\n    fn delete_loan(&mut self, initiator: AccountId, loan_id: Id) -> Result<(), PSP34Error>;\n\n    /// This function will be used when the user repays their loan only partially\n    #[ink(message)]\n    fn update_loan(\n        &mut self,\n        loan_id: Id,\n        new_borrow_amount: Balance,\n        new_timestamp: Timestamp,\n        new_collateral_amount: Balance,\n    ) -> Result<(), PSP34Error>;\n\n    /// This function will set a loan to liquidated\n    #[ink(message)]\n    fn liquidate_loan(&mut self, loan_id: Id) -> Result<(), PSP34Error>;\n\n    /// Function returns `LoanInfo` by `Id`\n    #[ink(message)]\n    fn get_loan_info(&self, loan_id: Id) -> Result<LoanInfo, PSP34Error>;\n}\n')),(0,o.kt)("h2",{id:"add-dependencies"},"Add dependencies"),(0,o.kt)("p",null,"In addition to the dependencies imported in the ",(0,o.kt)("a",{parentName:"p",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP34/"},"PSP-34"),"\ndocumentation, we will also add the ",(0,o.kt)("inlineCode",{parentName:"p"},"ownable")," dependency the same way as in the\n",(0,o.kt)("a",{parentName:"p",href:"/openbrush-contracts/1.6.0/smart-contracts/ownable"},"ownable")," documentation. We will be using ",(0,o.kt)("inlineCode",{parentName:"p"},"LoanContract"),"\nas a dependency in our lending contract to instantiate it. So we need to also add\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},'"rlib"')," crate type to have the ability to import the ",(0,o.kt)("inlineCode",{parentName:"p"},"LoanContract")," as a dependency."),(0,o.kt)("h2",{id:"implement-the-contract"},"Implement the contract"),(0,o.kt)("p",null,"We want a basic ",(0,o.kt)("a",{parentName:"p",href:"/openbrush-contracts/1.6.0/smart-contracts/PSP34/"},"PSP-34")," token with metadata and ownable extensions,\nso we will add these to our contract. We will add a ",(0,o.kt)("inlineCode",{parentName:"p"},"brush::contract")," macro to our contract and add some imports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n/// This contract will represent the loan of a user\n#[brush::contract]\npub mod loan {\n    use brush::contracts::{\n        ownable::*,\n        psp34::extensions::metadata::*,\n    };\n\n    use brush::modifiers;\n\n    use ink_prelude::{\n        string::String,\n        vec::Vec,\n    };\n    use ink_storage::{\n        traits::SpreadAllocate,\n        Mapping,\n    };\n    use lending_project::traits::loan::*;\n')),(0,o.kt)("h2",{id:"define-the-storage"},"Define the storage"),(0,o.kt)("p",null,"We will derive the storage traits related to ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP-34"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP-34 Metadata"),", and\n",(0,o.kt)("inlineCode",{parentName:"p"},"Ownable")," and declare the fields related to these traits. Also, we will declare\nfields related to ",(0,o.kt)("inlineCode",{parentName:"p"},"Loan")," itself."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"/// Define the storage for PSP34 data, Metadata data and Ownable data\n#[ink(storage)]\n#[derive(SpreadAllocate, PSP34Storage, OwnableStorage, PSP34MetadataStorage)]\npub struct LoanContract {\n    #[PSP34StorageField]\n    psp34: PSP34Data,\n    #[OwnableStorageField]\n    ownable: OwnableData,\n    #[PSP34MetadataStorageField]\n    metadata: PSP34MetadataData,\n\n    // Fields of current contract\n    /// mapping from token id to `LoanInfo`\n    loan_info: Mapping<Id, LoanInfo>,\n    /// the id of last loan\n    last_loan_id: Id,\n    /// ids no longer used (can be reused)\n    freed_ids: Vec<Id>,\n}\n")),(0,o.kt)("h2",{id:"implement-the-extension-traits"},"Implement the extension traits"),(0,o.kt)("p",null,"We will be using these extensions in our NFT token, so we will implement them for our storage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"/// implement PSP34 Trait for our NFT\nimpl PSP34 for LoanContract {}\n\n/// implement Ownable Trait for our NFT\nimpl Ownable for LoanContract {}\n\n/// implement PSP34Metadata Trait for our NFT\nimpl PSP34Metadata for LoanContract {}\n")),(0,o.kt)("h2",{id:"implement-the-loan-trait"},"Implement the Loan trait"),(0,o.kt)("p",null,"We will implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"Loan")," trait.\nAll functions except one are restricted by the ",(0,o.kt)("inlineCode",{parentName:"p"},"only_owner")," modifier."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'impl Loan for LoanContract {\n    #[modifiers(only_owner)]\n    #[ink(message)]\n    fn create_loan(&mut self, mut loan_info: LoanInfo) -> Result<(), PSP34Error> {\n        let loan_id = self._get_next_loan_id_and_increase()?;\n        if self.loan_info.get(&loan_id).is_some() {\n            return Err(PSP34Error::Custom(String::from("This loan id already exists!")))\n        }\n        loan_info.liquidated = false;\n        self.loan_info.insert(&loan_id, &loan_info);\n        self._mint_to(loan_info.borrower, loan_id)\n    }\n\n    #[modifiers(only_owner)]\n    #[ink(message)]\n    fn delete_loan(&mut self, initiator: AccountId, loan_id: Id) -> Result<(), PSP34Error> {\n        self.loan_info.take(&loan_id);\n        self._burn_from(initiator, loan_id)\n    }\n\n    #[modifiers(only_owner)]\n    #[ink(message)]\n    fn update_loan(\n        &mut self,\n        loan_id: Id,\n        new_borrow_amount: Balance,\n        new_timestamp: Timestamp,\n        new_collateral_amount: Balance,\n    ) -> Result<(), PSP34Error> {\n        self._update_loan(loan_id, new_borrow_amount, new_timestamp, new_collateral_amount)\n    }\n\n    #[modifiers(only_owner)]\n    #[ink(message)]\n    fn liquidate_loan(&mut self, loan_id: Id) -> Result<(), PSP34Error> {\n        self._liquidate_loan(loan_id)\n    }\n\n    #[ink(message)]\n    fn get_loan_info(&self, loan_id: Id) -> Result<LoanInfo, PSP34Error> {\n        let loan_info = self.loan_info.get(&loan_id);\n        if loan_info.is_none() {\n            return Err(PSP34Error::Custom(String::from("Loan does not exist")))\n        }\n        Ok(loan_info.cloned().unwrap())\n    }\n}\n')),(0,o.kt)("h2",{id:"define-the-constructor-and-add-functions"},"Define the constructor and add functions"),(0,o.kt)("p",null,"Finally, we will define the constructor where we will set the name and\nthe symbol of the token and then initialize the owner of the token\n(that owner will be able to mint and burn the tokens).\nWe will also add several helper functions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'impl LoanContract {\n    /// constructor with name and symbol\n    #[ink(constructor)]\n    pub fn new() -> Self {\n        ink_lang::codegen::initialize_contract(|instance: &mut LoanContract| {\n            instance.last_loan_id = Id::U8(1u8);\n            instance.freed_ids = Vec::new();\n            instance._set_attribute(\n                Id::U8(1u8),\n                String::from("LoanContract NFT").into_bytes(),\n                String::from("L-NFT").into_bytes(),\n            );\n        })\n    }\n\n    /// internal function to update data of a loan\n    fn _update_loan(\n        &mut self,\n        loan_id: Id,\n        new_borrow_amount: Balance,\n        new_timestamp: Timestamp,\n        new_collateral_amount: Balance,\n    ) -> Result<(), PSP34Error> {\n        let loan_info = self.loan_info.get(&loan_id);\n\n        if loan_info.is_none() {\n            return Err(PSP34Error::Custom(String::from("This loan does not exist!")))\n        }\n\n        let mut loan_info = loan_info.cloned().unwrap();\n        loan_info.collateral_amount = new_collateral_amount;\n        loan_info.borrow_amount = new_borrow_amount;\n        loan_info.timestamp = new_timestamp;\n\n        self.loan_info.insert(&loan_id, &loan_info);\n\n        Ok(())\n    }\n\n    /// internal function to set loan to liquidated\n    fn _liquidate_loan(&mut self, loan_id: Id) -> Result<(), PSP34Error> {\n        let loan_info = self.loan_info.get(&loan_id);\n\n        if loan_info.is_none() {\n            return Err(PSP34Error::Custom(String::from("This loan does not exist!")))\n        }\n\n        let mut loan_info = loan_info.cloned().unwrap();\n        loan_info.liquidated = true;\n\n        self.loan_info.insert(&loan_id, &loan_info);\n\n        Ok(())\n    }\n\n    /// internal function to return the id of a new loan and to increase it in the storage\n    fn _get_next_loan_id_and_increase(&mut self) -> Result<Id, PSP34Error> {\n        if self.freed_ids.len() > 0 {\n            return Ok(self.freed_ids.pop().unwrap())\n        }\n        let mut current = self.last_loan_id;\n        // It is not fully correct implementation of the increasing. but it is only an example\n        for n in 0..32 {\n            if current[n] == u8::MAX {\n                if n == 31 {\n                    return Err(PSP34Error::Custom(String::from("Max Id reached!")))\n                } else {\n                    current[n] = 0;\n                }\n            } else {\n                current[n] += 1;\n                break\n            }\n        }\n        self.last_loan_id = current;\n        Ok(current)\n    }\n}\n')))}u.isMDXComponent=!0}}]);