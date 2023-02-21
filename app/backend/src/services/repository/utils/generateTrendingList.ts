import scrapRepositoriesName from './scrapRepositoriesName';
import { TRepositoryUtils, TRepositoryResponse } from '../../../types/types';
import FetchRepositoriesData from './fetchRepositoryFetchRepositoriesData';
import 'dotenv/config';

class GenerateTrendingList {
    public generateList = async (language: string): Promise<TRepositoryUtils[]> => {

        const repoList = await scrapRepositoriesName.getRepositoryAndUserNames(`https://github.com/trending/${language}?since=daily`);
 
        const fetchTrendingRepositories: TRepositoryResponse[] = await FetchRepositoriesData.fetchData(repoList);   
    
        const repositories: TRepositoryUtils[] = fetchTrendingRepositories.map((item: TRepositoryResponse) => ({
            owner: item.owner.login,
            ownerRepo: item.owner.html_url,
            ownerAvatar: item.owner.avatar_url,
            repoName: item.name,
            description: item.description,
            stars: item.stargazers_count,
            forks: item.forks_count,
            language: item.language,
            repoLink: item.html_url
        }));
   
        return repositories;
    };
}

export default new GenerateTrendingList;
