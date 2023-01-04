<div align="center">
  <img src="https://user-images.githubusercontent.com/36193643/206005971-aa99f0c8-01cb-4495-9ab8-dbf5309628b8.png" />
</div>

<h1 align=center>matija-utils</h1>
<p align=center>My opinionated list of JavaScript utilities.</p>

Install with your package manager of choice:

```sh
$ yarn add matija-utils
$ npm i matija-utils
```

Check out the documentation [here](https://matija-utils-docs.vercel.app/).

Import the functions you need:

```typescript
import { range, groupBy } from "matija-utils";

for (const n of range(0, 5)) {
  console.log(n); // 0, 1, 2, 3, 4
}

const x = [
  {
    name: "Ivan",
    company: "Google"
  },
  {
    name: "Kenny",
    company: "Google"
  },
  {
    name: "Joseph",
    company: "Amazon"
  }
];

groupBy(x, "company"); // {"Google":[{"name":"Ivan","company":"Google"},{"name":"Kenny","company":"Google"}],"Amazon":[{"name":"Joseph","company":"Amazon"}]}
```

And that's all there is to it!

## 🚀 Features 

- Small package size
- A multitude of useful utilities
- Fully documented and typed
