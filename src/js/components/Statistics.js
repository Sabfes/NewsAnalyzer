import {FROM, MONTHS, WEEKDAYS} from '../utils/Date';

export default class Statistics {
    constructor(getData, question, title, weekNews, subtitle, month, days, graph, quantity) {
        this.dataArr = getData();
        this.questions = question();
        this.title = title;
        this.weekNews = weekNews;
        this.subtitle = subtitle;
        this.month = month;
        this.days = days;
        this.graph = graph;
        this.quantity = quantity;

        this.makeInfo();
        this.articlesPerDay();
    }
    // Отрисовка информаций в титуле, описании и тд
    makeInfo() {
        this.title.innerText = `Вы спросили: «${this.questions}»`;
        this.weekNews.innerText = `Новостей за неделю: ${this.dataArr.articles.length}`;
        this.subtitle.innerText = `Упоминаний в загаловках: ${this.countTitleResults()}`;
        this.quantity.innerText = `кол-во упоминаний: ${this.dataArr.articles.length}`;
        const month = new Date(FROM).getMonth();
        this.month.innerText = `${MONTHS[month]}`;
    }
    //Кол-во упоминаний вопроса в заголовках
    countTitleResults() {
        let count = 0;
        this.dataArr.articles.forEach(item => {
            if (item.title.toLowerCase().includes(this.questions.toLowerCase())) {
                count++;
            }
        });
        return count;
    }
    // Подсчет кол-ва упоминайний в день
    articlesPerDay() {
        const articlesPerDay = {};
        const weeksDay ={};
        this.dataArr.articles.forEach(item => {
            const date = new Date(item.publishedAt.substring(0, 10)).getDate();
            const day = new Date(item.publishedAt.substring(0, 10)).getDay();
            if (date in articlesPerDay) {
                articlesPerDay[date]++;
                weeksDay[date] = day;
            } else {
                articlesPerDay[date] = 1;
            }
        });
        this.graphDrawing(articlesPerDay,weeksDay);
    }
    // Отрисовка графиков и их значений
    graphDrawing(articlesPerDay,weeksDay) {
        for (let i=0; i<7; i++) {
            this.days.children[i].innerText = `${Object.keys(articlesPerDay)[i]}, ${WEEKDAYS[Object.values(weeksDay)[i]]}`;
            this.graph.children[i].style.width = `${Object.values(articlesPerDay)[i]}%`;
            this.graph.children[i].innerText = `${Object.values(articlesPerDay)[i]}`
        }
    }
}
