import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const IndividualEmailSkeleton = ({ classStyle, widthStyle, heightStyle }) => {
  return (
    <Skeleton
      className={classStyle}
      width={widthStyle}
      height={heightStyle && heightStyle}
    />
  );
};

export default IndividualEmailSkeleton;
