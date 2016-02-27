/* 
* @Author: zyc
* @Date:   2016-02-24 16:10:29
* @Last Modified by:   zyc
* @Last Modified time: 2016-02-28 02:53:20
*/
'use strict'

const fetchUrl = require('fetch').fetchUrl

const url = 'https://api.douban.com/v2/book/'

module.exports = class {
  get (id) {
    return new Promise((resolve, reject) => {
      fetchUrl(url + '/' + id, (err, res, buf) => {
        if (err) reject(err)
        else resolve(JSON.parse(buf))
      })
    })
  }

  search (query) {
    return new Promise((resolve, reject) => {
      fetchUrl(url + 'search?q=' + encodeURI(query), (err, res, buf) => {
        if (err) reject(err)
        else resolve(JSON.parse(buf).books)
      })
    })
  }

  findOne (query) {
    return new Promise((resolve, reject) => {
      this.search(query).then(books => {
        if (!books.length) resolve()
        this.get(books[0].id).then(book => resolve(book)).catch(err => reject(err))
      }).catch(err => reject(err))
    })
  }
}