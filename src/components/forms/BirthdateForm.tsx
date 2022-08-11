import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputForm, SubmitButton, TitleForm } from '../ui/FormInputs';
import { LineBreak } from '../../interfaces';
import { getFullMonthES } from '../../utils/getFullMonthES';

interface FormInputs {
   day: number;
   month: number;
   year: number;
}

interface BirthdateFormProps {
   onSubmitForm: (prop: LineBreak[]) => void;
}

export const BirthdateForm = ({ onSubmitForm }: BirthdateFormProps) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FormInputs>();

   const [isSubmitted, setIsSubmitted] = useState(false);
   const onSubmit: SubmitHandler<FormInputs> = (data) => {
      let text = `${data.day} ${getFullMonthES(Number(data.month))} ${
         data.year
      }`;

      let toSend = [{ nameText: '', text }];

      onSubmitForm(toSend);
      setIsSubmitted(true);
   };
   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
               <TitleForm
                  title="¿Cuál es tu fecha de nacimiento?"
                  subtitle="* Campos requeridos / Introduce solo números"
               />
               <InputForm errorField={errors.day} required>
                  <input
                     {...register('day', {
                        required: true,
                        min: 1,
                        max: 31,
                     })}
                     type="number"
                     placeholder="Día"
                  />
               </InputForm>
               <InputForm errorField={errors.month} required>
                  <input
                     {...register('month', {
                        required: true,
                        min: 1,
                        max: 12,
                     })}
                     type="number"
                     placeholder="Mes"
                  />
               </InputForm>
               <InputForm errorField={errors.year} required>
                  <input
                     {...register('year', {
                        required: true,
                        minLength: 4,
                        maxLength: 4,
                        min: 1900,
                        max: new Date().getFullYear(), // ? Para mayores restar - 18
                     })}
                     type="number"
                     placeholder="Año"
                  />
               </InputForm>

               <SubmitButton isDisabled={isSubmitted} />
            </fieldset>
         </form>
      </>
   );
};
