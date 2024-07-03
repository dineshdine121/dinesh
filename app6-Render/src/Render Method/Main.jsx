import React from "react";
import Counter from "./Counter";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

const Main = () => {
    return (
        <div>
            <Counter render={(count, incrementCount) => <ClickCounter count={count} incrementCount={incrementCount} />} />
            <hr />
            <Counter render={(count, incrementCount) => <HoverCounter count={count} incrementCount={incrementCount} />} />

        </div>

    )
}
export default Main;