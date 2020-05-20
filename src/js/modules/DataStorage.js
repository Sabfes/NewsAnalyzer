class DataStorage {
    getData() {
        return JSON.parse(localStorage.getItem("newsData"));
    }
}
export default DataStorage