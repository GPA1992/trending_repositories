import axios from 'axios';
import { TRepositoryResponse } from '../../../types/types';
import 'dotenv/config';

class FetchRepositoriesData {
    public fetchData = async (repoList): Promise<TRepositoryResponse[]> => {	
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
}
export default new FetchRepositoriesData;
