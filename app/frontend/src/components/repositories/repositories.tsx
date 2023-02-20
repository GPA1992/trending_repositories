import React, { useEffect, useState } from 'react';
import { requestData } from '../../services/api';
import RepositoryCard from '../repositoryCard/repositoryCard';
import { TRepositoryUtils } from '../../types/types';
import './repositories.styles.sass';
import NavigateBar from '../navigateBar/navigateBar';

export default function Repositories() {
	const [repositories, setRepositories] = useState<any[]>();

	useEffect(() => {
		async function fetchRepositories() {
			const data = await requestData('/repositories/php');
			setRepositories(data);
		}
		fetchRepositories();
	}, []);

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
