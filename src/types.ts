export interface BlogInterface {
    id?: number
    body: any
    image?: any
    slug: string
    title: string
    description?: string
    meta_title?: string
    meta_description?: string
    meta_keywords?: string
}

export interface LoginInterface {
    username: string;
    password: string;
}

export interface AdminLinksInterface {
    label: string;
    href: string;
    active: boolean;
    subLinks: SubLinksInterface[]
}

export interface SubLinksInterface {
    label: string;
    href: string;
    active: boolean;
}

export interface BlogPageInterface {
    slug: string;
    blog: BlogInterface;
    blogs: BlogInterface[];
}