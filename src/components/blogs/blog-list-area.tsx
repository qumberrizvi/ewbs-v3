'use client'
import React from "react";
// internal
import BlogSidebar from "./blog-sidebar";
import BlogListItem from "./blog-item/blog-list-item";
import Pagination from "@/ui/pagination";
import {Paginator} from "@/types/paginator";
import {Post} from "@/types/post";
import {Category} from "@/types/category";

type IProps = {
    blog_data: Paginator<Post>;
    reFetchHook: (page?: number, perPage?: number) => {},
    categories?: Paginator<Category>;
}

const BlogListArea = ({blog_data, reFetchHook, categories}: IProps) => {
    const reFetch = (event: { selected: number;}) => {
        reFetchHook(event.selected);
    }
    const blog_items = blog_data.data.filter((b) => b.status === 'PUBLISHED');
    return (
        <div className="blog-section-six position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
            <div className="container">
                <div className="row gx-xl-5">
                    <div className="col-lg-8">
                        {blog_items?.map((b, i) =>

                            <BlogListItem key={i} blog={b}/>
                        )}

                        <div className="pagination-one mt-80 lg-mt-50">
                            <Pagination handlePageClick={reFetch} pageCount={blog_data.last_page}/>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-8">
                        {/* blog sidebar start */}
                        <BlogSidebar recentPosts={blog_data} categories={categories}/>
                        {/* blog sidebar end */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogListArea;
