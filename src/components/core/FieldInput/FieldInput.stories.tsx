import React from 'react';
import { ComponentMeta } from '@storybook/react';
import withFormik from 'storybook-formik';
import FieldInput from './FieldInput';

export default {
  /**  👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'FieldInput',
  component: FieldInput,
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        name: 'Emmy',
        id: '#knfksdndf',
        type: 'text',
        onChange: () => {
          console.log('input changes');
        },
        placeholder: 'Enter a value',
        className: 'className',
      },
    },
  },
} as ComponentMeta<typeof FieldInput>;
const Template = (args: any) => <FieldInput {...args} />;
export const Default = Template.bind({});
