import styled from "styled-components";

export const TableWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  caption-side: bottom;
  font-size: 0.875rem; /* Text size adjusted to 'sm' */
`;

export const TableHeader = styled.thead`
  tr {
    border-bottom: 1px solid #ddd; /* Add a border for the rows */
  }
`;

export const TableBody = styled.tbody`
  tr:last-child {
    border: none; /* Remove border from the last row */
  }
`;

export const TableFooter = styled.tfoot`
  border-top: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.05);
  font-weight: 500;
  tr:last-child {
    border-bottom: 0;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05); /* Muted background on hover */
  }

  &[data-state="selected"] {
    background-color: rgba(0, 0, 0, 0.1); /* Change background when selected */
  }
`;

export const TableHead = styled.th`
  padding: 1rem;
  text-align: left;
  vertical-align: middle;
  font-weight: 500;
  color: #6b7280; /* Muted foreground color */
  &:has([role="checkbox"]) {
    padding-right: 0;
  }
`;

export const TableCell = styled.td`
  padding: 1rem;
  vertical-align: middle;
  &:has([role="checkbox"]) {
    padding-right: 0;
  }
`;

export const TableCaption = styled.caption`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #6b7280; /* Muted foreground color */
`;
