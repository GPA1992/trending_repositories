type RepositoryUtils = {
    owner: string,
    ownerRepo: string,
    ownerAvatar: string,
    repoName: string,
    description: string,
    stars: number,
    forks: number,
    language: string,
    repoLink: string
}

type RepositoryResponse = {
    owner: {
        login: string,
        avatar_url: string,
        html_url: string
    },    
    name: string,
    description: string,
    stargazers_count: number,
    forks_count: number,
    language: string,
    html_url: string
}

export { RepositoryUtils, RepositoryResponse }