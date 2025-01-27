import { IS_BROWSER } from "$fresh/runtime.ts";
import { FunctionComponent, JSX } from "preact";

const Button: FunctionComponent<JSX.HTMLAttributes<HTMLButtonElement>> = (
    props,
) => {
    return (
        <button
            {...props}
            disabled={!IS_BROWSER || props.disabled}
            className="flex space-x-2 px-3 py-2 text-light-accent bg-light-primary rounded-common hover:bg-light-accent hover:text-light-primary duration-300"
        />
    );
};

export default Button;
