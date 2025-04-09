import { Autocomplete, TextField, MenuItem } from "@mui/material";
import { ChevronIcon } from "../../../assets/icons";
import { useStyles } from "./CustomAutocomplete.styles";
import clsx from "clsx";

type Props = {
  multiple?: boolean;
  lable?: string;
  options: any[];
  values: any[] | any;
  setValues: (value: any) => void;
  disableClearIcon?: boolean;
}
const CustomAutocomplete = ({
  multiple,
  lable,
  options,
  values,
  setValues,
  disableClearIcon,
}: Props) => {

  const { classes } = useStyles();
  
  return (
    <div className={classes.container}>
      { lable && 
        <div className={classes.lable}>{lable}</div> 
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
            className={classes.textField}
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