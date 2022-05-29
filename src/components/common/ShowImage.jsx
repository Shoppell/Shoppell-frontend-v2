import React from "react";
import Img from "react-image";
import ScaleLoader from "react-spinners/ScaleLoader";
import config from "./../../services/config.json";

const ShowImage = ({ image }) => {
    return (
        <Img
            src={[
                config.localapi+image,
            ]}
            loader={
                <div className="text-center mx-auto">
                    <ScaleLoader loading={true} color={"#4A90E2"} />
                </div>
            }
        />
    );
};

export default ShowImage;
