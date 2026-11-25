import { Joi } from 'celebrate';

export const registerUserSchema = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  }),
};

export const loginUserSchema = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};

export const refreshUserSessionSchema = {
  cookies: Joi.object({
    sessionId: Joi.string().uuid().required(),
    refreshToken: Joi.string().required(),
  }),
};

export const logoutUserSchema = {
  cookies: Joi.object({
    sessionId: Joi.string().uuid().required(),
  }),
};
