module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('userAddresses', [
      {
        city: 'Minsk',
        street: 'Rafieva',
        house: '15',
        office: '45',
        userId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Minsk',
        street: 'Vatutina',
        house: '12',
        office: '43',
        userId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Minsk',
        street: 'Malyshchinskaya',
        house: '27',
        office: '119',
        userId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Minsk',
        street: 'Dolginovskiy trakt',
        house: '58',
        office: '23',
        userId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Molodechno',
        street: 'Gorodokskaya',
        house: '4',
        office: '102',
        userId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Minsk',
        street: 'Andreeva',
        house: '6',
        office: '3',
        userId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Minsk',
        street: 'Gyrskogo',
        house: '38',
        office: '17',
        userId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Grodno',
        street: 'Rafieva',
        house: '8',
        office: '28',
        userId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Minsk',
        street: 'Skoriny',
        house: '41',
        office: '16',
        userId: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Grodno',
        street: 'Rafieva',
        house: '58',
        office: '116',
        userId: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Minsk',
        street: 'Skoriny',
        house: '7',
        office: '16',
        userId: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Gomel',
        street: 'Vatutina',
        house: '28',
        office: '46',
        userId: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Minsk',
        street: 'Gyrskogo',
        house: '8',
        office: '41',
        userId: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Minsk',
        street: 'Gorodokskaya',
        house: '4',
        office: '416',
        userId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Gomel',
        street: 'Rafieva',
        house: '9',
        office: '4',
        userId: 31,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Minsk',
        street: 'Vatutina',
        house: '92',
        office: '416',
        userId: 32,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Minsk',
        street: 'Pobedy',
        house: '18',
        office: '28',
        userId: 33,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Grodno',
        street: 'Gorodokskaya',
        house: '11',
        office: '23',
        userId: 34,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('userAddresses', null, {});
  }
};
