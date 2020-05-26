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
            if (this.validate(this.form)) {
                this.ethernetErrToggle('off');
                this.searchErrToggle('off');
                this.resultToggle('off');
                this.preloaderToggle('on');

                let question = this.form.children[0].value;
                this.getNews(question).then( res=> {
                    if (res.articles.length === 0) {
                        this.ethernetErrToggle('off');
                        this.preloaderToggle('off');
                        this.searchErrToggle('on');
                    } else {
                        window.localStorage.setItem("newsData", JSON.stringify(res));
                        window.localStorage.setItem("question", question);
                        this.ethernetErrToggle('off');
                        this.searchErrToggle('off');
                        this.createCards();
                        this.preloaderToggle('off');
                        this.resultToggle('on');
                    }
                }).catch( err => {
                    console.log(err);
                    this.preloaderToggle('off');
                    this.ethernetErrToggle('on');
                })
            }
        })
        this.form.addEventListener('input', ()=> {
            this.validate(this.form);
        })
    }
    // Показ секции результата
    resultToggle(action) {
        if (action === 'on') {
            this.result.classList.add('result_active');
        } if (action === 'off') {
            this.result.classList.remove('result_active');
        }
    }
    // Показ ошибки поиска
    searchErrToggle(action) {
        if (action === 'on') {
            this.searchErr.classList.add('search-err_active');
        } if (action === 'off') {
            this.searchErr.classList.remove('search-err_active');
        }
    }
    // Показ прелоудера
    preloaderToggle(action) {
        if (action === 'on') {
            this.preloader.classList.add('preloader_active');
        } if (action === 'off') {
            this.preloader.classList.remove('preloader_active');
        }
    }
    // Показ ошибки интернета
    ethernetErrToggle(action) {
        if (action === 'on') {
            this.ethernetErr.classList.add('ethernet-err_active');
        } if (action === 'off') {
            this.ethernetErr.classList.remove('ethernet-err_active');
        }
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
