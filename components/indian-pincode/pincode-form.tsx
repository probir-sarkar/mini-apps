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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect } from "react";

const pincodeFormSchema = z.object({
  type: z.literal("pincode"),
  pincode: z.string().length(6, { message: "Invalid pincode" })
});
const officeFormSchema = z.object({
  type: z.literal("office"),
  office: z
    .string()
    .min(3, { message: "Enter minimum 3 characters" })
    .max(50, { message: "Enter maximum 50 characters" })
    .optional()
});

const formSchema = z.discriminatedUnion("type", [pincodeFormSchema, officeFormSchema]);
type FormData = z.infer<typeof formSchema>;

function PincodeForm() {
  const { setPostOffices } = usePincodeStore();
  const mutation = useMutation({
    mutationKey: ["pincode"],
    mutationFn: (values: FormData) => {
      if (values.type === "office") {
        return axiosInstance.get(`/pincode/post-office/${values.office}`);
      }
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
      type: "pincode",
      pincode: ""
    }
  });
  const searchType = form.watch("type");

  // 2. Define a submit handler.
  async function onSubmit(values: FormData) {
    await mutation.mutateAsync(values);
  }

  return (
    <section className="">
      <h1 className="text-2xl font-bold">Pincode Form</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 my-8">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="flex gap-2 items-center space-y-0">
                <FormLabel>Search By: </FormLabel>
                <FormControl className="">
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-2">
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="pincode" />
                      </FormControl>
                      <FormLabel className="font-normal">Pincode</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-1 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="office" />
                      </FormControl>
                      <FormLabel className="font-normal">Office Name</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* {searchType === "pincode" ? ( */}
          <FormField
            control={form.control}
            name="pincode"
            render={({ field }) => (
              <FormItem className={searchType === "office" ? "hidden" : ""}>
                <FormLabel>Pincode</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>Enter your pincode</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="office"
            render={({ field }) => (
              <FormItem className={searchType === "pincode" ? "hidden" : ""}>
                <FormLabel>Post Office</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>Enter your office</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="default" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
}
export default PincodeForm;
