'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../common/error-msg';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  selectedPackage?: number | null;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  phone: yup.string().required().min(4).label("Phone"),
  selectedPackage: yup.number().nullable(),
  message: yup.string().required().min(10).label("Message"),
});

type IProps = {
  selectedPackage?: number | null;
};

const ContactForm = ({selectedPackage}: IProps) => {
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
    reset()
  });
  return (
    <form id="contact-form" onSubmit={onSubmit}>
      <div className="messages"></div>
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <label htmlFor="">Name*</label>
            <input
                type="text"
                placeholder="Your Name*"
                {...register("name")} id='name'
                name='name'
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.name?.message!}/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-40">
            <label htmlFor="">Email*</label>
            <input
                type="email"
                placeholder="Email Address*"
                {...register("email")} id='email'
                name="email"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.email?.message!}/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-40">
            <label htmlFor="">Phone*</label>
            <input
                type="text"
                placeholder="Phone*"
                {...register("phone")} id='phone'
                name="phone"
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.email?.message!}/>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta form-group mb-35">
            <textarea
                placeholder="Your message*"
                {...register("message")} id='message'
                name="message"
            ></textarea>
            <div className="help-block with-errors">
              <ErrorMsg msg={errors.message?.message!}/>
            </div>
          </div>
        </div>
        <input
            type="hidden"
            {...register("selectedPackage")} id='selectedPackage'
            name='selectedPackage'
            value={(selectedPackage) ? selectedPackage : undefined}
        />
        <div className="col-12">
          <button type='submit' className="btn-four tran3s w-100 d-block">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
