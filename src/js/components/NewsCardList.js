class NewsCardList {
    constructor(container, getNews, createCard, resBtn) {
        this.container = container;
        this.getNews = getNews;
        this.createCard = createCard;
        this.resBtn = resBtn;
        this.start = 0;
        this.end = 3;
    }
    // Создание массива кард
    createCards() {
        //Удаление старых карточек
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
        //Создание массива карточек
        this.cardsArr = this.getNews().articles.map( card => {
            return this.createCard(card.source.name, card.title, card.publishedAt, card.description, card.urlToImage, card.url);
        });
        this.renderCards(3);
    }
    // Вывод кард при нажитии на кнопку (по 3 штуки)
    renderCards(step) {
        //Скрытие кнопки , если карточки закончились
        if (this.end >= this.cardsArr.length - step) {
            this.hideBtn();
        }
        this.end += step;
        this.start += step;
        //добавление по 3
        this.cardsArr.forEach( (item,index) => {
            if (index >= this.start && index < this.end ) {
                this.container.insertBefore(item, this.container.firCount);
            }
        })
    }
    // Скрыть кнопку показать еще
    hideBtn() {
        this.resBtn.classList.remove('result__button_active');
    }
}

export default NewsCardList;