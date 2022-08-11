const saveToLocal = (data: {}) => {
   localStorage.setItem('user', JSON.stringify(data));
};

const loadFromLocal = () => {
   const user = localStorage.getItem('user');
   return user ? JSON.parse(user) : null;
};

const removeFromLocal = () => {
   localStorage.removeItem('user');
};

export {
   saveToLocal as saveUser,
   loadFromLocal as loadUser,
   removeFromLocal as removeUser,
};
