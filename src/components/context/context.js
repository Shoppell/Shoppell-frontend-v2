import { createContext } from "react";

export const context = createContext({
    name: "",
    setFullname: () => {},
    phone: "",
    setPhone: () => {},
    verifyCode: "",
    setVerifyCode: () => {},
    slug: "",
    setSlug: () => {},
    imageUrl: "",
    setImageUrl : () => {},
    policy: "",
    setPolicy: () => {},
    validator: null,
    handleLogin: () => {},
    handleVerify: () => {},
    handleRegister: () => {}
});
