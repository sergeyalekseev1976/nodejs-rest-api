const {Schema, model} = require('mongoose');
const {mongooseError} = require('../helpers')
const Joi = require("joi");

const contactSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
  );

  contactSchema.post('save', mongooseError)
  

const addSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(6).required(),
});

const updateSchema = Joi.object({
  name: Joi.string().min(3),
  email: Joi.string().email(),
  phone: Joi.string().min(6),
}).min(1);

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
  });

const Contact = model('contact', contactSchema);
 
    module.exports = { addSchema, updateSchema, updateFavoriteSchema, Contact};
