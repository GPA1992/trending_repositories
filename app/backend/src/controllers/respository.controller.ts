import { Request, Response } from 'express';
import { GithubAPIService} from '../services';

class RepositoryController {
    public listRepositoriesByLanguage = async (req: Request, res: Response) => {
        try {
            const { language } = req.params;
            const data = await GithubAPIService.listRepositoryByLanguage(language as string);            
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };
    public listAllRepositories = async (req: Request, res: Response) => {
        try {
            const data = await GithubAPIService.listRepositories();          
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };
}

export default new RepositoryController;