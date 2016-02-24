/* 
* @Author: zyc
* @Date:   2016-02-18 14:39:14
* @Last Modified by:   zyc
* @Last Modified time: 2016-02-24 16:28:09
*/
'use strict'

const client = require('./index')

const book = new client.Book()
// console.log(book.findOne('熊猫'))

const movie = new client.Movie()
// console.log(movie.findOne('熊猫'))

const music = new client.Music()
console.log(music.findOne('熊猫'))