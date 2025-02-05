import React from "react";
import Lottie from "lottie-react";

const LottieAnimation = ({ animationPath }) => {
  return <Lottie animationData={animationPath} loop={true} />;
};

export { LottieAnimation };
