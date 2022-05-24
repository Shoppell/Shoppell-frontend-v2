import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="top-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <section className="list">
                                <header>
                                    <h4>درباره ی ما</h4>
                                </header>
                                <ul>
                                    <li>
                                        <a href="">شاپل</a>
                                    </li>
                                    <li>
                                        <a href="">ابزاری برای کمک به کسب و کار شما</a>
                                    </li>
                                   
                                </ul>
                            </section>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <section className="list">
                                <header>
                                    <h4>اطلاعات ما</h4>
                                </header>
                                <ul>
                                    <li>
                                        <a href="">بلوار کشاورز خانه نواوری</a>
                                    </li>
                                    <li>
                                        <a href="">09930731973</a>
                                    </li>
                                    
                                </ul>
                            </section>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <section className="list">
                                <header>
                                    <h4>خدمات ما</h4>
                                </header>
                                <ul>
                                    <li>
                                        <a href="">مدیریت مشتریان</a>
                                    </li>
                                    <li>
                                        <a href=""> تبلیغ کسب و کار</a>
                                    </li>
                                    <li>
                                        <a href=""> امنیت در خرید</a>
                                    </li>
                                    <li>
                                        <a href="">آمار فروش</a>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <section className="list">
                                <header>
                                    <h4> دسترسی سریع</h4>
                                </header>
                                <ul>
                                    <li>
                                        <a href="">ساخت فروشگاه</a>
                                    </li>
                                    <li>
                                        <a href="">ورود</a>
                                    </li>
                                    <li>
                                        <a href="">بلاگ</a>
                                    </li>
                                  
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="container">
                    <p style={{textAlign:"center"}}>
                        تمامی حقوق مادی و معنوی این قالب متعلق به{" "}
                        <a href=""> شاپل</a> می باشد و هرگونه کپی برداری و
                        انتشار غیر مجاز پیگرد قانونی دارد .
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
