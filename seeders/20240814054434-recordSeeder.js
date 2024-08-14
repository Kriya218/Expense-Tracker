'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let transaction

    try{
      transaction = await queryInterface.sequelize.transaction()
      const hashedPwd = await bcrypt.hash('thisIsPwd', 10);

      await queryInterface.bulkInsert('Users', [
        {
          id: 1,
          name: 'user1',
          email: 'user1@test.com',
          password: hashedPwd,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], { transaction })

      await queryInterface.bulkInsert('Records', [
        {
          id: 1,
          name: '晚餐',
          date: new Date("2024-08-14"),
          amount: 240,
          userId: 1,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], { transaction })

      await transaction.commit()
      console.log('Data inserted.');
    } catch (error) {
      if (transaction) await transaction.rollback()
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null)
  }
};
