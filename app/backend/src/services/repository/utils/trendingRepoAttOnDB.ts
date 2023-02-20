import { GithubAPIService }from '../..';
import FetchGithubRepository from './fetchRepository';
import languages from '../../../utils/languageList';


const trendingReposAtt = async () => {
	await GithubAPIService.deletaAllRepository();
	languages.forEach(async (lang) => {
		const actualLanguage = await FetchGithubRepository.fetchRepositories(lang);
		await GithubAPIService.saveRepositories(actualLanguage);
	});
	console.log('REPOSITORIOS ATUALIZADOS');	
};

  
const fiveHoursToAttRepoList = 5 * 60 * 60 * 1000;
  
setInterval(trendingReposAtt, fiveHoursToAttRepoList);

export default trendingReposAtt;