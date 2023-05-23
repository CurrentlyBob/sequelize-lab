'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const date = new Date()

    await queryInterface.bulkInsert('Dogs', [{
      name: 'Stella',
      breed: 'Pit',
      age: 3,
      createdAt: date,
      updatedAt: date,
    }])
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Dogs', null, {})
  }
};
