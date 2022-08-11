import { useState } from 'react';
import styled from 'styled-components';

import { loadUser } from '../../api/userApi';

import svgSync from '../../assets/sync.svg';

import 'animate.css';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   aling-items: center;
   gap: 35px;
   width: 100%;
`;

const DataContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   aling-items: center;
   gap: 15px;

   background-color: #730b73;
   color: #ffc8ea;

   border-radius: 4px;
   font-size: 20px;

   padding: 20px 15px;

   box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.8);
   -webkit-box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.8);
   -moz-box-shadow: 5px 5px 10px -1px rgba(0, 0, 0, 0.8);
`;

const LineText = styled.div`
   display: flex;
   justify-content: flex-start;
   flex-wrap: wrap;
   gap: 4px;
   margin-bottom: 2px;
`;

const Button = styled.button`
   display: inline-block;
   background-color: #defffd;
   color: #141414;
   border: 1px solid #a1a1a1;
   border-radius: 6px;
   padding: 5px 10px;
   cursor: pointer;
   transition: all 0.2s ease-out;

   &:hover {
      transform: scale(1.1);
   }
   &:active {
      transform: scale(1);
   }
`;

const Img = styled.img`
   filter: invert(10%) sepia(5%) saturate(17%) hue-rotate(33deg) brightness(97%)
      contrast(84%);
   width: 50px;
`;

export const UserDataBlock = () => {
   const user = loadUser();
   const [userData, setUserData] = useState(user);

   const onRefreshClick = () => {
      window.location.reload();
   };
   return (
      <Container>
         <DataContainer className="animate__animated animate__bounceIn">
            {userData &&
               Object.keys(userData).map((key, index) => {
                  let dataBold = key.split('_').join(' ') + ': ';
                  let dataText = userData[key];

                  return (
                     <LineText key={'user_data_' + index}>
                        <span>
                           <b>{dataBold}</b>
                        </span>{' '}
                        <span>{dataText}</span>
                     </LineText>
                  );
               })}
         </DataContainer>
         <div
            className="animate__animated animate__fadeInUp animate__delay-2s"
            style={{ margin: '0 auto' }}
         >
            <Button onClick={onRefreshClick}>
               <Img src={svgSync} />
            </Button>
         </div>
      </Container>
   );
};
