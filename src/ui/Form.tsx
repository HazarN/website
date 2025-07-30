import { motion } from 'motion/react';
import styled, { css } from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 20px;
`;
const AnimatedForm = motion(Form);

const shared = css`
  padding: 12px;
  border: none;
  border-radius: 5px;
`;
export const Input = styled.input`
  ${shared}
`;
export const Textarea = styled.textarea`
  ${shared}
`;
export const Label = styled.label`
  font-size: 13px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const AnimatedFormItem = motion(FormItem);

export default AnimatedForm;
