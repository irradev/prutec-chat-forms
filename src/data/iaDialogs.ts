import { Dialog } from '../interfaces/Dialog.interface';

export const IADialogsData: Dialog[] = [
   {
      text: '!Hola! Mi nombre es Mia Bot y seré tu asistente virtual durante tu registro.',
      component: null,
      type: 'IA',
   },
   {
      text: '',
      component: 'NameForm',
      type: 'IA',
   },
   {
      text: '¿Cuál es tu fecha de nacimiento?',
      component: 'BirthdateForm',
      type: 'IA',
   },
   {
      text: 'Proporcioname tus datos de contacto',
      component: 'ContactForm',
      type: 'IA',
   },
];
