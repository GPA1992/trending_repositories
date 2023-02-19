import Repository from '../../database/models/repository.model';

class GithubAPIService {
	static saveRepositories = async (repositories) => {
		try {
			await Repository.sync();
			await Repository.bulkCreate(repositories);
			console.log('Repositories saved successfully');
		} catch (error) {
			console.error(`Error saving repositories: ${error}`);
		}
	};

	static listRepositories = async () => {
		try {
			const repositories = await Repository.findAll();
			console.log(`Listing ${repositories.length} repositories:`);
			return repositories;
		} catch (error) {
			console.error(`Error listing repositories: ${error}`);
		}
	};

	static findRepositoryBy = async (lang: string) => {
		try {
			const repository = await Repository.findByPk();
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
