"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[2118],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,d=p["".concat(l,".").concat(f)]||p[f]||h[f]||a;return n?t.createElement(d,s(s({ref:r},u),{},{components:n})):t.createElement(d,s({ref:r},u))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74058:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=n(87462),o=(n(67294),n(3905));const a={sidebar_position:8,title:"Errors"},s=void 0,i={unversionedId:"smart-contracts/example/errors",id:"version-1.6.0/smart-contracts/example/errors",title:"Errors",description:"We will define errors thrown by the lending contract at end of traits/lending.rs",source:"@site/versioned_docs/version-1.6.0/smart-contracts/example/errors.md",sourceDirName:"smart-contracts/example",slug:"/smart-contracts/example/errors",permalink:"/openbrush-contracts/1.6.0/smart-contracts/example/errors",draft:!1,editUrl:"https://github.com/727-Ventures/openbrush-contracts/tree/main/docs/versioned_docs/version-1.6.0/smart-contracts/example/errors.md",tags:[],version:"1.6.0",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Errors"},sidebar:"tutorialSidebar",previous:{title:"Lending impls",permalink:"/openbrush-contracts/1.6.0/smart-contracts/example/impls"},next:{title:"Lending contract",permalink:"/openbrush-contracts/1.6.0/smart-contracts/example/contract"}},l={},c=[{value:"Define errors",id:"define-errors",level:2},{value:"Implement conversion from OpenBrush errors",id:"implement-conversion-from-openbrush-errors",level:2}],u={toc:c};function p(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We will define errors thrown by the lending contract at end of ",(0,o.kt)("inlineCode",{parentName:"p"},"traits/lending.rs"),"\nbecause only that contract returns its own errors. But if you have more than one error definition,\nbetter to create a separate ",(0,o.kt)("inlineCode",{parentName:"p"},"traits/errors.rs")," file for them(or a directory ",(0,o.kt)("inlineCode",{parentName:"p"},"traits/errors/"),").\nIn that file(directory) you can define the errors that will be returned by your contracts,\nand implement conversion between different errors.\nIn the project, we implement the conversion for some errors from OpenBrush."),(0,o.kt)("h2",{id:"define-errors"},"Define errors"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'/// Enum of errors raised by our lending smart contract\n#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]\n#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]\npub enum LendingError {\n    PSP22Error(PSP22Error),\n    PSP34Error(PSP34Error),\n    AccessControlError(AccessControlError),\n    PausableError(PausableError),\n\n    /// This error will be thrown when the lender does not have enough allowance\n    /// to transfer the lending asset to the contract\n    InsufficientAllowanceToLend,\n    /// This error will be thrown when the lender tries to lend more amount of asset than they own\n    InsufficientBalanceToLend,\n    /// This error will be thrown when the borrower does not have enough allowance\n    /// to transfer the borrowed asset to the contract\n    InsufficientAllowanceToRepay,\n    /// This error will be thrown when the borrower tries to repay more amount of asset than they own\n    InsufficientBalanceToRepay,\n    /// This error will be thrown when the borrower does not have enough allowance\n    /// to transfer the collateral asset to the contract\n    InsufficientAllowanceForCollateral,\n    /// This error will be thrown when the borrower tries to use more amount of asset as collateral than they own\n    InsufficientCollateralBalance,\n    // This error will be thrown if the amount of borrowed assets is greater than or equal to the liquidation price of deposited collateral\n    AmountNotSupported,\n    // This error will be thrown if the user wants to borrow or withdraw more assets than there currently are in the contract\n    InsufficientBalanceInContract,\n    /// This error will be thrown if the user tries to lend or borrow asset which is not supported by the lending contract\n    /// or if a user tries to use an usupported asset as a collateral\n    AssetNotSupported,\n    /// This error will be thrown if the user tries to allow an asset which is already allowed\n    AssetSupported,\n    /// This error will be thrown if the user tries to repay a loan he does not own\n    NotTheOwner,\n    /// This error will be thrown if the loan we try to liquidate was already liquidated\n    LoanLiquidated,\n    /// This error will be thrown if the loan we try to liquidate is not below liquidation price\n    CanNotBeLiquidated,\n    /// This error will be thrown if an user wants to disallow lending of an asset which is still present in the contract\n    AssetsInTheContract,\n}\n')),(0,o.kt)("h2",{id:"implement-conversion-from-openbrush-errors"},"Implement conversion from OpenBrush errors"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl From<AccessControlError> for LendingError {\n    fn from(access: AccessControlError) -> Self {\n        LendingError::AccessControlError(access)\n    }\n}\n\nimpl From<PausableError> for LendingError {\n    fn from(access: PausableError) -> Self {\n        LendingError::PausableError(access)\n    }\n}\n\nimpl From<PSP22Error> for LendingError {\n    fn from(error: PSP22Error) -> Self {\n        LendingError::PSP22Error(error)\n    }\n}\n\nimpl From<PSP34Error> for LendingError {\n    fn from(error: PSP34Error) -> Self {\n        LendingError::PSP34Error(error)\n    }\n}\n")))}p.isMDXComponent=!0}}]);