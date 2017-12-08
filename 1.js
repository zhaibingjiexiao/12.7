var express = require('express')
var jade = require('jade')
var txt = require('./txt.js')

var app = express()
var user = express.Router()
var pass = express.Router()
var tel = express.Router()
var texts = express.Router()
app.use('/user',user)
app.use('/pass',pass)
app.use('/tel',tel)
app.use('/texts',texts)

user.use('',function(req,res){
	var usd = req.query.usd
	 var newArr = []
	 if(usd == undefined){
	 	newArr=txt.user.slice(0,3)
	 	usd = 0
	 }else{
	 	newArr=txt.user.slice(usd*3,usd*3+3)
	 }
	 var num = Math.ceil(txt.user.length/3)	
	var str = jade.renderFile('./1.jade',{pretty:true,titles:'新闻',txtArr:newArr,nums:num,txtUsd:usd,urld:'user'})
	res.send(str)
})
pass.use('',function(req,res){
	var usd = req.query.usd
	 var newArr = []
	 if(usd == undefined){
	 	newArr=txt.pass.slice(0,3)
	 	usd = 0
	 }else{
	 	newArr=txt.pass.slice(usd*3,usd*3+3)
	 }
	 var num = Math.ceil(txt.pass.length/3)	
	var str = jade.renderFile('./1.jade',{pretty:true,titles:'简讯',txtArr:newArr,nums:num,txtUsd:usd,urld:'pass'})
	res.send(str)
})
tel.use('',function(req,res){
	var usd = req.query.usd
	 var newArr = []
	 if(usd == undefined){
	 	newArr=txt.tel.slice(0,3)
	 	usd = 0
	 }else{
	 	newArr=txt.tel.slice(usd*3,usd*3+3)
	 }
	 var num = Math.ceil(txt.tel.length/3)	
	var str = jade.renderFile('./1.jade',{pretty:true,titles:'信息',txtArr:newArr,nums:num,txtUsd:usd,urld:'tel'})
	res.send(str)
})

var textstr = "<p>&nbsp;&nbsp;12月5日，国家主席习近平在北京钓鱼台国宾馆会见加拿大总理特鲁多。 新华社记者 谢环驰 摄新华社北京12月5日电（记者白洁）国家主席习近平5日在钓鱼台国宾馆会见加拿大总理特鲁多</p><p>&nbsp;&nbsp;习近平欢迎特鲁多再次访华。习近平指出，中加两国领导人保持密切交往，对两国关系发展起到了重要引领作用。中加两国各有优势，互补性强，合作潜力巨大。希望双方拓宽思路，采取积极措施，推动两国关系取得更多实实在在的成果。</p><p>&nbsp;&nbsp;习近平强调，增进政治互信是国与国关系稳定发展的前提。一个国家的发展道路，只能由这个国家的人民自己决定。中加政治制度不同，但双方完全可以相互尊重，求同存异，加强合作，扩大交流，给两国人民带来更大利益。</p>"
app.use('/txt',function(req,res){
	var uid = req.query.txt
	var str = jade.renderFile('./2.jade',{pretty:true,titlename:'习近平会见加拿大总理特鲁多',bookName:'来源: 新华网',times:'2017-12-05 20:24:12',texts:textstr})
	res.send(str)
})
app.use(express.static('./img'))
app.listen(8000,function(){
	console.log('ok')
})
