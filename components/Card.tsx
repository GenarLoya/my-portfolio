import { FunctionComponent } from "preact";
import { cn } from "../libs/cn.tsx";

interface Props {
    className?: string;
}

const Card: FunctionComponent<Props> = (
    { children, className },
) => {
    return (
        <section
            className={cn(
                "flex flex-col bg-light-card-background rounded-common space-y-2",
                className,
            )}
        >
            {children}
        </section>
    );
};

export default Card;
