//test
var http=require("http");
var fs=require("fs");
const cheerio = require('cheerio');
const fetch = require('node-fetch');

export class News {

    getNews() {
        const url = "http://news.baidu.com/"; //网址
        var strHtml="";
        var results=[];
        
        return fetch(url)
        // .then(res => res.json())
        .then(res => res.text())
        .then(strHtml => {
            var $=cheerio.load(strHtml);
            $("#channel-all li").each((iten,i)=>{
                console.log($(i).text());
                results.push($(i).text());
            });
            return results;
        })
        
        // .then(body => console.log(body));
        // http.get(url, res => {
        //     res.on("data",function(chunk){
        //         strHtml+=chunk;
        //     })
        //     res.on("end",function(){
        
        //         console.log(strHtml);
        //         var $=cheerio.load(strHtml);
        
        //         $("#channel-all li").each((iten,i)=>{
        //             console.log($(i).text());
        //             results.push($(i).text());
        //         })
        //     });
        // })
    }
}
