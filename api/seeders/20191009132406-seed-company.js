module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('companies', [
      {
        name: 'ChUP "Beltranssputnik"',
        contact: 'Kuzmich Dmitriy Ivanovich',
        email: 'KonnekttransV@gmail.com',
        phone: '+375297213827',
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ODO "Komsistem"',
        contact: 'Ivanov Sergey Petrovich',
        email: 'Info@comsystem.by',
        phone: '+375293272506',
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OOO "Elektronnyy vek"',
        contact: 'Sannikov Dmitriy Anatolievich',
        email: 'Prgserg111@gmail.com',
        phone: '+375294212135',
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ODO "ELEKTROTEKh"',
        contact: 'Marchuk Aleksey Mikhaylovich',
        email: 'Dals55@rambler.ru',
        phone: '+375291273059',
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OOO "Evrooptavto"',
        contact:'Floryanovich Ekaterina Viktorovna',
        email: 'Evrooptavto@rambler.ru ',
        phone: '+375291918401',
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OOO "TralEkspress"',
        contact: 'Galko Vadim Dmitrievich',
        email: 'Trael@rambler.ru',
        phone: '+375297572187',
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OOO "Shnayder"',
        contact: 'Shneyder Viktoriya Yuryevna',
        email: 'Shnayder@open.by',
        phone: '+375291059333',
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ChUP "LVO Trans"',
        contact: 'Nichiporenko Yuriy Mikhaylovich',
        email: 'Trans9@open.by',
        phone: '+375297103050',
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ChUP "AlVaKom Trans Servis"',
        contact: 'Komsa Aleksey Vasiliyevich',
        email: 'Aaomhuk1@open.by',
        phone: '+375297028935',
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'ChUP "Artdizo"',
        contact: 'Kopyl Dmitriy Vasiliyevich',
        email: 'Artdizo2@open.by',
        phone: '+375291344889',
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OOO "StroyGarant"',
        contact: 'Sokolova Nataliya Aleksandrovna',
        email: 'Ctstv@open.by',
        phone: '+375298930018',
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OOO "YuD-Trans"',
        contact: 'Volkov Maksim Yuriyevich',
        email: 'Volkov12@open.by',
        phone: '+375294538445',
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OOO "RealAvto-Grupp"',
        contact: 'Olikhver Vladimir Leonidovich',
        email: 'Realavtogrupp@open.by',
        phone: '+375293082550',
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OOO "PS Kromka"',
        contact: 'Khodorchenko Pavel Sergeevich',
        email: 'Pskromkach@open.by',
        phone: '+375295477946',
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'OOO "GrinvudGrupp"',
        contact: 'Kaminskiy Andrey Sergeevich',
        email: 'Grinvudgrupp99@open.by',
        phone: '+375296160201',
        status: 'Active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('companies', null, {});
  }
};

