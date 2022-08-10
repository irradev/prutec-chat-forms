import { ReactElement } from 'react';
import styled from 'styled-components';

import { CardApp } from '../ui/CardApp';

const Container = styled.div`
   background-color: #af42ae;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   width: 100%;

   @media (max-width: 600px) {
      height: 100%;
      position: fixed;
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
