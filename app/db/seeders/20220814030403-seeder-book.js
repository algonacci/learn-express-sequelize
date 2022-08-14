'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'Harry Potter and the Chamber of Secrets',
          author: 'J.K. Rowling',
          image: '/uploads/harry-potter-1.jpg',
          price: 15000,
          stock: 10,
          user: 1,
          category: 1,
          published: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Harry Potter and the Prisoner of Azkaban',
          author: 'J.K. Rowling',
          image: '/uploads/harry-potter-2.jpg',
          price: 15000,
          stock: 10,
          user: 1,
          category: 1,
          published: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Pyschology of Money",
          author: "Morgan Housel",
          image: "/uploads/money.jpg",
          price: 15000,
          stock: 10,
          user: 1,
          category: 2,
          published: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Autobiography of a Yogi",
          author: "Paramahansa Yogananda",
          image: "/uploads/yogi.jpg",
          price: 15000,
          stock: 10,
          user: 1,
          category: 2,
          published: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
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
