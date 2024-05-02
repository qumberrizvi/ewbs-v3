"use server"

import {Paginator} from "@/types/paginator";
import {Post} from "@/types/post";
import {fetcher} from "@/api/fetcher";
import {endpoints} from "@/data/endpoints";
import {Category} from "@/types/category";

export const fetchPosts = async (page = 1, perPage = 15) => {
    const posts: Paginator<Post> = await fetcher(`${endpoints.posts}?page=${page}&limit=${perPage}`, true);
    return posts;
};

export const fetchPost = async (slug: string) => {
    const post: Post = await fetcher(`${endpoints.posts}${slug}`, true);
    return post;
};

export const fetchCategories = async () => {
    const categories: Paginator<Category> = await fetcher(`${endpoints.categories}`, true);
    return categories;
};

export const fetchPostsByCategory = async (categorySlug: string, page = 1, perPage = 15) => {
    const posts: Paginator<Post> = await fetcher(`${endpoints.categories}${categorySlug}/posts?page=${page}&limit=${perPage}`, true);
    return posts;
};
