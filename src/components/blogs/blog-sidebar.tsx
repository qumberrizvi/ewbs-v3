import React from "react";
import Link from "next/link";
import {Post} from "@/types/post";
import {getImageUrl} from "@/utils/utils";
import {Category} from "@/types/category";
import {Paginator} from "@/types/paginator";

const BlogSidebar = ({recentPosts, categories}: { recentPosts?: Paginator<Post>, categories?: Paginator<Category> }) => {
    const recent_blogs = recentPosts?.data?.slice(-2) || [];
    const keywords = [];

    // noinspection HtmlUnknownTarget
    return (
        <div className="blog-sidebar md-mt-60 ps-xxl-4">
            {/*<form action="#" className="sidebar-search">*/}
            {/*  <input type="text" placeholder="Search.." />*/}
            {/*  <button className="tran3s">*/}
            {/*    <i className="bi bi-search"></i>*/}
            {/*  </button>*/}
            {/*</form>*/}
            {
                (!!categories?.data?.length) && (
                    <div className="blog-category mt-60 lg-mt-40">
                        <h3 className="sidebar-title">Category</h3>
                        <ul className="style-none">
                            {categories.data.map((category, index) => (
                                <li key={`category-${index}-${category.slug}`}>
                                    <Link href={`/blog/category/${category.slug}`}>
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                )
            }
            {
                (!!recent_blogs.length) && (
                    <div className="blog-recent-news mt-60 lg-mt-40">
                        <h3 className="sidebar-title">Recent News</h3>
                        {recent_blogs.map((b, i) => (
                            <article key={i} className="recent-news">
                                <figure
                                    className="post-img"
                                    style={{
                                        backgroundImage: `url(${getImageUrl(b.image)})`,
                                    }}
                                ></figure>
                                <div className="post-data">
                                    <div className="date">{new Date(b.created_at).toLocaleString()}</div>
                                    <Link href={`/blog/post/${b.slug}`} className="blog-title">
                                        <h3>{b.title}</h3>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                )
            }

            {
                (!!keywords.length) && (
                    <div className="blog-keyword mt-60 lg-mt-40">
                        <h3 className="sidebar-title">Keywords</h3>
                        <ul className="style-none d-flex flex-wrap">
                            <li>
                                <Link href="#">Finance</Link>
                            </li>
                            <li>
                                <Link href="#">Business</Link>
                            </li>
                            <li>
                                <Link href="#">Online Banking</Link>
                            </li>
                            <li>
                                <Link href="#">Consultation</Link>
                            </li>
                            <li>
                                <Link href="#">Branding</Link>
                            </li>
                            <li>
                                <Link href="#">Cards</Link>
                            </li>
                            <li>
                                <Link href="#">Payments</Link>
                            </li>
                            <li>
                                <Link href="#">Loan</Link>
                            </li>
                        </ul>
                    </div>
                )
            }

            <div className="contact-banner text-center mt-50 lg-mt-30">
                <h3 className="mb-20">
                    Any Questions? <br/>
                    Let’s talk
                </h3>
                <Link href="/contact" className="tran3s fw-500">
                    Let’s Talk
                </Link>
            </div>
        </div>
    );
};

export default BlogSidebar;
