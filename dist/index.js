(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/astrutynskyy/www/sandbox/proto-mvc/lib/controller/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (proto) {
  /**
   * Setup controller's "scope" and merge "defaults" with "options"
   */
  var setup = function setup(_ref) {
    var el = _ref.el,
        options = _ref.options,
        proto = _ref.proto;

    var scope = void 0;
    var defaults = {};

    if (proto.defaults) {
      defaults = Object.assign({}, proto.defaults);
    }

    if (el && options) {
      scope = Boolean(el.jquery) ? el : $(el);
    } else if (el && !options) {
      if (typeof el === 'string' || Boolean(el.jquery)) {
        scope = Boolean(el.jquery) ? el : $(el);
      } else {
        options = el;
      }
    }

    options = (0, _extend2.default)(true, defaults, Object.assign({}, options));

    return { scope: scope, options: options };
  };

  /**
   * Asemble new instance based on "proto"
   */
  return function (el, options) {
    // allow overridable setup
    if (typeof proto.setup === 'function') {
      setup = proto.setup;
    }

    var instance = Object.assign({}, (0, _helpers.Identifier)(), proto, setup({ el: el, options: options, proto: proto }));

    // cleanup
    delete instance.defaults;
    delete instance.setup;

    // invoike "init" if set
    if (typeof instance.init === 'function') {
      instance.init();
    }

    return instance;
  };
};

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var _helpers = require('lib/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"extend":"/Users/astrutynskyy/www/sandbox/proto-mvc/node_modules/extend/index.js","lib/helpers":"/Users/astrutynskyy/www/sandbox/proto-mvc/lib/helpers/index.js"}],"/Users/astrutynskyy/www/sandbox/proto-mvc/lib/event/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pubsubJs = require('pubsub-js');

var _pubsubJs2 = _interopRequireDefault(_pubsubJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  on: function on() {
    return _pubsubJs2.default.subscribe.apply(_pubsubJs2.default, arguments);
  },
  off: function off() {
    return _pubsubJs2.default.unsubscribe.apply(_pubsubJs2.default, arguments);
  },
  emit: function emit() {
    return _pubsubJs2.default.publish.apply(_pubsubJs2.default, arguments);
  }
};

},{"pubsub-js":"/Users/astrutynskyy/www/sandbox/proto-mvc/node_modules/pubsub-js/src/pubsub.js"}],"/Users/astrutynskyy/www/sandbox/proto-mvc/lib/helpers/identifier/index.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  id++;

  return {
    id: id
  };
};

var id = 0;

/**
 * Instance consecutive ID generator
 * @return {Object}
 */
;

},{}],"/Users/astrutynskyy/www/sandbox/proto-mvc/lib/helpers/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _identifier = require('lib/helpers/identifier');

Object.defineProperty(exports, 'Identifier', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_identifier).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"lib/helpers/identifier":"/Users/astrutynskyy/www/sandbox/proto-mvc/lib/helpers/identifier/index.js"}],"/Users/astrutynskyy/www/sandbox/proto-mvc/lib/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controller = require('lib/controller');

Object.defineProperty(exports, 'Controller', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_controller).default;
  }
});

var _model = require('lib/model');

Object.defineProperty(exports, 'Model', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_model).default;
  }
});

var _view = require('lib/view');

Object.defineProperty(exports, 'View', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_view).default;
  }
});

var _event = require('lib/event');

Object.defineProperty(exports, 'Event', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_event).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"lib/controller":"/Users/astrutynskyy/www/sandbox/proto-mvc/lib/controller/index.js","lib/event":"/Users/astrutynskyy/www/sandbox/proto-mvc/lib/event/index.js","lib/model":"/Users/astrutynskyy/www/sandbox/proto-mvc/lib/model/index.js","lib/view":"/Users/astrutynskyy/www/sandbox/proto-mvc/lib/view/index.js"}],"/Users/astrutynskyy/www/sandbox/proto-mvc/lib/model/index.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (proto) {
  /**
   * Asemble new instance based on "proto"
   */
  return function (attributes) {
    var instance = Object.assign({}, Object.assign({}, proto), Object.assign({}, attributes));

    // trigger init function
    if (typeof instance.init === 'function') {
      instance.init();
    }

    return instance;
  };
};

var _extend = require('extend');

var _extend2 = _interopRequireDefault(_extend);

var _helpers = require('lib/helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

},{"extend":"/Users/astrutynskyy/www/sandbox/proto-mvc/node_modules/extend/index.js","lib/helpers":"/Users/astrutynskyy/www/sandbox/proto-mvc/lib/helpers/index.js"}],"/Users/astrutynskyy/www/sandbox/proto-mvc/lib/view/index.js":[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTemplateExists = isTemplateExists;
exports.default = View;
var templates = Boolean(window.templates) ? window.templates : {};

/**
 * @name View
 * @author Aleksandr Strutynskyy
 * @description Handlebars facade
 */
function isTemplateExists(viewName) {
  return templates.hasOwnProperty(viewName);
}

function View(viewName, data) {
  if (!isTemplateExists(viewName)) {
    throw new Error("View file \"" + viewName + "\" not found.");
  }

  return templates[viewName](data);
}

},{}],"/Users/astrutynskyy/www/sandbox/proto-mvc/node_modules/extend/index.js":[function(require,module,exports){
'use strict';

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) {/**/}

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0],
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


},{}],"/Users/astrutynskyy/www/sandbox/proto-mvc/node_modules/pubsub-js/src/pubsub.js":[function(require,module,exports){
/*
Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
License: MIT - http://mrgnrdrck.mit-license.org

https://github.com/mroderick/PubSubJS
*/
(function (root, factory){
	'use strict';

    if (typeof define === 'function' && define.amd){
        // AMD. Register as an anonymous module.
        define(['exports'], factory);

    } else if (typeof exports === 'object'){
        // CommonJS
        factory(exports);

    }

    // Browser globals
    var PubSub = {};
    root.PubSub = PubSub;
    factory(PubSub);

}(( typeof window === 'object' && window ) || this, function (PubSub){
	'use strict';

	var messages = {},
		lastUid = -1;

	function hasKeys(obj){
		var key;

		for (key in obj){
			if ( obj.hasOwnProperty(key) ){
				return true;
			}
		}
		return false;
	}

	/**
	 *	Returns a function that throws the passed exception, for use as argument for setTimeout
	 *	@param { Object } ex An Error object
	 */
	function throwException( ex ){
		return function reThrowException(){
			throw ex;
		};
	}

	function callSubscriberWithDelayedExceptions( subscriber, message, data ){
		try {
			subscriber( message, data );
		} catch( ex ){
			setTimeout( throwException( ex ), 0);
		}
	}

	function callSubscriberWithImmediateExceptions( subscriber, message, data ){
		subscriber( message, data );
	}

	function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
		var subscribers = messages[matchedMessage],
			callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
			s;

		if ( !messages.hasOwnProperty( matchedMessage ) ) {
			return;
		}

		for (s in subscribers){
			if ( subscribers.hasOwnProperty(s)){
				callSubscriber( subscribers[s], originalMessage, data );
			}
		}
	}

	function createDeliveryFunction( message, data, immediateExceptions ){
		return function deliverNamespaced(){
			var topic = String( message ),
				position = topic.lastIndexOf( '.' );

			// deliver the message as it is now
			deliverMessage(message, message, data, immediateExceptions);

			// trim the hierarchy and deliver message to each level
			while( position !== -1 ){
				topic = topic.substr( 0, position );
				position = topic.lastIndexOf('.');
				deliverMessage( message, topic, data, immediateExceptions );
			}
		};
	}

	function messageHasSubscribers( message ){
		var topic = String( message ),
			found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic])),
			position = topic.lastIndexOf( '.' );

		while ( !found && position !== -1 ){
			topic = topic.substr( 0, position );
			position = topic.lastIndexOf( '.' );
			found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic]));
		}

		return found;
	}

	function publish( message, data, sync, immediateExceptions ){
		var deliver = createDeliveryFunction( message, data, immediateExceptions ),
			hasSubscribers = messageHasSubscribers( message );

		if ( !hasSubscribers ){
			return false;
		}

		if ( sync === true ){
			deliver();
		} else {
			setTimeout( deliver, 0 );
		}
		return true;
	}

	/**
	 *	PubSub.publish( message[, data] ) -> Boolean
	 *	- message (String): The message to publish
	 *	- data: The data to pass to subscribers
	 *	Publishes the the message, passing the data to it's subscribers
	**/
	PubSub.publish = function( message, data ){
		return publish( message, data, false, PubSub.immediateExceptions );
	};

	/**
	 *	PubSub.publishSync( message[, data] ) -> Boolean
	 *	- message (String): The message to publish
	 *	- data: The data to pass to subscribers
	 *	Publishes the the message synchronously, passing the data to it's subscribers
	**/
	PubSub.publishSync = function( message, data ){
		return publish( message, data, true, PubSub.immediateExceptions );
	};

	/**
	 *	PubSub.subscribe( message, func ) -> String
	 *	- message (String): The message to subscribe to
	 *	- func (Function): The function to call when a new message is published
	 *	Subscribes the passed function to the passed message. Every returned token is unique and should be stored if
	 *	you need to unsubscribe
	**/
	PubSub.subscribe = function( message, func ){
		if ( typeof func !== 'function'){
			return false;
		}

		// message is not registered yet
		if ( !messages.hasOwnProperty( message ) ){
			messages[message] = {};
		}

		// forcing token as String, to allow for future expansions without breaking usage
		// and allow for easy use as key names for the 'messages' object
		var token = 'uid_' + String(++lastUid);
		messages[message][token] = func;

		// return token for unsubscribing
		return token;
	};

	/* Public: Clears all subscriptions
	 */
	PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
		messages = {};
	};

	/*Public: Clear subscriptions by the topic
	*/
	PubSub.clearSubscriptions = function clearSubscriptions(topic){
		var m;
		for (m in messages){
			if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){
				delete messages[m];
			}
		}
	};

	/* Public: removes subscriptions.
	 * When passed a token, removes a specific subscription.
	 * When passed a function, removes all subscriptions for that function
	 * When passed a topic, removes all subscriptions for that topic (hierarchy)
	 *
	 * value - A token, function or topic to unsubscribe.
	 *
	 * Examples
	 *
	 *		// Example 1 - unsubscribing with a token
	 *		var token = PubSub.subscribe('mytopic', myFunc);
	 *		PubSub.unsubscribe(token);
	 *
	 *		// Example 2 - unsubscribing with a function
	 *		PubSub.unsubscribe(myFunc);
	 *
	 *		// Example 3 - unsubscribing a topic
	 *		PubSub.unsubscribe('mytopic');
	 */
	PubSub.unsubscribe = function(value){
		var isTopic    = typeof value === 'string' && messages.hasOwnProperty(value),
			isToken    = !isTopic && typeof value === 'string',
			isFunction = typeof value === 'function',
			result = false,
			m, message, t;

		if (isTopic){
			PubSub.clearSubscriptions(value);
			return;
		}

		for ( m in messages ){
			if ( messages.hasOwnProperty( m ) ){
				message = messages[m];

				if ( isToken && message[value] ){
					delete message[value];
					result = value;
					// tokens are unique, so we can just stop here
					break;
				}

				if (isFunction) {
					for ( t in message ){
						if (message.hasOwnProperty(t) && message[t] === value){
							delete message[t];
							result = true;
						}
					}
				}
			}
		}

		return result;
	};
}));

},{}]},{},["/Users/astrutynskyy/www/sandbox/proto-mvc/lib/index.js"]);
