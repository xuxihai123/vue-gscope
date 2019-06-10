# vue-scope

To start:

```bash
$ npm install
```

To build your plugin:

```bash
$ npm run build
```

usage

```js
import VueScope from "vue-scope";

const states = {
	app: {
		activePanel: false
	},
	user: null
};
Vue.use(VueScope, states);

// usage in component
console.log(this.$scope.user);
```

```xml
<template>
	<div class="userinfo">
		{{this.$scope.user.name}}
	</div>
</template>
```
