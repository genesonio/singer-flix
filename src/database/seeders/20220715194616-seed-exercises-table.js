'use strict'

const { stringify } = require('querystring')

module.exports = {
  async up(queryInterface, Sequelize) {
    const [categories] = await queryInterface.sequelize.query(
      'SELECT id FROM categories;'
    )

    await queryInterface.bulkInsert('exercises', [
      {
        name: 'Exercício de aquecimento',
        description: 'Lorem ipsum',
        category_id: categories[0].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Exercício de aquecimento',
        description: 'Lorem ipsum',
        category_id: categories[1].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Exercício de aquecimento',
        description: 'Lorem ipsum',
        category_id: categories[2].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Exercício de aquecimento',
        description: 'Lorem ipsum',
        category_id: categories[3].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Exercício de aquecimento',
        description: 'Lorem ipsum',
        category_id: categories[4].id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Exercício de aquecimento',
        description: 'Lorem ipsum',
        category_id: categories[5].id,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('exercises', null, {})
  }
}
