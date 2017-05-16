# ptz-math
================
[![Build Status](https://travis-ci.org/angeloocana/ptz-math.svg)](https://travis-ci.org/angeloocana/ptz-math)
[![NPM](https://img.shields.io/npm/v/ptz-math.svg)](https://www.npmjs.com/package/ptz-math)
[![codecov.io](http://codecov.io/github/angeloocana/ptz-math/coverage.svg)](http://codecov.io/github/angeloocana/ptz-math)
[![Dependency Status](https://gemnasium.com/angeloocana/ptz-math.svg)](https://gemnasium.com/angeloocana/ptz-math)
[![bitHound Score](https://www.bithound.io/github/gotwarlost/istanbul/badges/score.svg)](https://www.bithound.io/github/angeloocana/ptz-math)
![License](https://img.shields.io/npm/l/ptz-math.svg)

> ptz-math is a javascript library for math operations
>
> Be welcome to learn, help and play!!!

## Install

Install with npm:

```bash
    $ npm install ptz-math --save
```

or clone from github:

```bash
    $ git clone https://github.com/angeloocana/ptz-math.git
```

## Setup

```bash
    $ npm install 
    $ typings install
```

*Add to your typings/index.d.ts

```ts
/// <reference path="../node_modules/ptz-math/src/typings/index.d.ts" />
```

## Test

```bash
    $ npm test
``` 


## Usage

```js

import {random} from "ptz-math";

let min = 3;
let max = 7;
let randomNumber = random(min, max);

console.log(randomNumber);

```


