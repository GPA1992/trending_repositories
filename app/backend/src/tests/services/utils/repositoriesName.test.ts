import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import axios from 'axios';
import { trendingRepositoriesHtmlBody } from '../../mock/repository.mock';
import ScrapTrendingRepositories from '../../../services/repository/utils/repositoriesName';

chai.use(chaiHttp);

describe('ScrapTrendingRepositories', () => {
	describe('getRepositoryAndUserNames', () => {
		let axiosGetStub: sinon.SinonStub;

		beforeEach(() => {
			axiosGetStub = sinon.stub(axios, 'get');
		});

		afterEach(() => {
			axiosGetStub.restore();
		});

		it('should return a list of repository names and owners', async () => {
			const mockUrl = 'https://github.com/trending/javascript?since=daily';
            
			const expectedRepoNames = [
				{ owner: 'user1', repo: 'repo1' },
				{ owner: 'user2', repo: 'repo2' },
				{ owner: 'user3', repo: 'repo3' },
			];

			axiosGetStub.resolves({ data: trendingRepositoriesHtmlBody });

			const result = await ScrapTrendingRepositories.getRepositoryAndUserNames(mockUrl);

			expect(result).to.deep.equal(expectedRepoNames);
		});
		
		it('should handle errors', async () => {
			const mockUrl = 'https://github.com/trending/javascript?since=daily';
			const expectedError = new Error('Something went wrong.');

			axiosGetStub.rejects(expectedError);

			const result = await ScrapTrendingRepositories.getRepositoryAndUserNames(mockUrl);

			expect(result).to.be.undefined;
		});
	});
});
