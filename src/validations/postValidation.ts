import Joi from "joi";


export const postValidation = Joi.object({
     userId: Joi.number().min(1).messages({
          'string.min':'must be greater 0'
     }),
     title: Joi.string(),
     body : Joi.string()
})