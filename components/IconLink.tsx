import { FunctionComponent } from "preact";
import { cn } from "../libs/cn.tsx";

interface Props {
    href: string;
    className?: string;
}

const IconLink: FunctionComponent<Props> = ({ href, children, className }) => {
    return (
        <a
            href={href}
            className={cn(
                "flex items-center w-max space-x-2 text-light-accent bg-light-primary rounded-full p-3 hover:bg-light-accent hover:text-light-primary duration-300",
                className,
            )}
        >
            {children}
        </a>
    );
};

export default IconLink;

export const IconLinkSecondary: FunctionComponent<Props> = (
    { href, children, className },
) => {
    return (
        <a
            href={href}
            className={cn(
                "flex w-max items-center space-x-2 text-light-accent bg-light-secondary rounded-full p-3 hover:bg-light-accent hover:text-light-secondary duration-300",
                className,
            )}
        >
            {children}
        </a>
    );
};
