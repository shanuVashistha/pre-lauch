import React, { useContext, useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Img } from "@/utils/Img";
import { Footer } from "@/components/Footer";
import { SocialShare } from "@/components/SocialShare";
import { useRouter } from "next/router";
import { BlogCards } from "@/utils/BlogCards";
import { LoaderContext } from "@/context/LoaderContext";

const Blog: React.FC = () => {
    const router = useRouter();
    const { setIsLoading } = useContext(LoaderContext);
    const [blogs, setBlogs] = useState<any[]>([]);
    const [params, setParams] = useState<any>({});
    const getBlogs = async () => {
        setIsLoading(true);
        const response = await fetch(`/api/get/blogs`);
        const data = await response.json();
        setBlogs(data.filter((blog: any) => blog.slug !== router.query?.slug));
        setIsLoading(false);
    }

    useEffect(() => {
        getBlogs();
    }, []);

    useEffect(() => {
        const fetchBlogPost = async () => {
            setIsLoading(true);
            if (router.query?.slug) {
                try {
                    const response = await fetch(`/api/get/singleBlog?slug=${router.query?.slug}`);
                    if (response.ok) {
                        const data = await response.json();
                        const parsedBody = JSON.parse(data.body);
                        setParams({ ...data, body: parsedBody });
                    } else {
                        const errorData = await response.json();
                        console.error("Error fetching blog:", errorData);
                    }
                } catch (error) {
                    console.error("Error fetching blog:", error);
                }
            }
            setIsLoading(false);
        };
        fetchBlogPost();
    }, []);

    return (
        <div style={{ background: "linear-gradient(109.04deg, #FFFCF3 0%, #EFF7FF 43.23%, #E8FAF3 98.1%)" }}>
            <Header/>
            <div className="xl:pt-[144px] md:pt-[100px] sm:pt-[65px] flex flex-col items-center">
                <h1 className="max-w-[1242px] p-[12px] font-semibold xl:text-[35px] md:text-[30px] sm:text-[22px] text-[16px] sm:leading-[52px] leading-[24px] tracking-[1.42px] text-center text-[#313131]">
                    {params.title}
                </h1>
                <p className="max-w-[980px] p-[12px] text-center font-normal text-[16px] leading-[27px] tracking-[0.6px] text-[#5B6570]">
                    {params.description}
                </p>
                <div className="max-w-[980px] w-full md:mt-[68px] mt-[12px] md:p-[12px] p-[32px]">
                    <Img
                        src={params.image}
                        alt={params.title}
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="mt-[60px]">
                        {params.body && params.body.blocks.map((block, index) => {
                            if (block.type === 'header') {
                                return (
                                    <h3 key={index}
                                        className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] my-[20px]">
                                        {block.data.text}
                                    </h3>
                                );
                            }
                            if (block.type === 'paragraph') {
                                return (
                                    <p key={index}
                                       className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] my-[10px]">
                                        {block.data.text}
                                    </p>
                                );
                            }
                            if (block.type === 'list') {
                                return (
                                    <div className="pb-[12px] flex flex-col gap-[12px]">
                                        {
                                            block.data.items.map((item, index) => (
                                                <div key={index} className="w-full flex items-center gap-[16px]">
                                                    <Img src="/images/check.svg" alt="Check"
                                                         className="w-[13px] h-[13px]"/>
                                                    <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570]">
                                                        {item}
                                                    </p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                );
                            }
                            return null;
                        })}
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
                        {blogs.filter((b) => b.slug !== router.pathname).map((blog, index) => (
                            <BlogCards
                                key={index}
                                img={blog.image}
                                title={blog.title}
                                description={blog.description}
                                url={blog.slug}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Blog;
