module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('companyAddresses', [
      {
        city: 'Minsk',
        street: 'Pushkina',
        house: '10',
        office: '4',
        companyId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Vitebsk',
        street: 'Chernyakhovskogo',
        house: '32',
        office: '307',
        companyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Gomel',
        street: 'Dostoevskogo',
        house: '1',
        office: '512',
        companyId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Grodno',
        street: 'Puchkova',
        house: '36',
        office: '9',
        companyId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Minsk',
        street: 'Timoshenko',
        house: '44',
        office: '32',
        companyId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Minsk',
        street: 'Matusevicha',
        house: '35',
        office: '12',
        companyId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Minsk',
        street: 'Stroiteley',
        house: '9',
        office: '1',
        companyId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Vitebsk',
        street: 'Tsentralnaya',
        house: '2',
        office: '15',
        companyId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Zaslavl',
        street: 'Studenetskaya',
        house: '2',
        office: '35',
        companyId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Soligorsk',
        street: 'Oktyabrskaya',
        house: '53',
        office: '33',
        companyId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Mogilev',
        street: 'Narodnaya',
        house: '45',
        office: '11',
        companyId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Borisov',
        street: 'Andreeva',
        house: '5',
        office: '7',
        companyId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Minsk',
        street: 'Perekhodnaya',
        house: '66',
        office: '3',
        companyId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Vitebsk',
        street: 'Vatutina',
        house: '42',
        office: '7',
        companyId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Minsk',
        street: 'Yagodnaya',
        house: '7',
        office: '5',
        companyId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('companyAddresses', null, {});
  }
};

