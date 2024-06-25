import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { TextFieldProps } from '@mui/material';
import { FormInputProps } from '@/types/form';
import TextField from '@/components/base/TextField';

const FormInputText: FC<FormInputProps & TextFieldProps> = ({
  name,
  control,
  label,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="filled"
          {...props}
        />
      )}
    />
  );
};

export default FormInputText;
