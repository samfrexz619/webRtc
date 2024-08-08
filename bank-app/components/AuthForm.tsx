'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';


interface AuthFormProps {
  type: string;
}


const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter()

  const formSchema = authFormSchema(type)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ''
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    try {
      // signup with Appwrite & create a plaid token
      if (type === 'sign-up') {
        // const newUser = await signUp(data)
        // setUser(newUser)
      }
      if (type === 'sign-in') {
        // const res = await signIn({
        //   email : data.email,
        //   password: data.password
        // }) 
      }
      // if(res) {
      //   router.push('/')
      // }
    } catch (error) {

    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className='auth-form'>
      <header className="flex-col flex gap-5 md:gap-8">
        <Link href='/' className='mb-12 cursor-pointer flex items-center gap-1'>
          <Image
            src='/icons/logo.svg'
            width={34}
            height={34}
            alt='Horizon logo'
            className='size-[24px] max-xl:size-14'
          />
          <h1 className='sidebar-logo'>Horizon</h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
            {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
          </h1>
          <p className='text-16 font-normal text-gray-600'>
            {user ? 'Link your account to get started' : 'Please enter your details'}
          </p>
        </div>
      </header>

      {user ? (
        <div className='flex flex-col gap-4'>
          {/* plaidLink */}
        </div>

      )
        : (
          <>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {type === 'sign-up' && (
                  <>
                    <div className='w-full flex gap-4'>
                      <CustomInput
                        placeholder='Taylor'
                        type='text'
                        control={form.control}
                        label='First Name'
                        name='firstName'
                        inputId='firstName'
                      />
                      <CustomInput
                        placeholder='ex: Whyte'
                        type='text'
                        control={form.control}
                        label='Last Name'
                        name='lastName'
                        inputId='lastName'
                      />
                    </div>
                    <CustomInput
                      placeholder='Enter your specific address'
                      type='text'
                      control={form.control}
                      label='Address'
                      name='address1'
                      inputId='address'
                    />
                    <CustomInput
                      placeholder='Enter your city'
                      type='text'
                      control={form.control}
                      label='City'
                      name='city'
                      inputId='cty'
                    />
                    <div className='w-full flex gap-4'>
                      <CustomInput
                        placeholder='ex: Lagos'
                        type='text'
                        control={form.control}
                        label='State'
                        name='state'
                        inputId='state'
                      />
                      <CustomInput
                        placeholder='ex: 11101'
                        type='text'
                        control={form.control}
                        label='Postal Code'
                        name='postalCode'
                        inputId='postalCode'
                      />
                    </div>
                    <div className='w-full flex gap-4'>
                      <CustomInput
                        placeholder='yyyy-mm-dd'
                        type='text'
                        control={form.control}
                        label='Date of Birth'
                        name='dateOfBirth'
                        inputId='dob'
                      />
                      <CustomInput
                        placeholder='ex: 1234'
                        type='text'
                        control={form.control}
                        label='SSN'
                        name='ssn'
                        inputId='ssn'
                      />
                    </div>
                  </>
                )}
                <CustomInput
                  placeholder='Enter your mail'
                  type='email'
                  control={form.control}
                  label='Email'
                  name='email'
                  inputId='email'
                />
                <CustomInput
                  placeholder='Enter your password'
                  type='password'
                  control={form.control}
                  label='Password'
                  name='password'
                  inputId='pwd'
                />
                <div className='flex flex-col gap-4'>
                  <Button disabled={isLoading} type="submit" className='form-btn'>
                    {isLoading ?
                      (
                        <>
                          <Loader2 size={20} className='animate-spin' /> &nbsp; Loading...
                        </>
                      )
                      : type === 'sign-in' ? 'Sign In' : 'Sign Up'
                    }
                  </Button>
                </div>
              </form>
            </Form>

            <footer className="flex gap-1 justify-center">
              <p className='text-14 font-normal text-gray-600'>
                {type === 'sign-in' ? 'Don\'t have an account?' : 'Already have an account'}
              </p>
              <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className='form-link'>
                {type === 'sign-in' ? 'Sign-Up' : 'Sign-In'}
              </Link>
            </footer>
          </>
        )}
    </section>
  );
}

export default AuthForm;
