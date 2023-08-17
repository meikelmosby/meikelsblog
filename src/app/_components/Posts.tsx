
import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import BlogHeader from "@/app/_components/BlogHeader";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import {client} from "../../../sanity/lib/client";
import Image from "next/image";


const builder = imageUrlBuilder(client);
export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {

    return (
        <div className="">
            <hr className={ "border-1 border-yellow-500 mb-10 mt-10" } />
            <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
            {posts.map((post) => (
                <Link
                    key={post._id}
                    href={post.slug.current}
                >
                <div key={post._id} className="flex flex-col group cursor-pointer ">
                    <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200">
                            {post?.mainImage ? (
                                <Image
                                    className="object-cover object-left lg:object-center rounded-2xl"
                                    src={builder.image(post.mainImage).url()}
                                    alt={post?.mainImage?.alt}
                                    fill
                                />
                            ) : null}
                            <div className="absolute bottom-0 w-full bg-white bg-opacity-80 bg:blur-lg rounded-b-2xl rounded-t-sm drop-shadow-lg text-black p-5 flex justify-between">
                                <div>
                                    <p className="font-bold">{post.title}</p>
                                    <p> {new  Date(post.publishedAt).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}</p>
                                </div>
                                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                                    {post.categories.map((category: any) => (
                                        <div className="bg-yellow-500 text-center text-black px-3 py-1 rounded-full text-sm font-semibold"
                                             key={category._id}>
                                            <p>{category.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                    </div>
                </div>
                </Link>
            ))}
            </div>
        </div>
    );
}