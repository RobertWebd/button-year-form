import { useForm, SubmitHandler } from 'react-hook-form';
import { FormWrapper, RedText, StyledForm, StyledInput, SubmitButton, SubmitResult } from './FormPage.styled';
import { useState } from 'react';
import { FormInput } from '../../types';

export const FormPage = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailOptions = {
    required: 'Email is required',
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/,
      message: 'Invalid email format',
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    setFirstName(data.firstName);
    setEmail(data.email);
    setPassword(data.password);
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <StyledInput {...register('firstName', { required: 'First Name is required' })} errorbg={errors.firstName && '1px solid rgb(153, 0, 0)'} />
        <RedText>{errors.firstName?.message}</RedText>
        <label>Email</label>
        <StyledInput {...register('email', emailOptions)} errorbg={errors.email && '1px solid rgb(153, 0, 0)'} />
        <RedText>{errors.email?.message}</RedText>
        <label>Password</label>
        <StyledInput type="password" {...register('password', { required: 'Password is required' })} errorbg={errors.password && '1px solid rgb(153, 0, 0)'} />
        <RedText>{errors.password?.message}</RedText>
        <SubmitButton>Submit</SubmitButton>
      </StyledForm>
      <SubmitResult>
        <div>Your First Name: {firstName} </div>
        <div>Your Email: {email}</div>
        <div>Your Password: {password}</div>
      </SubmitResult>
    </FormWrapper>
  );
};
