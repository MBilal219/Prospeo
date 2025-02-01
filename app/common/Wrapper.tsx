import clsx from "clsx";
import React, { FC, ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
  className?: string;
};

const Wrapper: FC<WrapperProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "w-full px-4 mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 1.5xl:max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
