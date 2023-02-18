'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Examples',
        [
            {
                name: 'Naruto',
            },
        ], {}),

    down: async (queryInterface) => queryInterface.bulkDelete('Examples', null, {}),
};
