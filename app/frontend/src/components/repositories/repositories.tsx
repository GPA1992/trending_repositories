import React, { useEffect, useState } from 'react';
import { requestData } from '../../services/api';
import RepositoryCard from '../repositoryCard/repositoryCard';
import { TRepositoryUtils } from '../../types/types';
import './repositories.styles.sass';

export default function Repositories() {
	const [repositories, setRepositories] = useState<any[]>();

	useEffect(() => {
		async function fetchRepositories() {
			const data = await requestData('/repositories/typescript');
			setRepositories(data);
		}
		fetchRepositories();
	}, []);

	return (
		<div className="repository-list">
			{repositories?.map((repo: TRepositoryUtils, index) => (
				<div key={index}>
					<RepositoryCard
						ownerAndRepoName={`${repo.owner} / ${repo.repoName}`}
						description={repo.description}
						language={repo.language}
						stars={repo.stars}
						forks={repo.forks}
					/>
				</div>
			))}
		</div>
	);
}
