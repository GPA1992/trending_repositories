'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
        [
            {
                name: 'root',
                password: '$2a$10$9BRN8/RqRxV5.B2T9P3npOZruw1ZPbJ/5e99D4JXLt.Sp4SH/m1EG', //'adm_password'
                role: 'admin',
            },
        ], {}),

    down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
