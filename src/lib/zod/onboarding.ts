import { z } from "zod";

export const registerUsernameSchema = z.object({
    username: z.string().min(1),
});
