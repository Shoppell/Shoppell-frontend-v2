import React from "react";

const About_us = () => {
    return(
        <div>

        <section className="page-add" style={{marginBottom : "0px"}}>
            <div className="container">
                <h2 style={{textAlign: "center", fontSize:"30px"}}>
                    درباره ی ما
                </h2>
                  
                   <hr></hr>

            </div>
        </section>

            <div className="contact-section">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8">
                            <p style={{textAlign: "right", fontSize:"17px"}}>
                                ما استارتاپی نوپا هستیم با هدف خدمت به مردم برای خرید امن تر و راحت تر کالاها
                                . کمک به کسب و کار ها برای رشد و اعتماد سازی و جلوگیری از کلاهبرداری های اینترنتی .
                                ما در مرکز رشد دانشگاه امیرکبیر فعالیت خود را از پاییز 1400 شروع کردیم
                            </p>
                        </div>

                        <div className="col-lg-3 offset-lg-1">
                            <div className="contact-widget">
                                <div className="cw-item" style={{textAlign: "center",fontFamily: "vazir"}} >
                                    <h5 style={{textAlign: "center"}}>

                                        <svg style={{color:"red"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                        </svg>
                                        آدرس ما</h5>
                                        <hr></hr>
                                    <ul>
                                        <li>تهران . خیابان حافظ</li>
                                        <li>دانشگاه صنعتی امیرکبیر</li>

                                    </ul>
                                </div>
                                <br></br>
                                <div className="cw-item" style={{textAlign: "center"}}>
                                    <h5 style={{textAlign: "center"}}>

                                        <svg style={{color:"red"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                        </svg>
                                        تلفن</h5>
                                        <hr></hr>
                                    <ul>
                                        <li>+98 993 514 3194</li>

                                    </ul>
                                </div>
                                <br></br>
                                <div className="cw-item" style={{textAlign: "center"}}>
                                    <h5 style={{textAlign: "center"}}>

                                        <svg style={{color:"red"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                        </svg>
                                        ایمیل</h5>
                                        <hr></hr>
                                    <ul>
                                        <li>info@shopeton.ir</li>
                                      
                                    </ul>
                                </div>
                                <br></br>
                            </div>
                        </div>

                    </div>
                    <div className="map">
                        <div className="row">
                            <div className="col-lg-12">
                                <iframe style={{width:"100%"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7706.035640257819!2d51.40188822872028!3d35.70189637232943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e010d267b1425%3A0xe28f491d82aa8c83!2sAmirkabir%20University%20of%20Technology!5e0!3m2!1sen!2sil!4v1637571820572!5m2!1sen!2sil" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};
export default About_us;
