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
```
npm install vue-gscope --save-dev
```

```js
import VueScope from "vue-gscope";

const states = {
	app: {
		activePanel: false
	},
	user: {
		name: "xxx"
	}
};

const scope = new VueScope.Scope(states);

Vue.use(VueScope, scope);

// usage in component
console.log(this.$scope.user);
```

```xml
<template>
	<div class="userinfo">
		{{$scope.user.name}}
	</div>
</template>
```
