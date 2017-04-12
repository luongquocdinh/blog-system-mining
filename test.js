var osmosis = require('osmosis');
var fs = require('fs')
osmosis
.get('https://www.facebook.com/login')
.submit("#login_form", {'email': 'luongquocdinh.95@gmail.com', 'pass':'jihanaviqdinh1995'}) // khong co xac nhan password cap 2
.then(function(context, data) {
	osmosis.config('cookies', context.cookies)
	osmosis.headers(context.request.headers)
})
.then(function (context, data) {
	osmosis
		.get('https://www.facebook.com/Arsenal')
		.then(function (context, data) {
			fs.writeFile('test.txt', context.get('body').toString(), function (err) {
				if (err) {
					console.log(err)
				}

				console.log('Save file successful')
			})
		})
		.log(console.log)
		.error(console.log)
		.debug(console.log)
})
