import React from "react";
import BlogDetailsCommentArea from "./blog-details-comment-area";
import Image from "next/image";
import Link from "next/link";
// internal
import BlogSidebar from "../blog-sidebar";
import blog_1 from "@/assets/images/blog/blog_img_08.jpg";
import blog_2 from "@/assets/images/blog/blog_img_16.jpg";
import blog_3 from "@/assets/images/blog/blog_img_17.jpg";
import icon from "@/assets/images/icon/icon_93.svg";
import BlogDetailsForm from "@/components/forms/blog-details-form";
import {IBlog} from "@/types/blog-d-t";

const BlogDetailsArea = ({blog}: { blog: IBlog }) => {
    const {date, title, post_info, img, body} = blog || {};
    return (
        <div className="blog-details position-relative mt-150 lg-mt-80 mb-150 lg-mb-80">
            <div className="container">
                <div className="row gx-xl-5">
                    <div className="col-lg-8">
                        <article className="blog-meta-two style-two">
                            <figure
                                className="post-img position-relative d-flex align-items-end m0"
                                style={{backgroundImage: `url(${img.src})`}}
                            >
                                <div className="date">{date}</div>
                            </figure>
                            <div className="post-data">
                                <div className="post-info">{post_info}</div>
                                <div className="blog-title">
                                    <h4>{title}</h4>
                                </div>
                                <div className="post-details-meta" dangerouslySetInnerHTML={{__html: body}}>
                                </div>
                                <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                                    <ul className="d-flex align-items-center tags style-none pt-20">
                                        <li>Tag:</li>
                                        <li>
                                            <Link href="#">Finance</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Business</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Setup</Link>
                                        </li>
                                    </ul>
                                    <ul className="d-flex share-icon align-items-center style-none pt-20">
                                        <li>Share:</li>
                                        <li>
                                            <Link href="#">
                                                <i className="bi bi-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="bi bi-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="bi bi-instagram"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </article>
                        {/* blog comment area start */}
                        {/*<BlogDetailsCommentArea/>*/}
                        {/* blog comment area end */}
                        {/*<div className="blog-comment-form grey-bg">
                            <h3 className="blog-inner-title">Add Your Comments</h3>
                            <p>
                                <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#loginModal"
                                    className="text-decoration-underline fw-500"
                                >
                                    Sign in
                                </a>{" "}
                                to post your comment or signup if you do not have any account.
                            </p>
                             blog details form start
                            <BlogDetailsForm/>
                             blog details form end
                        </div>*/}
                    </div>

                    <div className="col-lg-4 col-md-8">
                        {/* blog sidebar start */}
                        <BlogSidebar/>
                        {/* blog sidebar end */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsArea;
