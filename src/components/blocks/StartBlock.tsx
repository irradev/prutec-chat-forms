import styled from 'styled-components';

import svgClipboard from '../../assets/clipboard.svg';
import svgTime from '../../assets/time.svg';

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 10px;
   @media (max-width: 420px) {
      flex-direction: column-reverse;
   }

   background-color: #bc69aa;
   color: #fff;
   border-radius: 10px;
   margin-bottom: 50px;
   padding: 10px;

   box-shadow: 3px 5px 5px 1px rgba(0, 0, 0, 0.4);
   -webkit-box-shadow: 3px 5px 5px 1px rgba(0, 0, 0, 0.4);
   -moz-box-shadow: 3px 5px 5px 1px rgba(0, 0, 0, 0.4);
`;

const LeftContainer = styled.div`
   flex-grow: 1;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   gap: 10px;
   height: 200px;
`;

const RightContainer = styled.div`
   flex-shrink: 0;
   display: flex;
   justify-content: center;
   align-items: center;

   width: 120px;
`;

const ClipboardImgContainer = styled.img`
   width: 100%;
   filter: invert(1);
`;

const DescriptionContainer = styled.div`
   display: flex;
   justify-content: start;
   align-items: center;
   gap: 5px;
   font-weight: 500;
`;

const TimeSvgContainer = styled.img`
   width: 25px;
   filter: invert(1);
`;

const H1 = styled.h1`
   text-align: left;
   @media (max-width: 570px) {
      text-align: center;
   }
`;

export const StartBlock = () => {
   return (
      <Container>
         <LeftContainer>
            <H1>
               Bienvenido al preregistro de <p>E-Pacientes</p>
            </H1>
            <DescriptionContainer>
               <TimeSvgContainer src={svgTime} />
               <span>Ten calma, no tomará más de 5 minutos.</span>
            </DescriptionContainer>
         </LeftContainer>
         <RightContainer>
            <ClipboardImgContainer src={svgClipboard} />
         </RightContainer>
      </Container>
   );
};
