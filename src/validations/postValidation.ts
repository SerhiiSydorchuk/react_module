import Joi from "joi";


export const postValidation = Joi.object({
     userId: Joi.number().min(1).max(10).messages({
          'string.min':'must be greater 0',
          'string.max': "must be 10 or lower"
     }),
     title: Joi.string(),
     body : Joi.string()
})