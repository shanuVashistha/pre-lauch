import React, {useState} from 'react';
import {LoginInterface} from "@/types";
import {Img} from "@/utils/Img";
import {Input} from "@/utils/Input";
import {Button} from "@/utils/Button";
import Head from "next/head";
import {useAuth} from "@/context/AuthContext";

const LoginPage = () => {
    const [params, setParams] = useState<LoginInterface>({
        username: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {login, token} = useAuth();

    const setParam = (key: string, value: string) => {
        setParams({
            ...params,
            [key]: value
        });
    };

    const handleLogin = async () => {
        await login(params);
    };

    return (
        <>
            <Head>
                <title>Enjoy Mondays Pre Launch - Login</title>
            </Head>
            {token ? (
                <div/>
            ) : (
                <div className="main">
                    <div
                        className="bg-[#F5F9FF] min-h-[100vh] gap-[20px] w-full flex flex-col items-center justify-center">
                        <div className="px-[20px] mb-[40px]">
                            <Img
                                src="/images/logo.svg"
                                alt="Logo"
                                className="w-[200px]"
                            />
                        </div>
                        <div className="max-w-[350px] w-full">
                            <Input
                                placeholder="Username"
                                value={params.username}
                                onChange={(e) =>
                                    setParam("username", e.target.value)
                                }
                                className="admin-input"
                            />
                        </div>
                        <div className="max-w-[350px] w-full">
                            <Input
                                placeholder="Password"
                                value={params.password}
                                type={showPassword ? "text" : "password"}
                                onChange={(e) =>
                                    setParam("password", e.target.value)
                                }
                                prefix={
                                    !showPassword ? (
                                        <a onClick={() => setShowPassword(true)}>
                                            <Img
                                                src="/images/eye.svg"
                                                alt="Eye"
                                                className="w-[20px] cursor-pointer"
                                            />
                                        </a>
                                    ) : (
                                        <a onClick={() => setShowPassword(false)}>
                                            <Img
                                                src="/images/eye-off.svg"
                                                alt="Eye"
                                                className="w-[20px] cursor-pointer"
                                            />
                                        </a>
                                    )
                                }
                                className="admin-input"
                            />
                        </div>
                        <div>
                            <Button
                                label="Login"
                                color="primary"
                                className="xxl:text-[19px] xxl:leading-[22.99px] font-semibold sm:text-[17px] text-[14px] sm:leading-[20.57px] leading-[14px] tracking-[-0.22px] md:w-[145px] w-[115px] xl:h-[44px] md:h-[38px] h-[35px]"
                                onClick={handleLogin}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LoginPage;
