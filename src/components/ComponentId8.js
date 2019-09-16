import React, { Fragment } from "react";
import Image from "./Image";
const ComponentId8 = () => {
  return (
    <Fragment>
      <p id="dream-description">
        A clean sky encompassing us. A button for selecting a number. We live
        inside a dream. Happy, taken care of. Warm and content.
      </p>
      <Image
        alt="treep icon"
        src={`${process.env.PUBLIC_URL}/images/treep-icon.png`}
        labelledby="dream-description"
      />
    </Fragment>
  );
};

export default ComponentId8;
