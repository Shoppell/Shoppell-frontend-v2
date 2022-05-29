import React, { useContext } from "react";
import { context } from "./../context/context";

const Login = () => {
    const loginContext = useContext(context);

    const {
        phone,
        setPhone,
        handleLogin,
        validator,
    } = loginContext;


    return (
        <main className="client-page">
            <div className="container-content">
                <header>
                    <h2> ورود به سایت </h2>
                    <hr></hr>
                </header>
                <hr></hr>

                <div className="form-layer">
                    <form onSubmit={(e) => handleLogin(e)}>
                        <div className="input-group">
                            <span
                                className="input-group-addon"
                                id="email-address"
                            >
                                <i className="zmdi zmdi-phone"></i>
                            </span>
                            <input
                                type="text"
                                name="phone"
                                className="form-control"
                                placeholder="شماره تلفن"
                                aria-describedby="phone-address"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                    validator.current.showMessageFor("email");
                                }}
                            />
                        </div>


                        <div className="remember-me">
                            <label>
                                <input type="checkbox" name="" /> مرا بخاطر
                                بسپار{" "}
                            </label>
                        </div>


                        <div className={"text-center"}>
                        <button className="btn btn-primary">
                            {" "}
                            ورود به سایت{" "}
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Login;
