module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 264);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/popup");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/vdom");

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(265);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _main2.default;

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

var _main = __webpack_require__(266);

var _main2 = _interopRequireDefault(_main);

var _popup = __webpack_require__(12);

var _vdom = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationConstructor = _vue2.default.extend(_main2.default);

var instance = void 0;
var instances = [];
var seed = 1;

var Notification = function Notification(options) {
  if (_vue2.default.prototype.$isServer) return;
  options = options || {};
  var userOnClose = options.onClose;
  var id = 'notification_' + seed++;
  var position = options.position || 'top-right';

  options.onClose = function () {
    Notification.close(id, userOnClose);
  };

  instance = new NotificationConstructor({
    data: options
  });

  if ((0, _vdom.isVNode)(options.message)) {
    instance.$slots.default = [options.message];
    options.message = 'REPLACED_BY_VNODE';
  }
  instance.id = id;
  instance.$mount();
  document.body.appendChild(instance.$el);
  instance.visible = true;
  instance.dom = instance.$el;
  instance.dom.style.zIndex = _popup.PopupManager.nextZIndex();

  var verticalOffset = options.offset || 0;
  instances.filter(function (item) {
    return item.position === position;
  }).forEach(function (item) {
    if (!item.isStack) {
      verticalOffset += item.$el.offsetHeight + 16;
    }
  });
  verticalOffset += 16;
  instance.verticalOffset = options.isStack ? (options.offset || 0) + 16 : verticalOffset;
  instances.push(instance);
  return instance;
};

['success', 'warning', 'info', 'error'].forEach(function (type) {
  Notification[type] = function (options) {
    if (typeof options === 'string' || (0, _vdom.isVNode)(options)) {
      options = {
        message: options
      };
    }
    options.type = type;
    return Notification(options);
  };
});

Notification.close = function (id, userOnClose) {
  var index = -1;
  var len = instances.length;
  var instance = instances.filter(function (instance, i) {
    if (instance.id === id) {
      index = i;
      return true;
    }
    return false;
  })[0];
  if (!instance) return;

  if (typeof userOnClose === 'function') {
    userOnClose(instance);
  }
  instances.splice(index, 1);

  if (len <= 1) return;
  var position = instance.position;
  var removedHeight = instance.isStack ? -16 : instance.dom.offsetHeight;
  for (var i = index; i < len - 1; i++) {
    if (instances[i].position === position) {
      instances[i].dom.style[instance.verticalProperty] = instances[i].isStack ? instances[i].verticalOffset + 'px' : parseInt(instances[i].dom.style[instance.verticalProperty], 10) - removedHeight - 16 + 'px';
    }
  }
};

Notification.closeAll = function () {
  for (var i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

Notification.clearAll = function () {
  for (var i = instances.length - 1; i >= 0; i--) {
    instances[i].clear();
  }
};

exports.default = Notification;

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c04edd4_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(268);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c04edd4_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dom = __webpack_require__(3);

var typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      visible: false,
      title: '',
      message: '',
      duration: 4500,
      type: '',
      showClose: true,
      customClass: '',
      iconClass: '',
      onClose: null,
      onClick: null,
      closed: false,
      verticalOffset: 0,
      timer: null,
      dangerouslyUseHTMLString: false,
      position: 'top-right',
      isStack: false,
      showConfirmButton: false,
      confirmButtonText: '',
      onConfirm: null
    };
  },


  computed: {
    typeClass: function typeClass() {
      return this.type && typeMap[this.type] ? 'el-icon-' + typeMap[this.type] : '';
    },
    horizontalClass: function horizontalClass() {
      return this.position.indexOf('right') > -1 ? 'right' : 'left';
    },
    verticalProperty: function verticalProperty() {
      return (/^top-/.test(this.position) ? 'top' : 'bottom'
      );
    },
    positionStyle: function positionStyle() {
      var _ref;

      return _ref = {}, _ref[this.verticalProperty] = this.verticalOffset + 'px', _ref;
    }
  },

  watch: {
    closed: function closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
        this.isStack && this.handleStack(false);
      }
    }
  },

  methods: {
    destroyElement: function destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    click: function click() {
      if (typeof this.onClick === 'function') {
        this.onClick();
      }
    },
    close: function close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    },
    clear: function clear() {
      this.closed = true;
    },
    handleConfirm: function handleConfirm() {
      this.closed = true;
      if (typeof this.onConfirm === 'function') {
        this.onConfirm();
      }
    },
    clearTimer: function clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer: function startTimer() {
      var _this = this;

      if (this.duration > 0) {
        this.timer = setTimeout(function () {
          if (!_this.closed) {
            _this.close();
          }
        }, this.duration);
      }
    },
    keydown: function keydown(e) {
      if (e.keyCode === 46 || e.keyCode === 8) {
        this.clearTimer(); // detele 取消倒计时
      } else if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.close();
        }
      } else {
        this.startTimer(); // 恢复倒计时
      }
    },
    handleStack: function handleStack() {
      var isAdd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.$el.removeEventListener('transitionend', this.handleStack);

      var stackDoms = document.querySelectorAll('.stack');
      var domArr = [];

      stackDoms.forEach(function (item, index) {
        (0, _dom.removeClass)(item, 'stack1 stack2 stack3');

        if (isAdd) {
          domArr.push(item);
        } else if (index !== stackDoms.length - 1) {
          domArr.push(item);
        }
      });
      (0, _dom.addClass)(domArr[domArr.length - 1], 'stack1');
      (0, _dom.addClass)(domArr[domArr.length - 2], 'stack2');
      (0, _dom.addClass)(domArr[domArr.length - 3], 'stack3');
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.duration > 0) {
      this.timer = setTimeout(function () {
        if (!_this2.closed) {
          _this2.close();
        }
      }, this.duration);
    }
    document.addEventListener('keydown', this.keydown);
    this.isStack && this.$el.addEventListener('transitionend', this.handleStack);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('keydown', this.keydown);
  }
};

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-notification-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],class:['el-notification', _vm.customClass, _vm.horizontalClass, _vm.isStack ? 'stack' : ''],style:(_vm.positionStyle),attrs:{"role":"alert"},on:{"mouseenter":function($event){_vm.clearTimer()},"mouseleave":function($event){_vm.startTimer()},"click":_vm.click}},[(_vm.type || _vm.iconClass)?_c('i',{staticClass:"el-notification__icon",class:[ _vm.typeClass, _vm.iconClass ]}):_vm._e(),_c('div',{staticClass:"el-notification__group",class:{ 'is-with-icon': _vm.typeClass || _vm.iconClass }},[_c('h2',{staticClass:"el-notification__title",domProps:{"textContent":_vm._s(_vm.title)}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.message),expression:"message"}],staticClass:"el-notification__content"},[_vm._t("default",[(!_vm.dangerouslyUseHTMLString)?_c('p',[_vm._v(_vm._s(_vm.message))]):_c('p',{domProps:{"innerHTML":_vm._s(_vm.message)}})])],2),(_vm.showConfirmButton && _vm.confirmButtonText)?_c('div',{staticClass:"el-notification__footer"},[_c('el-button',{attrs:{"type":"primary","size":"mini"},nativeOn:{"click":function($event){_vm.handleConfirm($event)}}},[_vm._v("\n          "+_vm._s(_vm.confirmButtonText)+"\n        ")])],1):_vm._e(),(_vm.showClose)?_c('div',{staticClass:"el-notification__closeBtn el-icon-close",on:{"click":function($event){$event.stopPropagation();_vm.close($event)}}}):_vm._e()])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/dom");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ })

/******/ });