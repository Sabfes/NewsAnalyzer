export default class GithubApi {
    getCommits() {
        return fetch(`https://api.github.com/repos/Sabfes/NewsAnalyzer/commits`)
            .then( res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Что-то пошло не так: ${res.status}`);
            })
            .catch( error => {
                console.log(error);
            })
    };
}
