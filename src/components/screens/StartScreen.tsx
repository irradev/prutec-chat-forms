import React, { useEffect, useState } from 'react';
import { useIADialogs } from '../../hooks/useIADialogs';
import { MainLayout } from '../layouts/MainLayout';
import { StartBlock } from '../blocks/StartBlock';
import { ChatMessage } from '../ui/ChatMessage';

import { IADialogsData } from '../../data/iaDialogs';
import { Dialog } from '../../interfaces/Dialog.interface';

export const StartScreen = () => {
   const { activeIaDialog, iaDialogIndex, setIaDialogIndex, isIaWriting } =
      useIADialogs(IADialogsData);

   const [chatDialogs, setChatDialogs] = useState<Dialog[]>([]);

   useEffect(() => {
      if (activeIaDialog) setChatDialogs([...chatDialogs, activeIaDialog]);
   }, [activeIaDialog]);

   return (
      <MainLayout>
         <>
            <StartBlock />
            {isIaWriting ? (
               <>Loading...</>
            ) : (
               chatDialogs.map((chat) => (
                  <ChatMessage type={chat.type}>
                     <>
                        <span>{chat.text}</span>
                        {chat.component && <chat.component />}
                        {/** //? implement chat reactions? */}
                     </>
                  </ChatMessage>
               ))
            )}

            <ChatMessage type="User">
               <span>Me llamo Israel</span>
            </ChatMessage>
         </>
      </MainLayout>
   );
};
