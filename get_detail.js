var osmosis = require('osmosis')

var url = 'http://www.bongda.com.vn/chau-ngoc-quang-bau-vat-moi-o-hagl-d388583.html'
osmosis
.get(url)
.set({
   	"title": "h1 > a",
	"url": "h1 > a @href",
	"datetime": ".time_comment",
	"brief": ".sapo_detail",
	"detail": ".exp_content",
	"author": ".f14"
})
.find('meta[property="og:image"]')
.set({
    "thumb": "@content"
})
.data(function (data) {
   // get data of all value in set
   console.log(data)
})
.log(console.log)
.error(console.log)
.debug(console.log)
