'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
    "Cars",
        [
          {
            id:1,
            name: "toyota",
            price: 15000,
            color: "blue",
            available: true
          },
          {
            id:2,
            name: "BMW",
            price: 18000,
            color: "black",
            available: true
          },
          {
            id:3,
            name: "toyota",
            price: 20000,
            color: "white",
            available: true
          },
          {
            id:4,
            name: "ford",
            price: 25000,
            color: "red",
            available: true
          }
        ],{}
        );
        
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
