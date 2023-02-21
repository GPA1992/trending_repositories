import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { repositoriesBylanguage, allRepositoriesResponseGrouped } from '../mock/repository.mock';
import RepositoryController from '../../controllers/respository.controller';
import { GithubAPIService } from '../../services';

chai.use(chaiHttp);
const expect = chai.expect;

describe('RepositoryController', () => {
    it('listRepositoriesByLanguage: should return a list of repositories when passed a language parameter', async () => {
        const req = { params: { language: 'javascript' } };

        const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

        const listRepositoryByLanguageStub = sinon.stub(GithubAPIService, 'listRepositoryByLanguage').resolves(repositoriesBylanguage);

        await RepositoryController.listRepositoriesByLanguage(req as any, res as any);

        expect(listRepositoryByLanguageStub.calledOnceWith('javascript')).to.be.true;

        expect(res.status.calledOnceWith(200)).to.be.true;

        expect(res.json.calledOnceWith(repositoriesBylanguage)).to.be.true;

        listRepositoryByLanguageStub.restore();
    });
    it('listRepositoriesByLanguage: should return a 500 status code and the error message if GithubAPIService.listRepositoryByLanguage throws an error', async () => {
        const req = { params: { language: 'javascript' } };

        const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

        const error = new Error('Internal Server Error');

        const listRepositoryByLanguageStub = sinon.stub(GithubAPIService, 'listRepositoryByLanguage').rejects(error);

        await RepositoryController.listRepositoriesByLanguage(req as any, res as any);

        expect(listRepositoryByLanguageStub.calledOnceWith('javascript')).to.be.true;

        expect(res.status.calledOnceWith(500)).to.be.true;

        expect(res.json.calledOnceWith(error.message)).to.be.true;

        listRepositoryByLanguageStub.restore();
    });
    it('listAllRepositories: should return a list of repositories with status code 200', async () => {
        const req = {} as Request;

        const res = { status: sinon.stub().returnsThis(), json: sinon.stub()};

        const listRepositoriesStub = sinon.stub(GithubAPIService, 'listRepositories').resolves(allRepositoriesResponseGrouped);
 
        await RepositoryController.listAllRepositories(req as any, res as any);
 
        expect(listRepositoriesStub.calledOnce).to.be.true;

        expect(res.status.calledOnceWith(200)).to.be.true;

        expect(res.json.calledOnceWith(allRepositoriesResponseGrouped)).to.be.true;

        listRepositoriesStub.restore();
    });
    it('listAllRepositories: should return a 500 status code and the error message if GithubAPIService.listRepositoryByLanguage throws an error', async () => {
        const req = {};

        const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };

        const error = new Error('Internal Server Error');

        const listRepositoriesStub = sinon.stub(GithubAPIService, 'listRepositories').rejects(error);

        await RepositoryController.listAllRepositories(req as any, res as any);

        expect(res.status.calledOnceWith(500)).to.be.true;

        expect(res.json.calledOnceWith(error.message)).to.be.true;

        listRepositoriesStub.restore();
    });
});
