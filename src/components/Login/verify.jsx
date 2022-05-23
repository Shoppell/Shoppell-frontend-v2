import React, { useContext } from "react";
import { context } from "./../context/context";

const Verify = () => {
    const loginContext = useContext(context);

    const {
        verifyCode,
        setVerifyCode,
        handleVerify,
        validator,
    } = loginContext;





    return (
        <main className="client-page">
            <div className="container-content">
                <header>
                    <h2> کد تایید </h2>
                </header>


                <div className="form-layer">
                    <form onSubmit={(e) => handleVerify(e)}>
                        <div className="input-group">
                            <span
                                className="input-group-addon"
                                id="email-address"
                            >
                                <i className="zmdi zmdi-edit"></i>
                            </span>
                            <input
                                type="text"
                                name="verify"
                                className="form-control"
                                placeholder="کد تایید"
                                aria-describedby="verify-address"
                                value={verifyCode}
                                onChange={(e) => {
                                    setVerifyCode(e.target.value);
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

export default Verify;
