import React from "react";
import PrivateLayout from "@/components/Layout/privateLayout";
import { useCurrentUserData } from "@/factories/UserFactory";

const Admin: React.FC = () => {
    const user = useCurrentUserData();

    return <PrivateLayout title="Enjoy Mondays Pre Launch - Admin">
        <div className="flex flex-col items-center justify-center text-center h-full gap-[10px]">
            <p className="font-medium tracking-[1px] text-[25px]">
                Welcome {user.name}, <br/>
            </p>
            <p className="font-medium tracking-[1px] text-[25px]">
                To <span className="text-secondary">Pre Launch</span> Admin Panel
            </p>
        </div>
    </PrivateLayout>
}

export default Admin;