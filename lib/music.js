/* 
* @Author: zyc
* @Date:   2016-02-24 16:11:04
* @Last Modified by:   zyc
* @Last Modified time: 2016-02-24 16:28:44
*/
'use strict'

const request = require('sync-request')

const url = 'https://api.douban.com/v2/music/'

module.exports = class {
  get (id) {
    const res = request('GET', url + '/' + id)
    const body = JSON.parse(res.body.toString())
    return body
  }

  search (query) {
    const res = request('GET', url + 'search?q=' + encodeURI(query))
    const body = JSON.parse(res.body.toString())
    return body.musics
  }

  findOne (query) {
    const musics = this.search(query)
    for (let music of musics) {
      const subject = this.get(music.id)
      if (subject) return subject
    }
    return
  }
}