import { Container } from "inversify";
import { TYPES } from "./types";
import { NewsInterface } from "./interface";
import { News } from "../src/news/news";

const myContainer = new Container();
myContainer.bind<NewsInterface>(TYPES.NewsInterface).to(News);

export { myContainer };