var http = require("http");
var fs = require("fs");
const cheerio = require('cheerio');
const fetch = require('node-fetch');

import { injectable, inject } from "inversify";
import "reflect-metadata";
import { NewsInterface } from "../../ioc/interface";

// Trailing Spaces
@injectable()
export class News implements NewsInterface {
  private url: string;
  constructor() {
    this.url = 'http://news.baidu.com/';
  }
  getNews() {
    const results = [];
    const url = 'http://news.baidu.com/';
    return fetch(url)
      .then(res => res.text())
      .then(strHtml => {
        var $ = cheerio.load(strHtml);
        $("#channel-all li").each((i, item) => {
          console.log($(item).text());
          results.push($(item).text());
        });
        return results;
      })
  }

  breakingNews() {
    const results: any[] = [];
    const url = 'http://news.baidu.com/';
    return fetch(url)
      .then(res => res.text())
      .then(strHtml => {
        var $ = cheerio.load(strHtml);
        $(".hotnews li").each((i, item) => {
          let tempHref = $(item).find('a').attr('href');
          let context = $(item).text();
          context = context.replace(/\n/g, '');
          results.push(
            {
            info: context,
            url: tempHref
          });
        });
        return results;
      })
  }

  carousel() {
    const results: any[] = [];
    const url = 'http://news.baidu.com/';
    
  }
}
