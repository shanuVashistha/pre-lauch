import React, { useEffect, useState } from 'react';
import { AdminLinksInterface } from "@/types";
import Head from "next/head";
import { useRouter } from "next/router";
import { SideNav } from "@/utils/admin/SideNav";
import { useLoader } from "@/context/LoaderContext";
import { $user, useCurrentUserData } from "@/factories/UserFactory";

interface PrivateLayoutInterface {
    title: string;
    children: React.ReactNode;
}

const PrivateLayout: React.FC<PrivateLayoutInterface> = ({ title, children }) => {
    const router = useRouter();
    const { setIsLoading } = useLoader();
    const user = useCurrentUserData();

    const allowedRoutesForEditor = [
        '/admin',
        '/admin/blog/list',
        '/admin/blog/form',
        '/admin/config/security'
    ];

    const adminLinks: AdminLinksInterface[] = [
        {
            label: 'Dashboard',
            href: '/admin',
            active: false,
            subLinks: []
        },
        {
            label: 'Editors',
            href: '/admin/editors',
            active: false,
            subLinks: []
        },
        {
            label: 'Blogs',
            href: '/admin/blog/list',
            active: false,
            subLinks: []
        },
        {
            label: 'Early Signups',
            href: '/admin/earlySignups',
            active: false,
            subLinks: []
        },
        {
            label: 'Enquiries',
            href: '/admin/enquiries',
            active: false,
            subLinks: []
        },
        {
            label: 'Config',
            href: '',
            active: false,
            subLinks: [
                {
                    label: 'SEO',
                    href: '/admin/config/seo',
                    active: false
                },
                {
                    label: 'Social Media',
                    href: '/admin/config/social',
                    active: false
                },
                {
                    label: 'Security',
                    href: '/admin/config/security',
                    active: false
                }
            ]
        }
    ];
    const editorLinks: AdminLinksInterface[] = [
        {
            label: 'Dashboard',
            href: '/admin',
            active: false,
            subLinks: []
        },
        {
            label: 'Blogs',
            href: '/admin/blog/list',
            active: false,
            subLinks: []
        },
        {
            label: 'Config',
            href: '',
            active: false,
            subLinks: [
                {
                    label: 'Security',
                    href: '/admin/config/security',
                    active: false
                }
            ]
        }
    ];

    const links = user?.role === 'editor' ? editorLinks : adminLinks;

    const [activeLinks, setActiveLinks] = useState(links);

    useEffect(() => {
        const updatedLinks = activeLinks.map((link) => {
            if (link.subLinks.length !== 0) {
                link.subLinks = link.subLinks.map((subLink) => ({
                    ...subLink,
                    active: subLink.href === router.asPath,
                }));
                link.active = link.subLinks.some((subLink) => subLink.active);
            } else {
                link.active = link.href === router.asPath;
            }
            return link;
        });
        setActiveLinks(updatedLinks);
    }, [router.asPath]);

    useEffect(() => {
        if (user) {
            if (user.role === 'editor') {
                const dynamicEditRouteRegex = /^\/admin\/blog\/edit\/[a-zA-Z0-9-]+$/;
                if (!allowedRoutesForEditor.includes(router.asPath) && !dynamicEditRouteRegex.test(router.asPath)) {
                    router.replace('/admin');
                }
            }
        }
        console.log(user);
    }, [user]);

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="main bg-[#F5F9FF]">
                <div className="flex  min-h-[100vh]">
                    <div className="w-[230px] bg-white border-r-2 flex flex-col">
                        <SideNav links={activeLinks}/>
                    </div>
                    <div className="flex-1 flex-col">
                        <div className="bg-white flex items-center gap-[20px] p-[20px] border-b-2 h-[56px]">
                            <div className="flex-1 font-semibold tracking-[1px] text-[15px] text-[#022d72]">
                                Admin Panel
                            </div>
                            <div>
                                <a
                                    onClick={async () => {
                                        setIsLoading(true);
                                        await $user.logout();
                                        router.push("/login");
                                        setIsLoading(false);
                                    }}
                                    className="text-[#FF0000] font-semibold text-[14px] cursor-pointer"
                                >
                                    Logout
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 p-[15px] main-admin-container h-full">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrivateLayout;
