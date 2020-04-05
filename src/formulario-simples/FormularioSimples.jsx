import React from 'react';
import { useForm } from 'react-hook-form';
import { FormService } from './form.service';

export default function FormularioSimples() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => FormService.postFormData(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input type="text" name="username" ref={register({ required: true })} />
        {errors.username && <span>Nome do usuario deve ser informado</span>}
      </div>
      <div>
        <input type="text" name="email" ref={register({ required: true })} />
        {errors.email && <span>O email deve ser informado</span>}
      </div>
      <div>
        <input type="submit" name="submit" />
      </div>
    </form>
  );
}