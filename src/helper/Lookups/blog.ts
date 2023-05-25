const getSingleBlog = async (slug?: string | string[]) => {
    const response = await fetch(`${process.env.BASE_URL}/api/get/singleBlog?slug=${slug}`);
    return response.json();
};

const getBlogs = async (page: number, limit: number) => {
    const response = await fetch(`${process.env.BASE_URL}/api/get/blogs?page=${JSON.stringify(page)}&limit=${JSON.stringify(limit)}`);
    return response.json();
}
const getAllBlogs = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/get/blogs?withoutPagination=true`);
    return response.json();
}

export const blogApi = {
    getSingleBlog,
    getAllBlogs,
    getBlogs
}