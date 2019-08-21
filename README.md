<img alt="Axios Client" src="https://github.com/Paraboly/axios-client/blob/master/assets/logo.png" width="1050"/>

[![npm version](https://img.shields.io/npm/v/@paraboly/axios-client.svg?style=for-the-badge)](https://www.npmjs.com/package/@paraboly/axios-client)
[![npm](https://img.shields.io/npm/dt/@paraboly/axios-client.svg?style=for-the-badge)](https://www.npmjs.org/package/@paraboly/axios-client)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)


## Installation

Add the dependency:

### Pure React Native:

```ruby
npm i @paraboly/axios-client
```

# Usage

## AppleCard Usage

```js
import { Api } from "@paraboly/axios-client";
// Setup One Time
Api.setup({
  baseUrl: "your-base-url"
});
// Use it anywhere with automatic handlers
Api.get("/your-path")
  .then(res => console.log("res:", res))
  .catch(err => console.log("error: ", err));
```

## Author

paraboly, kurayogun@gmail.com

## License

Paraboly Axios-Client Library is available under the MIT license. See the LICENSE file for more info.
