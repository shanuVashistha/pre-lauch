import React from "react";
import PrivateLayout from "@/components/Layout/privateLayout";

const Admin: React.FC = () => {
    return <PrivateLayout title="Enjoy Mondays Pre Launch - Admin">
        <div className="flex items-center justify-center text-center h-full">
            <p className="font-medium tracking-[1px] text-[25px]">
                Welcome To <span className="text-secondary">Enjoy Mondays Pre Launch</span> Admin Panel
            </p>
        </div>
    </PrivateLayout>
}

export default Admin;