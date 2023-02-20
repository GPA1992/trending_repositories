'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable('repositories', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			owner: {
				type: Sequelize.STRING,
			},
			ownerRepo: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			ownerAvatar: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			repoName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.TEXT,
				allowNull: true,
			},
			stars: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			forks: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			language: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			repoLink: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW,
			},
			updatedAt: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW,
			},
		});

	},

	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('repositories');

	}
};
