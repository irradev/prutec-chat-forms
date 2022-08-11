import styled from 'styled-components';

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
   return (
      <Container>
         <Button onClick={onReload} className="reloadButton">
            Reiniciar
         </Button>
         <Button onClick={onDone} className="doneButton">
            Continuar
         </Button>
      </Container>
   );
};
