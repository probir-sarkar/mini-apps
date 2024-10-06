"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/lib/api";
import { usePincodeStore } from "./pincode-store";

const formSchema = z.object({
  pincode: z.string().length(6, { message: "Invalid pincode" })
});
type FormData = z.infer<typeof formSchema>;

function PincodeForm() {
  const { setPostOffices } = usePincodeStore();
  const mutation = useMutation({
    mutationKey: ["pincode"],
    mutationFn: (values: FormData) => {
      return axiosInstance.get(`/pincode/${values.pincode}`);
    },
    onSuccess: (res) => {
      const data = res.data;
      setPostOffices(data);
    }
  });
  // 1. Define your form.
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pincode: ""
    }
  });

  // 2. Define a submit handler.
  async function onSubmit(values: FormData) {
    await mutation.mutateAsync(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="pincode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pincode</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>Enter your pincode</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="default" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
export default PincodeForm;
