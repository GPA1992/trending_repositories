import axios from 'axios';
import repositoriesName from './repositoriesName';
import { RepositoryUtils, RepositoryResponse } from '../types/types';

class FetchGithubRepository {
	static getRepositoriesData = async (repoList): Promise<RepositoryResponse[]> => {
		const config = {
			headers: { Authorization: `Bearer ${'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'}` }
		};
		const repositories: RepositoryResponse[] = repoList.map(async ({owner, repo}) => {
			const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}`, config);
			return response.data;
		});
		const data = await Promise.all(repositories);
      
		return data;
	};


	static fetchRepositories = async (language: string): Promise<RepositoryUtils[]> => {
		const repoList = await repositoriesName(`https://github.com/trending/${language}?since=daily`);
 
		const fetchTrendingRepositories: RepositoryResponse[] = await this.getRepositoriesData(repoList);   
    
		const repositories: RepositoryUtils[] = fetchTrendingRepositories.map((item: RepositoryResponse) => ({
			owner: item.owner.login,
			ownerRepo: item.owner.html_url,
			ownerAvatar: item.owner.avatar_url,
			repoName: item.name,
			description: item.description,
			stars: item.stargazers_count,
			forks: item.forks_count,
			language: item.language,
			repoLink: item.html_url
		})).sort((a, b) => b.stars - a.stars);
   
		return repositories;
	};
}

export default FetchGithubRepository;
