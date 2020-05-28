export default class SearchInput {
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
            if (this._validate(this.form)) {
                this._showEthernetErr(false);
                this._showSearchErr(false);
                this._showResult(false);
                this._showPreloader(true);

                const question = this.form.children[0].value;
                this.getNews(question).then( res=> {
                    if (res.articles.length === 0) {
                        this._showEthernetErr(false);
                        this._showPreloader(false);
                        this._showSearchErr(true);
                    } else {
                        window.localStorage.setItem("newsData", JSON.stringify(res));
                        window.localStorage.setItem("question", question);
                        this._showEthernetErr(false);
                        this._showSearchErr(false);
                        this.createCards();
                        this._showPreloader(false);
                        this._showResult(true);
                    }
                }).catch( err => {
                    console.log(err);
                    this._showPreloader(false);
                    this._showEthernetErr(true);
                })
            }
        })
        this.form.addEventListener('input', ()=> {
            this._validate(this.form);
        })
    }
    // Показ секции результата
    _showResult(show) {
        if (show) {
            this.result.classList.add('result_active');
        } else {
            this.result.classList.remove('result_active');
        }
    }
    // Показ ошибки поиска
    _showSearchErr(show) {
        if (show) {
            this.searchErr.classList.add('search-err_active');
        } else {
            this.searchErr.classList.remove('search-err_active');
        }
    }
    // Показ прелоудера
    _showPreloader(show) {
        if (show) {
            this.preloader.classList.add('preloader_active');
        } else {
            this.preloader.classList.remove('preloader_active');
        }
    }
    // Показ ошибки интернета
    _showEthernetErr(show) {
        if (show) {
            this.ethernetErr.classList.add('ethernet-err_active');
        } else {
            this.ethernetErr.classList.remove('ethernet-err_active');
        }
    }
    // Валидация инпута
    _validate(form) {
        const input = form.children[0];
        const button = form.children[1];

        if (input.value.length < 1) {
            this._buttonBlock(button, 'block');
            input.placeholder = 'Нужно ввести ключевое слово';
            return false;
        } else {
            this._buttonBlock(button, 'show');
            return true;
        }
    }
    // Блокировка кнопки
    _buttonBlock(button, action) {
        if (action === 'block') {
            button.style.backgroundColor = 'grey';
        }
        if (action === 'show') {
            button.style.backgroundColor = '#2F71E5';
        }
    }
}
