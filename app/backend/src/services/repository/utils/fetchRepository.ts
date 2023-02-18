import axios from 'axios';
import { RepositoryType } from '../../../types/types'

class FetchGithubRepository {
  static fetchRepositories = async (language: string): Promise<RepositoryType> => {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=topic:${language}&sort=stars&order=desc`);
    const repositories = response.data.items.map((item) => ({
      name: item.name,
      description: item.description,
      stars: item.stargazers_count,
      language: item.language,
      link: item.html_url
    })).sort((a, b) => b.stars - a.stars);
    return repositories[0];
  }
}

export default FetchGithubRepository;
