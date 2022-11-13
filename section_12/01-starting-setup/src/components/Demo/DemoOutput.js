import React, { memo } from "react";

const DemoOutput = (props) => {
    return(
        <p>{props.show ? 'This is new!' : ''}</p>
    );
};

export default memo(DemoOutput);