import React from 'react';
import { Form, Formik } from 'formik';
import Label from '@/components/core/Label';
import Input from '@/components/core/FieldInput/FieldInput';
import Button from '@/components/core/Button';

import { StyledContactForm } from './index.styles';

const ContactForm = () => {
  /**
   * Submit form handler.
   * @param values user object
   */

  return (
    <StyledContactForm>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        }}
        validationSchema=""
        onSubmit={() => {}}
      >
        {({ errors, touched }) => (
          <Form>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" name="firstName" placeholder="John" className="mb-3" />
            {errors.firstName && touched.firstName ? <div className="text-red-500">{errors.firstName}</div> : null}
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" name="lastName" placeholder="Doe" className="mb-3" />
            {errors.lastName && touched.lastName ? <div className="text-red-500">{errors.lastName}</div> : null}
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="john@acme.com" type="email" className="mb-3" />
            {errors.email && touched.email ? <div className="text-red-500">{errors.email}</div> : null}
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="Enter subject" type="subject" className="mb-3" />
            {errors.subject && touched.subject ? <div className="text-red-500">{errors.subject}</div> : null}
            <Label htmlFor="message">Message</Label>
            <Input id="message" name="message" placeholder="message" type="text" className="mb-3" />
            {errors.message && touched.message ? <div className="text-red-500">{errors.message}</div> : null}
            <Button className="btn" disabled={Object.keys(errors).length > 0} type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </StyledContactForm>
  );
};
export default ContactForm;
