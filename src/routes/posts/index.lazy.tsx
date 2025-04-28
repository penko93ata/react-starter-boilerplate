import { useSuspenseQuery } from "@tanstack/react-query";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

import { getPosts } from "@/api";

export const Route = createLazyFileRoute("/posts/")({
    component: Posts,
});

function Posts() {
    const { data } = useSuspenseQuery(getPosts);
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.slice(0, 5).map((post) => (
                    <li key={post.id}>
                        {post.title}{" "}
                        <strong>
                            <Link to={"/posts/$postId"} params={{ postId: post.id.toString() }}>
                                Link to post
                            </Link>
                        </strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}
