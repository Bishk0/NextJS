import Head from 'next/head';
import ContactForm from '../components/contact/contact-form';

const ContactPage = (props) => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="Send me your message" />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
