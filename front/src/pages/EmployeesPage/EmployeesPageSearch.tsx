import { Button, InputAdornment, InputBase, Tooltip } from "@mui/material";
import clsx from "clsx";

import { useStyles } from "./EmployeesPageSearch.styles";
import { ChevronIcon, DisplayCardIcon, DisplayTableIcon, FilterFilledIcon, FilterIcon, ResetIcon, SearchIcon } from "../../assets/icons";

type Props = {
  searchValue: string;
  setSearchValue: (value: string) => void;
  isCollapsedFilters: boolean;
  setIsCollapsedFilters: (value: boolean) => void;
  filtersTouched: number | boolean | undefined;
  view: string;
  setView: (value: string) => void;
  clear: () => void;
  search: () => void;
}
const EmployeesSearch = ({
  searchValue,
  setSearchValue,
  isCollapsedFilters,
  setIsCollapsedFilters,
  filtersTouched,
  view,
  setView,
  clear,
  search,
}: Props) => {
  const { classes } = useStyles();
  
  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      search();
    }
  };

  return (
    <div className={classes.controlsContainer}>
        <InputBase 
          placeholder="Поиск"
          className={classes.searchInput}
          value={searchValue}
          onKeyPress={handleEnter}
          onChange={async (e) => {
            const val = typeof e?.target?.value === "string" ? e.target.value : "";
            setSearchValue(val);
          }}
          endAdornment={(
            <InputAdornment position={"end"}>
              {searchValue && <ResetIcon onClick={clear} />}
              <SearchIcon classes={{ root: classes.searchIcon }} onClick={search} />
            </InputAdornment>
          )}
        />
        <Tooltip title={isCollapsedFilters ? "Показать фильтры" : "Скрыть фильтры"} placement="bottom" classes={{ tooltip: classes.tooltip }}>
          <button 
            onClick={() => setIsCollapsedFilters(!isCollapsedFilters)}
            className={clsx(classes.filterIcon, { noBackground: isCollapsedFilters })}
          >
              {filtersTouched ? <FilterFilledIcon/> : <FilterIcon/>}
              <ChevronIcon 
                className={isCollapsedFilters ? classes.chevronExpand : undefined}
              />
          </button>
        </Tooltip>
        <Button
          className={classes.viewButton}
          style={{
            backgroundColor: view === "cards" ? "#E4F4FF" : "#3798EA",
            border: view === "cards" ? "1px solid #3798EA" : "none",
          }}
          onClick={() => setView("table")}
        >
          <DisplayTableIcon fill={view === "cards" ? "#3798EA" : "white"}/>
        </Button>
        <Button
          className={classes.viewButton}
          style={{
            backgroundColor: view === "table" ? "#E4F4FF" : "#3798EA",
            border: view === "table" ? "1px solid #3798EA" : "none",
          }}
          onClick={() => setView("cards")}
        >
          <DisplayCardIcon fill={view === "table" ? "#3798EA" : "white"}/>
        </Button>
      </div>
  )
}

export { EmployeesSearch };