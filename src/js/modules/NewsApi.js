import {FROM, TO} from "../utils/Date";

export default class NewsApi {
    constructor(apiKey) {
        this.API_KEY = apiKey;
    }
    getNews(question) {
        return fetch(`https://praktikum.tk/news/v2/everything?q=${question}&apiKey=${this.API_KEY}&from=${FROM}&to=${TO}&pageSize=100`)
            .then( res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
    };
}
