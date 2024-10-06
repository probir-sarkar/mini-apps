import PincodeForm from "@/components/indian-pincode/pincode-form";
import PincodeMap from "@/components/indian-pincode/pincode-map";
import PinCodeTable from "@/components/indian-pincode/pincode-table";

const IndianPinCodePage = () => {
  return (
    <main>
      <div className="my-8 max-w-lg mx-auto">
        <PincodeForm />
      </div>
      <div className="my-8 max-w-4xl mx-auto">
        <PinCodeTable />
        <PincodeMap />
      </div>
    </main>
  );
};

export default IndianPinCodePage;
