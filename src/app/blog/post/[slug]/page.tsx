import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/header/header-two";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FooterThree from "@/layout/footer/footer-three";
import blog_bg from "@/assets/images/media/img_32.jpg";
import FancyBannerThree from "@/components/fancy-banner/fancy-banner-three";
import BlogDetailsArea from "@/components/blogs/blog-details/blog-details-area";
import shape from "@/assets/images/shape/shape_35.svg";
import {fetchCategories, fetchPost, fetchPosts} from "@/actions/blog-actions";

export const metadata: Metadata = {
  title: "Blog Details Page",
};

const BlogDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await fetchPost(params.slug);
  const recentPosts = await fetchPosts(1, 2);
  const categories = await fetchCategories();
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
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

          {/* blog details area start */}
          {blog ? (
            <BlogDetailsArea blog={blog} recentPosts={recentPosts} categories={categories} />
          ) : (
            <div className="container">
              <div className="mt-80 mb-80 text-center">
                <h3>Not Found Any blog this id {params.slug}</h3>
              </div>
            </div>
          )}
          {/* blog details area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}
        </main>

        {/* footer start */}
        <FooterThree style_2={true} />
        {/* footer end */}
      </div>
    </Wrapper>
  );
};

export default BlogDetailsPage;
