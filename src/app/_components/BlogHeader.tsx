import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import imageUrlBuilder from "@sanity/image-url";
import {client} from "../../../sanity/lib/client";


const builder = imageUrlBuilder(client);

export default function BlogHeader() {
    return (
        <div className="text-center mt-8">
            <h1 className="text-white text-4xl font-bold underline decoration-yellow-500">Meikel's Blog</h1>
            <div className="mt-4 text-xl">
                Everything <span className="underline text-white decoration-yellow-500">Tech</span>, <span className="underline text-white decoration-yellow-500">Teams</span> and <span className="underline text-white decoration-yellow-500">Building Things</span>
            </div>
            <div className="flex justify-center m-5">
                <Link
                    href='https://www.linkedin.com/in/meikelratz/'
                >
                <svg
                    className="w-6 h-6 text-blue-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512">
                    <path
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                </svg>
                </Link>
            </div>
        </div>
    );
}
