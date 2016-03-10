# douban-api-v2

豆瓣Api V2

## Install

Install using npm:
```sh
    $ npm install douban-api-v2
```

## Usage

```javascript
const client = require('douban-api-v2')

const book = new client.Book()
book.findOne('熊猫')
.then(res => console.log(res))
.catch(err => console.error(err))

const movie = new client.Movie()
movie.findOne('熊猫')
.then(res => console.log(res))
.catch(err => console.error(err))

const music = new client.Music()
music.findOne('熊猫')
.then(res => console.log(res))
.catch(err => console.error(err))
```

## Test

Run tests:
```sh
    $ npm test
```

Tested with node.js v4.0+

## License
The MIT License (MIT)

Copyright (c) 2016