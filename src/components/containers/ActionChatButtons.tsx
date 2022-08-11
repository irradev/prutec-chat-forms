import { useState } from 'react';
import styled from 'styled-components';

import 'animate.css';

interface ActionChatButtonsProps {
   onDone: () => void;
   onReload: () => void;
}
const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 50px;
   width: 100%;
   overflow: hidden;
   height: 55px;
`;

const Button = styled.button`
   border-radius: 8px;
   font-size: 18px;
   font-weight: bold;
   letter-spacing: 0.5px;
   border-style: solid;
   border-width: 1px;
   padding: 12px;
   width: 150px;
   cursor: pointer;
   transition: all 0.2s ease-out;

   &:hover {
      transform: scale(1.1);
   }
   &:active {
      transform: scale(1);
   }

   &.doneButton {
      background-color: #af42ae;
      color: #fff;
      border-color: #852884;
   }

   &.reloadButton {
      background-color: #ff3553;
      color: #fff;
      border-color: #cb223b;
   }
`;

export const ActionChatButtons = ({
   onDone,
   onReload,
}: ActionChatButtonsProps) => {
   const [isClicked, setIsClicked] = useState(false);

   const handleClick = (type: 'reload' | 'continue') => {
      setIsClicked(true);
      if (type === 'reload') {
         onReload();
      } else if (type === 'continue') {
         onDone();
      }
   };
   return (
      <Container>
         <Button
            onClick={() => handleClick('reload')}
            className={`reloadButton ${
               isClicked ? 'animate__animated animate__fadeOutLeft' : ''
            }`}
         >
            Reiniciar
         </Button>
         <Button
            onClick={() => handleClick('continue')}
            className={`doneButton ${
               isClicked ? 'animate__animated animate__fadeOutRight' : ''
            }`}
         >
            Continuar
         </Button>
      </Container>
   );
};
