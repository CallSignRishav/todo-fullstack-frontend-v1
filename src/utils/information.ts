import {z} from "zod";

export const todoSchemaType = z.object({
  todoName: z
    .string()
    .min(3, {message: "Minimum 3 character"})
    .max(50, {message: "Max 50 Character"}),
});

export type TodoFormType = z.infer<typeof todoSchemaType>;
