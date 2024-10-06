import PincodeForm from "@/components/indian-pincode/pincode-form";
import PincodeMap from "@/components/indian-pincode/pincode-map";
import PinCodeTable from "@/components/indian-pincode/pincode-table";

const IndianPinCodePage = () => {
  return (
    <main className="container mx-auto px-4 py-4 grid gap-4 grid-cols-12">
      <div className="col-span-4">
        <PincodeForm />
      </div>
      <div className="col-span-8 space-y-4">
        <PinCodeTable />
        <PincodeMap />
      </div>
    </main>
  );
};

export default IndianPinCodePage;
