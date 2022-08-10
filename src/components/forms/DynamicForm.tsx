import styled from 'styled-components';

import { BirthdateForm } from '../forms/BirthdateForm';
import { ContactForm } from '../forms/ContactForm';
import { NameForm } from '../forms/NameForm';

const FormContainer = styled.div`
   padding: 10px;
`;

interface ListForms {
   [key: string]: () => JSX.Element;
}

interface DynamicFormProps {
   componentName: string;
}

export const DynamicForm = ({ componentName }: DynamicFormProps) => {
   const ListForms: ListForms = {
      NameForm,
      BirthdateForm,
      ContactForm,
   };

   const Component = ListForms[componentName];

   return (
      <FormContainer>
         <Component />
      </FormContainer>
   );
};
