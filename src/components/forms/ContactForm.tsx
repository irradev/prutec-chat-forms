import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputForm, SubmitButton, TitleForm } from '../ui/FormInputs';
import { LineBreak } from '../../interfaces';
import { getFullMonthES } from '../../utils/getFullMonthES';

// Todo implement input Mask on phone

interface FormInputs {
   email: string;
   phone: string;
}

interface ContactFormProps {
   onSubmitForm: (prop: LineBreak[]) => void;
}

export const ContactForm = ({ onSubmitForm }: ContactFormProps) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormInputs>();

   const [isSubmitted, setIsSubmitted] = useState(false);
   const onSubmit: SubmitHandler<FormInputs> = (data) => {
      let toSend = [
         { nameText: 'Correo electrónico: ', text: data.email },
         { nameText: 'Teléfono: ', text: data.phone },
      ];

      onSubmitForm(toSend);
      setIsSubmitted(true);
   };
   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
               <TitleForm
                  title="Datos de Contacto"
                  subtitle="* Campos requeridos"
               />
               <InputForm errorField={errors.email} required>
                  <input
                     {...register('email', {
                        required: true,
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                     })}
                     type="email"
                     placeholder="Correo electrónico"
                  />
               </InputForm>
               <InputForm errorField={errors.phone} required>
                  <input
                     {...register('phone', {
                        required: true,
                        minLength: 8,
                        maxLength: 14,
                     })}
                     type="number"
                     placeholder="Teléfono"
                  />
               </InputForm>

               <SubmitButton isDisabled={isSubmitted} />
            </fieldset>
         </form>
      </>
   );
};
