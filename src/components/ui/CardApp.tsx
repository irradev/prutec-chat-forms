import { ReactElement, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-end;

   background: #d0a3bf;
   color: #000;

   border-radius: 8px;
   padding: 2px;
   width: 100%;
   max-width: 600px;
   height: 80%;

   position: relative;

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

interface CardAppProps {
   children: ReactElement;
}

export const CardApp = ({ children }: CardAppProps) => {
   return <Container>{children}</Container>;
};
