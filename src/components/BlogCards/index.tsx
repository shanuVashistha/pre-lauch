import React, {useContext, useEffect, useState} from "react";
import {BlogCards} from "@/utils/BlogCards";
import {Img} from "@/utils/Img";
import {LoaderContext} from "@/context/LoaderContext";


export const BlogComponent: React.FC<any> = () => {
    const {setIsLoading} = useContext(LoaderContext);
    const [blogs, setBlogs] = useState<any>([]);
    const getBlogs = async () => {
        setIsLoading(true);
        const response = await fetch(`/api/get/blogs?withoutPagination=true`);
        const data = await response.json();
        setBlogs(data);
        setIsLoading(false);
    }
    useEffect(() => {
        getBlogs();
    }, []);

    const content = <>
        <div className="flex flex-col justify-center items-center mx-auto">
            <div className="max-w-[1200px] pt-[70px] pb-[100px] ">
                <h1 className="text-center text-[#2C98F0] text-[22px] md:text-[42px]  font-semibold pb-[10px] md:pb-[20px]">Learn how to get hired</h1>
                <p className="text-center text-[#363848] text-[10px] md:text-[16px] font-normal pb-[10px] md:pb-[60px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore</p>
                <div className="w-full justify-center items-center flex md:flex-row flex-col-reverse">
                    <div
                        className="mt-[70px] max-w-[1180px] mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[50px] gap-[30px]"
                    >
                        {
                            blogs.slice(0, 3).map((blog: any, index: number) =>
                                <div key={index}>
                                    <BlogCards
                                        img={blog.image}
                                        title={blog.title}
                                        description={blog.description}
                                        url={blog.slug}
                                    />
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
    return (
        <>
            <div
                style={{background:"linear-gradient(110.35deg, #FFF8E4 0%, #E6F2FF 47.51%, #E5FFF5 100%)"}}
                className="bg-cover bg-center bg-no-repeat relative bg-white  mx-auto"
            >
                {content}
            </div>
        </>
    );
};
