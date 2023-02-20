module.exports = {
	all: true,
	extends: '@istanbuljs/nyc-config-typescript',
	exclude: [
		'src/tests',
		'src/database/config',
		'src/database/migrations',
		'src/database/seeders',
		'src/utils',
		'src/types',
		'src/routes ',
		'src/server.ts',
		'src/services/repository/utils/refreshTrendingRepoListOnDbPerHour.ts'
	],
	include: ['src/**/*.ts']
};
