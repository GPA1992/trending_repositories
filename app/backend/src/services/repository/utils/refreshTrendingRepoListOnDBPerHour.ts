import { GithubAPIService } from '../..';
import FetchGithubRepository from './generateTrendingList';
import languages from '../../../utils/languageList';

class TrendingRepos {
    static async update() {
        await GithubAPIService.deletaAllRepository();
        languages.forEach(async (lang) => {
            const actualLanguage = await FetchGithubRepository.generateList(lang);
            await GithubAPIService.saveRepositories(actualLanguage);
        });
        console.log('REPOSITORIOS ATUALIZADOS');
    }
}

const oneHoursToAttRepoList = 1 * 60 * 60 * 1000;

setInterval(() => TrendingRepos.update(), oneHoursToAttRepoList);

export default TrendingRepos;
