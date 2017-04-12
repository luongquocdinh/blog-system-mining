var osmosis = require('osmosis')

var url = 'http://www.bongda.com.vn/tin-moi-nhat/'
osmosis
.get(url)
.find('h2 > a')
.set({
   'url' : '@href'
})
.data(function (data) {
   // get data of all value in set
   console.log(data)
})
.log(console.log)
.error(console.log)
.debug(console.log)
