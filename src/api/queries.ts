import { Post } from "@/types/post";
import { User } from "@/types/user";
import { queryOptions } from "@tanstack/react-query";

export const getPosts = queryOptions({
    queryKey: ["GET_POSTS"],
    queryFn: async () => {
        const posts: Post[] = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
        return posts;
    },
});

export const getPostById = (postId: string) =>
    queryOptions({
        queryKey: ["GET_POST_BY_ID", postId],
        queryFn: async () => {
            const post: Post = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)).json();

            const user: User = await (await fetch(`https://jsonplaceholder.typicode.com/users/${post?.userId}`)).json();
            return { post, user };
        },
    });
export const getCommentsByPostId = (id: number) =>
    queryOptions({
        queryKey: ["GET_COMMENTS_BY_POST_ID", id],
        queryFn: async () => {
            const comments: Comment[] = await (
                await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            ).json();
            return comments;
        },
    });
