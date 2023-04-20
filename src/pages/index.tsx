import React from 'react'
import Head from "next/head";
import Home from "@/pages/home";

export default function index () {
    return <>
        <Head>
            <title>Home</title>
        </Head>
        <div className="main">
            <Home/>
        </div>
    </>
}
