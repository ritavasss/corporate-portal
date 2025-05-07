import { Controller, useFormContext } from "react-hook-form";
import { FormControllerItem, Props } from "./FormControllerItem";


export const FormController = (props: Props & { id: any }) => {
  const { getFieldState, control } = useFormContext<any>();

  return (
    <Controller
      control={control}
      name={props.id}
      render={({ field }) => {
        const { error } = getFieldState(props.id);
        const hasError = error !== undefined;
        const errorText = error?.message;

        return (
          <FormControllerItem {...{...props, field, hasError, errorText}}
          />
        );
      }}
    />
  );
}
