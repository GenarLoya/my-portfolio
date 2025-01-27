import { asset } from "$fresh/runtime.ts";

export default function Profile() {
    return (
        <section
            alt="Profile"
            className="flex space-x-2 items-center font-semibold"
        >
            <img
                src={asset("/profile.png")}
                alt="Profile"
                className="rounded-full h-10 w-10"
            />
            <div>genarold</div>
        </section>
    );
}
