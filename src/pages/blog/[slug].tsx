import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Img } from "@/utils/Img";
import { Footer } from "@/components/Footer";
import { SocialShare } from "@/components/SocialShare";
import { useRouter } from "next/router";
import { BlogCards } from "@/utils/BlogCards";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { blogApi } from "@/helper/Lookups/blog";
import { BlogInterface, BlogPageInterface } from "@/types";
import { BlogBody } from "@/components/BlogBody";
import { Skeleton } from "@mui/material";

const Blog: React.FC<BlogPageInterface> = (props) => {
    const router = useRouter();
    const [blogs, setBlogs] = useState<any[]>([]);
    const [params, setParams] = useState<any>({});


    useEffect(() => {
        setParams({ ...props.blog, body: JSON.parse(props.blog?.body || null) });
        setBlogs(props?.blogs.filter((blog: BlogInterface) => blog.slug !== props.blog.slug));
    }, [props]);

    return (
        <>
            <Head>
                <title>{params.title}</title>
                <meta name="description" content={params.meta_description}/>
                <meta name="keywords" content={params.meta_keywords}/>
                <meta name="title" content={params.meta_title}/>
            </Head>
            <div style={{ background: "linear-gradient(109.04deg, #FFFCF3 0%, #EFF7FF 43.23%, #E8FAF3 98.1%)" }}>
                <Header/>
                <div className="xl:pt-[144px] md:pt-[100px] sm:pt-[65px] flex flex-col items-center">
                    {
                        !params.title ? <Skeleton
                                variant="text"
                                className="max-w-[1242px] w-full p-[12px]"
                            /> :
                            <h1 className="max-w-[1242px] p-[12px] font-semibold xl:text-[35px] md:text-[30px] sm:text-[22px] text-[16px] sm:leading-[52px] leading-[24px] tracking-[1.42px] text-center text-[#313131]">
                                {params.title}
                            </h1>
                    }
                    {
                        !params.description ? <Skeleton
                                variant="rectangular"
                                className="max-w-[980px] p-[12px]"
                                height={200}
                            /> :
                            <p className="max-w-[980px] p-[12px] text-center font-normal text-[16px] leading-[27px] tracking-[0.6px] text-[#5B6570]">
                                {params.description}
                            </p>
                    }
                    <div className="max-w-[980px] w-full md:mt-[68px] mt-[12px] md:p-[12px] p-[32px]">
                        {
                            !params.image ? <Skeleton
                                    variant="rectangular"
                                    height={400}
                                /> :
                                <Img
                                    src={params.image}
                                    alt={params.title}
                                    className="w-full h-[400px] object-cover"
                                />
                        }
                        <div className="mt-[60px]">
                            {
                                !params.body ? <Skeleton
                                    variant="rectangular"
                                    className="p-[12px]"
                                    height={700}
                                /> : <BlogBody content={params.body}/>
                            }
                        </div>
                        <div className="flex flex-col items-center mt-[30px] md:mb-[200px]">
                            <p className="font-semibold text-[16px] leading-[20px] text-center text-[#1D1E25] mb-[16px]">
                                Share this post!
                            </p>
                            <SocialShare url={router.pathname}/>
                        </div>
                    </div>
                    <div className="md:mb-[126px] mb-[50px] md:p-0 p-[32px]">
                        <h3 className="flex justify-center md:text-[44px] font-bold md:leading-[74.27px] text-bannerHeading text-[31px] leading-[55px]">
                            Featured Posts
                        </h3>
                        <div
                            className="mt-[70px] max-w-[1180px] mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[50px] gap-[30px]">
                            {
                                blogs.map((blog, index) => (
                                    <div key={index}>
                                        <BlogCards
                                            img={blog.image}
                                            title={blog.title}
                                            description={blog.description}
                                            url={blog.slug}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default Blog;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug: any = context.query.slug;
    const data: BlogInterface = await blogApi.getSingleBlog(slug);
    const blogs: BlogInterface[] = await blogApi.getBlogs();
    return {
        props: {
            blog: data || null,
            blogs: blogs || null,
            slug: slug
        }
    }
}
