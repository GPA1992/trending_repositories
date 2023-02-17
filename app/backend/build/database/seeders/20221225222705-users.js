'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Visitors', [
        {
            name: 'Elon Musk',
            position: 'Herdeiro',
            Comment: 'Eu nunca vi portfólio tão incrivel assim, você deveria ser o novo CEO do twitter!',
            avatar: 'https://classic.exame.com/wp-content/uploads/2021/04/Elon-Musk.jpg?quality=70&strip=info&w=1024',
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
            name: 'Michael Scott',
            position: 'World Best Boss',
            Comment: 'Ohh GOD! Que portfólio incrivel, você com certeza é mais divertido que o Jim!',
            avatar: 'https://climacomunicacao.com.br/wp-content/uploads/2022/02/24569250png-r-1280-720-f-jpg-q-x-xxyxx.jpg',
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
    ], {}),
    down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
