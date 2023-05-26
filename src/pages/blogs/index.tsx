import React, {useContext, useEffect, useState} from "react";
import {Grid} from "@mui/material";
import {Header} from "@/components/Header";
import {LoaderContext} from "@/context/LoaderContext";
import {BlogCards} from "@/utils/BlogCards";
import {BlogInterface} from "@/types";
import {Footer} from "@/components/Footer";
import Head from "next/head";

const BlogsPage: React.FC = () => {
    const {isLoading, setIsLoading} = useContext(LoaderContext);
    const [blogs, setBlogs] = useState<BlogInterface[]>([]);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(16);
    const [total, setTotal] = useState<number>(0);
    const [seoData, setSeoData] = useState<any>({});

    const getBlogs = async () => {
        setIsLoading(true);
        const response: any = await fetch(`/api/get/blogs?page=${JSON.stringify(page)}&limit=${JSON.stringify(limit)}`);
        const {data, pageSize, page: p} = await response.json();
        setBlogs(data);
        setTotal(pageSize);
        setPage(p);
        setIsLoading(false);
    }
    const getSeoData = async () => {
        const response = await fetch(`/api/get/seo`);
        const data = await response.json();
        setSeoData(data.filter((item: any) => item.page === "blog")[0]);
    }
    useEffect(() => {
        getBlogs();
    }, [limit, page]);

    useEffect(() => {
        getSeoData();
    }, []);

    return <>
        <Head>
            <title>{seoData.page_title}</title>
            <meta name="description" content={seoData.description}/>
            <meta name="keywords" content={seoData.keywords}/>
            <meta name="title" content={seoData.title}/>
        </Head>
        <Grid
            container
            wrap="nowrap"
            direction="column"
            className="main min-h-[100vh]"
            style={{background: 'linear-gradient(109.04deg, #FFFCF3 0%, #EFF7FF 43.23%, #E8FAF3 98.1%)'}}
        >
            <Grid className="w-full">
                <Header/>
            </Grid>
            <Grid className="mx-auto max-w-[1242px] mb-[20px]">
                <Grid container direction="column" wrap="nowrap">
                    <Grid className="md:py-[100px] py-[50px]">
                        <h1
                            className="uppercase text-center font-medium text-[20px] md:text-[32px] lg:text-[42px] leading-[40px] md:leading-[63px] tracking-[0.003em] text-[#334049] p-[16px]"
                        >
                            Blogs
                        </h1>
                    </Grid>
                    <Grid container className="p-[8px]">
                        {
                            blogs.map((blog, index: number) => <Grid
                                item
                                md={4}
                                sm={6}
                                xs={12}
                                key={index}
                                className="p-[16px]"
                            >
                                <BlogCards
                                    title={blog.title}
                                    img={blog.image}
                                    description={blog.description}
                                    url={blog.slug}
                                />
                            </Grid>)
                        }

                    </Grid>
                    {/*{*/}
                    {/*    !isLoading && total > 1 && <Grid container justifyContent="center" className="p-[16px]">*/}
                    {/*        <Pagination*/}
                    {/*            count={total}*/}
                    {/*            page={page}*/}
                    {/*            variant="outlined"*/}
                    {/*            shape="rounded"*/}
                    {/*            onChange={(event: any, value: number) => setPage(value)}*/}
                    {/*        />*/}
                    {/*    </Grid>*/}
                    {/*}*/}
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
    </>
}

export default BlogsPage;