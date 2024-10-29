import Badge, { BadgeOutline } from "../components/Badge.tsx";
import Card from "../components/Card.tsx";
import Photo from "../components/Photo.tsx";

export default function Home() {
    return (
        <Card className="items-center justify-center p-4">
            <Badge className="text-2xl">Hello, I'm Genaro Loya Dour</Badge>
            <BadgeOutline className="text-sm">
                Frontend & Backend Software Developer
            </BadgeOutline>
            <Photo />
        </Card>
    );
}
