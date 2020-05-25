class SearchInput {
    constructor(form, getNews, createCards, searchErr, result, preloader, ethernetErr) {
        this.form = form;
        this.getNews = getNews;
        this.createCards = createCards;
        this.searchErr = searchErr;
        this.result = result;
        this.preloader = preloader;
        this.ethernetErr = ethernetErr;
    }
    submit() {
        this.form.addEventListener('submit', (event)=> {
            event.preventDefault();
            if (this.validate(this.form)) {
                this.ethernetErr.classList.remove('ethernet-err_active');
                this.searchErr.classList.remove('search-err_active');
                this.result.classList.remove('result_active');
                this.preloader.classList.add('preloader_active');
                let question = this.form.children[0].value;
                this.getNews(question).then( res=> {
                    if (res.articles.length === 0) {
                        this.ethernetErr.classList.remove('ethernet-err_active');
                        this.preloader.classList.remove('preloader_active');
                        this.searchErr.classList.add('search-err_active');
                    } else {
                        window.localStorage.setItem("newsData", JSON.stringify(res));
                        window.localStorage.setItem("question", question);
                        this.ethernetErr.classList.remove('ethernet-err_active');
                        this.searchErr.classList.remove('search-err_active');
                        this.createCards();
                        this.preloader.classList.remove('preloader_active');
                        this.result.classList.add('result_active');
                    }
                }).catch( err => {
                    console.log(err);
                    this.preloader.classList.remove('preloader_active');
                    this.ethernetErr.classList.add('ethernet-err_active');
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
