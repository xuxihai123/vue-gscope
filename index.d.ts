import { PluginFunction } from "vue";

declare module "vue/types/vue" {
	// 3. 声明为 Vue 补充的东西
	interface Vue {
		$scope: any;
	}
}

export const install: PluginFunction<{}>;
