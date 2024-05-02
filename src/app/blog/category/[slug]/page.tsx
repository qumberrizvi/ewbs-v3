import React from "react";
import {Metadata} from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import blog_bg from "@/assets/images/media/blog-banner.png";
import shape from "@/assets/images/shape/shape_34.svg";
import BlogListArea from "@/components/blogs/blog-list-area";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import {fetchCategories, fetchPosts, fetchPostsByCategory} from "@/actions/blog-actions";

export const metadata: Metadata = {
    title: "Blog - EWBS",
};

const BlogCategoryPage = async ({ params }: { params: { slug: string }}) => {
    const posts = await fetchPostsByCategory(params.slug);
    const categories = await fetchCategories();

    return (
        <Wrapper>
            <div className="main-page-wrapper">
                {/* header start */}
                <HeaderTwo/>
                {/* header end */}
                <main>
                    {/* breadcrumb start */}
                    <BreadcrumbOne
                        title="Explore our News"
                        subtitle="Meet our experts, guiding you through financial intricacies with precision"
                        page="Blog"
                        bg_img={blog_bg}
                        style_2={true}
                        shape={shape}
                    />
                    {/* breadcrumb end */}

                    {/* blog list area start */}
                    <BlogListArea blog_data={posts} reFetchHook={fetchPosts} categories={categories}/>
                    {/* blog list area end */}

                    {/* fancy banner three start */}
                    <FancyBannerThree/>
                    {/* fancy banner three end */}
                </main>

                {/* footer start */}
                <FooterThree style_2={true}/>
                {/* footer end */}
            </div>
        </Wrapper>
    );
};

export default BlogCategoryPage;
