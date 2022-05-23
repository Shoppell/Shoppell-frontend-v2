import React from "react";
import {Link} from "react-router-dom";
import ShowImage from "../common/ShowImage";

const ProductS = ({product, slug}) => {

    return(
        <div>
            <section className="terms-items">

                <header>
                    <h2>محصولات</h2>
                </header>
                <div className="row">
                    {product.map(product => (
                        <div
                            key={product.id}
                            className="col-lg-4 col-sm-4 col-sm-4 col-xs-4"
                            style={{padding: "0px"}}
                        >
                            <article>
                                <Link
                                    to={`/course/${slug}/${product.id}`}
                                    className="img-layer"
                                >
                                    <ShowImage image={product.image} />
                                </Link>

                            </article>
                        </div>
                    ))}
                </div>
            </section>
        </div>
);
};
export default ProductS;
