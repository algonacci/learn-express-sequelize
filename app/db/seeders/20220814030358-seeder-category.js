"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Fiction",
          user: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Business",
          user: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Biography",
          user: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
