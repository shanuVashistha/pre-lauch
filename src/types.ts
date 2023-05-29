export interface BlogInterface {
    id?: number
    body: any
    image?: any
    slug: string
    title: string
    is_featured: string
    description: string
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

export interface CalculatorInterface {
    occupation: string;
    experience: string;
    location: string;
    skills: string[];
    industry: string;
    company_size: string;
}

export interface SeoInterface {
    page: string;
    title: string;
    keywords: string;
    page_title: string;
    description: string;
}

export interface UserInterface {
    username?: string;
    name?: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    confirm_password: string;
    phone: string;
    role: string;
    status?: string;
}