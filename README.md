# Guid Generator

Create unique Guids.

## Usage

For client Javascript

```javascript
import { Guid } from "../src/guid";

Guid.NewGuid();
// 1q6G3w1U-8F0D-8p9R-7m6m-5b5B7G7B9M9S
```

For node

```javascript
let { Guid } = require("../src/guid");

Guid.NewGuid();
// 1a6O3T1V-8f0V-8n8W-8y3V-9b0E1R9Y0N7m
```

## Features

- Impossible duplicate, because it's works based on milliseconds
- It usually executed between 0.1ms and 0.5ms
- Support node.js and client side

## License

[MIT License](https://github.com/YahyaAltintop/guid-class/blob/master/LICENSE)
