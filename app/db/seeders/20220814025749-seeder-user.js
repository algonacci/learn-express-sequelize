"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin",
          email: "admin@bookstore.com",
          password: bcrypt.hashSync("admin", bcrypt.genSaltSync(10)),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eric",
          email: "eric@bookstore.com",
          password: bcrypt.hashSync("eric", bcrypt.genSaltSync(10)),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
