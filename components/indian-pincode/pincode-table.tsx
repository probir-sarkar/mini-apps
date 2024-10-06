"use client";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { usePincodeStore } from "./pincode-store";

const PinCodeTable = () => {
  const { postOffices } = usePincodeStore();
  return (
    <Table className="border rounded-md">
      <TableCaption>Indian Pincode</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>OfficeName</TableHead>
          <TableHead>Pincode</TableHead>
          <TableHead>District</TableHead>
          <TableHead>StateName</TableHead>
          <TableHead>Latitude</TableHead>
          <TableHead>Longitude</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {postOffices.map((office) => (
          <TableRow key={office.OfficeName}>
            <TableCell>{office.OfficeName}</TableCell>
            <TableCell>{office.Pincode}</TableCell>
            <TableCell>{office.District}</TableCell>
            <TableCell>{office.StateName}</TableCell>
            <TableCell>{office.Latitude}</TableCell>
            <TableCell>{office.Longitude}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PinCodeTable;
