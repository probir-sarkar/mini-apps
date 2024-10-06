"use client";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { usePincodeStore } from "./pincode-store";
import { Map } from "lucide-react";

const PinCodeTable = () => {
  const { postOffices, setSelectedOffice } = usePincodeStore();
  return (
    <div className="max-h-96 overflow-y-scroll ">
      <Table className="border rounded-md relative">
        {/* <TableCaption>Indian Pincode</TableCaption>  */}
        <TableHeader className="position-sticky top-0">
          <TableRow>
            <TableHead>OfficeName</TableHead>
            <TableHead>Pincode</TableHead>
            <TableHead>District</TableHead>
            <TableHead>StateName</TableHead>
            <TableHead>Map</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {postOffices.map((office) => (
            <TableRow key={office.OfficeName}>
              <TableCell>{office.OfficeName}</TableCell>
              <TableCell>{office.Pincode}</TableCell>
              <TableCell>{office.District}</TableCell>
              <TableCell>{office.StateName}</TableCell>
              <TableCell>
                <Map className="cursor-pointer" onClick={() => setSelectedOffice(office)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PinCodeTable;
