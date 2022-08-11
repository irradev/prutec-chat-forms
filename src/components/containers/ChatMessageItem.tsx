import styled from 'styled-components';

import { ChatMessage } from '../ui/ChatMessage';
import { ComponentSelector } from './ComponentSelector';
import { ChatDialog, LineBreak } from '../../interfaces';

import 'animate.css';

const MessageText = styled.p<{ isLineBreaks: boolean }>`
   padding-bottom: ${(props) => (props.isLineBreaks ? '10px' : '0px')};
`;

interface ChatMessageItemProps {
   index: number;
   chat: ChatDialog;
   onSubmit: (prop: LineBreak[]) => void;
   onDone: () => void;
   onReload: () => void;
}

export const ChatMessageItem = ({
   index,
   chat,
   onSubmit,
   onDone,
   onReload,
}: ChatMessageItemProps) => {
   return (
      <ChatMessage
         key={'chat_message_' + index}
         type={chat.type}
         className={`animate__animated  ${
            index > 0 ? 'animate__fadeIn' : 'animate__slideInUp'
         }`}
      >
         <>
            {chat.text && (
               <MessageText isLineBreaks={!!chat.lineBreaks}>
                  {chat.text}
               </MessageText>
            )}

            {chat.lineBreaks &&
               chat.lineBreaks.length > 0 &&
               chat.lineBreaks.map((lineBreak, lbIndex) => (
                  <p key={'lbm_' + index + lbIndex}>
                     {lineBreak.nameText && (
                        <span>
                           <b>{lineBreak.nameText}</b>
                        </span>
                     )}
                     <span>{lineBreak.text}</span>
                  </p>
               ))}

            {chat.component && (
               <ComponentSelector
                  componentName={chat.component}
                  onSubmitForm={onSubmit}
                  onDone={onDone}
                  onReload={onReload}
               />
            )}
         </>
      </ChatMessage>
   );
};
