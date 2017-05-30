# ptz-math

[![Build Status](https://travis-ci.org/angeloocana/ptz-math.svg)](https://travis-ci.org/angeloocana/ptz-math)
[![NPM](https://img.shields.io/npm/v/ptz-math.svg)](https://www.npmjs.com/package/ptz-math)
[![codecov.io](http://codecov.io/github/angeloocana/ptz-math/coverage.svg)](http://codecov.io/github/angeloocana/ptz-math)
[![Dependency Status](https://gemnasium.com/angeloocana/ptz-math.svg)](https://gemnasium.com/angeloocana/ptz-math)
[![bitHound Score](https://www.bithound.io/github/gotwarlost/istanbul/badges/score.svg)](https://www.bithound.io/github/angeloocana/ptz-math)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Translations
[pt-br](https://github.com/angeloocana/ptz-math/blob/master/README.pt-br.md)
[en-us](https://github.com/angeloocana/ptz-math/blob/master/README.md)

> ptz-math is a javascript library for math operations
>
> Be welcome to learn, help and play!!!

## Docs
[Full docs](https://angeloocana.github.io/ptz-math/)

## Use

### Install
```
    npm install --save ptz-math
```

### How to use
Get random number between 2 and 8:
```js
    import { random } from ptz-math;

    const min = 2;
    const max = 8;
    const randomNumber = random(min, max);
```

Get random item from array:
```js
    import { getRandomItem } from ptz-math;

    const list = ['a', 'b', 'c', 'd'];
    const randomItem = getRandomItem(list);
```

## Contribute

### NPM Global packages
```
    npm install -g ts-node babel-cli
```

### Setup
```
    npm install   
```

### Test
```
    npm test
```
