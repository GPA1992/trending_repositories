import { expect } from 'chai';
import sinon from 'sinon';

import FetchRepositoriesData from '../../../services/repository/helpers/fetchRepositoryFetchRepositoriesData';
import GenerateTrendingList from '../../../services/repository/helpers/generateTrendingList';
import ScrapTrendingRepositories from '../../../services/repository/helpers/scrapRepositoriesName';


describe('generateTrendingList', () => {
    let repositoriesNameStub;
    let fetchRepositoriesDataStub;

  
    before(() => {
        repositoriesNameStub = sinon.stub(ScrapTrendingRepositories, 'getRepositoryAndUserNames');
        fetchRepositoriesDataStub = sinon.stub(FetchRepositoriesData, 'fetchData');
    });
  
    afterEach(() => {
        repositoriesNameStub.resetHistory();
        fetchRepositoriesDataStub.resetHistory();

    });
  
    after(() => {
        repositoriesNameStub.restore();
        fetchRepositoriesDataStub.restore();
    });
  
    it('generateList: should return an array of repositories', async () => {
        const language = 'javascript';
        const mockRepoList = [{ owner: 'octocat', repo: 'Hello-World' }];
        const mockResponse = [      {        owner: { login: 'octocat', html_url: 'https://github.com/octocat', avatar_url: 'https://github.com/octocat.png' },        name: 'Hello-World',        description: 'This is your first repository',        stargazers_count: 10,        forks_count: 5,        language: 'javascript',        html_url: 'https://github.com/octocat/Hello-World'      }    ];
        repositoriesNameStub.resolves(mockRepoList);
        fetchRepositoriesDataStub.resolves(mockResponse);
    
        const result = await GenerateTrendingList.generateList(language);
    
        expect(result).to.deep.equal([
            {
                owner: 'octocat',
                ownerRepo: 'https://github.com/octocat',
                ownerAvatar: 'https://github.com/octocat.png',
                repoName: 'Hello-World',
                description: 'This is your first repository',
                stars: 10,
                forks: 5,
                language: 'javascript',
                repoLink: 'https://github.com/octocat/Hello-World'
            }
        ]);
        expect(repositoriesNameStub.callCount).to.equal(1);
        expect(repositoriesNameStub.getCall(0).args[0]).to.equal(`https://github.com/trending/${language}?since=daily`);
        expect(fetchRepositoriesDataStub.callCount).to.equal(1);
        expect(fetchRepositoriesDataStub.getCall(0).args[0]).to.deep.equal(mockRepoList);
    });
});
