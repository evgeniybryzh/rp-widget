import classNames from "classnames";
import React, { useEffect, useState } from "react";

const Widget = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      setTimeout(() => {
        setIsVisible(true);
      }, 4000);
    }
  }, [isVisible]);

  return (
    <div
      className={classNames(
        "fixed bottom-[50px] left-[50px] transition-all duration-300",
        isVisible ? "translate-x-[0px]" : "translate-x-[-150%]"
      )}
    >
      <div className="w-[350px] h-[200px] border-2 border-black rounded-3xl bg-blue-600/25 relative flex justify-center items-center">
        <div
          onClick={() => {
            setIsVisible(false);
          }}
          className="cursor-pointer absolute right-4 top-4 text-xl"
        >
          x
        </div>
        <h1>Widget</h1>
      </div>
    </div>
  );
};

export default Widget;
