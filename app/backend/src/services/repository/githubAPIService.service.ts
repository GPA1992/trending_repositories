import axios from 'axios';
import Repository from '../../database/models/repository.model';

class GithubAPIService {
 /*  static async saveRepositories(repositories) {
    try {
      await Repository.sync();
      await Repository.bulkCreate(repositories);
      console.log(`Repositories saved successfully`);
    } catch (error) {
      console.error(`Error saving repositories: ${error}`);
    }
  }

  static async listRepositories() {
    try {
      const repositories = await Repository.findAll();
      console.log(`Listing ${repositories.length} repositories:`);
      repositories.forEach((repository) => {
        console.log(`- ${repository.name} (${repository.stars} stars)`);
      });
      return repositories;
    } catch (error) {
      console.error(`Error listing repositories: ${error}`);
    }
  }

  static async viewRepository(id) {
    try {
      const repository = await Repository.findByPk(id);
      if (repository) {
        console.log(`Repository ${repository.id}: ${repository.name}`);
        console.log(`Description: ${repository.description}`);
        console.log(`Stars: ${repository.stars}`);
        console.log(`Language: ${repository.language}`);
      } else {
        console.log(`Repository not found with ID ${id}`);
      }
      return repository;
    } catch (error) {
      console.error(`Error viewing repository: ${error}`);
    }
  } */
}

export default GithubAPIService;
