import React, { useEffect, useState } from 'react';
import { requestData } from '../../services/api';
import RepositoryCard from '../repositoryCard/repositoryCard';
import { TRepositoryUtils } from '../../types/types';
import './repositories.styles.sass';
import NavigateBar from '../navigateBar/navigateBar';
import useGlobalContext from '../../hooks/useGlobalContext';

export default function Repositories() {
	const [repositories, setRepositories] = useState<TRepositoryUtils[]>();
	const { language } = useGlobalContext();

	useEffect(() => {
		async function fetchRepositories() {
			const data = await requestData(
				`/repositories/${language.toLocaleLowerCase()}`
			);
			setRepositories(data);
		}
		fetchRepositories();
	}, [language]);

	return (
		<div className="repository-list">
			<NavigateBar />
			{repositories?.map((repo: TRepositoryUtils, index) => (
				<div key={index}>
					<RepositoryCard
						ownerAndRepoName={`${repo.owner} / ${repo.repoName}`}
						description={repo.description}
						language={repo.language}
						stars={repo.stars}
						forks={repo.forks}
						avatar={repo.ownerAvatar}
						repoUrl={repo.repoLink}
					/>
				</div>
			))}
		</div>
	);
}
