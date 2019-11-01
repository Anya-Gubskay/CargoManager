module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('wareOwners', [
      {
        name: 'OOO Invetro',
        phone: '+375297894253',
        email: 'invetro@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OAO MIR',
        phone: '+375297849482',
        email: 'mir@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OOO Luch',
        phone: '+375297142697',
        email: 'luch@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'BioPads',
        phone: '+375296794253',
        email: 'biopads@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OOO Sanata',
        phone: '+375298537543',
        email: 'sanata@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sigma',
        phone: '+375292476486',
        email: 'sigma@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        name: 'Alyumet',
        phone: '+79529346693',
        email: 'alyumet@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        name: 'Fiolent',
        phone: '+375298537543',
        email: 'fiolent@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        name: 'Air-O-Swiss',
        phone: '+375296836081',
        email: 'air-O-Swiss@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        name: 'Brother',
        phone: '+375298537543',
        email: 'brother@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        name: 'Ecoterm',
        phone: '+375297837456',
        email: 'ecoterm@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        name: 'Einhell',
        phone: '2294405375628',
        email: 'einhell@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        name: 'Fiskars',
        phone: '+74951234567',
        email: 'fiskars@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        name: 'Husqvarna',
        phone: '+390815522080',
        email: 'husqvarna@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        name: 'Juki',
        phone: '+206855137649',
        email: 'juki@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('wareOwners', null, {});
  }
};
