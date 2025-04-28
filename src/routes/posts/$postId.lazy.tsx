import { useSuspenseQuery } from "@tanstack/react-query";
import { createLazyFileRoute, getRouteApi } from "@tanstack/react-router";

import { getPostById } from "@/api";

export const Route = createLazyFileRoute("/posts/$postId")({
    component: Post,
});

const route = getRouteApi("/posts/$postId");

function Post() {
    const { postId } = route.useParams();

    const {
        data: { user, post },
    } = useSuspenseQuery(getPostById(postId));

    return (
        <div>
            Author: {user.name} of post: <strong>{post.title}</strong>
        </div>
    );
}
