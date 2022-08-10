import { ReactElement } from 'react';
import styled from 'styled-components';

import { IAImage } from './IAImage';

import { MessageType } from '../../interfaces/Dialog.interface';

interface StyleMessageProps {
   type: MessageType;
}

const Container = styled.div<StyleMessageProps>`
   display: flex;
   justify-content: ${(props) => (props.type === 'IA' ? 'start' : 'end')};
   align-items: center;
   gap: 10px;

   margin-bottom: 15px;
`;

const MessageContainer = styled.div<StyleMessageProps>`
   background-color: ${(props) =>
      props.type === 'IA' ? '#D6BBC0' : '#BC69AA'};
   color: ${(props) => (props.type === 'IA' ? '#000' : '#fff')};
   font-weight: medium;
   border-radius: 10px;
   padding: 10px;
   max-width: 300px;

   box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.8);
   -webkit-box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.8);
   -moz-box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.8);
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
