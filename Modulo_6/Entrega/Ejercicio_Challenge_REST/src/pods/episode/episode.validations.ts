import { ValidationSchema, Validators } from '@lemoncode/fonk';
import { createFormikValidation } from '@lemoncode/fonk-formik';

const validationSchema: ValidationSchema = {
  field: {
    name: [Validators.required],
    airDate: [Validators.required], 
  },
};

export const formValidation = createFormikValidation(validationSchema);
