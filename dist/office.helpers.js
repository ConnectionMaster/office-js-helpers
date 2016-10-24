(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("OfficeHelpers", [], factory);
	else if(typeof exports === 'object')
		exports["OfficeHelpers"] = factory();
	else
		root["OfficeHelpers"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1));
	__export(__webpack_require__(2));
	__export(__webpack_require__(3));
	__export(__webpack_require__(4));
	__export(__webpack_require__(5));


/***/ },
/* 1 */
/***/ function(module, exports) {

	// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
	"use strict";
	/**
	 * Helper for creating and querying Dictionaries.
	 * A rudimentary alternative to ES6 Maps.
	 */
	var Dictionary = (function () {
	    /**
	     * @constructor
	     * @param {object} items Initial seed of items.
	    */
	    function Dictionary(items) {
	        this.items = items;
	        if (!(this.items === new Object(this.items)) || Array.isArray(this.items)) {
	            this.items = {};
	        }
	    }
	    /**
	     * Gets an item from the dictionary.
	     *
	     * @param {string} key The key of the item.
	     * @return {object} Returns an item if found, else returns null.
	     */
	    Dictionary.prototype.get = function (key) {
	        if (!this.contains(key)) {
	            return null;
	        }
	        return this.items[key];
	    };
	    /**
	     * Adds an item into the dictionary.
	     * If the key already exists, then it will throw.
	     *
	     * @param {string} key The key of the item.
	     * @param {object} value The item to be added.
	     * @return {object} Returns the added item.
	     */
	    Dictionary.prototype.add = function (key, value) {
	        if (this.contains(key)) {
	            throw new Error("Key: " + key + " already exists.");
	        }
	        return this.insert(key, value);
	    };
	    ;
	    /**
	     * Inserts an item into the dictionary.
	     * If an item already exists with the same key, it will be overridden by the new value.
	     *
	     * @param {string} key The key of the item.
	     * @param {object} value The item to be added.
	     * @return {object} Returns the added item.
	     */
	    Dictionary.prototype.insert = function (key, value) {
	        if (key == null) {
	            throw new Error('Key cannot be null or undefined');
	        }
	        this.items[key] = value;
	        return value;
	    };
	    /**
	     * Removes an item from the dictionary.
	     * Will throw if the key doesn't exist.
	     *
	     * @param {string} key The key of the item.
	     * @return {object} Returns the deleted item.
	     */
	    Dictionary.prototype.remove = function (key) {
	        if (!this.contains(key)) {
	            throw new Error("Key: " + key + " not found.");
	        }
	        var value = this.items[key];
	        delete this.items[key];
	        return value;
	    };
	    ;
	    /**
	     * Clears the dictionary.
	     */
	    Dictionary.prototype.clear = function () {
	        this.items = {};
	    };
	    /**
	     * Check if the dictionary contains the given key.
	     *
	     * @param {string} key The key of the item.
	     * @return {boolean} Returns true if the key was found.
	     */
	    Dictionary.prototype.contains = function (key) {
	        if (key == null) {
	            throw new Error('Key cannot be null or undefined');
	        }
	        return this.items.hasOwnProperty(key);
	    };
	    /**
	     * Lists all the keys in the dictionary.
	     *
	     * @return {array} Returns all the keys.
	     */
	    Dictionary.prototype.keys = function () {
	        if (this.items == null)
	            return [];
	        return Object.keys(this.items);
	    };
	    /**
	     * Lists all the values in the dictionary.
	     *
	     * @return {array} Returns all the values.
	     */
	    Dictionary.prototype.values = function () {
	        var _this = this;
	        return this.keys().map(function (key) { return _this.items[key]; });
	    };
	    /**
	     * Get the dictionary.
	     *
	     * @return {object} Returns the dictionary if it contains data, null otherwise.
	     */
	    Dictionary.prototype.lookup = function () {
	        return this.keys().length ? JSON.parse(JSON.stringify(this.items)) : null;
	    };
	    Object.defineProperty(Dictionary.prototype, "count", {
	        /**
	         * Number of items in the dictionary.
	         *
	         * @return {number} Returns the number of items in the dictionary.
	         */
	        get: function () {
	            return this.keys().length;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ;
	    return Dictionary;
	}());
	exports.Dictionary = Dictionary;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dictionary_1 = __webpack_require__(1);
	(function (StorageType) {
	    StorageType[StorageType["LocalStorage"] = 0] = "LocalStorage";
	    StorageType[StorageType["SessionStorage"] = 1] = "SessionStorage";
	})(exports.StorageType || (exports.StorageType = {}));
	var StorageType = exports.StorageType;
	/**
	 * Helper for creating and querying Local Storage or Session Storage.
	 * @see Uses {@link Dictionary} to create an in-memory copy of
	 * the storage for faster reads. Writes update the actual storage.
	 */
	var Storage = (function (_super) {
	    __extends(Storage, _super);
	    /**
	     * @constructor
	     * @param {string} container Container name to be created in the LocalStorage.
	     * @param {StorageType} type[optional] Storage Type to be used, defaults to Local Storage.
	    */
	    function Storage(_container, type) {
	        _super.call(this);
	        this._container = _container;
	        this._storage = null;
	        type = type || StorageType.LocalStorage;
	        this.switchStorage(type);
	    }
	    /**
	     * Switch the storage type.
	     * Switches the storage type and then reloads the in-memory collection.
	     *
	     * @type {StorageType} type The desired storage to be used.
	     */
	    Storage.prototype.switchStorage = function (type) {
	        this._storage = type === StorageType.LocalStorage ? localStorage : sessionStorage;
	        if (!this._storage.hasOwnProperty(this._container)) {
	            this._storage[this._container] = null;
	        }
	        this.load();
	    };
	    /**
	     * Add an item.
	     * Extends Dictionary's implementation of add, with a save to the storage.
	     */
	    Storage.prototype.add = function (item, value) {
	        _super.prototype.add.call(this, item, value);
	        this.save();
	        return value;
	    };
	    /**
	     * Add or Update an item.
	     * Extends Dictionary's implementation of insert, with a save to the storage.
	     */
	    Storage.prototype.insert = function (item, value) {
	        _super.prototype.insert.call(this, item, value);
	        this.save();
	        return value;
	    };
	    /**
	     * Remove an item.
	     * Extends Dictionary's implementation with a save to the storage.
	     */
	    Storage.prototype.remove = function (item) {
	        var value = _super.prototype.remove.call(this, item);
	        this.save();
	        return value;
	    };
	    /**
	     * Clear the storage.
	     * Extends Dictionary's implementation with a save to the storage.
	     */
	    Storage.prototype.clear = function () {
	        _super.prototype.clear.call(this);
	        this._storage[this._container] = null;
	    };
	    /**
	     * Clear all storages
	     * Completely clears both the localStorage and sessionStorage.
	     */
	    Storage.clearAll = function () {
	        window.localStorage.clear();
	        window.sessionStorage.clear();
	    };
	    /**
	     * Saves the current state to the storage.
	     */
	    Storage.prototype.save = function () {
	        this._storage[this._container] = JSON.stringify(this.items);
	    };
	    /**
	     * Refreshes the storage with the current localStorage values.
	     */
	    Storage.prototype.load = function () {
	        _super.prototype.clear.call(this);
	        this.items = JSON.parse(this._storage[this._container]);
	        if (this.items == null)
	            this.items = {};
	        return this.items;
	    };
	    return Storage;
	}(dictionary_1.Dictionary));
	exports.Storage = Storage;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var storage_1 = __webpack_require__(2);
	/**
	 * Helper for caching and managing OAuth Tokens.
	 */
	var TokenManager = (function (_super) {
	    __extends(TokenManager, _super);
	    /**
	     * @constructor
	    */
	    function TokenManager() {
	        _super.call(this, 'OAuth2Tokens', storage_1.StorageType.LocalStorage);
	    }
	    /**
	     * Compute the expiration date based on the expires_in field in a OAuth token.
	     */
	    TokenManager.prototype.setExpiry = function (token) {
	        var expire = function (seconds) { return seconds == null ? null : new Date(new Date().getTime() + ~~seconds * 1000); };
	        if (!(token == null) && token.expires_at == null) {
	            token.expires_at = expire(token.expires_in);
	        }
	    };
	    /**
	     * Extends Storage's default add method
	     * Adds a new OAuth Token after settings its expiry
	     *
	     * @param {string} provider Unique name of the corresponding OAuth Endpoint.
	     * @param {object} config valid Token
	     * @see {@link IEndpoint}.
	     * @return {object} Returns the added endpoint.
	     */
	    TokenManager.prototype.add = function (provider, value) {
	        value.provider = provider;
	        this.setExpiry(value);
	        return _super.prototype.insert.call(this, provider, value);
	    };
	    /**
	     * Extract the token from the URL
	     *
	     * @param {string} url The url to extract the token from.
	     * @param {string} exclude Exclude a particlaur string from the url, such as a query param or specific substring.
	     * @param {string} delimiter[optional] Delimiter used by OAuth provider to mark the beginning of token response. Defaults to #.
	     * @return {object} Returns the extracted token.
	     */
	    TokenManager.getToken = function (url, exclude, delimiter) {
	        if (url === void 0) { url = location.href; }
	        if (exclude === void 0) { exclude = location.origin; }
	        if (delimiter === void 0) { delimiter = '#'; }
	        if (exclude)
	            url = url.replace(exclude, '');
	        var parts = url.split(delimiter);
	        if (parts.length <= 0)
	            return;
	        var rightPart = parts.length >= 2 ? parts[1] : parts[0];
	        rightPart = rightPart.replace('/', '');
	        if (rightPart.indexOf("?") !== -1) {
	            var queryPart = rightPart.split("?");
	            if (!queryPart || queryPart.length <= 0)
	                return;
	            rightPart = queryPart[1];
	        }
	        return this._extractParams(rightPart);
	    };
	    TokenManager._extractParams = function (segment) {
	        var params = {}, regex = /([^&=]+)=([^&]*)/g, matches;
	        while ((matches = regex.exec(segment)) !== null) {
	            params[decodeURIComponent(matches[1])] = decodeURIComponent(matches[2]);
	        }
	        return params;
	    };
	    return TokenManager;
	}(storage_1.Storage));
	exports.TokenManager = TokenManager;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var storage_1 = __webpack_require__(2);
	// Underscore.js implementation of extend.
	// https://github.com/jashkenas/underscore/blob/master/underscore.js
	var extend = function (obj) {
	    var defaults = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        defaults[_i - 1] = arguments[_i];
	    }
	    var length = arguments.length;
	    if (length < 2 || obj == null)
	        return obj; // if there are no objects to extend then return the current object
	    if (defaults)
	        obj = Object(obj); // create a new object to extend if there are any extensions
	    for (var index = 1; index < length; index++) {
	        var source = arguments[index]; // foreach object
	        if (source == null)
	            continue; // move on if the object is null or undefined
	        var keys = Object.keys(source), // get all the keys
	        l = keys.length; // cache the length
	        for (var i = 0; i < l; i++) {
	            var key = keys[i]; // for each key
	            if (!defaults || obj[key] === void 0)
	                obj[key] = source[key]; // replace values
	        }
	    }
	    return obj;
	};
	exports.DefaultEndpoints = {
	    Google: 'Google',
	    Microsoft: 'Microsoft',
	    Facebook: 'Facebook',
	    AzureAD: 'AzureAD'
	};
	/**
	 * Helper for creating and registering OAuth Endpoints.
	 */
	var EndpointManager = (function (_super) {
	    __extends(EndpointManager, _super);
	    /**
	     * @constructor
	    */
	    function EndpointManager() {
	        _super.call(this, 'OAuth2Endpoints', storage_1.StorageType.LocalStorage);
	    }
	    Object.defineProperty(EndpointManager.prototype, "currentHost", {
	        /**
	         * Gets the current url to be specified as the default redirect url.
	         */
	        get: function () {
	            if (this._currentHost == null) {
	                this._currentHost = window.location.protocol + "//" + window.location.host;
	            }
	            return this._currentHost;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Extends Storage's default add method.
	     * Registers a new OAuth Endpoint.
	     *
	     * @param {string} provider Unique name for the registered OAuth Endpoint.
	     * @param {object} config Valid Endpoint configuration.
	     * @see {@link IEndpoint}.
	     * @return {object} Returns the added endpoint.
	     */
	    EndpointManager.prototype.add = function (provider, config) {
	        if (config.redirectUrl == null) {
	            config.redirectUrl = this.currentHost;
	        }
	        config.provider = provider;
	        return _super.prototype.insert.call(this, provider, config);
	    };
	    /**
	     * Register Google Implicit OAuth.
	     * If overrides is left empty, the default scope is limited to basic profile information.
	     *
	     * @param {string} clientId ClientID for the Google App.
	     * @param {object} config Valid Endpoint configuration to override the defaults.
	     * @return {object} Returns the added endpoint.
	     */
	    EndpointManager.prototype.registerGoogleAuth = function (clientId, overrides) {
	        var defaults = {
	            clientId: clientId,
	            baseUrl: 'https://accounts.google.com',
	            authorizeUrl: '/o/oauth2/v2/auth',
	            resource: 'https://www.googleapis.com',
	            responseType: 'token',
	            scope: 'https://www.googleapis.com/auth/plus.me',
	            state: true
	        };
	        var config = extend({}, overrides, defaults);
	        return this.add(exports.DefaultEndpoints.Google, config);
	    };
	    ;
	    /**
	     * Register Microsoft Implicit OAuth.
	     * If overrides is left empty, the default scope is limited to basic profile information.
	     *
	     * @param {string} clientId ClientID for the Microsoft App.
	     * @param {object} config Valid Endpoint configuration to override the defaults.
	     * @return {object} Returns the added endpoint.
	     */
	    EndpointManager.prototype.registerMicrosoftAuth = function (clientId, overrides) {
	        var defaults = {
	            clientId: clientId,
	            baseUrl: 'https://login.microsoftonline.com/common/oauth2/v2.0',
	            authorizeUrl: '/authorize',
	            responseType: 'token',
	            scope: 'https://graph.microsoft.com/user.read',
	            extraParameters: '&response_mode=fragment',
	            nonce: true,
	            state: true
	        };
	        var config = extend({}, overrides, defaults);
	        this.add(exports.DefaultEndpoints.Microsoft, config);
	    };
	    ;
	    /**
	     * Register Facebook Implicit OAuth.
	     * If overrides is left empty, the default scope is limited to basic profile information.
	     *
	     * @param {string} clientId ClientID for the Facebook App.
	     * @param {object} config Valid Endpoint configuration to override the defaults.
	     * @return {object} Returns the added endpoint.
	     */
	    EndpointManager.prototype.registerFacebookAuth = function (clientId, overrides) {
	        var defaults = {
	            clientId: clientId,
	            baseUrl: 'https://www.facebook.com',
	            authorizeUrl: '/dialog/oauth',
	            resource: 'https://graph.facebook.com',
	            responseType: 'token',
	            scope: 'public_profile',
	            nonce: true,
	            state: true
	        };
	        var config = extend({}, overrides, defaults);
	        this.add(exports.DefaultEndpoints.Facebook, config);
	    };
	    ;
	    /**
	     * Register AzureAD Implicit OAuth.
	     * If overrides is left empty, the default scope is limited to basic profile information.
	     *
	     * @param {string} clientId ClientID for the AzureAD App.
	     * @param {string} tenant Tenant for the AzureAD App.
	     * @param {object} config Valid Endpoint configuration to override the defaults.
	     * @return {object} Returns the added endpoint.
	     */
	    EndpointManager.prototype.registerAzureADAuth = function (clientId, tenant, overrides) {
	        var defaults = {
	            clientId: clientId,
	            baseUrl: "https://login.windows.net/" + tenant,
	            authorizeUrl: '/oauth2/authorize',
	            resource: 'https://graph.microsoft.com',
	            responseType: 'token',
	            nonce: true,
	            state: true
	        };
	        var config = extend({}, overrides, defaults);
	        this.add(exports.DefaultEndpoints.AzureAD, config);
	    };
	    ;
	    /**
	     * Helper to generate the OAuth login url.
	     *
	     * @param {object} config Valid Endpoint configuration.
	     * @return {object} Returns the added endpoint.
	     */
	    EndpointManager.getLoginParams = function (endpointConfig) {
	        var scope = (endpointConfig.scope) ? encodeURIComponent(endpointConfig.scope) : null;
	        var resource = (endpointConfig.resource) ? encodeURIComponent(endpointConfig.resource) : null;
	        var state = endpointConfig.state && EndpointManager._generateCryptoSafeRandom();
	        var nonce = endpointConfig.nonce && EndpointManager._generateCryptoSafeRandom();
	        var urlSegments = [
	            'response_type=' + endpointConfig.responseType,
	            'client_id=' + encodeURIComponent(endpointConfig.clientId),
	            'redirect_uri=' + encodeURIComponent(endpointConfig.redirectUrl)
	        ];
	        if (scope) {
	            urlSegments.push('scope=' + scope);
	        }
	        if (resource) {
	            urlSegments.push('resource=' + resource);
	        }
	        if (state) {
	            urlSegments.push('state=' + state);
	        }
	        if (nonce) {
	            urlSegments.push('nonce=' + nonce);
	        }
	        if (endpointConfig.extraQueryParameters) {
	            urlSegments.push(endpointConfig.extraQueryParameters);
	        }
	        return {
	            url: endpointConfig.baseUrl + endpointConfig.authorizeUrl + '?' + urlSegments.join('&'),
	            state: state
	        };
	    };
	    EndpointManager._generateCryptoSafeRandom = function () {
	        var random = new Uint32Array(1);
	        if ('msCrypto' in window) {
	            window.msCrypto.getRandomValues(random);
	        }
	        else if ('crypto' in window) {
	            window.crypto.getRandomValues(random);
	        }
	        else {
	            throw new Error('The platform doesn\'t support generation of Cryptographically Safe Randoms. Please disable the state flag and try again');
	        }
	        return random[0];
	    };
	    return EndpointManager;
	}(storage_1.Storage));
	exports.EndpointManager = EndpointManager;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
	"use strict";
	var endpoint_manager_1 = __webpack_require__(4);
	var token_manager_1 = __webpack_require__(3);
	/**
	 * Helper for performing Implicit OAuth Authentication with registered endpoints.
	 */
	var Authenticator = (function () {
	    /**
	     * @constructor
	     *
	     * @param endpointManager Depends on an instance of EndpointManager.
	     * @param TokenManager Depends on an instance of TokenManager.
	    */
	    function Authenticator(endpoints, tokens) {
	        this.endpoints = endpoints;
	        this.tokens = tokens;
	        if (endpoints == null)
	            this.endpoints = new endpoint_manager_1.EndpointManager();
	        if (tokens == null)
	            this.tokens = new token_manager_1.TokenManager();
	    }
	    /**
	     * Authenticate based on the given provider.
	     * Either uses DialogAPI or Window Popups based on where its being called from either Add-in or Web.
	     * If the token was cached, the it retrieves the cached token.
	     * If the cached token has expired then the authentication dialog is displayed.
	     *
	     * NOTE: you have to manually check the expires_in or expires_at property to determine
	     * if the token has expired. Not all OAuth providers support refresh token flows.
	     *
	     * @param {string} provider Link to the provider.
	     * @param {boolean} force Force re-authentication.
	     * @return {Promise<IToken|ICode>} Returns a promise of the token or code or error.
	     */
	    Authenticator.prototype.authenticate = function (provider, force) {
	        if (force === void 0) { force = false; }
	        var token = this.tokens.get(provider);
	        if (token != null) {
	            if (token.expires_at != null) {
	                token.expires_at = token.expires_at instanceof Date ? token.expires_at : new Date(token.expires_at);
	                if (token.expires_at.getTime() - new Date().getTime() < 0) {
	                    console.warn("Token for provider: " + provider + " has expired. Re-authenticating...");
	                    force = true;
	                }
	            }
	            if (!force) {
	                return Promise.resolve(token);
	            }
	        }
	        var endpoint = this.endpoints.get(provider);
	        if (endpoint == null) {
	            return Promise.reject({ error: "No such registered endpoint: " + provider + " could be found." });
	        }
	        else {
	            return (Authenticator.hasDialogAPI) ? this._openInDialog(endpoint) : this._openInWindowPopup(endpoint);
	        }
	    };
	    /**
	     * Helper for exchanging the code with a registered Endpoint.
	     * The helper sends a POST request to the given Endpoint's tokenUrl.
	     *
	     * The Endpoint must accept the data JSON input and return an 'access_token'
	     * in the JSON output.
	     *
	     * @param {string} provider Name of the provider.
	     * @param {object} data Data to be sent to the tokenUrl.
	     * @param {object} headers Headers to be sent to the tokenUrl.     *
	     * @return {Promise<IToken>} Returns a promise of the token or error.
	     */
	    Authenticator.prototype.exchangeCodeForToken = function (provider, data, headers) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            var endpoint = _this.endpoints.get(provider);
	            if (endpoint.tokenUrl == null) {
	                console.warn("We couldn't exchange the received code for an access_token.\n                    The value returned is not an access_token.\n                    Please set the tokenUrl property or refer to our docs.");
	                return resolve(data);
	            }
	            var xhr = new XMLHttpRequest();
	            xhr.open('POST', endpoint.tokenUrl);
	            xhr.setRequestHeader('Accept', 'application/json');
	            xhr.setRequestHeader('Content-Type', 'application/json');
	            for (var header in headers) {
	                if (header === 'Accept' || header === 'Content-Type') {
	                    continue;
	                }
	                xhr.setRequestHeader(header, headers[header]);
	            }
	            xhr.onload = function () {
	                try {
	                    if (xhr.status === 200) {
	                        var json = JSON.parse(xhr.responseText);
	                        if ('access_token' in json) {
	                            _this.tokens.add(endpoint.provider, json);
	                            resolve(json);
	                        }
	                        else {
	                            reject(json);
	                        }
	                    }
	                    else if (xhr.status !== 200) {
	                        reject({ error: 'Request failed. ' + xhr.response });
	                    }
	                }
	                catch (e) {
	                    reject({ error: e });
	                }
	            };
	            xhr.send(JSON.stringify(data));
	        });
	    };
	    /**
	     * Check if the currrent url is running inside of a Dialog that contains an access_token or code or error.
	     * If true then it calls messageParent by extracting the token information, thereby closing the dialog.
	     * Otherwise, the caller should proceed with normal initialization of their application.
	     *
	     * @return {boolean}
	     * Returns false if the code is running inside of a dialog without the required information
	     * or is not running inside of a dialog at all.
	     */
	    Authenticator.isAuthDialog = function () {
	        if (!Authenticator.hasDialogAPI) {
	            return false;
	        }
	        else {
	            if (!Authenticator.isTokenUrl(location.href)) {
	                return false;
	            }
	            Office.context.ui.messageParent(JSON.stringify(token_manager_1.TokenManager.getToken()));
	            return true;
	        }
	    };
	    /**
	     * Check if the supplied url has either access_token or code or error.
	     */
	    Authenticator.isTokenUrl = function (url) {
	        var regex = /(access_token|code|error)/gi;
	        return regex.test(url);
	    };
	    Object.defineProperty(Authenticator, "hasDialogAPI", {
	        get: function () {
	            if (Authenticator._hasDialogAPI == null) {
	                try {
	                    Authenticator._hasDialogAPI =
	                        window.hasOwnProperty('Office') &&
	                            ((window.Office.context.requirements &&
	                                window.Office.context.requirements.isSetSupported('DialogAPI', '1.1')) ||
	                                window.hasOwnProperty('Excel') ||
	                                window.hasOwnProperty('Word') ||
	                                window.hasOwnProperty('OneNote'));
	                }
	                catch (e) {
	                    Authenticator._hasDialogAPI = false;
	                }
	            }
	            return Authenticator._hasDialogAPI;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Authenticator.prototype._openInWindowPopup = function (endpoint) {
	        var _this = this;
	        var params = endpoint_manager_1.EndpointManager.getLoginParams(endpoint);
	        var windowSize = this._determineDialogSize().toPixels();
	        var windowFeatures = "width=" + windowSize.width + ",height=" + windowSize.height + ",menubar=no,toolbar=no,location=no,resizable=yes,scrollbars=yes,status=no";
	        var popupWindow = window.open(params.url, endpoint.provider.toUpperCase(), windowFeatures);
	        return new Promise(function (resolve, reject) {
	            try {
	                var POLL_INTERVAL = 400;
	                var interval_1 = setInterval(function () {
	                    try {
	                        if (popupWindow.document.URL.indexOf(endpoint.redirectUrl) !== -1) {
	                            clearInterval(interval_1);
	                            popupWindow.close();
	                            var result = token_manager_1.TokenManager.getToken(popupWindow.document.URL, endpoint.redirectUrl);
	                            if (result == null) {
	                                return reject({ error: 'No access_token or code could be parsed.' });
	                            }
	                            else if (+result.state !== params.state) {
	                                return reject({ error: 'State couldn\'t be verified' });
	                            }
	                            else if ('code' in result) {
	                                return resolve(_this.exchangeCodeForToken(endpoint.provider, result));
	                            }
	                            else if ('access_token' in result) {
	                                _this.tokens.add(endpoint.provider, result);
	                                return resolve(result);
	                            }
	                            else {
	                                return reject(result);
	                            }
	                        }
	                    }
	                    catch (exception) {
	                        if (!popupWindow) {
	                            clearInterval(interval_1);
	                            return reject({ error: exception });
	                        }
	                    }
	                }, POLL_INTERVAL);
	            }
	            catch (exception) {
	                popupWindow.close();
	                return reject({ error: exception });
	            }
	        });
	    };
	    Authenticator.prototype._openInDialog = function (endpoint) {
	        var _this = this;
	        var params = endpoint_manager_1.EndpointManager.getLoginParams(endpoint);
	        var windowSize = this._determineDialogSize();
	        return new Promise(function (resolve, reject) {
	            Office.context.ui.displayDialogAsync(params.url, windowSize, function (result) {
	                var dialog = result.value;
	                if (dialog == null) {
	                    return reject({ error: result.error.message });
	                }
	                dialog.addEventHandler(Office.EventType.DialogMessageReceived, function (args) {
	                    dialog.close();
	                    try {
	                        if (args.message == null || args.message === '') {
	                            return reject({ error: 'No access_token or code could be parsed.' });
	                        }
	                        var json = JSON.parse(args.message);
	                        if (+json.state !== params.state) {
	                            return reject({ error: 'State couldn\'t be verified' });
	                        }
	                        else if ('code' in json) {
	                            return resolve(_this.exchangeCodeForToken(endpoint.provider, json));
	                        }
	                        else if ('access_token' in json) {
	                            _this.tokens.add(endpoint.provider, json);
	                            return resolve(json);
	                        }
	                        else {
	                            return reject(json);
	                        }
	                    }
	                    catch (exception) {
	                        return reject({ error: exception });
	                    }
	                });
	            });
	        });
	    };
	    Authenticator.prototype._determineDialogSize = function () {
	        var screenHeight = window.screen.height;
	        var screenWidth = window.screen.width;
	        if (screenWidth <= 640) {
	            return this._createSizeObject(640, 480, screenWidth, screenHeight);
	        }
	        else if (screenWidth <= 1007) {
	            return this._createSizeObject(1024, 768, screenWidth, screenHeight);
	        }
	        else {
	            return this._createSizeObject(1024, 768, screenWidth, screenHeight);
	        }
	    };
	    Authenticator.prototype._createSizeObject = function (width, height, screenWidth, screenHeight) {
	        var minOrDefault = function (value, isHorizontal) {
	            var dimension = isHorizontal ? screenWidth : screenHeight;
	            return value < dimension ? value : dimension - 30;
	        };
	        var percentage = function (value, isHorizontal) { return isHorizontal ? (value * 100 / screenWidth) : (value * 100 / screenHeight); };
	        return {
	            width: percentage(minOrDefault(width, true), true),
	            height: percentage(minOrDefault(height, false), false),
	            toPixels: function () {
	                return {
	                    width: minOrDefault(width, true),
	                    height: minOrDefault(height, false)
	                };
	            }
	        };
	    };
	    return Authenticator;
	}());
	exports.Authenticator = Authenticator;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=office.helpers.js.map