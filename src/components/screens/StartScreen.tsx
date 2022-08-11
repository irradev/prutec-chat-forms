import { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { useStartScreen } from '../../hooks';

import { MainLayout } from '../layouts/MainLayout';
import { StartBlock } from '../containers/StartBlock';
import { ChatMessageItem } from '../containers/ChatMessageItem';
import { LoaderWriting } from '../ui/LoaderWriting';

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
   const { isIaWriting, chatDialogs, onSubmit, onDone, onReload } =
      useStartScreen();

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
               <ChatMessageItem
                  key={'chat_message_' + index}
                  {...{ index, chat, onSubmit, onDone, onReload }}
               />
            ))}
            <LoaderContainer>
               {isIaWriting && <LoaderWriting />}
            </LoaderContainer>
         </Container>
      </MainLayout>
   );
};
