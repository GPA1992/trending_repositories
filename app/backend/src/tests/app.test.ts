import { App } from '../app';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';

chai.use(chaiHttp);

describe('App', () => {
	let app: App;
	let server: any;

	before(async () => {
		app = new App();
		server = app.app.listen(3000);
	});

	after(async () => {
		server.close();
	});

	it('should display "ok: true" on root endpoint "/"', async () => {
		const res = await chai.request(app.app).get('/');
		expect(res.status).to.equal(200);
		expect(res.body).to.deep.equal({ ok: true });
	});
});
