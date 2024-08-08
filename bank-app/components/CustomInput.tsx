import React from 'react';
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authFormSchema } from '@/lib/utils';


const formSchema = authFormSchema('sign-up')


interface CustomInputProps {
  label: string;
  name: FieldPath<z.infer<typeof formSchema>>;
  placeholder: string;
  type: string;
  control: Control<z.infer<typeof formSchema>>;
  inputId: string;
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { label, placeholder, type, name, control, inputId } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className='form-item'>
          <FormLabel htmlFor={inputId} className='form-label'>
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input id={inputId} type={type} placeholder={placeholder} className='input-class' {...field} />
            </FormControl>
            <FormMessage className='form-message mt-2'>

            </FormMessage>
          </div>
        </div>
      )}
    />
  );
}

export default CustomInput;
