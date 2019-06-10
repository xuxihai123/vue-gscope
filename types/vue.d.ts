/**
 * Extends interfaces in Vue.js
 */

import Vue, { ComponentOptions } from "vue";

declare module "vue/types/vue" {
	interface Vue {
		$scope: any;
	}
}
