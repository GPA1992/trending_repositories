type TRepositoryUtils = {
	id?: number;
	owner: string;
	ownerRepo: string;
	ownerAvatar: string;
	repoName: string;
	description: string;
	stars: number;
	forks: number;
	language: string;
	repoLink: string;
};

type TRepositoryUtilsByLanguage = {
	'c++': TRepositoryUtils[];
	PHP: TRepositoryUtils[];
	JavaScript: TRepositoryUtils[];
	Python: TRepositoryUtils[];
	Java: TRepositoryUtils[];
};

type TRepositoryResponse = {
	owner: {
		login: string;
		avatar_url: string;
		html_url: string;
	};
	name: string;
	description: string;
	stargazers_count: number;
	forks_count: number;
	language: string;
	html_url: string;
};

export { TRepositoryUtils, TRepositoryResponse, TRepositoryUtilsByLanguage };
