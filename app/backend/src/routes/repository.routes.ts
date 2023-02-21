import express from 'express';
import repositoryController from '../controllers/respository.controller';
import languageValidate from '../middleware/language.validate';

const router = express.Router();







router.get('/:language', languageValidate.languageCheck, repositoryController.listRepositoriesByLanguage);
router.get('/', repositoryController.listAllRepositories);

export default router;
