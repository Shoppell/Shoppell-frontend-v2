import React, {useContext, useState} from "react";
import { Helmet } from "react-helmet";
import FormData from 'form-data'
import { context } from "./../context/context";

const Register = () => {
    const [image, setImageU] = useState();
    const [slug, setSlug] = useState();
    const [name, setName] = useState();
    const [policy, setPolicy] = useState();
    const RegisterContext = useContext(context);

    const {
        handleRegister
    } = RegisterContext;


    const handleRegisterShop = (event) => {
        event.preventDefault();
        console.log(image);
        let data = new FormData()
        data.append("slug", slug);
        data.append("image", image);
        data.append("name", name);
        handleRegister(event,data);


    };


    const onChangePicture = e => {
        setImageU(e.target.files[0]);
    };

    return (
        <main className="client-page">
            <div className="container-content">
                <header>
                    <h2> ساخت فروشگاه </h2>
                
                </header>
                
                <hr></hr>

                <Helmet>
                    <title> شاپل ساخت فروشگاه</title>
                </Helmet>

                <div className="form-layer">
                    <form onSubmit={(e) => handleRegisterShop(e)}>
                        <div className="input-group">
                            <span className="input-group-addon" id="username">
                                <i className="zmdi zmdi-account"></i>
                            </span>
                            <input
                                type="text"
                                name="fullname"
                                className="form-control"
                                placeholder="اسم فروشگاه"
                                aria-describedby="username"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password">
                                <i className="zmdi zmdi-lock"></i>
                            </span>
                            <input
                                type="text"
                                name="password"
                                style={{fontFamily:"Roboto" }}
                                className="form-control"
                                placeholder="نام کاربری فروشگاه"
                                aria-describedby="password"
                                value={slug}
                                onChange={(e) => {
                                    setSlug(e.target.value);
                                }
                            }/>

                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password">
                                <i className="zmdi zmdi-lock"></i>
                            </span>
                            <input
                            
                                type="file"
                                name="imageUrl"
                                placeholder="نام کاربری فروشگاه"
                                style={{ marginBottom: 3, fontFamily:"Roboto" }}
                                className="form-control mb-2"
                                aria-describedby="imageUrl"
                                onChange={(e) => {
                                    onChangePicture(e);
                                }}
                            />
                        </div>



                        <div className="accept-rules">
                            <label>
                                <input
                                    type="checkbox"
                                    name="policy"
                                    value={policy}
                                    onChange={(e) => {
                                        setPolicy(e.currentTarget.checked);
                                    }}
                                />{" "}
                                قوانین و مقررات سایت را میپذیرم{" "}
                            </label>
                        </div>

                        <div className="link">
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-assignment"></i> قوانین
                                و مقررات سایت !
                            </a>
                            <a href="">
                                {" "}
                                <i className="zmdi zmdi-account"></i> ورود به
                                سایت{" "}
                            </a>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-success">
                                {" "}
                               ساخت فروشگاه{" "}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};
export default Register;
