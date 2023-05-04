import React, { useContext } from "react";
import { ClipLoader } from "react-spinners";
import { LoaderContext } from "@/context/LoaderContext";

const Loader: React.FC = () => {
    const { isLoading } = useContext(LoaderContext);
    return (
        <div
            className={`fixed top-0 left-0 right-0 bottom-0 items-center justify-center z-[9999] ${isLoading ? 'flex' : 'hidden'}`}
            style={{ background: "rgba(0,0,0,.5)" }}>
            <ClipLoader color={"#F9B400"} loading={isLoading} size={100}/>
        </div>
    );
};

export default Loader;
