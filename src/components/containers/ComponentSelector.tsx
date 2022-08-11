import styled from 'styled-components';

import { BirthdateForm } from '../forms/BirthdateForm';
import { ContactForm } from '../forms/ContactForm';
import { NameForm } from '../forms/NameForm';

import { LineBreak } from '../../interfaces';
import { ActionChatButtons } from './ActionChatButtons';
import { UserDataBlock } from './UserDataBlock';

const Container = styled.div`
   padding: 10px;
   width: 100%;
`;

interface ComponentSelectorProps {
   componentName: string;
   onSubmitForm: (prop: LineBreak[]) => void;
   onDone: () => void;
   onReload: () => void;
}

export const ComponentSelector = ({
   componentName,
   onSubmitForm,
   onDone,
   onReload,
}: ComponentSelectorProps) => {
   // ? Esta implementación funciona con JS pero con Typescrip no supe cómo...
   // const ListForms: ListForms = {
   //    NameForm,
   //    BirthdateForm,
   //    ContactForm,
   // };

   // const Component = ListForms[componentName];
   // <Component {...onSubmitForm} />;

   return (
      <Container>
         {componentName === 'NameForm' ? (
            <NameForm onSubmitForm={onSubmitForm} />
         ) : componentName === 'BirthdateForm' ? (
            <BirthdateForm onSubmitForm={onSubmitForm} />
         ) : componentName === 'ContactForm' ? (
            <ContactForm onSubmitForm={onSubmitForm} />
         ) : componentName === 'ActionChatButtons' ? (
            <ActionChatButtons onDone={onDone} onReload={onReload} />
         ) : componentName === 'UserDataBlock' ? (
            <UserDataBlock />
         ) : null}
      </Container>
   );
};
