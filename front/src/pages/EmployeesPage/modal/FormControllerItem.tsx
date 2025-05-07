import clsx from "clsx";
import { InputBase } from "@mui/material";

import { CustomAutocomplete, CustomDate } from "@/modules/common/components";
import { useStyles } from "./EmployeesPageModal.styles";

export type Props = {
  label?: string;
  items?: any[];
  placeholder?: string;
  data?: boolean;
  readOnly?: boolean;
  multiline?: boolean;
  rows?: number;
};

type PropsEx = Props & {
  field: any;
  hasError: boolean;
  errorText?: string;
};

export const FormControllerItem = ({
  field,
  label,
  items = [],
  placeholder,
  data,
  hasError,
  errorText,
  readOnly,
  multiline = false,
  rows = 1,
}: PropsEx) => {
  const { classes } = useStyles();
  const isSelect = Array.isArray(items) && items.length > 0;

  if (data) {
    return (
      <>
        <CustomDate
          label={label}
          value={field.value}
          onChange={field.onChange}
          readOnly={readOnly}
          hasError={hasError ? true : false}
        />
        {hasError && <div className={classes.errorText}>{errorText}</div>}
      </>
    );
  }

  if (isSelect) {
    if (readOnly) {
      return <span>{field.value?.name}</span>;
    }
    return (
      <>
        <CustomAutocomplete
          label={label}
          options={items}
          values={field.value}
          setValues={field.onChange}
          hasError={hasError ? true : false}
        />
        {hasError && <div className={classes.errorText}>{errorText}</div>}
      </>
    );
  }

  if (readOnly) {
    return <span>{field.value || "-"}</span>;
  }

  return (
    <>
      <InputBase
        className={clsx(classes.input, {multilineInput: multiline, hasError: hasError})}
        placeholder={placeholder}
        value={field.value}
        onChange={field.onChange}
        multiline={multiline}
        rows={rows}
      />
      {hasError && <div className={classes.errorText}>{errorText}</div>}
    </>
  );
};