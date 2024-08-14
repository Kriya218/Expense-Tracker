'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Category', [
      {
        id: 1,
        name: '家居物業'
      },
      {
        id: 2,
        name: '交通出行'
      },
      {
        id: 3,
        name: '休閒娛樂'
      },
      {
        id: 4,
        name: '餐飲食品'
      },
      {
        id: 5,
        name: '醫療相關'
      },
      {
        id: 6,
        name: '投資保險'
      },
      {
        id: 7,
        name: '其他支出'
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Category', null)
  }
};
