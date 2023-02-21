import { expect } from 'chai';
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import axios from 'axios';
import { repoListFromGithubTrending, mockResponseFromGithubAPI } from '../../mock/repository.mock';
import FetchGithubRepository from '../../../services/repository/utils/fetchRepositoryFetchRepositoriesData';


chai.use(chaiHttp);

describe('fetchRepositoryFetchRepositoriesData', () => {
    let axiosGetStub;
  
    before(() => {
        axiosGetStub = sinon.stub(axios, 'get');
    });
  
    afterEach(() => {
        axiosGetStub.resetHistory();
    });
  
    after(() => {
        axiosGetStub.restore();
    });
  
    it('fetchData: should return repositories data', async () => {
        axiosGetStub.onCall(0).resolves({ data: mockResponseFromGithubAPI[0] });

        axiosGetStub.onCall(1).resolves({ data: mockResponseFromGithubAPI[1] });

        const result = await FetchGithubRepository.fetchData(repoListFromGithubTrending);

        expect(result).to.deep.equal(mockResponseFromGithubAPI);

        expect(axiosGetStub.callCount).to.equal(2);

        expect(axiosGetStub.getCall(0).args[0]).to.equal('https://api.github.com/repos/octocat/Hello-World');
		
        expect(axiosGetStub.getCall(1).args[0]).to.equal('https://api.github.com/repos/octocat/Spoon-Knife');
    });
  
    it('fetchData: should return an empty array when repoList is empty', async () => {
        const result = await FetchGithubRepository.fetchData([]);
        expect(result).to.deep.equal([]);
        expect(axiosGetStub.callCount).to.equal(0);
    });
});
