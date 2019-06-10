import Vue from "vue";

const proxyMethod = (target, method, source) => {
	Object.defineProperty(target, method, {
		enumerable: false,
		writable: false,
		configurable: false,
		value: source[method].bind(source)
	});
};

export const Scope = states => {
	const scopeInstance = new Vue({ data: states });
	const scope = scopeInstance.$data;
	proxyMethod(scope, "$on", scopeInstance);
	proxyMethod(scope, "$once", scopeInstance);
	proxyMethod(scope, "$emit", scopeInstance);
	proxyMethod(scope, "$off", scopeInstance);
	return scope;
};
const VueScope = {
	install(Vue, scope = {}) {
		Vue.prototype.$scope = scope;
	}
};

VueScope.version = VERSION;
VueScope.Scope = Scope;

export default VueScope;
if (typeof window !== "undefined" && window.Vue) {
	window.Vue.use(VueScope);
}
