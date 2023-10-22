const addUser = 'insert into public."user" values($1,$2,$3,$4)';
const updatUser =
  'update public."user" set "card_number" = $1, cvv = $2 where id = $3';
const getUsers = 'select * from public."user"';
const getUserById = 'select * from public."user" where id = $1';

module.exports = {
  addUser,
  updatUser,
  getUsers,
  getUserById,
};
