import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {store} from "../../store";
import {ProductDetailsAction} from "../../actions/getProductDetails";

const ProductD = ({match}) => {
    useEffect(() => {
        store.dispatch(ProductDetailsAction(match.params.id));
    },[]);

    const product = useSelector(state => state.shopDetails);
    console.log(product)

    return(

        <div className="product-card">
        <div className="badge">{product.off}%</div>
        <div className="product-tumb">
          <img style={{borderRadius:"3%"}} src={product.image1} />
        </div>
        <div className="product-details">
          {/* <span className="product-catagory">{product.category}</span> */}
          <h4><a href>{product.name}</a></h4>
          <p>{product.description}</p>
          <div className="product-bottom-details">
            <div className="product-price" style={{color:"black", textAlign:"left"}}><del>{product.price}</del>|
            {product.last_price} تومان</div>
            <div className="product-links">
              <a href><i className="fa fa-heart" /></a>
              <a href><i className="fa fa-shopping-cart" /></a>
            </div>
          </div>
        </div>
      </div>



        // <div className="container">
        //     <div className="card">
        //         <div className="container-fliud">
        //             <div className="wrapper row">
        //                 <div className="preview col-md-6">
        //                     <h1>{product.name}</h1>
        //                     <div className="preview-pic tab-content">
        //                         <div className="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252"/>
        //                         </div>
        //                         <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252"/></div>
        //                         <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252"/></div>
        //                         <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252"/></div>
        //                         <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252"/></div>
        //                     </div>
        //                     <ul className="preview-thumbnail nav nav-tabs">
        //                         <li className="active"><a data-target="#pic-1" data-toggle="tab"><img
        //                             src="http://placekitten.com/200/126"/></a></li>
        //                         <li><a data-target="#pic-2" data-toggle="tab"><img
        //                             src="http://placekitten.com/200/126"/></a></li>
        //                         <li><a data-target="#pic-3" data-toggle="tab"><img
        //                             src="http://placekitten.com/200/126"/></a></li>
        //                         <li><a data-target="#pic-4" data-toggle="tab"><img
        //                             src="http://placekitten.com/200/126"/></a></li>
        //                         <li><a data-target="#pic-5" data-toggle="tab"><img
        //                             src="http://placekitten.com/200/126"/></a></li>
        //                     </ul>
        //
        //                 </div>
        //                 <div className="details col-md-6">
        //                     <h3 className="product-title">men's shoes fashion</h3>
        //                     <div className="rating">
        //                         <div className="stars">
        //                             <span className="fa fa-star checked"></span>
        //                             <span className="fa fa-star checked"></span>
        //                             <span className="fa fa-star checked"></span>
        //                             <span className="fa fa-star"></span>
        //                             <span className="fa fa-star"></span>
        //                         </div>
        //                         <span className="review-no">41 reviews</span>
        //                     </div>
        //                     <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu
        //                         laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus
        //                         posuere.</p>
        //                     <h4 className="price">current price: <span>$180</span></h4>
        //                     <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87
        //                         votes)</strong></p>
        //                     <h5 className="sizes">sizes:
        //                         <span className="size" data-toggle="tooltip" title="small">s</span>
        //                         <span className="size" data-toggle="tooltip" title="medium">m</span>
        //                         <span className="size" data-toggle="tooltip" title="large">l</span>
        //                         <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
        //                     </h5>
        //                     <h5 className="colors">colors:
        //                         <span className="color orange not-available" data-toggle="tooltip"
        //                               title="Not In store"></span>
        //                         <span className="color green"></span>
        //                         <span className="color blue"></span>
        //                     </h5>
        //                     <div className="action">
        //                         <button className="add-to-cart btn btn-default" type="button">add to cart</button>
        //                         <button className="like btn btn-default" type="button"><span
        //                             className="fa fa-heart"></span></button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};
export default ProductD;
