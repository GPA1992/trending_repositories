import { Request, Response } from 'express';
import { GithubAPIService} from '../services';

export default class RepositoryController {
	public static findRepositoriesByLanguage = async (req: Request, res: Response) => {
		try {
			const { language } = req.params;
			const data = await GithubAPIService.findRepositoryByLanguage(language as string);            
			return res.status(200).json(data);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	};
	public static listAllRepositories = async (req: Request, res: Response) => {
		try {
			const data = await GithubAPIService.listRepositories();          
			return res.status(200).json(data);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	};
}

