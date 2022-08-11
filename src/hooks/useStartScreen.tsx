import { useEffect, useState } from 'react';
import { useDataUser, useIADialogs } from './';
import { IADialogsData } from '../data/iaDialogs';
import { ChatDialog, LineBreak } from '../interfaces';
import { dataToLineBreaks } from '../utils/dataToLineBreaks';

export const useStartScreen = () => {
   const {
      activeIaDialog,
      iaDialogIndex,
      setNextDialog,
      isIaWriting,
      resetIaDialogs,
   } = useIADialogs(IADialogsData);

   const {
      userData,
      setUserData,
      updateDataUser,
      resetUserData,
      saveUserApi,
      loadUserApi,
   } = useDataUser();

   const [chatDialogs, setChatDialogs] = useState<ChatDialog[]>([]);

   const addChatDialogs = (dialogs: ChatDialog[]) => {
      setChatDialogs([...chatDialogs, ...dialogs]);
   };

   const onSubmit = (lineBreaks: LineBreak[]) => {
      addChatDialogs([
         {
            text: null,
            component: null,
            type: 'User',
            lineBreaks,
         },
      ]);
      setNextDialog();

      updateDataUser(lineBreaks, activeIaDialog?.component);
   };

   const onDone = () => {
      saveUserApi();
      addChatDialogs([
         {
            text: null,
            component: 'UserDataBlock',
            type: 'UI',
         },
      ]);
   };

   const onReload = () => {
      setChatDialogs([chatDialogs[0]]);
      resetUserData();
      resetIaDialogs();
   };

   useEffect(() => {
      if (activeIaDialog) {
         let newChatDialog: ChatDialog[] = [activeIaDialog];
         if (activeIaDialog.text === 'verificando_datos') {
            newChatDialog = [
               {
                  text: 'Si tus datos son correctos, porfavor continuemos:',
                  component: null,
                  lineBreaks: userData,
                  type: 'IA',
               },
               {
                  text: '',
                  component: 'ActionChatButtons',
                  type: 'UI',
               },
            ];
         }

         if (iaDialogIndex === 1) {
            const loadUser = loadUserApi();
            if (loadUser) {
               let dataWithLineBreaks = dataToLineBreaks(loadUser);
               setUserData(dataWithLineBreaks);
               newChatDialog = [
                  {
                     text: 'Se encontraron datos previamente guardados ¿Qué deseas hacer?',
                     component: null,
                     lineBreaks: dataWithLineBreaks,
                     type: 'IA',
                  },
                  {
                     text: '',
                     component: 'ActionChatButtons',
                     type: 'UI',
                  },
               ];
            }
         }

         addChatDialogs(newChatDialog);

         if (iaDialogIndex === 0) {
            setNextDialog();
         }
      }
   }, [activeIaDialog]);

   return {
      isIaWriting,
      chatDialogs,
      onSubmit,
      onDone,
      onReload,
   };
};
