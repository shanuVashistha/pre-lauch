const getSingleBlog = async (slug?: string | string[]) => {
    const response = await fetch(`${process.env.BASE_URL}/api/get/singleBlog?slug=${slug}`);
    return response.json();
};

const getBlogs = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/get/blogs`);
    return response.json();
}

export const blogApi = {
    getSingleBlog,
    getBlogs
}