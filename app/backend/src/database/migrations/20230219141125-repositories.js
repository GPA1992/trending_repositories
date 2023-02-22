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
                allowNull: true,
            },
            repoName: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true,
            },
            stars: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            forks: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            language: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            repoLink: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW,
            },
        });

    },

    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable('repositories');

    }
};
