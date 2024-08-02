const add = document.querySelector('#add');
const get = document.querySelector('#get');
const deleteUser = document.querySelector('#deleteUser');
const find = document.querySelector('#find');
const p = document.querySelector('#foundUsers');
class UserManager {
   _users = [];

   addUser(name) {
      this._users.push(name);
      return this._users.length - 1;
   }
   getUser(id){
      if(this._users[id]){
          return this._users[id];
      }
     else{
      return null
     }
   }
   deleteUser(id){
      if(this._users[id]){
         this._users.splice(id, 1);
         return true;
      }
      else{
         return false;
      }
   }
   findUser(name){
      let users = ''
      for(let elem of this._users){
         if(elem === name){
            users += elem +','
         }
      }
      return users;
   }
}
let userManager = new UserManager();



add.addEventListener('keydown', (e) => {
if(e.key === 'Enter'){
alert(userManager.addUser(add.value));
add.value = '';
}
})

get.addEventListener('keydown', (e) => {
   if(e.key === 'Enter'){
      alert(userManager.getUser(get.value));
      get.value = '';
   }
})

deleteUser.addEventListener('keydown', (e) => {
   if(e.key === 'Enter'){
      alert(userManager.deleteUser(deleteUser.value));
      deleteUser.value = '';
   }
})

find.addEventListener('keydown', (e) => {
   if(e.key === 'Enter'){
      let users = userManager.findUser(find.value);
      p.innerHTML = users
      find.value = '';
   }  
})