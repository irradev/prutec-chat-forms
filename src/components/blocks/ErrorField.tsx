import styled from 'styled-components';

const Span = styled.span`
   color: #bb0000;
   font-size: 14px;
   font-weight: 500;
`;

export const ErrorField = ({ type }: { type: string }) => {
   switch (type) {
      case 'required':
         return <Span>¡Este campo es obligatorio!</Span>;
      case 'maxLength':
         return <Span>Se ha superado el límite máximo de caracteres</Span>;
      case 'minLength':
         return <Span>El texto es demasiado corto</Span>;
      case 'pattern':
         return <Span>No es un email válido</Span>;

      default:
         return <Span>Problemas en éste campo</Span>;
   }
};
