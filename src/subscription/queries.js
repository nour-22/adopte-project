const getSub = 'select * from public."subscription"';
const getSubById = 'select * from public."subscription" where id=$1';

module.exports = {
  getSub,
  getSubById,
};
