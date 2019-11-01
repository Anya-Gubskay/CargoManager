module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('consignmentNotes', [
      {
        number: '1000001',
        wareOwner: 'OOO Invetro',
        vehicle: 'Mitsubishi Canter 7284AS-7',
        driver: 'Grivusevich Igor Viktorovich',
        userId: 17,
        companyId: 1,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '1000002',
        wareOwner: 'OAO MIR',
        vehicle: 'Gazelle 1247MX-4',
        driver: 'Grivusevich Igor Viktorovich',
        userId: 17,
        companyId: 1,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '1000003',
        wareOwner: 'OOO Luch',
        vehicle: 'Gazelle 7480OP-4',
        driver: 'Timofeev Aleksandr Petrovich',
        userId: 17,
        companyId: 1,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '1000004',
        wareOwner: 'BioPads',
        vehicle: 'Volkswagen Caddy 7845AA-7',
        driver: 'Morozov Roman Nikolaevich',
        userId: 17,
        companyId: 1,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '1000005',
        wareOwner: 'OOO Invetro',
        vehicle: 'Volkswagen Caddy 2348ET-7',
        driver: 'Morozov Roman Nikolaevich',
        userId: 17,
        companyId: 1,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '1000006',
        wareOwner: 'OOO Sanata',
        vehicle: 'Volkswagen Caddy 9355TO-7',
        driver: 'Kovalevski Roma Leonidovich',
        userId: 17,
        companyId: 1,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '1000007',
        wareOwner: 'Sigma',
        vehicle: 'Volkswagen Caddy 7576KC-7',
        driver: 'Vander Kolya Leonidovich',
        userId: 17,
        companyId: 1,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '1000008',
        wareOwner: 'Alyumet',
        vehicle: 'Fiat Doblo Cargo 7935EE-5',
        driver: 'Kovalevski Jenya Leonidovich',
        userId: 17,
        companyId: 1,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '1000009',
        wareOwner: 'Fiolent',
        vehicle: 'Fiat Doblo Cargo 3469CK-2',
        driver: 'Gomal Olga Viktorovna',
        userId: 18,
        companyId: 1,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '1000010',
        wareOwner: 'Air-O-Swiss',
        vehicle: 'Man Tgs 2381AT-7',
        driver: 'Gomal Olga Viktorovna',
        userId: 18,
        companyId: 1,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '1000011',
        wareOwner: 'Brother',
        vehicle: 'Isuzu elf 9.5 4398KO-7',
        driver: 'Galech Vova Petrovich',
        userId: 18,
        companyId: 1,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '1000012',
        wareOwner: 'Ecoterm',
        vehicle: 'Fiat Doblo Cargo 7935EE-5',
        driver: 'Morozov Roman Nikolaevich ',
        userId: 18,
        companyId: 1,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '1000013',
        wareOwner: 'Einhell',
        vehicle: 'Fiat Doblo Cargo 7935EE-5',
        driver: 'Galech Vova Petrovich',
        userId: 18,
        companyId: 1,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '2000001',
        wareOwner: 'OOO Invetro',
        vehicle: 'Volkswagen Caddy 4219KM-7',
        driver: 'Svist Viktor Igorevich',
        userId: 29,
        companyId: 2,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '2000002',
        wareOwner: 'Fiskars',
        vehicle: 'Volkswagen Caddy 4219KM-7',
        driver: 'Svist Viktor Igorevich',
        userId: 29,
        companyId: 2,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '2000003',
        wareOwner: 'Ecoterm',
        vehicle: 'Peugeot Expert 3743CK-2',
        driver: 'Zirov Vladimir Dmitrievich',
        userId: 29,
        companyId: 2,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '2000004',
        wareOwner: 'Fiolent',
        vehicle: 'Peugeot Expert 3743CK-2',
        driver: 'Svist Viktor Igorevich',
        userId: 29,
        companyId: 2,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '2000005',
        wareOwner: 'OAO MIR',
        vehicle: 'Peugeot Expert 3469CC-7',
        driver: 'Zirov Vladimir Dmitrievich',
        userId: 29,
        companyId: 2,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '2000006',
        wareOwner: 'Fiskars',
        vehicle: 'Hyundai HD 120 7395HH-7',
        driver: 'Zirov Vladimir Dmitrievich',
        userId: 29,
        companyId: 2,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '2000007',
        wareOwner: 'Husqvarna',
        vehicle: 'Hyundai HD 120 7395HH-7',
        driver: 'Svist Viktor Igorevich',
        userId: 29,
        companyId: 2,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '2000008',
        wareOwner: 'OOO Luch',
        vehicle: 'Peugeot Expert 3469CC-7',
        driver: 'Svist Viktor Igorevich',
        userId: 29,
        companyId: 2,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '2000009',
        wareOwner: 'BioPads',
        vehicle: 'Peugeot Expert 3469CC-7',
        driver: 'Zirov Vladimir Dmitrievich',
        userId: 30,
        companyId: 2,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '2000010',
        wareOwner: 'Juki',
        vehicle: 'Hyundai HD 120 7395HH-7',
        driver: 'Svist Viktor Igorevich',
        userId: 30,
        companyId: 2,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '2000011',
        wareOwner: 'OOO Sanata',
        vehicle: 'Volkswagen Caddy 4219KM-7',
        driver: 'Zirov Vladimir Dmitrievich',
        userId: 30,
        companyId: 2,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        number: '2000012',
        wareOwner: 'Juki',
        vehicle: 'Volkswagen Caddy 4219KM-7',
        driver: 'Svist Viktor Igorevich',
        userId: 30,
        companyId: 2,
        status: 'Registered',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('consignmentNotes', null, {});
  }
};
