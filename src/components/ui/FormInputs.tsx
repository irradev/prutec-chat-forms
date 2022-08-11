import { ReactElement } from 'react';
import styled from 'styled-components';
import { FieldError } from 'react-hook-form';

import { ErrorField } from '../containers/ErrorField';

import svgAsterisk from '../../assets/asterisk.svg';

interface ErrorFieldContainerProps {
   isError: boolean;
}

interface SubmitButtonProps {
   isDisabled: boolean;
}

const Container = styled.div<ErrorFieldContainerProps>`
   margin: 10px 0px;
   position: relative;

   & > input {
      background-color: transparent;
      /*color: #202020;*/
      color: #990021;
      border-color: ${(props) => (props.isError ? '#bb0000' : '#af42ae')};
      border-style: solid;
      border-width: 1px;

      border-radius: 5px;
      font-size: 16px;
      padding: 15px 8px;
      width: 100%;
      outline: none;
   }

   & > input::placeholder {
      /*color: #e11d48;*/
      color: #e90b2c;
      opacity: 1;
   }

   & > input:focus {
      border-color: #ff3553;
      border-style: dashed;
   }
`;
const RequiredMark = styled.img`
   filter: invert(31%) sepia(67%) saturate(3882%) hue-rotate(334deg)
      brightness(107%) contrast(100%);
   width: 20px;
   position: absolute;
   top: 0px;
   right: 5px;
`;

const ErrorFieldContainer = styled.div<ErrorFieldContainerProps>`
   margin-bottom: ${(props) => (props.isError ? '24px' : '0px')};
   padding: 5px 0px;
   height: ${(props) => (props.isError ? '15px' : '0px')};
   opacity: ${(props) => (props.isError ? '1' : '0')};
   transition: all 0.4s ease-out;
`;

const Legend = styled.legend`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 5px;
   width: 100%;
`;

const Subtitle = styled.span`
   color: #1c304a;
   font-size: 14px;
   font-weight: 400;
   font-style: italic;
`;

const SubmitBtnContainer = styled.div`
   display: flex;
   justify-content: end;
   align-itmes: center;
   width: 100%;
`;

const SubmitBtn = styled.button<SubmitButtonProps>`
   color: #fff;
   background-color: #af42ae;
   font-size: 16px;
   font-weight: bold;
   letter-spacing: 0.5px;
   border-style: solid;
   border-width: 1px;
   border-radius: 4px;
   padding: 12px 18px;
   outline: none;

   transition: all 0.15s ease-out;

   ${(props) =>
      props.isDisabled
         ? `

            border-color: #C585B3;

            &:disabled {
               background-color: #D0A3BF;
            }
            `
         : `
            cursor: pointer;
            border-color: #730b73;
            text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);

            &:hover {
               transform: scale(1.1);
            }
            &:active {
               background-color: #730b73;
               transform: scale(1);
            }
            &:focus {
               border-color: #ff3553;
               border-width: 2px;
            }
         `}
`;

interface InputFormsProps {
   children: ReactElement;
   errorField: FieldError | undefined;
   required?: boolean;
}

export const InputForm = ({
   children,
   errorField,
   required = false,
}: InputFormsProps) => {
   return (
      <Container isError={errorField ? true : false}>
         {children}
         <ErrorFieldContainer isError={errorField ? true : false}>
            {errorField && <ErrorField type={errorField.type} />}
         </ErrorFieldContainer>
         {required && <RequiredMark src={svgAsterisk} />}
      </Container>
   );
};

export const SubmitButton = ({ isDisabled }: SubmitButtonProps) => {
   return (
      <SubmitBtnContainer>
         <SubmitBtn type="submit" isDisabled={isDisabled} disabled={isDisabled}>
            Enviar
         </SubmitBtn>
      </SubmitBtnContainer>
   );
};

interface TitleFormProps {
   title: string;
   subtitle: string;
}
export const TitleForm = ({ title, subtitle }: TitleFormProps) => {
   return (
      <Legend>
         <h3>{title}</h3>
         {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Legend>
   );
};
