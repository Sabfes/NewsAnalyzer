import '../style.css'
import Statistics from "../js/components/Statistics";
import DataStorage from "../js/modules/DataStorage";
const dataStorage = new DataStorage();

const statistics = new Statistics(
    dataStorage.getData,
    dataStorage.getQuestion,
    document.querySelector('.info__title'),
    document.querySelector('.info__weeks-news'),
    document.querySelector('.info__weeks-news_title'),
    document.querySelector('.analytics__date-month'),
    document.querySelector('.analytics__days'),
    document.querySelector('.analytics__chart'),
    document.querySelector('.analytics__quantity'),
);
