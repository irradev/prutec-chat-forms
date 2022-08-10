import { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
   background-color: #af42ae;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;

   @media (max-width: 600px) {
      height: 100%;
      position: fixed;
   }
`;

const CardApp = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-end;

   background: #d0a3bf;
   color: #000;

   border-radius: 8px;
   padding: 10px;
   width: 100%;
   max-width: 600px;
   max-height: 600px;
   overflow-y: scroll;

   box-shadow: 17px 16px 11px -9px rgba(0, 0, 0, 0.43);
   -webkit-box-shadow: 17px 16px 11px -9px rgba(0, 0, 0, 0.43);
   -moz-box-shadow: 17px 16px 11px -9px rgba(0, 0, 0, 0.43);

   @media (max-width: 600px) {
      height: 100%;
      max-height: 100%;
      box-shadow: none;
      border-radius: 0px;
   }
`;

interface MainLayoutProps {
   children: ReactElement;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
   return (
      <Container>
         <CardApp>{children}</CardApp>
      </Container>
   );
};
