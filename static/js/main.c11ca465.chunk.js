(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_User_Desktop_NAHUI_YA_TUT_I_NASKOLKO_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),C_Users_User_Desktop_NAHUI_YA_TUT_I_NASKOLKO_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),C_Users_User_Desktop_NAHUI_YA_TUT_I_NASKOLKO_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),C_Users_User_Desktop_NAHUI_YA_TUT_I_NASKOLKO_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),C_Users_User_Desktop_NAHUI_YA_TUT_I_NASKOLKO_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_logo_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7),_logo_svg__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_6__),_App_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__),App=function(_React$Component){Object(C_Users_User_Desktop_NAHUI_YA_TUT_I_NASKOLKO_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(C_Users_User_Desktop_NAHUI_YA_TUT_I_NASKOLKO_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(_){var e;return Object(C_Users_User_Desktop_NAHUI_YA_TUT_I_NASKOLKO_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(e=_super.call(this,_)).state={value:""},e.handleChange=e.handleChange.bind(Object(C_Users_User_Desktop_NAHUI_YA_TUT_I_NASKOLKO_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(C_Users_User_Desktop_NAHUI_YA_TUT_I_NASKOLKO_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.addNumber=e.addNumber.bind(Object(C_Users_User_Desktop_NAHUI_YA_TUT_I_NASKOLKO_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.clear=e.clear.bind(Object(C_Users_User_Desktop_NAHUI_YA_TUT_I_NASKOLKO_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.removeLast=e.removeLast.bind(Object(C_Users_User_Desktop_NAHUI_YA_TUT_I_NASKOLKO_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.downloadTxtFile=e.downloadTxtFile.bind(Object(C_Users_User_Desktop_NAHUI_YA_TUT_I_NASKOLKO_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e}return Object(C_Users_User_Desktop_NAHUI_YA_TUT_I_NASKOLKO_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"handleChange",value:function(_){this.setState({value:_.target.value})}},{key:"handleSubmit",value:function handleSubmit(event){event.preventDefault();try{this.setState({result:eval(this.state.value)})}catch(_unused){this.setState({result:"Invalid input"})}}},{key:"addNumber",value:function(_){this.setState({value:this.state.value+""+_})}},{key:"clear",value:function(){this.setState({value:""})}},{key:"removeLast",value:function(){this.setState({value:this.state.value.substring(0,this.state.value.length-1)})}},{key:"downloadTxtFile",value:function(){var _=document.createElement("a"),e=new Blob([document.getElementById("result").innerHTML],{type:"text/plain;charset=utf-8"});_.href=URL.createObjectURL(e),_.download="myFile.txt",document.body.appendChild(_),_.click()}},{key:"render",value:function(){var _=this;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"App"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header",{className:"App-header"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:_logo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,className:"App-logo",alt:"logo"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form",{onSubmit:this.handleSubmit},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input",{id:"input",type:"text",value:this.state.value,onChange:this.handleChange,readOnly:!0}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input",{type:"submit",value:"Calculate"})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.clear()}},"AC"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.removeLast()}},"<"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.addNumber("/")}},"/")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.addNumber(1)}},"1"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.addNumber(2)}},"2"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.addNumber(3)}},"3"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.addNumber("*")}},"*")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.addNumber(4)}},"4"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.addNumber(5)}},"5"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.addNumber(6)}},"6"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.addNumber("-")}},"-")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.addNumber(7)}},"7"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.addNumber(8)}},"8"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.addNumber(9)}},"9"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.addNumber("+")}},"+")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.addNumber("(")}},"("),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.addNumber(0)}},"0"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:function(){return _.addNumber(")")}},")"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:this.handleSubmit},"=")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{onClick:this.downloadTxtFile},"Export results"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label",{id:"result"},this.state.result)))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App},,,function(_,e,t){_.exports=t.p+"static/media/logo.5d5d9eef.svg"},,,function(_,e,t){_.exports=t(17)},,,,,function(_,e,t){},function(_,e,t){},function(_,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),l=t(3),n=t.n(l),u=(t(15),t(4));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()})).catch((function(_){console.error(_.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.c11ca465.chunk.js.map