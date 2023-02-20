import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import FetchGithubRepository from '../services/repository/utils/fetchRepository';

chai.use(chaiHttp);
const expect = chai.expect;

describe('FetchGithubRepository', () => {
	let axiosGet: sinon.SinonStub;

	beforeEach(() => {
		axiosGet = sinon.stub(FetchGithubRepository, 'getRepositoriesData');
	});

	afterEach(() => {
		axiosGet.restore();
	});

	describe('getRepositoriesData', () => {
		it('should return an array of repositories data', async () => {
			const repoList = [
				{ owner: 'owner1', repo: 'repo1' },
				{ owner: 'owner2', repo: 'repo2' },
			];
			const expectedData = [
				{ id: 1, name: 'repo1', owner: { login: 'owner1' } },
				{ id: 2, name: 'repo2', owner: { login: 'owner2' } },
			];

			axiosGet.resolves(expectedData);

			const data = await FetchGithubRepository.getRepositoriesData(repoList);

			expect(data).to.deep.equal(expectedData);
			expect(axiosGet.calledOnce).to.be.true;
			expect(axiosGet.getCall(0).args[0]).to.equal('https://api.github.com/repos/owner1/repo1');
			expect(axiosGet.getCall(1).args[0]).to.equal('https://api.github.com/repos/owner2/repo2');
		});
	});

});