import { ReactElement } from 'react';
import styled from 'styled-components';

import { IAImage } from './IAImage';

import { MessageType } from '../../interfaces/Dialog.interface';

interface StyleMessageProps {
   type: MessageType;
}

const Container = styled.div<StyleMessageProps>`
   display: flex;
   justify-content: ${(props) =>
      props.type === 'IA' ? 'start' : props.type === 'User' ? 'end' : 'center'};
   align-items: center;
   gap: 10px;

   margin-bottom: 25px;
`;

const MessageContainer = styled.div<StyleMessageProps>`
   border-radius: 10px;
   padding: 10px;
   max-width: 95%;

   ${(props) =>
      props.type === 'IA' &&
      `
         background-color: #D6BBC0;
         color: #000;
      `}

   ${(props) =>
      props.type === 'User' &&
      `
         background-color: #AF42AE;
         color: #fff;
      `}
   
   ${(props) =>
      props.type === 'UI' &&
      `
      background-color: transparent;
      width: 100%;
   `}

   ${(props) =>
      props.type !== 'UI' &&
      `
      box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.8);
      -webkit-box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.8);
      -moz-box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.8);
   `}
`;

interface ChatMessageProps {
   type: MessageType;
   className?: string;
   children: ReactElement;
}

export const ChatMessage = ({
   type,
   className = '',
   children,
}: ChatMessageProps) => {
   return (
      <Container type={type} className={className}>
         {type === 'IA' && <IAImage />}
         <MessageContainer type={type}>{children}</MessageContainer>
      </Container>
   );
};
