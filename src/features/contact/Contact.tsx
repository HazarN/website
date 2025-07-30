import StyledContact from '@features/contact/Contact.styled';
import ContactForm from '@features/contact/ContactForm';
import ContactSvg from '@features/contact/ContactSvg';

function Contact() {
  return (
    <StyledContact>
      <ContactForm />

      <ContactSvg />
    </StyledContact>
  );
}

export default Contact;
