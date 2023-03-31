import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import { TextFieldComponent, SelectComponent } from 'common/components';
import { Lookup } from 'common/models';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  status: Lookup[];
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, status, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" disabled/>
          <TextFieldComponent name="picture" label="Picture" disabled/>
          <TextFieldComponent name="location" label="Location" disabled/>
          <SelectComponent name="status" label="Status" items={status} disabled/>           
          <TextFieldComponent name="species" label="Species" disabled/>
          <TextFieldComponent name="type" label="Type" disabled/>
          <TextFieldComponent name="gender" label="Gender" disabled/>
        </Form>
      )}
    </Formik>
  );
};
