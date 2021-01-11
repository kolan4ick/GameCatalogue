/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/application.js":
/*!*********************************************!*\
  !*** ./app/javascript/packs/application.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/kolan4ick/github/GameCatalogue/app/javascript/packs/application.js: Unexpected token, expected \";\" (21:11)\n\n  19 |         e.preventDefault();\n  20 |         $.getScript(this.href);\n> 21 |         pp false\n     |            ^\n  22 |         return false;\n  23 |     });\n  24 |     pp true\n    at Parser._raise (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:748:17)\n    at Parser.raiseWithData (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:741:17)\n    at Parser.raise (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:735:17)\n    at Parser.unexpected (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:9101:16)\n    at Parser.semicolon (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:9083:40)\n    at Parser.parseExpressionStatement (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:12216:10)\n    at Parser.parseStatementContent (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:11812:19)\n    at Parser.parseStatement (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:12258:25)\n    at Parser.parseBlockBody (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:12249:10)\n    at Parser.parseBlock (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:12233:10)\n    at Parser.parseFunctionBody (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:11221:24)\n    at Parser.parseFunctionBodyAndFinish (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:11205:10)\n    at withTopicForbiddingContext (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:12391:12)\n    at Parser.withTopicForbiddingContext (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:11516:14)\n    at Parser.parseFunction (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:12390:10)\n    at Parser.parseFunctionOrFunctionSent (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:10659:17)\n    at Parser.parseExprAtom (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:10495:21)\n    at Parser.parseExprSubscripts (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:10150:23)\n    at Parser.parseUpdate (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:10130:21)\n    at Parser.parseMaybeUnary (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:10119:17)\n    at Parser.parseExprOps (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:9989:23)\n    at Parser.parseMaybeConditional (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:9963:23)\n    at Parser.parseMaybeAssign (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:9926:21)\n    at allowInAnd (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:9893:39)\n    at Parser.allowInAnd (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:11547:12)\n    at Parser.parseMaybeAssignAllowIn (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:9893:17)\n    at Parser.parseExprListItem (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:11309:18)\n    at Parser.parseCallExpressionArguments (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:10350:22)\n    at Parser.parseCoverCallAndAsyncArrowHead (/home/kolan4ick/github/GameCatalogue/node_modules/@babel/parser/lib/index.js:10258:29)");

/***/ })

/******/ });
//# sourceMappingURL=application-c81042eccda8e5992806.js.map