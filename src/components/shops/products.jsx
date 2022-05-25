import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ShowImage from "../common/ShowImage";
import {getProductList} from "../../services/getProducts";
import {store} from "../../store";
import {getProductsAndShop} from "../../actions/products";
import {getAllProductList} from "../../actions/courses";
import {useSelector} from "react-redux";

const ProductS = ({slug}) => {
    useEffect(() => {

        // if (courseIdValidator(match.params.id))
        store.dispatch(getAllProductList(slug));
    },[]);
    const courses = useSelector(state => state.productList);
    console.log(courses);
    let array = [];
    for (const key in courses){
        array.push(courses[key])
    }
    console.log(array);

    return(
        <div>
            <section className="terms-items">

                <header>
                    <h2>محصولات</h2>
                </header>
                <div className="row">
                    {array.map(course => (
                        <div
                            key={course.id}
                            className="col-lg-4 col-sm-4 col-sm-4 col-xs-4"
                            style={{padding: "0px"}}
                        >
                            <article>
                                <Link
                                    to={`/course/${course.slug}`}
                                    className="img-layer"
                                >
                                    <ShowImage image={course.image1} />
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
