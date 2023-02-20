import Repository from '../../database/models/repository.model';
import { TRepositoryUtils } from '../../types/types';
import { Op } from 'sequelize';
import _ from 'lodash';

class GithubAPIService {
	static saveRepositories = async (repositories: TRepositoryUtils[]): Promise<void> => {
		try {
			await Repository.sync();
			await Repository.bulkCreate(repositories);
			console.log('Repositories saved successfully');
		} catch (error) {
			return error.message;
		}
	};

	static listRepositories = async (): Promise<Record<string, TRepositoryUtils[]>> => {
		try {			
			const repositories = await Repository.findAll({
				where: {
					language: {[Op.ne]: null},
				},
			});

			const groupedRepos= _.groupBy(repositories, 'language');	
				
			return groupedRepos;

		} catch (error) {
			return error.message;
		}
	};

	static listRepositoryByLanguage = async (language: string): Promise<TRepositoryUtils[]> => {
		try {
			const repository = await Repository.findAll({ where: { language} });
			return repository;
		} catch (error) {
			return error.message;
		}
	};

	static deletaAllRepository = async () => {
		try {
			await Repository.destroy({ where: {} });
			return 'Repository List clear';
		} catch (error) {
			return error.message;
		}
	};
}

export default GithubAPIService;
