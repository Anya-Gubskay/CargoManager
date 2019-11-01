module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('wareOwnerAddresses', [
      {
        city: 'Minsk',
        street: 'Pushkina',
        house: '88',
        office: '41',
        wareOwnerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Minsk',
        street: 'Rafieva',
        house: '38',
        office: '417',
        wareOwnerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Grodno',
        street: 'Vaneeva',
        house: '98',
        office: '418',
        wareOwnerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Minsk',
        street: 'Lenina',
        house: '41',
        office: '416',
        wareOwnerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Minsk',
        street: 'Rafieva',
        house: '58',
        office: '416',
        wareOwnerId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Minsk',
        street: 'Timiryazeva',
        house: '168',
        office: '15',
        wareOwnerId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Moscow',
        street: 'Shelepino',
        house: '98',
        office: '23',
        wareOwnerId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Minsk',
        street: 'Instrumentalinaia',
        house: '48',
        office: '2',
        wareOwnerId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Minsk',
        street: 'Timoshenko',
        house: '23',
        office: '11',
        wareOwnerId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Minsk',
        street: 'Tutcheva',
        house: '3',
        office: '2',
        wareOwnerId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Minsk',
        street: 'Skoriny',
        house: '51',
        office: '17',
        wareOwnerId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Goteborg',
        street: 'Wiesenweg',
        house: '61',
        office: '5',
        wareOwnerId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Helsinki',
        street: 'Bathhouse',
        house: '4',
        office: '3',
        wareOwnerId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Göterborg',
        street: 'Timber',
        house: '24',
        office: '5',
        wareOwnerId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        city: 'Tokyo',
        street: 'Tsurumaki',
        house: '2-11',
        office: '1',
        wareOwnerId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('wareOwnerAddresses', null, {});
  }
};
