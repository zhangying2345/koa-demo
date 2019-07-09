//test
var http=require("http");
var fs=require("fs");


const url = "http://news.baidu.com/"; //网址

var strHtml="";
var results=[];
http.get(url, function(res){
    res.on("data",function(chunk){
        strHtml+=chunk;
    })
    res.on("end",function(){

        console.log(strHtml);
        var $=cheerio.load(strHtml);

        $("#channel-all li").each((iten,i)=>{
            console.log($(i).text());
        })
    });
})