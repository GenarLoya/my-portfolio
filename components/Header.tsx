import Profile from "./Profile.tsx";

export default function Header() {
    return (
        <header className="col-span-5 flex justify-between bg-light-card-background p-4 rounded-b-common">
            <Profile />
        </header>
    );
}
