import { Dialog } from '../interfaces/Dialog.interface';

export const IADialogsData: Dialog[] = [
   {
      text: '!Hola! Mi nombre es Mia Bot y seré tu asistente virtual durante tu registro.',
      component: null,
      type: 'IA',
   },
   {
      text: null,
      component: 'NameForm',
      type: 'IA',
   },
   {
      text: null,
      component: 'BirthdateForm',
      type: 'IA',
   },
   {
      text: null,
      component: 'ContactForm',
      type: 'IA',
   },
   {
      text: 'verificando_datos',
      component: null,
      type: 'IA',
   },
];
