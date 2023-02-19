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
			console.error(`Error saving repositories: ${error}`);
		}
	};

	static listRepositories = async (): Promise<Record<string, TRepositoryUtils[]>> => {
		try {
			const repositories = await Repository.findAll({
				where: {
					language: {[Op.ne]: null},
				},
			}).then((result) => result.map((lang) => lang.get({ plain: true })));
			const groupedRepos= _.groupBy(repositories, 'language');		
			return groupedRepos;
		} catch (error) {
			console.error(`Error listing repositories: ${error}`);
		}
	};

	static findRepositoryByLanguage = async (language: string): Promise<TRepositoryUtils[]> => {
		try {
			const repository = await Repository.findAll({ where: { language} });
			return repository;
		} catch (error) {
			console.error(`Error viewing repository: ${error}`);
		}
	};

	static deletaAllRepository = async () => {
		try {
			await Repository.destroy({ where: {} });
		} catch (error) {
			console.error(`Error viewing repository: ${error}`);
		}
	};
}

export default GithubAPIService;
