export default class CommitCard {
    //Создание карточки
    createCard(name, email, date, message, avatar_url) {
        const card = document.createElement("div");
        const dateCommit = date.substr(0, 10);
        card.classList.add('swiper-slide');

        card.insertAdjacentHTML('beforeend', `
            <h3 class="swiper-slide__date">${dateCommit}</h3>
            <div class="swiper-slide__profile">
                <img src="${avatar_url}"
                     alt="profile-image"
                     class="swiper-slide__profile-image">
                <div class="swiper-slide__profile-info">
                    <span class="swiper-slide__profile-name">${name}</span>
                    <span class="swiper-slide__profile-mail">${email}</span>
                </div>
            </div>
            <p class="swiper-slide__text">
                ${message}
            </p>
        `);
        return card;
    }
}
