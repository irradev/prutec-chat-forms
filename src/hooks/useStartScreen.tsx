import { useEffect, useState } from 'react';
import { useDataUser, useIADialogs } from './';
import { IADialogsData } from '../data/iaDialogs';
import { ChatDialog, LineBreak } from '../interfaces';

export const useStartScreen = () => {
   const { activeIaDialog, iaDialogIndex, setNextDialog, isIaWriting } =
      useIADialogs(IADialogsData);
   const { userData, updateDataUser, saverUserApi, loadUserApi } =
      useDataUser();

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
      saverUserApi();
      addChatDialogs([
         {
            text: null,
            component: 'UserDataBlock',
            type: 'UI',
         },
      ]);
   };

   const onReload = () => {
      // const userObject: {} = loadUserApi();
   };
   const onLoad = () => {
      console.log(loadUserApi());
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
