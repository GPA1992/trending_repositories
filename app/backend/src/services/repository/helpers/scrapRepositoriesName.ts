import * as cheerio from 'cheerio';
import axios from 'axios';

class ScrapTrendingRepositories {
    public  getRepositoryAndUserNames = async (url) => {
        try {
            const response = await axios.get(url);
            const html = response.data;
            const $ = cheerio.load(html);
            const repoList = $('h1 > a');
            const repoNames = repoList.toArray().map((element) => {
                const repo = $(element).text().trim().split('/').pop().trim();
                const owner = $(element).text().trim().split('/')[0].trim();
                return {
                    owner,
                    repo,
                };
            });    
            return repoNames;
        } catch (error) {
            console.error(error);
        }
    };
}
export default new ScrapTrendingRepositories;
