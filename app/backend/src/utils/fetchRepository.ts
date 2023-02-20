import axios from 'axios';
import repositoriesName from './repositoriesName';
import { TRepositoryUtils, TRepositoryResponse } from '../types/types';
import 'dotenv/config';

class FetchGithubRepository {
	static getRepositoriesData = async (repoList): Promise<TRepositoryResponse[]> => {	
		const config = {
			headers: { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
		};
		const repositories: TRepositoryResponse[] = repoList.map(async ({owner, repo}) => {
			const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}`, config);
			return response.data;
		});
		const data = await Promise.all(repositories);
      
		return data;
	};


	static fetchRepositories = async (language: string): Promise<TRepositoryUtils[]> => {
		const repoList = await repositoriesName(`https://github.com/trending/${language}?since=daily`);
 
		const fetchTrendingRepositories: TRepositoryResponse[] = await this.getRepositoriesData(repoList);   
    
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
		})).sort((a, b) => b.stars - a.stars);
   
		return repositories;
	};
}

export default FetchGithubRepository;
