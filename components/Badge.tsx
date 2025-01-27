import { FunctionComponent } from "preact";
import { cn } from "../libs/cn.tsx";

interface Props {
    className?: string;
}

const Badge: FunctionComponent<Props> = (
    { children, className },
) => {
    return (
        <div
            className={cn(
                "rounded-full px-4 py-2 font-semibold text-light-accent bg-light-secondary",
                className,
            )}
        >
            {children}
        </div>
    );
};

export default Badge;

export const BadgeOutline: FunctionComponent<Props> = (
    { children, className },
) => {
    return (
        <div
            className={cn(
                "rounded-full px-4 py-2 font-semibold text-light-secondary bg-transparent border border-light-secondary",
                className,
            )}
        >
            {children}
        </div>
    );
};
