import React from 'react';
import {useForm} from "react-hook-form";
import {postValidation} from "../validations/postValidation";
import {joiResolver} from "@hookform/resolvers/joi";
import {getAllPosts, pushPost} from "../services/api.service";
import {PostProps} from "../models/PostModel";

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

    const customHandle = async (dataFromForm: PostProps) => {
        console.log(await pushPost(dataFromForm));
        console.log(await getAllPosts());
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