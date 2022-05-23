import React, { useState, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import { useDispatch } from "react-redux";
import { context } from "./context";
import { successMessage, errorMessage } from "./../../utils/message";
import {loginUser, registerUser, verifyUser} from "../../services/userService";
import { decodeToken } from "./../../utils/decodeToken";
import { withRouter } from "react-router";
import { addUser } from "./../../actions/user";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const UserContext = ({ children, history }) => {
    const [name, setFullname] = useState("");
    let [phone, setPhone] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [slug, setSlug] = useState("");
    const [policy, setPolicy] = useState();
    const [verifyCode, setVerifyCode] = useState("");

    const [, forceUpdate] = useState();

    const dispatch = useDispatch();

    const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: "پر کردن این فیلد الزامی میباشد",
                min: "کمتر از 5 کاراکتر نباید باشد",
                email: "ایمیل نوشته شده صحیح نمی باشد"
            },
            element: message => <div style={{ color: "red" }}>{message}</div>
        })
    );

    const resetStates = () => {
        setFullname("");
        setPhone("");
        setImageUrl("");
        setSlug("");
        setVerifyCode("");
        setPolicy();
    };

    const handleVerify = async event => {
        phone = sessionStorage.getItem("user_phone");
        event.preventDefault();
        const verify = {verifyCode, phone};
        try {
            if (validator.current.allValid()) {
                dispatch(showLoading());
                console.log(verify)
                const { status, data } = await verifyUser(verify);
                const access = data.access;
                console.log(access);
                console.log(status);
                console.log(data);
                if (status === 200) {
                    successMessage("شماره تلفن تایید شد!");
                    localStorage.setItem("token", access);
                    dispatch(addUser(decodeToken(access).payload.user));
                    dispatch(hideLoading());
                    history.replace("/");
                    resetStates();
                }
            } else {
                validator.current.showMessages();

                forceUpdate(1);
            }
        } catch (ex) {
            console.log(ex);
            dispatch(hideLoading());
            history.replace("/verify");
            errorMessage("خطایی دریافت شده؟");
        }

    }

    const handleLogin = async event => {
        event.preventDefault();
        const user = {phone};

        try {
            if (validator.current.allValid()) {
                dispatch(showLoading());
                console.log(user)
                const { status } = await loginUser(user);
                console.log()
                if (status === 200) {
                    successMessage("شماره تلفن تایید شد!");
                    history.replace("/verify");
                    sessionStorage.setItem("user_phone", phone);
                    resetStates();
                }
            } else {
                validator.current.showMessages();

                forceUpdate(1);
            }
        } catch (ex) {
            console.log(ex);
            dispatch(hideLoading());
            history.replace("/verify");
            errorMessage("خطایی دریافت شده؟");
        }
    };

    const handleRegister = async (event, dataForm) => {
        try {
            const { status, data } = registerUser(dataForm);
            console.log(status)
            if (status === 201) {
                successMessage("فروشگاه با موفقیت ساخته شد!");
                history.replace("/");
            };
        } catch(ex) {
            successMessage("فروشگاه با موفقیت ساخته شد!");
            console.log(ex)
            history.replace("/");
            dispatch(hideLoading());
        }
    };

    return (
        <context.Provider
            value={{
                name,
                setFullname,
                phone,
                setPhone,
                verifyCode,
                setVerifyCode,
                imageUrl,
                setImageUrl,
                slug,
                setSlug,
                policy,
                setPolicy,
                validator,
                handleLogin,
                handleVerify,
                handleRegister
            }}
        >
            {children}
        </context.Provider>
    );
};

export default withRouter(UserContext);
