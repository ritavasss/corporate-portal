import clsx from "clsx";
import { Autocomplete, TextField, MenuItem } from "@mui/material";

import { ChevronIcon } from "../../../../assets";
import { useStyles } from "./CustomAutocomplete.styles";

type Props = {
  multiple?: boolean;
  label?: string;
  options: any[];
  values: any[] | any;
  setValues: (value: any) => void;
  disableClearIcon?: boolean;
  hasError?: boolean;
}
const CustomAutocomplete = ({
  multiple,
  label,
  options,
  values,
  setValues,
  disableClearIcon,
  hasError,
}: Props) => {

  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      { label && 
        <div className={classes.lable}>{label}</div> 
      }
      <Autocomplete
        multiple={multiple}
        disableCloseOnSelect={multiple}
        options={options}
        getOptionLabel={(option) => option?.name || ""}
        value={multiple ? values : values ?? null}
        onChange={(_, newValue) => setValues(newValue)}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderInput={(params) => (
          <TextField
            {...params} 
            variant="outlined"
            placeholder={ multiple && values.length ? "Поиск" : "Выберите" }
            className={clsx(classes.textField, { "error": hasError})}
            inputProps={{ ...params.inputProps, readOnly: disableClearIcon ? true : false }}
          />
        )}
        renderOption={(props, option, { selected }) => (
          <MenuItem 
            {...props} 
            key={option.id}
            className={clsx(classes.menuItem, {selected: selected})}
          >
            {option.name}
          </MenuItem>
        )}
        className={classes.autocomplete}
        renderTags={() => multiple && `Выбрано (${values.length})`}
        popupIcon={<ChevronIcon style={{ transform: "rotate(180deg)" }} />}
        disableClearable={disableClearIcon}
      />
    </div>
  )
}
  
export { CustomAutocomplete };