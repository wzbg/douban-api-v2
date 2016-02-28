/* 
* @Author: zyc
* @Date:   2016-02-18 14:39:14
* @Last Modified by:   zyc
* @Last Modified time: 2016-02-28 13:17:41
*/
'use strict'

const client = require('./index')

// const book = new client.Book()
// book.findOne('熊猫')
// .then(res => console.log(res))
// .catch(err => console.error(err))

const movie = new client.Movie()
movie.findOne('熊猫')
.then(res => console.log(res))
.catch(err => console.error(err))

// const music = new client.Music()
// music.findOne('熊猫')
// .then(res => console.log(res))
// .catch(err => console.error(err))