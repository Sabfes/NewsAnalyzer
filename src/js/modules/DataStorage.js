class DataStorage {
    getData() {
        return JSON.parse(localStorage.getItem("newsData"));
    }
    getQuestion() {
        return localStorage.getItem("question");
    }
}
export default DataStorage