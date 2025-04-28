import { createFileRoute } from "@tanstack/react-router";

import { getPosts } from "@/api";

export const Route = createFileRoute("/posts/")({
    loader: async ({ context: { queryClient } }) => {
        return queryClient.ensureQueryData(getPosts);
    },
});
