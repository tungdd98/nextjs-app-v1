import React, { FC } from 'react';
import {
  TextField as MuiTextField,
  SxProps,
  TextFieldProps,
  Theme,
} from '@mui/material';
import merge from 'lodash.merge';

const useStylesTextField = (
  props: TextFieldProps,
): SxProps<Theme> | undefined => {
  const { variant } = props;

  if (variant === 'filled') {
    return {
      borderRadius: 2,
      overflow: 'hidden',
      '& .MuiInputBase-root': {
        backgroundColor: `var(--mui-palette-grey-50)`,
        '&::before, &::after': {
          display: 'none',
        },
      },
      '& .MuiInputBase-input': {
        paddingBlock: 2,
      },
      '& .MuiInputAdornment-root': {
        marginTop: `0px !important`,
      },
    };
  }

  return undefined;
};

const TextField: FC<TextFieldProps> = (props) => {
  const classes = useStylesTextField(props);
  const { sx } = props;
  const customClasses = merge(sx, classes);

  return <MuiTextField sx={customClasses} {...props} />;
};

export default TextField;
