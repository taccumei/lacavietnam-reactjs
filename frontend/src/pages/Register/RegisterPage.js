import React from 'react'
import Input from '../../components/Input/Input'
import Title from '../../components/Title/Title'
import classes from './registerPage.module.css'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import { useForm } from 'react-hook-form'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useEffect } from 'react'

export default function RegisterPage() {
  const auth = useAuth();
  const { user } = auth;
  console.log(user);
  const [params] = useSearchParams();
  const returnUrl = params.get('returnUrl');
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    returnUrl ? navigate(returnUrl) : navigate('/');
  }, [user]);

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const submit = async data => { await auth.register(data) };

  return <div className={classes.container}>
    <div className={classes.details}>
      <Title title="Register" />
      <form onSubmit={handleSubmit(submit)} noValidate>
        <Input
          type="text"
          label="Name"
          {...register('name', {
            required: true,
            minLength: 5,
          })}
          error={errors.name}
        />

        <Input
          type="email"
          label="Email"
          {...register('email', {
            required: true,
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
              message: 'Email Is Not valid',
        },
        })}
          error={errors.name}
        />

        <Input 
          type="pasword"
          label="Password"
          {...register('password', {
            required: true,
            minLength: 5,
          })}
          error={errors.name}
        />

        <Input 
          type="pasword"
          label="Confirm Password"
          {...register('confirmPassword', {
            required: true,
            validate: value =>
              value !== getValues('password')
                ? 'Password Do Not Match'
                : true,
          })}
          error={errors.confirmPassword}
        />

        <Input 
          type="address"
          label="Address"
          {...register('address', {
            required: true,
            minLength: 10,
          })}
          error={errors.address}
        />

        <Button type="submit" text="Register" />
        
        <div className={classes.login}>
          Already a user? &nbsp;
          <Link to={`/login${returnUrl ? 'returnUrl=' + returnUrl : ''}`}>
            Login here
          </Link>
        </div>
      </form>
    </div>
  </div>
}
