import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { LineBreak } from '../../interfaces';
import { InputForm, SubmitButton, TitleForm } from '../ui/FormInputs';

interface FormInputs {
   firstName: string;
   secondName: string;
   paternalSurname: string;
   maternalSurname: string;
}

interface NameFormProps {
   onSubmitForm: (prop: LineBreak[]) => void;
}

export const NameForm = ({ onSubmitForm }: NameFormProps) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormInputs>();

   const [isSubmitted, setIsSubmitted] = useState(false);
   const onSubmit: SubmitHandler<FormInputs> = (data) => {
      let text = '';
      text += data.firstName;
      if (data.secondName.length > 0) text += ' ' + data.secondName;
      text += ` ${data.paternalSurname} ${data.maternalSurname}`;

      let toSend = [{ nameText: '', text }];
      onSubmitForm(toSend);
      setIsSubmitted(true);
   };

   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
               <TitleForm
                  title="¿Cuál es tu nombre?"
                  subtitle="* Algunos campos son requeridos"
               />
               <InputForm errorField={errors.firstName} required>
                  <input
                     {...register('firstName', {
                        required: true,
                        minLength: 2,
                        maxLength: 30,
                     })}
                     placeholder="Primer Nombre"
                  />
               </InputForm>
               <InputForm errorField={errors.secondName}>
                  <input
                     {...register('secondName', {
                        required: false,
                        minLength: 2,
                        maxLength: 30,
                     })}
                     placeholder="Segundo Nombre"
                  />
               </InputForm>
               <InputForm errorField={errors.paternalSurname} required>
                  <input
                     {...register('paternalSurname', {
                        required: true,
                        minLength: 2,
                        maxLength: 30,
                     })}
                     placeholder="Apellido Paterno"
                  />
               </InputForm>
               <InputForm errorField={errors.maternalSurname}>
                  <input
                     {...register('maternalSurname', {
                        minLength: 2,
                        maxLength: 30,
                     })}
                     placeholder="Apellido Materno"
                  />
               </InputForm>

               <SubmitButton isDisabled={isSubmitted} />
            </fieldset>
         </form>
      </>
   );
};
