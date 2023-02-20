import express from 'express';
import repositoryController from '../controllers/respository.controller';

const router = express.Router();







router.get('/:language', repositoryController.listRepositoriesByLanguage);
router.get('/', repositoryController.listAllRepositories);

export default router;
