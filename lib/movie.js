/* 
* @Author: zyc
* @Date:   2016-02-24 16:10:50
* @Last Modified by:   zyc
* @Last Modified time: 2016-02-24 16:24:19
*/
'use strict'

const request = require('sync-request')

const url = 'https://api.douban.com/v2/movie/'

module.exports = class {
  get (id) {
    const res = request('GET', url + 'subject/' + id)
    const body = JSON.parse(res.body.toString())
    return body
  }

  search (query) {
    const res = request('GET', url + 'search?q=' + encodeURI(query))
    const body = JSON.parse(res.body.toString())
    return body.subjects
  }

  findOne (query) {
    const movies = this.search(query)
    for (let movie of movies) {
      const subject = this.get(movie.id)
      if (subject) return subject
    }
    return
  }
}