class NewsCard {
    //Создание карточки
    createCard(name, title, date, subtitle, img, link) {
        const card = document.createElement("a");
        card.classList.add('card', 'link');
        card.setAttribute('href', `${link}`);
        card.setAttribute('target', '_blank');
        card.insertAdjacentHTML('beforeend', `
            <div class="card__img"></div>
            <div class="card__content">
                <span class="card__date">${date}</span>
                <h2 class="card__title">${title}</h2>
                <p class="card__text">${subtitle}</p>
                <span class="card__site">${name}</span>
            </div>
        `);
        card.querySelector('.card__img').style.backgroundImage = `url(${img})`;
        return card;
    }
}
export default NewsCard;