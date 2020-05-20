// Конструктор класса принимает колбэк-функцию, исполняемую при сабмите формы поиска. В колбэк-функции
// описывается взаимодействие с API, списком карточек и локальным браузерным хранилищем. Полученные от NewsAPI
// данные должны приводить к обновлению хранилища, а список карточек отображать полученные данные на странице.
// Кроме этого у класса SearchInput должны быть методы для валидации формы поиска и методы, управляющие работой
// кнопки сабмита.

class SearchInput {
    constructor(form, getNews, createCards) {
        this.form = form;
        this.getNews = getNews;
        this.createCards = createCards;
    }
    submit() {
        this.form.addEventListener('submit', (event)=> {
            event.preventDefault();
            if (this.validate(this.form)) {
                document.querySelector('.search-err').classList.remove('search-err_active');
                document.querySelector('.result').classList.remove('result_active');
                document.querySelector('.preloader').classList.add('preloader_active');
                let question = this.form.children[0].value;
                this.getNews(question).then( res=> {
                    if (res.articles.length === 0) {
                        document.querySelector('.preloader').classList.remove('preloader_active');
                        document.querySelector('.search-err').classList.add('search-err_active');
                    } else {
                        window.localStorage.setItem("newsData", JSON.stringify(res));
                        document.querySelector('.search-err').classList.remove('search-err_active');
                        this.createCards();
                        document.querySelector('.preloader').classList.remove('preloader_active');
                        document.querySelector('.result').classList.add('result_active');
                    }
                }).catch( () => {
                    document.querySelector('.search-err').classList.add('search-err_active');
                    document.querySelector('.preloader').classList.remove('preloader_active');
                })
            }
        })
        this.form.addEventListener('input', ()=> {
            this.validate(this.form);
        })
    }

    // Валидация инпута
    validate(form) {
        const input = form.children[0];
        const button = form.children[1];

        if (input.value.length < 1) {
            this.buttonBlock(button, 'block');
            input.placeholder = 'Нужно ввести ключевое слово';
            return false;
        } else {
            this.buttonBlock(button, 'show');
            return true;
        }
    }
    // Блокировка кнопки
    buttonBlock(button, action) {
        if (action === 'block') {
            button.style.backgroundColor = 'grey';
        }
        if (action === 'show') {
            button.style.backgroundColor = '#2F71E5';
        }
    }
}
export default SearchInput;




// form.addEventListener('input', ()=> {
//     searchInput.validate(form);
// })
//
// form.addEventListener('submit', (event)=> {
//     event.preventDefault();
//     if (searchInput.validate(form)) {
//         let question = form.children[0].value;
//         newsApi.getNews(question).then( res=> {
//             window.localStorage.setItem("newsData", JSON.stringify(res));
//             cardList.createCards();
//         })
//
//     }
// })