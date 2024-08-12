import {z} from "zod";

export const todoSchemaType = z.object({
  todoName: z
    .string()
    .min(3, {message: "Minimum 3 character"})
    .max(25, {message: "Max 25 Character"}),
});

export type TodoFormType = z.infer<typeof todoSchemaType>;
