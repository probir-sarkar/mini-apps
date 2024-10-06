import { z } from "zod";

export const officeSchema = z.object({
  CircleName: z.string(),
  RegionName: z.string(),
  DivisionName: z.string(),
  OfficeName: z.string(),
  Pincode: z.string().length(6), // assuming Pincode length is 6
  OfficeType: z.string(),
  Delivery: z.string(),
  District: z.string(),
  StateName: z.string(),
  Latitude: z.string(),
  Longitude: z.string()
})

export const officeArraySchema = z.array(officeSchema);

export type Office = z.infer<typeof officeSchema>;
export type OfficeArray = z.infer<typeof officeArraySchema>;
