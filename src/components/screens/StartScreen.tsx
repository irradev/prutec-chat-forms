import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useIADialogs } from '../../hooks/useIADialogs';
import { MainLayout } from '../layouts/MainLayout';
import { StartBlock } from '../blocks/StartBlock';
import { ChatMessage } from '../ui/ChatMessage';
import { LoaderWriting } from '../ui/LoaderWriting';
import { DynamicForm } from '../forms/DynamicForm';

import { IADialogsData } from '../../data/iaDialogs';
import { Dialog } from '../../interfaces/Dialog.interface';

import 'animate.css';

const Container = styled.div`
   overflow-y: auto;
   padding: 8px;
   @media (max-width: 600px) {
      padding-left: 4px;
      padding-right: 12px;
   }
`;

const LoaderContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 50px;
`;

export const StartScreen = () => {
   const $container = useRef<HTMLDivElement | null>(null);
   const { activeIaDialog, iaDialogIndex, setNextDialog, isIaWriting } =
      useIADialogs(IADialogsData);

   const [chatDialogs, setChatDialogs] = useState<Dialog[]>([]);

   useEffect(() => {
      if (activeIaDialog) setChatDialogs([...chatDialogs, activeIaDialog]);
      if (activeIaDialog && iaDialogIndex === 0) {
         setNextDialog();
      }
   }, [activeIaDialog]);

   useEffect(() => {
      $container.current?.scrollTo({
         top: $container.current.scrollHeight,
         behavior: 'smooth',
      });
   }, [chatDialogs]);

   return (
      <MainLayout>
         <Container ref={$container}>
            <StartBlock />
            {chatDialogs.map((chat, index) => (
               <ChatMessage
                  key={'chat_message_' + index}
                  type={chat.type}
                  className={`animate__animated  ${
                     index > 0 ? 'animate__fadeIn' : 'animate__slideInUp'
                  }`}
               >
                  <>
                     {chat.text && <span>{chat.text}</span>}
                     {chat.component && (
                        <DynamicForm componentName={chat.component} />
                     )}
                     {/** //? implement message reactions? */}
                  </>
               </ChatMessage>
            ))}
            <LoaderContainer>
               {isIaWriting && <LoaderWriting />}
            </LoaderContainer>
         </Container>
      </MainLayout>
   );
};
