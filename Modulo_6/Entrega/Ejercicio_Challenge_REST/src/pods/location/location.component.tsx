import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { formValidation } from './location.validations';
import { Location } from './location.vm';
import * as classes from './location.styles';

interface Props {
  location: Location;
}

export const LocationComponent: React.FunctionComponent<Props> = (props) => {
  const { location } = props;

  return (
    <Formik
      onSubmit={()=>{}}
      initialValues={location}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" disabled/>      
          <TextFieldComponent name="dimension" label="Dimension" disabled/>
          <TextFieldComponent name="type" label="Type" disabled/>
        </Form>
      )}
    </Formik>
  );
};
