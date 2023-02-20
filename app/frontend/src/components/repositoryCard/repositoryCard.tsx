import React from 'react';
import './repositoryCard.styles.sass';
import { GoRepo, GoRepoForked } from 'react-icons/go';
import { BsStar } from 'react-icons/bs';
import { TRepoCard } from '../../types/propType';

export default function RepositoryCard(props: TRepoCard) {
	return (
		<div className="repository-card">
			<div className="project-info">
				<div className="icon-name">
					<GoRepo />
					<a href={props.repoUrl} target="_blank" rel="noreferrer">
						{props.ownerAndRepoName}
					</a>
				</div>
				<div>
					<p>{props.description}</p>
				</div>
				<div className="icon-box">
					<div className={`lang-${props.language}`}></div>
					<p>{props.language}</p>
					<BsStar />
					<p>{props.stars}</p>
					<GoRepoForked />
					<p>{props.forks}</p>
				</div>
			</div>
			<div className="avatar-img">
				<img src={props.avatar} alt="" />
			</div>
		</div>
	);
}
