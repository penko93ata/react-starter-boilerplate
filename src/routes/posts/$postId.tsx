import { createFileRoute } from "@tanstack/react-router";

import { getPostById } from "@/api";

export const Route = createFileRoute("/posts/$postId")({
    loader: async ({ context: { queryClient }, params }) => {
        return queryClient.ensureQueryData(getPostById(params.postId));
    },
});
