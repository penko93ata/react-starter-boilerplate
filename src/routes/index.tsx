import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: Index,
});

function Index() {
    return (
        <>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            <h1 className="underline text-3xl font-bold">Hello world!</h1>
            <Link to="/posts">Posts</Link>
        </>
    );
}
