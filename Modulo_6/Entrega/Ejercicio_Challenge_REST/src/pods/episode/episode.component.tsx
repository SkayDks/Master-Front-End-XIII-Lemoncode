import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { formValidation } from './episode.validations';
import { Episode } from './episode.vm';
import * as classes from './episode.styles';

interface Props {
  episode: Episode;
}

export const EpisodeComponent: React.FunctionComponent<Props> = (props) => {
  const { episode } = props;

  return (
    <Formik
      onSubmit={()=>{}}
      initialValues={episode}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" disabled/>
          <TextFieldComponent name="episode" label="Episode" disabled/>           
          <TextFieldComponent name="season" label="Season" disabled/>
          <TextFieldComponent name="airDate" label="Air Date" disabled/>
        </Form>
      )}
    </Formik>
  );
};
