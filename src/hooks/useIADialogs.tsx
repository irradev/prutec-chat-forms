import { useEffect, useState } from 'react';

import { Dialog } from '../interfaces/Dialog.interface';

export const useIADialogs = (dialogs: Dialog[] = []) => {
   const [iaDialogIndex, setIaDialogIndex] = useState(0);
   const [iaDialogs, setIaDialogs] = useState<Dialog[]>(dialogs);
   const [activeIaDialog, setActiveIaDialog] = useState<Dialog | null>();
   const [isIaWriting, setIsIaWriting] = useState(false);

   useEffect(() => {
      let seconds = 2;
      setIsIaWriting(true);

      let delayWriting = setInterval(() => {
         clearInterval(delayWriting);
         setIsIaWriting(false);
         setActiveIaDialog(iaDialogs[iaDialogIndex]);
      }, seconds * 1000);

      return () => clearInterval(delayWriting);
   }, [iaDialogIndex]);

   return {
      activeIaDialog,
      iaDialogs,
      setIaDialogs,
      iaDialogIndex,
      setIaDialogIndex,
      isIaWriting,
   };
};
