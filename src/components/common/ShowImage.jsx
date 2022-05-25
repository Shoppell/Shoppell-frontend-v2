import React from "react";
import Img from "react-image";
import ScaleLoader from "react-spinners/ScaleLoader";

const ShowImage = ({ image }) => {
    return (
        <Img
            src={[
                `http://192.168.100.6:5000${image}`,
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
