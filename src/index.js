const proxyMethod = (target, method, source) => {
	Object.defineProperty(target, method, {
		enumerable: false,
		writable: false,
		configurable: false,
		value: source[method].bind(source)
	});
};

const VueScope = {
	install(Vue, states = {}) {
		const storeInstance = new Vue({ data: states });
		const $data = storeInstance.$data;
		VueScope.$scope = Vue.prototype.$scope = $data;
		proxyMethod(Vue.prototype.$scope, "$on", storeInstance);
		proxyMethod(Vue.prototype.$scope, "$once", storeInstance);
		proxyMethod(Vue.prototype.$scope, "$emit", storeInstance);
		proxyMethod(Vue.prototype.$scope, "$off", storeInstance);
	}
};

VueScope.version = VERSION;

export default VueScope;
if (typeof window !== "undefined" && window.Vue) {
	window.Vue.use(VueScope);
}
