import React, { useContext, useEffect, useState } from "react";
import PrivateLayout from "@/components/Layout/privateLayout";
import { convertToSlug } from "@/utils/utils";
import { ImageOverlay } from "@/utils/admin/ImageOverlay";
import dynamic from "next/dynamic";
import { Button } from "@/utils/Button";
import { LoaderContext } from "@/context/LoaderContext";
import { Paper, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useSnackbar } from "@/context/SnackbarContext";

const EditorComponent = dynamic(() => import('@/pages/admin/blog/EditorComponent'), { ssr: false });

const fieldNames: any = {
    title: "Title",
    body: "Body",
    meta_title: "Meta Title",
    description: "Description",
    meta_description: "Meta Description",
    meta_keywords: "Meta Keywords",
    image: "Image",
};

const Edit: React.FC = () => {
    const router: any = useRouter();
    const { openSnackbar } = useSnackbar()
    const { setIsLoading } = useContext(LoaderContext)
    const [editorData, setEditorData] = useState<any>({});
    const [errors, setErrors] = useState<any>("");

    const [imageUrl, setImageUrl] = useState<string>('');

    const [params, setParams] = useState<any>({});

    const setParam = (key: string, value: any) => {
        setParams((prevParams: any) => {
            return {
                ...prevParams,
                [key]: value,
            };
        });
        setErrors((prevErrors: any) => {
            const { [key]: deletedKey, ...restErrors } = prevErrors;
            return restErrors;
        });
    };

    const save = async () => {
        setIsLoading(true);

        const emptyParams: any = Object.keys(params).filter(key => !params[key]);

        if (emptyParams.length > 0) {
            const newErrors: any = emptyParams.reduce((acc: any, cur: any) => {
                acc[cur] = `${fieldNames[cur]} is required`;
                return acc;
            }, {});
            setErrors((prevErrors: any) => ({ ...prevErrors, ...newErrors }));
        }

        if (Object.keys(errors).length > 0 || emptyParams.length > 0) {
            setIsLoading(false);
            return;
        }
        try {
            const formData = new FormData();
            formData.append("id", params.id);
            formData.append("title", params.title);
            formData.append("slug", convertToSlug(params.title || ""));
            formData.append("body", JSON.stringify(editorData));
            formData.append("meta_title", params.meta_title || "");
            formData.append("description", params.description || "");
            formData.append("meta_description", params.meta_description || "");
            formData.append("meta_keywords", params.meta_keywords || "");
            formData.append("file", params.image);

            const response = await fetch("/api/update/blog", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            if (data.error) {
                openSnackbar(data.error, 'error');
            } else if (data.message) {
                router.push("/admin/blog/list");
                openSnackbar(data.message, 'success');
            }
        } catch (e: any) {
            openSnackbar(e.message, 'error');
        }
        setIsLoading(false);
    };

    const getBlog = async () => {
        setIsLoading(true);
        if (router.query?.slug) {
            try {
                const response = await fetch(`/api/get/singleBlog?slug=${router.query?.slug}`);
                if (response.ok) {
                    const data = await response.json();
                    setParams(data);
                    setImageUrl(data.image);
                    setEditorData(data.body);
                } else {
                    const errorData = await response.json();
                    console.error("Error fetching blog:", errorData);
                }
            } catch (error) {
                console.error("Error fetching blog:", error);
            }
        }
        setIsLoading(false);
    }


    useEffect(() => {
        if (router.query?.slug) {
            getBlog();
        }
    }, [router.query?.slug]);

    return <PrivateLayout title="Enjoy Mondays Pre Launch - Blog Slug">
        <div className="flex items-center mb-[24px] gap-[12px]">
            <h1 className="flex-1 font-semibold text-[20px] tracking-[1px]">
                Update Blog
            </h1>
            <div>
                <Button
                    label="Update"
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
                        }}
                        className="object-cover w-full h-[265px]"
                        wrapperHeightClass="h-full"
                    />
                </div>
                <div className="w-[400px] flex flex-col gap-[16px]">
                    <div>
                        <TextField
                            fullWidth
                            label="Meta Title"
                            variant="outlined"
                            error={!!errors.meta_title}
                            helperText={errors.meta_title}
                            value={params.meta_title || ""}
                            onChange={e => setParam("meta_title", e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            label="Meta Keywords"
                            variant="outlined"
                            error={!!errors.meta_keywords}
                            helperText={errors.meta_keywords}
                            value={params.meta_keywords || ""}
                            onChange={e => setParam("meta_keywords", e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            rows={5}
                            fullWidth
                            multiline
                            label="Meta Description"
                            variant="outlined"
                            error={!!errors.meta_description}
                            helperText={errors.meta_description}
                            value={params.meta_description || ""}
                            onChange={e => setParam("meta_description", e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[16px] items-stretched">
                <div className="flex gap-[16px]">
                    <div className="flex-1">
                        <TextField
                            fullWidth
                            label="Title"
                            variant="outlined"
                            error={!!errors.title}
                            helperText={errors.title}
                            value={params.title || ""}
                            onChange={e => setParam("title", e.target.value)}
                        />
                    </div>
                    <div className="flex-1">
                        <TextField
                            disabled
                            fullWidth
                            label="Slug"
                            variant="outlined"
                            error={!!errors.title}
                            helperText={errors.title}
                            value={convertToSlug(params.title || "")}
                        />
                    </div>
                </div>
                <div>
                    <TextField
                        rows={5}
                        fullWidth
                        multiline
                        label="Description"
                        variant="outlined"
                        error={!!errors.description}
                        helperText={errors.description}
                        value={params.description || ""}
                        onChange={e => setParam("description", e.target.value)}
                    />
                </div>
            </div>
            <div>
                <div className="font-medium text-primary text-[14px] block pb-[10px]">
                    Body
                </div>
                <Paper>
                    <EditorComponent setEditorData={setEditorData} body={editorData}/>
                </Paper>
            </div>
        </div>
        <div className="flex justify-end mt-[24px]">
            <Button
                onClick={save}
                color="secondary"
                label="Update"
                className="w-[100px] h-[40px] rounded"
            />
        </div>
    </PrivateLayout>
}

export default Edit;