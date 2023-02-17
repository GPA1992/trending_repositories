'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('cpf', [
        {
            cpf: '50001567808',
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW'),
        },
    ], {}),
    down: async (queryInterface) => queryInterface.bulkDelete('cpf', null, {}),
};
