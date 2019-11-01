module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('warehouses', [
      {
        warehouseName: 'LLC Eurosklad Service',
        address: 'Belarus, Slutsk 10 km',
        phone: '+375445402336',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'LLC " Evrologistik"',
        address: 'Belarus, Mogilev, 10 km',
        phone: '+375296781551',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'Rosterminals SIA',
        address: 'Latvia, Riga - Sebezh, 0 km',
        phone: '+37125900541',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'LLC Optimist',
        address: 'Russia, Gorky highway, Nosovikhinskoye highway, Yegoryevskoye highway, 18 km',
        phone: '89153003398',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'Vector Highway 19/1',
        address: 'Russia, Novosibirsk Region, Novosibirsk, 0 km',
        phone: '+79529363693',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
        warehouseName: 'NOOR AL ZAMAN GENERAL TRADING LLC',
        address: 'O.A.E., Dubai, Dubai Airport, 1 km',
        phone: '+971528524004',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'Warehouse Complex Dmitrov',
        address: 'Russia, Moscow and Moscow Region, Dmitrov, 0 km',
        phone: '+79296806303',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'Warehouse complex Yekaterinburg',
        address: 'Russia, Sverdlovsk Region, Yekaterinburg, 0 km',
        phone: '+79294803651',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'Delta, LLC',
        address: 'Russia, Novosibirsk Region, Novosibirsk, 0 km',
        phone: '88005005401',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'Trade and logistics complex Eurosklad Service',
        address: 'Belarus, Slutsk direction, ag. Mikhanovichi, 10 km',
        phone: '+375296048822',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'FACTORY OF HANGARS, WAREHOUSES ★★★',
        address: 'Belarus, Minsk region, Minsk, 0 km',
        phone: '+375336582910',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'Storage B142',
        address: 'Russia, Moscow and Moscow Region, Moscow, Volokolamskoe sh, 1.5 km',
        phone: '+79167188024',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'Delta',
        address: 'Russia, Novosibirsk Region, Novosibirsk, 0 km',
        phone: '88005005401',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'Brokbridge',
        address: 'Ukraine, Kiev region, Kiev, 0 km',
        phone: '+380442091007',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'Rent a warehouse on the border with Poland',
        address: 'Belarus, Brest region, Brest, 0 km',
        phone: '+375297288080',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'Narva Logistics',
        address: 'Estonia, Estonia, Narva, 2 km',
        phone: '+37256632117',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'Mountain ash 65',
        address: 'Russia, Moscow, Mozhayskoye Highway, 0 km',
        phone: '+74956405526',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'Responsible storage',
        address: 'Belarus, Minsk region, Minsk, Frunze District, 0 km',
        phone: '+375299070537',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'Belimporttorg OJSC',
        address: 'Belarus, Brest, CIS, 0 km',
        phone: '+375336708186',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'PSK Housewarming',
        address: 'Russia, Saint Petersburg, WHEN, 2 km',
        phone: '+79214244747',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'Customs warehouse of CJSC Duan',
        address: 'Lithuania, Vilnius, Klaipeda-Vilnius-Minsk, 5 km',
        phone: '+37060900264',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        warehouseName: 'Mozyr branch of ODO TUT and TAM Logistics',
        address: 'Belarus, Mazyr, Pritytskogo st., 46, 0 km',
        phone: '+375172619617',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('warehouses', null, {});
  }
};

