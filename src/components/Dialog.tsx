// DynamicDialog.tsx
import React from 'react';
import { Img } from "@/utils/Img";

interface DialogProps {
    content: React.ReactNode;
    isOpen: boolean;
    onCancel?: () => void;
}

const Dialog: React.FC<DialogProps> = (
    {
        content,
        isOpen,
        onCancel,
    }
) => {
    if (!isOpen) return null;

    return (
        <div
            className="h-full w-fulll fixed top-0 left-0 right-0 bottom-0 z-[9999] backdrop-blur flex items-center justify-center">
            <div className="h-full relative" style={{ width: 'calc(100% - 40px)', height: 'calc(100% - 40px)' }}>
                <div
                    onClick={onCancel}
                    className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white absolute top-[5px] right-[5px] z-[99] cursor-pointer"
                >
                    <Img src="/images/icons/close.svg" alt="close Icon" className="w-[35px] h-[35px]"/>
                </div>
                <div className="h-full overflow-hidden bg-white rounded-[15px]">{content}</div>
            </div>
        </div>
    );
};

export default Dialog;
