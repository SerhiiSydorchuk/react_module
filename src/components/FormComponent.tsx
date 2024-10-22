import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../Validator/user.validator";
interface FormProps {
    username: string
    password: string
    age : number
}

const FormComponent = () => {
 const {
     handleSubmit ,
     register,
     formState:{
     errors,
     isValid
 }
 } = useForm<FormProps>({mode:'all', resolver:joiResolver(userValidator)});

        const customHandler = (data: FormProps) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(customHandler)}>
            <label>
                <input type="text" placeholder={'username'} {...register('username')} />
                {errors.username && <div>{errors.username.message}</div>}
            </label>
            <label>
                <input type="text" placeholder={'password'} {...register('password')} />
                {errors.password && <div>{errors.password.message}</div>}
            </label>
            <label>
                <input type="number" placeholder={'age'} {...register('age')} />
                {errors.age && <div>{errors.age.message}</div>}
            </label>
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export default FormComponent;