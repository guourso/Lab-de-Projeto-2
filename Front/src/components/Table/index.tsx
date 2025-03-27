import * as React from "react";
import {
  TableWrapper,
  StyledTable,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "./style";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <TableWrapper>
    <StyledTable ref={ref} className={className} {...props} />
  </TableWrapper>
));
Table.displayName = "Table";

const TableHeaderComponent = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <TableHeader ref={ref} className={className} {...props} />
));
TableHeaderComponent.displayName = "TableHeader";

const TableBodyComponent = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <TableBody ref={ref} className={className} {...props} />
));
TableBodyComponent.displayName = "TableBody";

const TableFooterComponent = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <TableFooter ref={ref} className={className} {...props} />
));
TableFooterComponent.displayName = "TableFooter";

const TableRowComponent = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <TableRow ref={ref} className={className} {...props} />
));
TableRowComponent.displayName = "TableRow";

const TableHeadComponent = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <TableHead ref={ref} className={className} {...props} />
));
TableHeadComponent.displayName = "TableHead";

const TableCellComponent = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <TableCell ref={ref} className={className} {...props} />
));
TableCellComponent.displayName = "TableCell";

const TableCaptionComponent = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <TableCaption ref={ref} className={className} {...props} />
));
TableCaptionComponent.displayName = "TableCaption";

export {
  Table,
  TableHeaderComponent as TableHeader,
  TableBodyComponent as TableBody,
  TableFooterComponent as TableFooter,
  TableHeadComponent as TableHead,
  TableRowComponent as TableRow,
  TableCellComponent as TableCell,
  TableCaptionComponent as TableCaption,
};
