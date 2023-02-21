import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import axios from 'axios';
import { trendingRepositoriesHtmlBody, expectedRepoNamesFromRepositoriesHtmlBody } from '../../mock/repository.mock';
import ScrapTrendingRepositories from '../../../services/repository/utils/scrapRepositoriesName';

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

		it('getRepositoryAndUserNames: should return a list of repository names and owners', async () => {
			const mockUrl = 'https://github.com/trending/javascript?since=daily';
            


			axiosGetStub.resolves({ data: trendingRepositoriesHtmlBody });

			const result = await ScrapTrendingRepositories.getRepositoryAndUserNames(mockUrl);

			expect(result).to.deep.equal(expectedRepoNamesFromRepositoriesHtmlBody);
		});
	});
});
