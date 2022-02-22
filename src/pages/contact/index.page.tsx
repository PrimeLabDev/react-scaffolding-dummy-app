import { Fragment } from 'react';
import ContactForm from '@/modules/ContactForm';
import MainNavigation from '@/components/MainNavigation';
import { StyledContact } from './index.styles';

/**
 *
 * @returns contact page
 */
const Contact = () => {
  return (
    <Fragment>
      <MainNavigation />
      <StyledContact className="flex h-full items-strech">
        <div className="left-section">
          <p className="main-text text-center">We need your Valuable feedback for further improvement</p>
        </div>
        <div className="flex right-section">
          <div className="form-wrapper m-auto w-4/5">
            <h1 className="text-center text-xl text-sky-500	mb-4">Contact us through the form below</h1>
            <ContactForm />
          </div>
        </div>
      </StyledContact>
    </Fragment>
  );
};

export default Contact;
