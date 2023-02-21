
import { NextFunction, Request, Response } from 'express';
import languages from '../utils/languageList';

class LanguageValidate {
    public languageCheck = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { language } = req.params;
            const checkIfLanguageExists = languages.some((lang) => lang === language);
            if (!checkIfLanguageExists) {
                return res.status(404).json({ message: 'Language does not exist in the database' });
            }
            return next();
        } catch (error) {
            return res.status(500).json(error.message);
        }
    };
}

export default new LanguageValidate;