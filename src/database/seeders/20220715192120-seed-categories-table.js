'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'Exercício Soprano',
          position: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Exercício Mezzo Soprano',
          position: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Exercício Contralto',
          position: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Exercício Tenor',
          position: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Exercício Barítonos',
          position: 5,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Exercício Baixos',
          position: 6,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {})
  }
}
