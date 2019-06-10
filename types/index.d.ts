import _Vue, { PluginFunction } from "vue";
import "./vue";
export declare class Scope<T> {
	constructor(states: any);
}

export declare function install(Vue: typeof _Vue): void;

declare const _default: {
	Scope: typeof Scope;
	install: typeof install;
};
export default _default;
