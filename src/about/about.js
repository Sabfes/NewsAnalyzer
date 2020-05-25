import '../style.css';
import swiper from '../js/utils/swiper';
import GithubApi from "../js/modules/GithubApi";

const githubApi = new GithubApi()
githubApi.getCommits().then(res=>{
    console.log(res)});