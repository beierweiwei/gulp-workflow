var instances = [];
/**
 * [CountDonw description]
 * @auto  a.Wang
 * @date  2017-07-04
 * @param {[type]}   finaTime   [description]
 * @param {[type]}   formateTpl [default: %D %H %M %S']
 */
function CountDonw(finaTime, formateTpl){

	this.formateTpl = formateTpl || '%d 天 %h 小时 %M  分 %S 秒';
	finaTime = this._parseTime(finaTime);
	if(!finaTime) return;
	this.mathcs = null;
	this.finaTime = finaTime;
	this.tplObj = this._parseFormate(this.formateTpl);
	this.offset = this._getOffset(this.finaTime);
	this.output = this._formateTime(this.offset, this.formateTpl); 
	console.log(this.output);
}
CountDonw.prototype = {
	_parseFormate(formateTpl) {
		let tplObj = {};
		let matchs = this.mathcs = formateTpl.toString().match(/((%\w+))/ig),
			i = 0,
			length = matchs.length;
		for(; i < length; i++){
			let key = matchs[i].match(/%(\w+)/)[1];
			tplObj[this._tplMap[key]] = key;
		};
		return tplObj;
	},
	_tplMap: {
		m: 'minue',
		M: 'minue',
		y: 'year',
		Y: 'year',
		D: 'day',
		d: 'day',
		h: 'hour',
		H: 'hour',
		s: 'second',
		S: 'second'

	},
 	_formateTime(offset, formateTpl){
 		let mathcs = this.mathcs;
 		let tpl = this._tplMap;
 
 		for(let i = 0; i < mathcs.length; i++ ){
 			formateTpl = formateTpl.replace(new RegExp(mathcs[i],'g'), offset[tpl[mathcs[i].replace(/^%/,'')]] )
 		}
 		return formateTpl;
 		
 	},		
 	_parseTime(finaTime){
 		finaTime = new Date(finaTime).getTime();
 		return finaTime ? finaTime : console.log('CountDonw arguments finaTime is not Date type');
 	},
  _upDate() {
  	this.offset = this._getOffset(this.finaTime);
  	this.offset = this._getOffset(this.finaTime);
		this.output = this._formateTime(this.offset, this.formateTpl); 
		console.log(this.output)
  },
  _getOffset(finatime) {
  	let now = new Date().getTime();
  	let offset = finatime - now ;
  	offset = offset <= 0 ? 0 : offset; 
  	return this._parseOffset(offset);

  },
  _parseOffset(offset){
  	if(!offset) return;
  	let tpl = this.tplObj;
  	offset = offset / 1000;
  	let day = Math.floor(offset/(24 * 60 * 60));
  	offset = (tpl.days || tpl.day) ? offset % (24 * 60 * 60) : offset;
  	let hour = Math.floor(offset /(60 * 60));
  	offset = (tpl.minues || tpl.minue) ? offset % (60 * 60) : offset;
  	let minue = Math.floor(offset % (24 * 60 * 60)%(60 * 60)/60);
  	let second = Math.floor(offset);

  	let result = {
  		day: day,
  		hour: hour,
  		minue: minue,
  		second: second,
  	}

  	for( i in tpl){
  		result[i] = tpl[i] !== i.substring(0,1) ? this._paddingLeft(result[i]) : result[i]
  	}
  	return result;
  },
  _paddingLeft(val) {
  	val = Number(val);
  	if(val !== 0 && !val) return;
  	if(val < 10) {
  		val = '0' + String(val) 
  	}
  	return val;
  },
  start() {
  	var _this = this;
  	var i = 0;
  	window.setInterval(function(){
  		_this._upDate();
  	}, 1000);
  }
}

var cut = new CountDonw(new Date().getTime() + 6000);
cut.start();