const getSeo = async () => {
    const response = await fetch(`${process.env.BASE_URL}/api/get/seo`);
    return response.json();
};

const getPageSeo = async (page: string) => {
    const response = await fetch(`${process.env.BASE_URL}/api/get/seo?page=${page}}`);
    return response.json();
}

export const configApi = {
    getPageSeo,
    getSeo
}