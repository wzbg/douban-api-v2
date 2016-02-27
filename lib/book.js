/* 
* @Author: zyc
* @Date:   2016-02-24 16:10:29
* @Last Modified by:   zyc
* @Last Modified time: 2016-02-28 01:14:21
*/
'use strict'

const request = require('sync-request')

const url = 'https://api.douban.com/v2/book/'

module.exports = class {
  get (id) {
    const res = request('GET', url + '/' + id)
    const body = JSON.parse(res.body.toString())
    return body
  }

  search (query) {
    const res = request('GET', url + 'search?q=' + encodeURI(query))
    const body = JSON.parse(res.body.toString())
    return body.books
  }

  findOne (query) {
    try {
      const books = this.search(query)
      for (let book of books) {
        const subject = this.get(book.id)
        if (subject) return subject
      }
    } catch (err) {
      // console.error(err)
    }
  }
}