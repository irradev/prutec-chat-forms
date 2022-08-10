import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorField } from '../blocks/ErrorField';
import { InputForm, SubmitButton, TitleForm } from '../ui/FormInputs';

interface FormInputs {
   firstName: string;
   secondName: string;
   paternalSurname: string;
   maternalSurname: string;
}

export const NameForm = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm<FormInputs>();

   const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

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
               <InputForm errorField={errors.maternalSurname} required>
                  <input
                     {...register('maternalSurname', {
                        required: true,
                        minLength: 2,
                        maxLength: 30,
                     })}
                     placeholder="Apellido Materno"
                  />
               </InputForm>
               <SubmitButton />
            </fieldset>
         </form>
      </>
   );
};
