import { PluginFunction } from "vue";

declare module "vue/types/vue" {
	// 3. 声明为 Vue 补充的东西
	interface Vue {
		$scope: any;
	}
}

export declare class Scope {}

export declare function install(Vue: typeof _Vue): void;

declare const _default: {
	Scope: typeof Scope;
	install: typeof install;
};
export default _default;
