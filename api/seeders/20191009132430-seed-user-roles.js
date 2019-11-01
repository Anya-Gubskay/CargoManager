module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('userRoles', [
      {role: 'system administrator', createdAt: new Date(), updatedAt: new Date()},
      {role: 'company administrator', createdAt: new Date(), updatedAt: new Date()},
      {role: 'dispatcher', createdAt: new Date(), updatedAt: new Date()},
      {role: 'manager', createdAt: new Date(), updatedAt: new Date()},
      {role: 'driver', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('UserRoles', null, {});
  }
};
