import * as React from 'react';
import { TextField } from '@fluentui/react/lib/TextField';
import { IComponent1Props } from './IComponent1Props';




export const Component1: React.FunctionComponent<IComponent1Props> = (
    props
) => {
  return (

          <TextField
            label="Password with reveal button"
            placeholder='My First Control'
            value={ props.context.parameters.sampleProperty.raw!}
          />    
  );
};
