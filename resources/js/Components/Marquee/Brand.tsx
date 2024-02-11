import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement>   {};

const Brand = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { className, children, ...rest } = props;

    return (
        <>
            <div className={`w-fit py-2 px-2.5 my-1 mx-1.5 flex justify-center items-center ${className}`} ref={ref} {...rest}>
                <div className="w-24 md:w-44 flex justify-center">{children}</div>
            </div>
        </>
    );
});

Brand.displayName = 'Brand';

export default Brand;
