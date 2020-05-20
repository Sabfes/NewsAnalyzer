import API_KEY from "../constants/constants";
const from = '2020-04-10';
const to = '2020-05-15';


class NewsApi {
    getNews(question) {
        //
        // ПЕРЕДЕЛАТЬ ЮРЛ  и КОНСТАНТЫ , ЧТОБ ПЕРЕДАВАЛИСЬ ЧЕРЕЗ КОНСТРУКТОР и ФЕТЧ ШЕЛ ОТ КОНСТАНТЫ А НЕ ОТ АДРЕСА
        //
        return fetch(`http://newsapi.org/v2/everything?q=${question}&apiKey=${API_KEY}&from${from}&to${to}&pageSize=100`)
            .then( res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
            .catch( error => {
                console.log(error);
            })
    };
}
export default NewsApi;