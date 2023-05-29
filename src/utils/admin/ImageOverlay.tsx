import React from "react";
import { Img } from "@/utils/Img";

interface ImageOverlayInterface {
    id?: any;
    url: any;
    update?: () => any;
    remove?: () => any;
    withOverlay?: boolean;
    onUploadSuccess: (file: File, url: string) => any;
    className?: string;
    helper?: any;
    wrapperHeightClass?: string;
}

export const ImageOverlay: React.FC<ImageOverlayInterface> = (props) => {
    const { id, helper, url, update, remove, withOverlay, onUploadSuccess, className, wrapperHeightClass } = props;

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            onUploadSuccess(file, reader.result as string);
        };

        reader.readAsDataURL(file);
    };

    return <div
        className={`flex items-center justify-center ${withOverlay ? 'bg-[#7f7f7f] p-[12px]' : ''} ${wrapperHeightClass} rounded relative`}>
        <Img
            src={url || '/images/no_image.jpeg'}
            alt="Image"
            className={`w-full ${className ? className : ''}`}
        />
        <div className="absolute top-0 left-0 flex items-center w-full">
            <div className="flex-1">
                {helper}
            </div>
            <div>
                <div className="p-2">
                    <label htmlFor={`uploadImage-${id || "test"}`} className="cursor-pointer">
                        <Img
                            src="/images/icons/upload.svg"
                            alt="upload"
                            className="w-[35px] h-[35px] bg-white rounded-full p-2"
                        />
                        <input className="hidden" type="file" id={`uploadImage-${id || "test"}`}
                               onChange={handleImageUpload}/>
                    </label>
                </div>
                {
                    remove && <div className="p-2">
                        <div className="cursor-pointer" onClick={remove}>
                            <Img
                                src="/images/icons/remove.svg"
                                alt="upload"
                                className="w-[35px] h-[35px] bg-white rounded-full p-2"
                            />
                        </div>
                    </div>
                }
            </div>
        </div>
    </div>
}