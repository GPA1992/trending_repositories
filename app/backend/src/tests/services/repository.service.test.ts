import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import _ from 'lodash';
import { repositoriesToSaveMock, allRepositoriesResponseFromDBMock, repositoriesBylanguage } from '../mock/repository.mock';
import repositoryModel from '../../database/models/repository.model';
import { GithubAPIService } from '../../services/index';

const { expect } = chai;
chai.use(chaiHttp);

describe('Repository Service', () => {
    afterEach(function () {
        sinon.restore();
    });
    it('saveRepositories: must save the repositories in the database', async () => {
        const bulkCreateStub = sinon.stub(repositoryModel, 'bulkCreate').resolves();
        const syncStub = sinon.stub(repositoryModel, 'sync').resolves();

        await GithubAPIService.saveRepositories(repositoriesToSaveMock);


        expect(syncStub.calledOnce).to.be.true;
        expect(bulkCreateStub.calledOnceWith(repositoriesToSaveMock)).to.be.true;
        bulkCreateStub.restore();
    });
    it('saveRepositories: should report errors when saving repositories', async () => {
        const bulkCreateStub = sinon.stub(repositoryModel, 'bulkCreate').rejects(new Error('Database error'));
        const syncStub = sinon.stub(repositoryModel, 'sync').resolves();
		
        await GithubAPIService.saveRepositories(repositoriesToSaveMock);
		
        expect(syncStub.calledOnce).to.be.true;
        expect(bulkCreateStub.calledOnceWith(repositoriesToSaveMock)).to.be.true;
        bulkCreateStub.restore();
    });
    it('listRepositories: should list the repositories that exist in the database', async () => {
        sinon.stub(repositoryModel, 'findAll').resolves(allRepositoriesResponseFromDBMock as repositoryModel[]);
        const groupedRepos = _.groupBy(allRepositoriesResponseFromDBMock, 'language');

        const result = await GithubAPIService.listRepositories();
	
        expect(result).to.deep.equal(groupedRepos);
    });
    it('listRepositories: should handle errors when listing repositories', async () => {
        const findAllStub = sinon.stub(repositoryModel, 'findAll').rejects(new Error('Database error'));
        const result = await GithubAPIService.listRepositories();
        expect(findAllStub.calledOnce).to.be.true;
        expect(result).to.deep.equal('Database error');
    });
    it('listRepositoryByLanguage: should list repositories according to language', async () => {
        sinon.stub(repositoryModel, 'findAll').resolves(repositoriesBylanguage as repositoryModel[]);

        const result = await GithubAPIService.listRepositoryByLanguage('JavaScript');		
        expect(result).to.deep.equal(repositoriesBylanguage);
    });
    it('listRepositoryByLanguage: should handle errors when listing repositories', async () => {
        const findAllStub = sinon.stub(repositoryModel, 'findAll').rejects(new Error('Database error'));

        const result = await GithubAPIService.listRepositoryByLanguage('JavaScript');
        expect(findAllStub.calledOnce).to.be.true;
        expect(result).to.deep.equal('Database error');
    });
    it('deletaAllRepository: should be called and delete all repositories listed', async () => {
        const destroySpy = sinon.spy(repositoryModel, 'destroy');
        await GithubAPIService.deletaAllRepository();
        expect(destroySpy.calledOnce).to.be.true;
        destroySpy.restore();
    });
    it('deletaAllRepository: should handle errors when deleting repositories', async () => {
        const findAllStub = sinon.stub(repositoryModel, 'destroy').rejects(new Error('Database error'));

        const result = await GithubAPIService.deletaAllRepository();
        expect(findAllStub.calledOnce).to.be.true;
        expect(result).to.deep.equal('Database error');
    });
});