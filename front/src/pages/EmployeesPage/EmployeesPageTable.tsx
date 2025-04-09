import { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  SortingState,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { Tooltip } from "@mui/material";
import clsx from "clsx";

import { useStyles } from "./EmployeesPageTable.styles";
import { EmployeeModal } from "./modal/EmployeesPageModal";
import { SortingIcon } from "../../assets/icons";
import { CustomAutocomplete } from "../../components/common/CustomAutocomplete";
import { Employee } from "../../services/Employees/employeesService.types";

const EmployeesTable = ({ data, sorting, onSortingChange, setIsRefresh }:
  { 
    data: Employee[],
    sorting: SortingState,
    onSortingChange: (updater: SortingState | ((old: SortingState) => SortingState)) => void,
    setIsRefresh: React.Dispatch<React.SetStateAction<boolean>>
  }) => {
  const { classes } = useStyles();
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  const columns = [
    {
      accessorKey: "surname",
      header: "Фамилия и имя",
      size: 300,
      cell: ({ row }: { row: any }) => (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span>{row.original.surname + " " + row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "position",
      header: "Должность",
      size: 350,
      cell: ({ row }: { row: any }) => <span>{row.original.position.name}</span>,
    },
    {
      accessorKey: "department",
      header: "Департамент",
      size: 300,
      cell: ({ row }: { row: any }) => (
        <Tooltip 
          title={
            <div>
              <div>{row.original.department.name}</div>
              <div style={{ display: "flex", gap: "10px"}}>
                <p style={{ color: "#888888" }}>Руководитель:</p>
                <p>{row.original.department.directorName}</p>
              </div>
            </div>
          }
          slotProps={{
            tooltip: {
              className: classes.tooltip,
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <span>{row.original.department.shortName}</span>
        </Tooltip>
      ),
    },
    { accessorKey: "email", header: "Почта", size: 340, enableSorting: false },
    { accessorKey: "telegram", header: "Telegram", size: 240, enableSorting: false },
    {
      accessorKey: "onVacation",
      header: "Статус",
      size: 114,
      cell: ({ row }: { row: any }) => {
        return (
          <span className={clsx(classes.status, {active: !row.original.onVacation})}>
            {row.original.onVacation ? "В отпуске" : ""}
          </span>
        )
      },
      enableSorting: false,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const pageSizeOptions = [10, 20, 30, 40, 50].map((size) => ({
    id: size,
    name: `${size}`,
  }));

  return (
    <>
      <table className={classes.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    paddingLeft: "12px",
                    width: `${header.column.getSize()}px`,
                    cursor: header.column.getCanSort() ? "pointer" : "default",
                  }}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getCanSort() && (
                      <div
                      style={{
                        transform: `
                          rotate(${header.column.getIsSorted() === "asc" ? "180deg" : "0deg"}) 
                          scaleX(${header.column.getIsSorted() === "asc" ? -1 : 1})
                        `,
                      }}
                    
                      >
                        <SortingIcon width={"14px"} height={"14px"} fill={header.column.getIsSorted() ? "#3798EA" : "#0000003b"}/>
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
      </table>

      <div className={classes.scrollContainer}>
        <table className={classes.table}>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr 
                key={row.id}
                onClick={() => setSelectedEmployee(row.original)}
                style={{ cursor: "pointer", background: selectedEmployee?.id === row.original.id ? "#f5f5f5" : "white" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f5f5f5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = selectedEmployee?.id === row.original.id ? "#f5f5f5" : "white";
                }}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} style={{ width: `${cell.column.getSize()}px` }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={classes.pagination}>
        <div className={classes.buttons}>
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <span>
            Страница{" "}
            <strong>
              {table.getState().pagination.pageIndex + 1} из {table.getPageCount()}
            </strong>
          </span>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
        </div>
        <div className={classes.pageSizeContainer}>
          <div>Строк на странице:</div>
          <div className={classes.pageSize}>
            <CustomAutocomplete
              multiple={false}
              options={pageSizeOptions}
              values={pageSizeOptions.find(opt => opt.id === table.getState().pagination.pageSize)}
              setValues={(value) => {
                table.setPageSize(value.id);
              }}
              disableClearIcon
            />
          </div>
        </div>
      </div>
      <EmployeeModal 
        employee={selectedEmployee}
        onSave={() => setIsRefresh(true)}
        onClose={() => setSelectedEmployee(null)}
      />
    </>
  );
};

export { EmployeesTable };