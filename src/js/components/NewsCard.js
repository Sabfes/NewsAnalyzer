class NewsCard {
    createCard(name, title, date, subtitle, img) {
        return `
            <a href="${name}" target="_blank" class="card link">
                <img class="card__img" src="${img}" alt="card-image">
                <div class="card__content">
                    <span class="card__date">${date}</span>
                    <h2 class="card__title">${title}</h2>
                    <p class="card__text">${subtitle}</p>
                    <span class="card__site">${name}</span>
                </div>
            </a>
        `
    }
}
export default NewsCard;