import clsx from "clsx";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { ruRU } from '@mui/x-date-pickers/locales';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ru } from 'date-fns/locale';

import { useStyles } from "./CustomDate.styles";
import Moment from "moment";

const customDate = {
  format: ({ val, formatIn = "yyyy-MM-DD", formatOut = "DD.MM.yyyy" }: { val: string | Date; formatIn?: string; formatOut?: string }) => {
    const d = Moment(val instanceof Date ? val : val, formatIn);
    return d.isValid() ? d.format(formatOut) : "";
  }
};

const getDate = (value?: any) => {
  if (typeof value === "string") {
    return new Date(value);
  }

  return null;
};

type Props = {
    label?: string;
    value?: string | null;
    hideLabel?: boolean;
    readOnly?: boolean;
    onChange: (value?: string | null) => void;
    hasError?: boolean;
};

const CustomDate = ({ label, value, readOnly, onChange, hasError }: Props) => {
  const { classes } = useStyles();
  
  const handleChange = (newValue: Date | null) => {
    if (!newValue || isNaN(newValue.getTime())) {
      onChange(null);
    } else {
      const formatted = customDate.format({ 
        val: newValue, 
        formatIn: undefined, 
        formatOut: "yyyy-MM-DD" 
      });
      onChange(formatted);
    }
  };

  return (
    <div className={
      clsx(
        classes.customDate,
        {
          "readOnly": readOnly,
        })}
    >
      <span className={classes.customDateLabel}>{label}</span>
      <LocalizationProvider
        adapterLocale={ru}
        dateAdapter={AdapterDateFns}
        localeText={
          ruRU.components.MuiLocalizationProvider.defaultProps.localeText
        }
      >
        <DatePicker
          className={clsx(classes.datePicker, { "error": hasError })}
          value={getDate(value)}
          views={["year", "month", "day"]}
          onChange={handleChange}
          slotProps={{
            textField: {
              className: classes.textField,
            },
            day: {
              className: classes.day,
            },
            layout: {
              className: classes.layout,
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export { CustomDate };
