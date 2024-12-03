import { z } from "zod";

export const registerUsernameSchema = z.object({
    username: z.string().min(1),
});

export const pinSchema = z.object({
    pin: z.string().length(6, "PIN must be 6 digits"),
});

export const confirmPinSchema = (pin: string) => z.object({
    confirmPin: z.string().length(6, "PIN must be 6 digits"),
}).refine(
    (data) => {
        return data.confirmPin === pin;
    },
    {
        message: "PINs do not match",
        path: ["confirmPin"]
    }
);
