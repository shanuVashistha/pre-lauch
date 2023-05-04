import React from "react";
import { Header } from "@/components/Header";
import { Img } from "@/utils/Img";
import { Footer } from "@/components/Footer";
import { SocialShare } from "@/components/SocialShare";
import { useRouter } from "next/router";
import { BlogCards } from "@/utils/BlogCards";

const Blog: React.FC = () => {
    const router = useRouter();
    const blogs = [
        {
            tag: "Article",
            img: "/images/blog.svg",
            title: "Make Your Dreams Come True: A Guide to Finding the Perfect Job",
            description: "Are you ready to take the next step in your professional journey and start searching for your dream job? You’ve come to the right place! In this blog post, you will learn the practical...",
            slug: "makeYourDreamsComeTrueAGuideToFindingThePerfectJob"
        },
        {
            tag: "Article",
            img: "/images/blog.svg",
            title: "A Guide for woman to break into information technology",
            description: "According to the Bureau of Labor Statistics (BLS), careers in computer and information technology (IT) are projected to grow by 12% in the next decade, making it one of the fastest-growing...",
            slug: "aGuideForWomanToBreakIntoInformationTechnology"
        },
    ]
    const goals = [
        "Enjoy Mondays caters to tech, engineering, sales, marketing, accounting and finance. Hired.com only does tech and sales.",
        "Hired.com requires employers to search job seeker profiles and request an interview when there is a resume fit. We've flipped the script by resume the search and empowering job seekers with full transparency on the opportunity before deciding to interview.",
        "Our one time questionnaire looks at the macro and micro of a job seekers wants and needs in a dream job. Our AI platform only makes a match if there's a 96% success rate. Hired.com asks good basic questions but lacks understanding a job seekers intrinsic motivators.",
        "Enjoy Mondays saves the employer hours per week by not sourcing for candidate profiles.",
        "Our pricing model is more cost effective for employers compared to Hired.com.",
        "The quality and quantity of job details we require employers to complete are not found on any job board or marketplace."
    ];
    return (
        <div style={{ background: "linear-gradient(109.04deg, #FFFCF3 0%, #EFF7FF 43.23%, #E8FAF3 98.1%)" }}>
            <Header/>
            <div className="xl:pt-[144px] md:pt-[100px] sm:pt-[65px] pt-[27px] flex flex-col items-center">
                <h1 className="max-w-[1242px] p-[12px] font-semibold xl:text-[35px] md:text-[30px] sm:text-[22px] text-[16px] leading-[52px] sm:leading-[24px] tracking-[1.42px] text-center text-[#313131]">
                    Overview of Enjoy Mondays - How our marketplace works for job-seekers
                </h1>
                <div className="max-w-[980px] w-full mt-[68px] p-[12px]">
                    <Img
                        src="/images/blog.svg"
                        alt=""
                        className="w-full"
                    />
                    <div className="mt-[60px]">
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Are you tired of having unproductive conversations with recruiters about jobs that don't fit
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            your needs? Maybe the job isn't remote, or the compensation doesn't match your expectations,
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            or it's a contract role, or requires too much travel. If this sounds familiar, you might
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            want to check out Enjoy Mondays. We're changing the game when it comes to getting you hired
                            for your dream job.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            The process of searching for a new job can be very time-consuming, frustrating, and
                            stressful. Enjoy Mondays is designed to simplify and streamline this process by gathering
                            your wants and needs in new job in a one time online questionnarire. Once Enjoy Mondays
                            understands what meaningful and fulfilling work looks like for you, our AI combined with
                            human intelligence begins connecting you with employers who meet 96% of your search
                            criteria.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            Enjoy Mondays is a unique recruitment platform that differentiates itself from traditional
                            recruiting agencies, job boards, and networking sites by promoting full transparency in the
                            job search process, hours of time saved for both job seekers and employers, and everyone
                            stands to benefit from a more positive hiring process when all of the parties involved are
                            on equal footing.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            What is the Enjoy Mondays marketplace?
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Our platform is a marketplace for hiring that connects job-seekers with motivated employers.
                            It works differently than traditional job boards. Designed by an 18 year recruiting veteran,
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            we understand the struggles of the job search process. That's why we created a platform to
                            make the process easier and more efficient for job seekers. Instead of applying to jobs, our
                            AI matching platform is compassionate and takes into account your desired criteria to make
                            sure you are only matched with the right companies.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            The simplest way to say it, there aren't enough people to fill all jobs. The way we see it
                            is: In a labor market where job seekers have the luxury of choice, employee experience,
                            benefits, and non-economic perks are extremely important. Through our AI, human
                            intelligence, and fact-based marketplace, Enjoy Mondays cuts through all the clutter, and
                            brings together candidates looking for their perfect job.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            No more spending countless hours searching and applying to jobs, just matching to perfect
                            fits
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            Once signed up on the Enjoy Monday platform, you will complete a 5 minute questionnaire
                            where you help us define what a perfect job looks like for you. Our AI uses this information
                            and begins matching you with employers that meet all your expectations in future work. Once
                            a match is made our career coaches confirm the match is a great fit. Once confirmed, you
                            will receive full disclosure on the employer, job description, team makeup, career
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            trajectory, and much more. If you like what you see, click the "request an interview" button
                            and sit back and wait for the interviews to come through. Take comfort knowing that all
                            matches meet exactly what you are seeking in your next job
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            How much does Enjoy Mondays cost for the job seeker?
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            There is never a cost for job seekers to be on Enjoy Mondays.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            As a job seeker, how do I create a profile?
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            The process of creating a profile on Enjoy Mondays is simple. After registering, you'll need
                            to answer a 5-minute questionnaire that outlines your ideal job, also known as your perfect
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            job. This process is referred to as "one interview, many opportunities."
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            By providing your preferences, such as location, desired salary, ideal role, and seniority
                            level, company size, and so much more, you will receive matches that are personalized
                            according to your criteria. To learn how to improve your candidate profile and stand out
                            from other candidates, we suggest reading our blog post about maximizing your profile.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            Will my current employer see my profile?
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            Our system offers a 100% confidential job search feature that automatically keeps your name
                            and current employer hidden from your profile. This guarantees that your company will not
                            find out about your job search activities. Moreover, your Enjoy Monday profile is also kept
                            private and not visible to other job-seekers, unlike LinkedIn, Indeed, and all other job
                            boards.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            Can you provide a definition for the role of career coach?
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            Enjoy Mondays has a team of career coaches that provide job seekers with support throughout
                            their job search. This includes advice on how to optimize their profiles, reminders about
                            unanswered messages from employers, as well as assistance during late stage interviews.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Receive opportunities that match 96% of what you're looking for with full transparency on
                            the employer and job details (The level of detail Enjoy Mondays shares has never been done
                            before)
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            If the role and company match your preferences, you'll receive a notification. Login to the
                            platform to review and request an interview, or decline the match based on your interest.
                            Job seekers must respond within 3 days to avoid expiration. The career coach will check in
                            for any questions.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            Once you request an interview, recruiters and hiring managers on Enjoy Mondays can view your
                            confidential profile. Your name and current employer will remain hidden until the employer
                            confirms interest in a first interview.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            When you say full transparency on both sides what does that mean?
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            Enjoy Mondays has a team of career coaches that provide job seekers with support throughout
                            their job search. This includes advice on how to optimize their profiles, reminders about
                            unanswered messages from employers, as well as assistance during late stage interviews.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            What type of jobs does the Enjoy Mondays marketplace support?
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            Enjoy Mondays is a place for passive and active job seekers in tech, sales, marketing,
                            engineering, accounting, and finance within the United States and Canada.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            How does Enjoy Mondays reduce employer bias?
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            First and last names along with current employers are hidden creating a safe space for
                            passive and active job seekers who are looking to get hired for their perfect job. By
                            removing names and pictures we are working to eliminate bias in the hiring process.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[15px]">
                            How is Enjoy Mondays different from Hired.com?
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[20px]">
                            Hired.com and vettery.com did a great job of thinking outside the box to create a
                            marketplace for job seekers and employers. There are a 6 key areas where Enjoy Mondays
                            standout:
                        </p>
                        <div className="flex flex-col gap-[20px] mb-[25px]">
                            {
                                goals.map((item, index) => <div
                                    key={index}
                                    className="w-full flex gap-[12px]"
                                >
                                    <Img
                                        src="/images/check.svg"
                                        alt="Check"
                                        className="w-[13px] h-[13px] mt-[8px]"
                                    />
                                    <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570]">
                                        {item}
                                    </p>
                                </div>)
                            }
                        </div>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            In conclusion, Enjoy Mondays is changing the way that people hire and get hired in a big
                            way. Through its AI, human intelligence, and fact-based marketplace, Enjoy Mondays brings
                            together candidates looking for their perfect job, and employers looking to streamline
                            sourcing, in a confidential and transparent way that’s never been done before.
                            Everyone stands to benefit from a more positive hiring process when all of the parties
                            involved are on equal footing.
                            Better Mondays start here.
                        </p>
                    </div>
                    <div className="flex flex-col items-center mt-[30px] md:mb-[200px]">
                        <p className="font-semibold text-[16px] leading-[20px] text-center text-[#1D1E25] mb-[16px]">
                            Share this post!
                        </p>
                        <SocialShare url={router.pathname}/>
                    </div>
                </div>
                <div className="md:mb-[126px] mb-[50px] md:p-0 p-[32px]">
                    <h3 className=" flex justify-center md:text-[44px] font-bold md:leading-[74.27px] text-bannerHeading text-[31px] leading-[55px]">
                        Featured Posts
                    </h3>
                    <div
                        className="mt-[70px] max-w-[1180px] mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[50px] gap-[30px]"
                    >
                        {
                            blogs.filter(b => b.slug !== router.pathname).map((blog, index) => <BlogCards
                                key={index}
                                img={blog.img}
                                title={blog.title}
                                description={blog.description}
                                url={blog.slug}
                            />)
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Blog;
