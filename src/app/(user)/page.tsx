import { draftMode } from "next/headers";
import { getCachedClient } from "../../../sanity/lib/getClient";
import { postsQuery } from "../../../sanity/lib/queries";
import Posts from "@/app/_components/Posts";
import PreviewPosts from "@/app/_components/PreviewPosts";
import PreviewProvider from "@/app/_components/PreviewProvider";
import BlogHeader from "@/app/_components/BlogHeader";

export default async function Home() {
    const preview = draftMode().isEnabled
        ? { token: process.env.SANITY_API_READ_TOKEN }
        : undefined;
    const posts = await getCachedClient(preview)(postsQuery);

    if (preview && preview.token) {
        return (
            <PreviewProvider token={preview.token}>
                <BlogHeader />
                <PreviewPosts posts={posts} />
            </PreviewProvider>
        );
    }

    return <div><BlogHeader/><Posts posts={posts}/></div>;
}