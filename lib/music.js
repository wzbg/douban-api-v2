/* 
* @Author: zyc
* @Date:   2016-02-24 16:11:04
* @Last Modified by:   zyc
* @Last Modified time: 2016-02-28 02:54:56
*/
'use strict'

const fetchUrl = require('fetch').fetchUrl

const url = 'https://api.douban.com/v2/music/'

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
        else resolve(JSON.parse(buf).musics)
      })
    })
  }

  findOne (query) {
    return new Promise((resolve, reject) => {
      this.search(query).then(musics => {
        if (!musics.length) resolve()
        this.get(musics[0].id).then(music => resolve(musics)).catch(err => reject(err))
      }).catch(err => reject(err))
    })
  }
}