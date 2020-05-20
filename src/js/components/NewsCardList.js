class NewsCardList {
    constructor(container,getNews, createCard) {
        this.container = container;
        this.getNews = getNews;
        this.createCard = createCard;
        this.start = 0;
        this.end = 3;
    }
    createCards() {
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }
        this.cardsArr = this.getNews().articles.map( card => {
            return this.createCard(card.source.name, card.title, card.publishedAt, card.description, card.urlToImage);
        });
        this.renderCards(3);
    }
    renderCards(step) {
        this.end += step;
        this.start += step;
        this.cardsArr.forEach( (item,index) => {
            if (index >= this.start && index < this.end ) {
                this.container.insertAdjacentHTML('beforeend', item);
            }
        })
    }
}

export default NewsCardList;