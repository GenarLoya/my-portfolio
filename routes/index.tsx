import Badge, { BadgeOutline } from "../components/Badge.tsx";
import Button from "../components/Button.tsx";
import Card from "../components/Card.tsx";
import IconLink, { IconLinkSecondary } from "../components/IconLink.tsx";
import Photo from "../components/Photo.tsx";
import GitHub from "../icons/GitHub.tsx";
import ArrowFolder from "../icons/ArrowFolder.tsx";
import Linkedin from "../icons/Linkedin.tsx";
import OpenBook from "../icons/OpenBook.tsx";

const GIT_HUB = "https://github.com/GenarLoya";
const LINKEDIN = "https://www.linkedin.com/in/genaro-loya-dour-2595a3319/";

export default function Home() {
    return (
        <Card className="flex flex-col space-y-4 items-center justify-center p-4">
            <Badge className="text-2xl">Hello, I'm Genaro Loya Dour</Badge>
            <BadgeOutline className="text-sm">
                Frontend & Backend Software Developer
            </BadgeOutline>
            <div className="flex justify-center items-center space-x-4">
                <IconLink href={GIT_HUB}>
                    <GitHub />
                </IconLink>
                <div className="relative">
                    <Photo />
                    <IconLinkSecondary
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                        href={GIT_HUB}
                    >
                        <OpenBook />
                    </IconLinkSecondary>
                </div>
                <IconLink href={LINKEDIN}>
                    <Linkedin />
                </IconLink>
            </div>
            <Button className="text-xl">
                <ArrowFolder />
                <span>Go to proyects</span>
            </Button>
        </Card>
    );
}
