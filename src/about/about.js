import '../style.css';
import swiper from "../js/utils/swiper";

import GithubApi from "../js/modules/GithubApi";
import CommitCardList from "../js/components/CommitCardList";
import CommitCard from "../js/components/CommitCard";

const githubApi = new GithubApi();
const commitCard = new CommitCard();
const commitCardList = new CommitCardList(
    document.querySelector('.swiper-wrapper'),
    commitCard.createCard,
    githubApi.getCommits,
);

