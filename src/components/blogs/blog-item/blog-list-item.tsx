import React from "react";
import Link from "next/link";
import {Post} from "@/types/post";
import {getImageUrl} from "@/utils/utils";

const BlogListItem = ({ blog }: { blog: Post }) => {

  return (
    <article className="blog-meta-two style-two mb-50 lg-mb-40">
      <figure
        className="post-img position-relative d-flex align-items-end m0"
        style={{ backgroundImage: `url(${getImageUrl(blog.image)})` }}
      >
        <Link href={`/blog/post/${blog.slug}`} className="stretched-link date tran3s">
        {new Date(blog.created_at).toLocaleString('en-US', {year: 'numeric', month: 'long', day: '2-digit'})}
        </Link>
      </figure>
      <div className="post-data">
        <div className="post-info">{blog.category?.name}</div>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <Link href={`/blog/post/${blog.slug}`} className="blog-title">
            <h4>{blog.title}</h4>
          </Link>
          <Link href={`/blog/post/${blog.slug}`}
            className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
          >
            <i className="bi bi-arrow-up-right"></i>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogListItem;
