import React from 'react';
import {useForm} from "react-hook-form";
import {postValidation} from "../validations/postValidation";
import {joiResolver} from "@hookform/resolvers/joi";
export interface PostProps {
	userId: number;
	title: string;
	body: string;
}
const FormComponent = () => {
    const {
        register,
        handleSubmit,
        formState:{
            errors,
            isValid
        }
    }
        = useForm<PostProps>({mode:'all' , resolver: joiResolver(postValidation)})

    const customHandle = (dataFromForm: PostProps) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: dataFromForm.title,
                body: dataFromForm.body,
                userId: dataFromForm.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    };
    return (
        <form onSubmit={handleSubmit(customHandle)}>
            <div>
                <label>
                    <input placeholder={'userId'} type="number" {...register('userId')}/>
                    {errors.userId && <div>{errors.userId.message}</div>}
                </label>
            </div>

            <div>
                <label>
                    <input placeholder={'title'} type="text" {...register('title')}/>
                    {errors.title && <div>{errors.title.message}</div>}
                </label>
            </div>
            <div>
                <label>
                    <input placeholder={'body'} type="text" {...register('body')}/>
                    {errors.body && <div>{errors.body.message}</div>}
                </label>
            </div>
            <button disabled={!isValid}>save</button>
        </form>
    )
        ;
};

export default FormComponent;