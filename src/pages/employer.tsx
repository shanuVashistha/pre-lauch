import React from 'react'
import {EmployeeBanner} from "@/components/Banner";
import {CompanyIconList} from "@/components/CompanyIconList";
import {HowitWorks} from "@/components/HowitWorks";
import {PopularJobCategories} from "@/components/PopularJobCategories";
import {JobMatchingComponent} from "@/components/JobMatchingComponent";
import {BlogComponent} from "@/components/BlogCards";
import {Footer} from "@/components/Footer";


export default function employer() {
    return <div className="main">
        <EmployeeBanner/>
        <CompanyIconList/>
        <HowitWorks/>
        <PopularJobCategories/>
        <JobMatchingComponent/>
        <BlogComponent/>
        <Footer/>

    </div>
}
