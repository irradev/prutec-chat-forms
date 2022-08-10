import styled, { keyframes } from 'styled-components';

import imgIAUser from '../../assets/ia_user.png';

const ImageContainer = styled.div`
   position: relative;
`;

const Image = styled.img`
   width: 55px;
   flex-shrink: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #d6bbc0;
   border: 2px solid #af42ae;
   border-radius: 50%;
   box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.8);
   -webkit-box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.8);
   -moz-box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.8);
`;

const pulseAnimation = keyframes`
   0% {
      transform: scale(1);
   }
   50% {
      transform: scale(0.80);
   }
   100% {
      transform: scale(1);
   }
`;

const DotStatus = styled.div`
   background-color: #13d200;
   border: 2px solid #af42ae;
   border-radius: 50%;

   width: 18px;
   height: 18px;
   position: absolute;
   bottom: 0px;
   right: 0px;

   animation: ${pulseAnimation} 2s linear infinite;
`;

export const IAImage = () => {
   return (
      <ImageContainer>
         <Image src={imgIAUser} />
         <DotStatus />
      </ImageContainer>
   );
};
