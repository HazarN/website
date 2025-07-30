import emailjs from '@emailjs/browser';

import { AnimatedButton } from '@ui/Button';
import AnimatedForm, { AnimatedFormItem, Input, Label, Textarea } from '@ui/Form';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const listVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

type FormParams = {
  name: string;
  email: string;
  message: string;
};
function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormParams>();

  const send = async (templateParams: FormParams) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      );

      setSuccess(true);
      setError(false);
      reset();
    } catch (err) {
      setSuccess(false);
      setError(true);

      console.info(err);
    }
  };

  return (
    <AnimatedForm
      onSubmit={handleSubmit(send)}
      variants={listVariants}
      initial='initial'
      whileInView='animate'
      viewport={{ amount: 0.1 }}
    >
      <h1>Let's keep in touch</h1>

      <AnimatedFormItem variants={listVariants}>
        <Label>Name</Label>

        <Input type='text' placeholder='John Doe' {...register('name')} />
      </AnimatedFormItem>

      <AnimatedFormItem variants={listVariants}>
        <Label>Email</Label>

        <Input type='text' placeholder='john@example.com' {...register('email')} />
      </AnimatedFormItem>

      <AnimatedFormItem variants={listVariants}>
        <Label>Message</Label>

        <Textarea rows={10} placeholder='Write your message here...' {...register('message')} />
      </AnimatedFormItem>

      <AnimatedButton size='wide' variants={listVariants}>
        Send
      </AnimatedButton>

      {success && <span>Your message has been sent</span>}
      {error && <span>Something went wrong!</span>}
    </AnimatedForm>
  );
}

export default ContactForm;
