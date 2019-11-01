module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('companyVehicles', [
      {
        model: 'Mitsubishi Canter',
        numberAuto: '7284AS-7',
        consumption: '11 l/100 km',
        bodyType: 'Truck',
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Gazelle',
        numberAuto: '1247MX-4',
        consumption: '10 l/100 km',
        bodyType: 'Truck',
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Gazelle',
        numberAuto: '7480OP-4',
        consumption: '9,8 l/100 km',
        bodyType: 'Truck',
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Volkswagen Caddy',
        numberAuto: '7845AA-7',
        consumption: '8,6 l/100 km',
        bodyType: 'Van',
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Volkswagen Caddy',
        numberAuto: '2348ET-7',
        consumption: '8,7 l/100 km',
        bodyType: 'Van',
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Volkswagen Caddy',
        numberAuto: '9355TO-7',
        consumption: '8,9 l/100 km',
        bodyType: 'Van',
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Volkswagen Caddy',
        numberAuto: '7576KC-7',
        consumption: '8,9 l/100 km',
        bodyType: 'Van',
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Fiat Doblo Cargo',
        numberAuto: '7935EE-5',
        consumption: '7,2 l/100 km',
        bodyType: 'Van',
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Fiat Doblo Cargo',
        numberAuto: '3469CK-2',
        consumption: '7,7 l/100 km',
        bodyType: 'Van',
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Man Tgs',
        numberAuto: '2381AT-7',
        consumption: '22 l/100 km',
        bodyType: 'Tractor unit',
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Isuzu elf 9.5',
        numberAuto: '4398KO-7',
        consumption: '20 l/100 km',
        bodyType: 'Truck',
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Volkswagen Caddy',
        numberAuto: '4219KM-7',
        consumption: '7,0 l/100 km',
        bodyType: 'Van',
        companyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Volkswagen Caddy',
        numberAuto: '2622MA-7',
        consumption: '8,5 l/100 km',
        bodyType: 'Van',
        companyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Peugeot Expert',
        numberAuto: '3743CK-2',
        consumption: '7,7 l/100 km',
        bodyType: 'Van',
        companyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Peugeot Expert',
        numberAuto: '3469CC-7',
        consumption: '8,2 l/100 km',
        bodyType: 'Van',
        companyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Peugeot Expert',
        numberAuto: '8438PM-3',
        consumption: '8,0 l/100 km',
        bodyType: 'Van',
        companyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        model: 'Hyundai HD 120',
        numberAuto: '7395HH-7',
        consumption: '18 l/100 km',
        bodyType: 'Truck',
        companyId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('companyVehicles', null, {});
  }
};

