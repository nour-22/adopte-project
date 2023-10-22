const getAnimaux = 'select * from public."animaux"';
const getAnimauxById = 'select * from public."animaux" where id = $1';
const checkNameExists = 'select a from public."animaux" a where a."Name" = $1';
const addAnimaux = 'insert into public."animaux" values($1,$2,$3)';
const removeAnimaux = 'delete from public."animaux" where id=$1';
const updateAnimaux = 'update public."animaux" set "Name" = $1 where id = $2';

module.exports = {
  getAnimaux,
  getAnimauxById,
  checkNameExists,
  addAnimaux,
  removeAnimaux,
  updateAnimaux,
};
