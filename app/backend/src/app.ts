import express from 'express';
import { repositoryRoute } from './routes';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './swagger.json';
import TrendingRepos from './services/repository/utils/refreshTrendingRepoListOnDBPerHour';

class App {
    public app: express.Express;
    constructor() {
        this.app = express();

        this.config();

        this.app.get('/', (req, res) => res.json({ ok: true }));

        /* TrendingRepos.update(); */
    }

    private config(): void {
        const accessControl: express.RequestHandler = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header(
                'Access-Control-Allow-Methods',
                'GET,POST,DELETE,OPTIONS,PUT,PATCH'
            );
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(accessControl);
        this.app.use('/repositories', repositoryRoute);
    }

    public start(PORT: string | number): void {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }

    static async updateTrendingRepos() {
        await TrendingRepos.update();
    }
}

export { App };
