import React from "react";
import { Link } from "react-router-dom";
import ShowImage from "../common/ShowImage";

const Course = ({ courses }) => {
    console.log(courses)

    let array = [];
    for (const key in courses){
        array.push(courses[key])
    }
    return (
        <div>
        <section className="terms-items">
            <header>
                <h2>فروشگاه ها</h2>
                <hr></hr>
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
                                <ShowImage image={course.image}/>
                            </Link>

                        </article>
                    </div>
                ))}
            </div>
        </section>
        </div>
    );
};

export default Course;
