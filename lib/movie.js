/* 
* @Author: zyc
* @Date:   2016-02-24 16:10:50
* @Last Modified by:   zyc
* @Last Modified time: 2016-02-28 02:49:10
*/
'use strict'

const fetchUrl = require('fetch').fetchUrl

const url = 'https://api.douban.com/v2/movie/'

module.exports = class {
  get (id) {
    return new Promise((resolve, reject) => {
      fetchUrl(url + 'subject/' + id, (err, res, buf) => {
        if (err) reject(err)
        else resolve(JSON.parse(buf))
      })
    })
  }

  search (query) {
    return new Promise((resolve, reject) => {
      fetchUrl(url + 'search?q=' + encodeURI(query), (err, res, buf) => {
        if (err) reject(err)
        else resolve(JSON.parse(buf).subjects)
      })
    })
  }

  findOne (query) {
    return new Promise((resolve, reject) => {
      this.search(query).then(movies => {
        if (!movies.length) resolve()
        this.get(movies[0].id).then(movie => resolve(movie)).catch(err => reject(err))
      }).catch(err => reject(err))
    })
  }
}