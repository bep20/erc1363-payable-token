(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{373:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"erc-1363-payable-token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#erc-1363-payable-token"}},[t._v("#")]),t._v(" ERC-1363 Payable Token")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.npmjs.org/package/erc-payable-token",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/erc-payable-token.svg?style=flat-square",alt:"NPM Package"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/bep20/erc1363-payable-token/actions/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://github.com/bep20/erc1363-payable-token/workflows/CI/badge.svg?branch=master",alt:"CI"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://coveralls.io/github/bep20/erc1363-payable-token?branch=master",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://coveralls.io/repos/github/bep20/erc1363-payable-token/badge.svg?branch=master",alt:"Coverage Status"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/bep20/erc1363-payable-token/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/github/license/bep20/erc1363-payable-token.svg",alt:"MIT licensed"}}),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("ERC-1363 allows to implement an ERC-20 token that can be used for payments.")]),t._v(" "),s("p",[t._v("This is an implementation of the "),s("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-1363",target:"_blank",rel:"noopener noreferrer"}},[t._v("ERC-1363 Payable Token"),s("OutboundLink")],1),t._v(" that defines a token interface for ERC-20 tokens that supports executing recipient code after "),s("code",[t._v("transfer")]),t._v(" or "),s("code",[t._v("transferFrom")]),t._v(", or spender code after "),s("code",[t._v("approve")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),s("p",[t._v("There is no way to execute code after an ERC-20 transfer or approval (i.e. making a payment), so to make an action it is required to send another transaction and pay GAS twice.\nERC-1363 makes token payments easier and working without the use of any other listener. It allows to make a callback after a transfer or approval in a single transaction.")]),t._v(" "),s("p",[t._v("There are many proposed uses of Ethereum smart contracts that can accept ERC-20 payments.")]),t._v(" "),s("p",[t._v("Examples could be:")]),t._v(" "),s("ul",[s("li",[t._v("to create a token payable crowdsale")]),t._v(" "),s("li",[t._v("selling services for tokens")]),t._v(" "),s("li",[t._v("paying invoices")]),t._v(" "),s("li",[t._v("making subscriptions")])]),t._v(" "),s("p",[t._v("For these reasons it was named as "),s("strong",[t._v('"Payable Token"')]),t._v(".")]),t._v(" "),s("p",[t._v("Anyway you can use it for specific utilities or for any other purposes who require the execution of a callback after a transfer or approval received.")]),t._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" erc-payable-token\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pragma")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("solidity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token version number"}},[t._v("0.8.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"erc-payable-token/contracts/token/ERC1363/ERC1363.sol"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("contract")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyToken")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" ERC1363 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("memory")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("memory")]),t._v(" symbol\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ERC20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your stuff")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your stuff")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[t._v("#")]),t._v(" Code")]),t._v(" "),s("p",[t._v("This repo contains:")]),t._v(" "),s("h3",{attrs:{id:"ierc1363"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ierc1363"}},[t._v("#")]),t._v(" IERC1363")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/bep20/erc1363-payable-token/blob/master/contracts/token/ERC1363/IERC1363.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("IERC1363.sol"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Interface for a Payable Token contract as defined in "),s("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-1363",target:"_blank",rel:"noopener noreferrer"}},[t._v("ERC-1363 Payable Token"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IERC1363")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" IERC20"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IERC165 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferAndCall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" recipient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferAndCall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" recipient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferFromAndCall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" sender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" recipient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transferFromAndCall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" sender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" recipient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("approveAndCall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" spender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("approveAndCall")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" spender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"erc1363"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#erc1363"}},[t._v("#")]),t._v(" ERC1363")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/bep20/erc1363-payable-token/blob/master/contracts/token/ERC1363/ERC1363.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("ERC1363.sol"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Implementation of an IERC1363 interface.")]),t._v(" "),s("h3",{attrs:{id:"ierc1363receiver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ierc1363receiver"}},[t._v("#")]),t._v(" IERC1363Receiver")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/bep20/erc1363-payable-token/blob/master/contracts/token/ERC1363/IERC1363Receiver.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("IERC1363Receiver.sol"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Interface for any contract that wants to support "),s("code",[t._v("transferAndCall")]),t._v(" or "),s("code",[t._v("transferFromAndCall")]),t._v(" from ERC1363 token contracts.")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IERC1363Receiver")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onTransferReceived")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" operator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" sender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"ierc1363spender"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ierc1363spender"}},[t._v("#")]),t._v(" IERC1363Spender")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/bep20/erc1363-payable-token/blob/master/contracts/token/ERC1363/IERC1363Spender.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("IERC1363Spender.sol"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Interface for any contract that wants to support "),s("code",[t._v("approveAndCall")]),t._v(" from ERC1363 token contracts.")]),t._v(" "),s("div",{staticClass:"language-solidity extra-class"},[s("pre",{pre:!0,attrs:{class:"language-solidity"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IERC1363Spender")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onApprovalReceived")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("address")]),t._v(" sender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint256")]),t._v(" amount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("calldata")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("external")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("returns")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"erc1363payable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#erc1363payable"}},[t._v("#")]),t._v(" ERC1363Payable")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/bep20/erc1363-payable-token/blob/master/contracts/payment/ERC1363Payable.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("ERC1363Payable.sol"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("Implementation proposal of a contract that wants to accept ERC1363 payments. It intercepts what is the ERC1363 token desired for payments and throws if another is sent.")]),t._v(" "),s("p",[t._v("It emits a "),s("code",[t._v("TokensReceived")]),t._v(" event to notify the transfer received by the contract.")]),t._v(" "),s("p",[t._v("It also implements a "),s("code",[t._v("transferReceived")]),t._v(" function that can be overridden to make your stuffs within your contract after a "),s("code",[t._v("onTransferReceived")]),t._v(".")]),t._v(" "),s("p",[t._v("It emits a "),s("code",[t._v("TokensApproved")]),t._v(" event to notify the approval received by the contract.")]),t._v(" "),s("p",[t._v("It also implements a "),s("code",[t._v("approvalReceived")]),t._v(" function that can be overridden to make your stuffs within your contract after a "),s("code",[t._v("onApprovalReceived")]),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"erc1363payablecrowdsale"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#erc1363payablecrowdsale"}},[t._v("#")]),t._v(" ERC1363PayableCrowdsale")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/bep20/erc1363-payable-token/blob/master/contracts/examples/ERC1363PayableCrowdsale.sol",target:"_blank",rel:"noopener noreferrer"}},[t._v("ERC1363PayableCrowdsale.sol"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("As example: an Implementation of a classic token Crowdsale, but paid with ERC1363 tokens instead of ETH.")]),t._v(" "),s("h2",{attrs:{id:"development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[t._v("#")]),t._v(" Development")]),t._v(" "),s("h3",{attrs:{id:"install-dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-dependencies"}},[t._v("#")]),t._v(" Install dependencies")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n")])])]),s("h3",{attrs:{id:"linter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linter"}},[t._v("#")]),t._v(" Linter")]),t._v(" "),s("p",[t._v("Use Solhint")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run lint:sol\n")])])]),s("p",[t._v("Use ESLint")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run lint:js\n")])])]),s("p",[t._v("Use Eslint and fix")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run lint:fix\n")])])]),s("h3",{attrs:{id:"usage-using-truffle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-using-truffle"}},[t._v("#")]),t._v(" Usage (using Truffle)")]),t._v(" "),s("p",[t._v("Open the Truffle console")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run truffle:console\n")])])]),s("h4",{attrs:{id:"compile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile"}},[t._v("#")]),t._v(" Compile")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run truffle:compile\n")])])]),s("h4",{attrs:{id:"test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[t._v("#")]),t._v(" Test")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run truffle:test\n")])])]),s("h3",{attrs:{id:"usage-using-hardhat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-using-hardhat"}},[t._v("#")]),t._v(" Usage (using Hardhat)")]),t._v(" "),s("p",[t._v("Open the Hardhat console")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run hardhat:console\n")])])]),s("h4",{attrs:{id:"compile-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile-2"}},[t._v("#")]),t._v(" Compile")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run hardhat:compile\n")])])]),s("h4",{attrs:{id:"test-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-2"}},[t._v("#")]),t._v(" Test")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run hardhat:test\n")])])]),s("h4",{attrs:{id:"code-coverage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#code-coverage"}},[t._v("#")]),t._v(" Code Coverage")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run hardhat:coverage\n")])])]),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" License")]),t._v(" "),s("p",[t._v("Code released under the "),s("a",{attrs:{href:"https://github.com/bep20/erc1363-payable-token/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIT License"),s("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);a.default=n.exports}}]);
