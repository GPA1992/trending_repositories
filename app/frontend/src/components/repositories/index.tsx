import { log } from 'console';
import React, { useEffect, useState } from 'react'
import { requestData } from '../../services/api'
import './repositories.styles.sass';

export default function Repositories() {
    const [repositories, setRepositories] = useState<any[]>()

    useEffect(() => {
        async function fetchRepositories() {
            const data = await requestData('/repositories/java');
            setRepositories(data);
        }
        fetchRepositories();
    }, []);
    console.log(repositories)
  return (
    <div>
        {repositories?.map((repo, index) => (
          <div key={index}>
          <p>{repo.owner}</p>
        </div>
        ))}
    </div>
  )
}
