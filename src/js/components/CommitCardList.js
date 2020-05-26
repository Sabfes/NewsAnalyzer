import swiper from "../utils/swiper";

export default class CommitCardList {
    constructor(container, createCard, getCommit) {
        this.container = container;
        this.createCard = createCard;
        this.getCommit = getCommit;
        this.createCards()
    }
    //Создание карточек
    createCards() {
        this.arr = [];
        this.getCommit().then( res => {
            res.forEach(i => {
                this.arr.push(this.createCard(i.commit.author.name, i.commit.author.email, i.commit.author.date, i.commit.message, i.committer.avatar_url));
            })
            this.render()
        })
    }
    //Вывод карточек в консоль
    render() {
        this.arr.forEach( i=>{
            this.container.insertBefore(i, this.container.firCount)
        })
        swiper.update();
        swiper.allowTouchMove = true;
    }
}
