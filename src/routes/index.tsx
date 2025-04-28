import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";

import { getPosts } from "@/api";

export const Route = createFileRoute("/")({
    component: Index,
    errorComponent: () => <div>Something went wrong</div>,
    loader: async ({ context: { queryClient } }) => {
        queryClient.prefetchQuery(getPosts);
    },
});

function Index() {
    const { data } = useSuspenseQuery(getPosts);

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <ul>
                    {data.slice(0, 5).map((post) => (
                        <li key={post.id}>
                            {post.title}
                            {/* TODO:  <Link to={`/posts/${post.id}`}>View</Link> */}
                        </li>
                    ))}
                </ul>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            <h1 className="underline text-3xl font-bold">Hello world!</h1>
        </>
    );
}
