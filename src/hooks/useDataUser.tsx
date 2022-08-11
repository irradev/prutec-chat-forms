import { useState } from 'react';
import { loadUser, saveUser, removeUser } from '../api/userApi';
import { LineBreak } from '../interfaces';

export const useDataUser = () => {
   const [userData, setUserData] = useState<LineBreak[]>([]);

   const updateDataUser = (
      lineBreaks: LineBreak[],
      componentName?: string | null
   ) => {
      if (componentName === 'NameForm') {
         setUserData([
            ...userData,
            { nameText: 'Nombre: ', text: lineBreaks[0].text },
         ]);
         return;
      }
      if (componentName === 'BirthdateForm') {
         setUserData([
            ...userData,
            { nameText: 'Fecha de Nacimiento: ', text: lineBreaks[0].text },
         ]);
         return;
      }
      if (componentName === 'ContactForm') {
         setUserData([...userData, ...lineBreaks]);
         return;
      }
   };

   const resetUserData = () => {
      setUserData([]);
      removeUser();
   };

   const saveUserApi = () => {
      const userObject: { [key: string]: any } = {};

      for (const user of userData) {
         if (user.nameText) {
            let propertyName = user.nameText
               .trim()
               .replace(':', '')
               .split(' ')
               .join('_');
            userObject[propertyName] = user.text;
         }
      }
      saveUser(userObject);
   };

   const loadUserApi = () => {
      return loadUser();
   };

   return {
      userData,
      setUserData,
      updateDataUser,
      resetUserData,
      saveUserApi,
      loadUserApi,
   };
};
