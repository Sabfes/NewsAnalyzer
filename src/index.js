import './style.css';
import NewsApi from "./js/modules/NewsApi";
import SearchInput from "./js/components/SearchInput";
import NewsCardList from "./js/components/NewsCardList";
import DataStorage from "./js/modules/DataStorage";
import NewsCard from "./js/components/NewsCard";


const newsApi = new NewsApi();
const localStorage = new DataStorage();
const card = new NewsCard();
const cardList = new NewsCardList(
    document.querySelector('.result__container'),
    localStorage.getData.bind(localStorage),
    card.createCard.bind(card),
    document.querySelector('.result__button')
);
const searchInput = new SearchInput(
    document.querySelector('.search__input-container'),
    newsApi.getNews.bind(newsApi),
    cardList.createCards.bind(cardList),
    document.querySelector('.search-err'),
    document.querySelector('.result'),
    document.querySelector('.preloader'),
    document.querySelector('.ethernet-err')
);
searchInput.submit();
document.querySelector('.result__button').addEventListener('click', ()=>{cardList.renderCards(3)});




