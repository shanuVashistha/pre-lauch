import React, { useContext, useState } from "react";
import PrivateLayout from "@/components/Layout/privateLayout";
import { Input, TextArea } from "@/utils/Input";
import { convertToSlug } from "@/utils/utils";
import { ImageOverlay } from "@/utils/admin/ImageOverlay";
import dynamic from "next/dynamic";
import { Button } from "@/utils/Button";
import { useRouter } from "next/router";
import { BlogInterface } from "@/types";
import { LoaderContext } from "@/context/LoaderContext";

const EditorComponent = dynamic(() => import('@/pages/admin/blog/EditorComponent'), { ssr: false });

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});

const Form: React.FC = () => {
    const router = useRouter();

    const { slug } = router.query;

    const { setIsLoading } = useContext(LoaderContext)

    const [imageUrl, setImageUrl] = useState<string>('');

    const [params, setParams] = useState<BlogInterface>({
        title: '',
        slug: '',
        image: '',
        body: '',
        meta_title: '',
        description: '',
        meta_description: '',
        meta_keywords: '',
    });

    const module = {
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'indent': '-1' }, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'color': [] }, { 'background': [] }],
                ['image', 'link'],
                [{ 'align': [] }],
            ]
        }
    };

    const setParam = (key: string, value: any) => {
        setParams((prevParams: any) => {
            return {
                ...prevParams,
                [key]: value,
            };
        });
    };

    const save = async () => {
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append("title", params.title);
            formData.append("slug", convertToSlug(params.title || ""));
            formData.append("body", params.body);
            formData.append("meta_title", params.meta_title);
            formData.append("description", params.description);
            formData.append("meta_description", params.meta_description);
            formData.append("meta_keywords", params.meta_keywords);
            formData.append("file", params.image);

            const response = await fetch("/api/blog", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Blog saved:", data);
                setIsLoading(false);
            } else {
                const errorData = await response.json();
                console.error("Error saving blog:", errorData);
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Error saving blog:", error);
            setIsLoading(false);
        }
    };


    return <PrivateLayout title="Enjoy Mondays Pre Launch - Blog Slug">
        <div className="flex items-center mb-[24px] gap-[12px]">
            <h1 className="flex-1 font-semibold text-[20px] tracking-[1px]">
                {!slug ? 'Add New' : 'Update'} Blog
            </h1>
            <div>
                <Button
                    label={!slug ? 'Save' : 'Update'}
                    onClick={save}
                    color="secondary"
                    className="w-[100px] h-[40px] rounded"
                />
            </div>
        </div>
        <div className="flex flex-col gap-[12px]">
            <div className="flex gap-[12px] items-stretched">
                <div className="flex-1 bg-white rounded-[8px] overflow-hidden border">
                    <ImageOverlay
                        id="image"
                        withOverlay
                        url={imageUrl}
                        onUploadSuccess={(file, url) => {
                            setParam("image", file);
                            setImageUrl(url);
                            console.log(file);
                        }}
                        className="object-contain w-full h-[300px]"
                        wrapperHeightClass="h-full"
                    />
                </div>
                <div className="w-[400px] flex flex-col gap-[12px]">
                    <div>
                        <Input
                            label="Meta Title"
                            placeholder="Meta Title"
                            value={params.meta_title}
                            onChange={e => setParam("meta_title", e.target.value)}
                            className="admin-input"
                        />
                    </div>
                    <div>
                        <Input
                            label="Meta Keywords"
                            placeholder="Meta Keywords"
                            value={params.meta_keywords}
                            onChange={e => setParam("meta_keywords", e.target.value)}
                            className="admin-input"
                        />
                    </div>
                    <div>
                        <TextArea
                            label="Meta Description"
                            placeholder="Meta Description"
                            value={params.meta_description}
                            onChange={e => setParam("meta_description", e.target.value)}
                            className="admin-input"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[12px] items-stretched">
                <div className="flex gap-[12px]">
                    <div className="flex-1">
                        <Input
                            label="Title"
                            placeholder="Title"
                            value={params.title}
                            onChange={e => setParam("title", e.target.value)}
                            className="admin-input"
                        />
                    </div>
                    <div className="flex-1">
                        <Input
                            label="Slug"
                            disabled={true}
                            placeholder="Slug"
                            className="admin-input"
                            value={convertToSlug(params.title || "")}
                        />
                    </div>
                </div>
                <div>
                    <TextArea
                        label="Description"
                        placeholder="Description"
                        value={params.description}
                        onChange={e => setParam("description", e.target.value)}
                        className="admin-input"
                    />
                </div>
            </div>
            <div>
                <div className="font-medium text-primary text-[14px] block pb-[10px]">
                    Body
                </div>
                <EditorComponent/>
                <QuillNoSSRWrapper
                    theme="snow"
                    value={params.body}
                    placeholder="Blog Body"
                    onChange={setParam.bind(null, "body")}
                    modules={module}
                />
            </div>
        </div>
        <div className="flex justify-end mt-[24px]">
            <Button
                onClick={save}
                color="secondary"
                label={!slug ? 'Save' : 'Update'}
                className="w-[100px] h-[40px] rounded"
            />
        </div>
    </PrivateLayout>
}

export default Form;