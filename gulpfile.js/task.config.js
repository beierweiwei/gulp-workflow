module.exports = {
	src: './src',
	dist: './dist',
	html: {
		dist: 'html',
		src: 'html'
	},
	css: {
		src: 'css',
		dist: 'css'
	},
	javascript: {
		src: 'js',
		dist: 'js',
		vendor: 'static/vendor'
	},
	images: {
		src: 'images',
		dist: 'images'
	},
	font: {
		src: 'font',
		dist: 'font'
	},
	static: {
		src: 'static',
		dist: 'static',
		able: true,
	},
	server: {
		server: {
			baseDir: './'
		},
		startPath: 'dist/html',
		albe: true,
	},
	md: {
		src: 'html/md',
		dist: 'html',
		able: true,
		tplSrc: 'html/layout.html'
	},
	ftp: {
		remote: '',
		host: '',
		user: '',
		password: '',
		able: false,
	}
}