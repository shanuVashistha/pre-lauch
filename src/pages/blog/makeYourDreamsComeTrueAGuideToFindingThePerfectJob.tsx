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
            title: "Overview of Enjoy Mondays - How our marketplace works for job-seekers",
            description: "Are you tired of having unproductive conversations with recruiters about jobs that don't fit your needs? Maybe the job isn't remote, or the compensation doesn't match your expectations...",
            slug: "overviewOfEnjoyMondaysHowOurMarketplaceWorksForJobSeekers"
        },
        {
            tag: "Article",
            img: "/images/blog.svg",
            title: "A Guide for woman to break into information technology",
            description: "According to the Bureau of Labor Statistics (BLS), careers in computer and information technology (IT) are projected to grow by 12% in the next decade, making it one of the fastest-growing...",
            slug: "aGuideForWomanToBreakIntoInformationTechnology"
        },
    ]
    const reflectData = [
        "What were my favorite and least favorite aspects of the company?",
        "What aspects of the company culture were most and least appealing to me?",
        "What was the best and worst thing about my boss?",
        "At what moments in your role did you feel the most joy (i.e. biggest accomplishment?",
        "What stands out most to me as my greatest achievement?",
        "What were the most and least enjoyable aspects of my duties?",
        "How close is your current role to your career personality?"
    ];
    const reflectQuestions = [
        "What is my preferred job title?",
        "How important is work/life balance?",
        "Is money or quality of life more important?",
        "Do you want to travel?",
        "Do you want to manage people?",
        "Do you want to work in a certain industry?",
        "Does size of company matter?",
        "Do you want to work from home or go into an office?",
        "How important is job security?",
        "Consider what type of team culture you need.",
        "What are your 5 year career ambitions?",
        "Does the work make you happy and Enjoy Mondays?"
    ];
    const goals = [
        "Each day, seize the opportunity to rise 1–2 hours before your usual wake-up time and hone the skills required to transform into the career of your dreams.",
        "Make the most of your weekends by taking advantage of every opportunity that comes along as it relates to your perfect job, no matter what it pays.",
        "Enroll in bootcamps, online career trainings, and acquire certifications.",
        "Talk to people who’ve already made it and reach out to them. Consider asking them if they would be open to acting as a career coach.",
        "Review Indeeds job board and look at a variety of postings and identify gaps and what marketable skills you need to obtain.",
        "Review common interview questions and be prepared to answer them confidently.",
        "Look for ways to get access to industry leaders by following and connecting to them on LinkedIn."
    ];
    return (
        <div style={{ background: "linear-gradient(109.04deg, #FFFCF3 0%, #EFF7FF 43.23%, #E8FAF3 98.1%)" }}>
            <Header/>
            <div className="xl:pt-[144px] md:pt-[100px] sm:pt-[65px] pt-[27px] flex flex-col items-center">
                <h1 className="max-w-[1242px] p-[12px] font-semibold xl:text-[35px] md:text-[30px] sm:text-[22px] text-[16px] leading-[52px] sm:leading-[24px] tracking-[1.42px] text-center text-[#313131]">
                    Make Your Dreams Come True: A Guide to Finding the Perfect Job
                </h1>
                <p className="max-w-[980px] p-[12px] text-center font-normal text-[16px] leading-[27px] tracking-[0.6px] text-[#5B6570]">
                    Are you ready to take the next step in your professional journey and start searching for your dream
                    job? You’ve come to the right place! In this blog post, you will learn the practical and effective
                    steps that you need to take to find the perfect job that aligns with your professional and personal
                    goals. So, join us as we discuss what it takes to make your dream job a reality.
                </p>
                <div className="max-w-[980px] w-full mt-[68px] p-[12px]">
                    <Img
                        src="/images/blog.svg"
                        alt=""
                        className="w-full"
                    />
                    <div className="mt-[60px]">
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            How do I find a career I love
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            The first step in your journey to finding a career you love is to evaluate yourself and
                            understand what kind of job would be the best fit for you. Consider what you’re passionate
                            about, the skills you possess, and the values that are important to you. Don’t be afraid to
                            think outside the box when it comes to potential roles or industries. You don’t need to
                            limit yourself to traditional career paths – consider all options and explore new areas!
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            Once you have a clearer idea of what type of job would be the best fit for you, it’s time to
                            evaluate your strengths.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            Embrace Your Talents and Strengths
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Even if you don't know exactly what career path to pursue, that doesn't mean you're unaware
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            of your own talents! Make a list of your strengths and abilities. If this isn't something
                            that comes easily to you, consider asking those close to you for their honest opinion or try
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            out the Myers-Briggs personality test - it's an invaluable tool in helping figure out where
                            your skills lie.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Examining your greatest attributes and personality traits is an effective way to identify
                            the career path that best fits you. By taking a proactive approach, you can find a
                            profession that plays to your strengths and complements who you are as a person.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            You can certainly achieve greatness in anything you set your mind to, but why exhaust
                            yourself to build something that may not be the right fit? By deciding to pursue career
                            paths which leverage the strengths and passions you already possess, it will help save time
                            while also eliminating unnecessary frustrations.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[15px]">
                            Reflect on your past to bypass a dead-end and open the door to success.
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[20px]">
                            Think about the places you have worked. To help you figure out what kind of job you want in
                            the future, answer these questions about each place:
                        </p>
                        <div className="flex flex-col gap-[20px] mb-[20px]">
                            {
                                reflectData.map((item, index) => <div
                                    key={index}
                                    className="w-full flex items-center gap-[12px]"
                                >
                                    <Img
                                        src="/images/check.svg"
                                        alt="Check"
                                        className="w-[13px] h-[13px]"
                                    />
                                    <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570]">
                                        {item}
                                    </p>
                                </div>)
                            }
                        </div>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Reflecting on the past can help surface ignored moments that make it clear you weren't
                            fulfilled in your job. If revisiting your history begins to highlight recurring unfavorable
                            patterns around a specific type of role or profession, then this is sign that change is
                            needed.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            You might be missing out on chances to do things that you are really good at and love to do.
                            Thinking about the past can help you find jobs and activities that will make you happy.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[15px]">
                            Reflect on your past to bypass a dead-end and open the door to success.
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[20px]">
                            Ask yourself these questions:
                        </p>
                        <div className="flex flex-col gap-[20px] mb-[20px]">
                            {
                                reflectQuestions.map((item, index) => <div
                                    key={index}
                                    className="w-full flex items-center gap-[12px]"
                                >
                                    <Img
                                        src="/images/check.svg"
                                        alt="Check"
                                        className="w-[13px] h-[13px]"
                                    />
                                    <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570]">
                                        {item}
                                    </p>
                                </div>)
                            }
                        </div>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Answering these questions, you can start to identify what a fulfilling career looks like for
                            you. You don’t need to know the exact job title yet, but having an idea of what a meaningful
                            and satisfying job looks like will help you narrow down your options.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            How to get your dream job in 30 days
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Getting your dream job in just 30 days may seem like a daunting task, but with the right
                            approach, it is achievable. Start by creating a well-crafted resume that highlights your
                            skills and strengths, and tailor it to each job you apply for. Next, network with people in
                            your desired industry by attending events or reaching out to alumni from your university.
                            Utilize job search websites and career matching marketplaces like Enjoy Mondays, along with
                            company career pages to apply for relevant positions, and follow up with hiring managers to
                            express your interest.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Additionally, consider taking online courses or attending workshops to enhance your skills
                            and stay current in your desired field.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Finally, don't be afraid to seek support from friends, family, or a career mentor to seek
                            career advice. Also, consider reaching out to people on LinkedIn that have the job you want,
                            and perform informational interviews. Most importantly, stay positive, persistent, and
                            open-minded in your job search, and in no time, you will be one step closer to landing your
                            dream job.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            How does Enjoy Mondays help job seekers find the perfect job
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Enjoy Mondays is where AI and Human Intelligence works hand-in-hand to find your perfect
                            match.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            The Enjoy Mondays platform is changing the way that people hire and get hired in a big way.
                            Through its AI, human intelligence, and fact-based marketplace, Enjoy Mondays brings
                            together candidates looking for their perfect job, and employers looking to streamline
                            sourcing, in a confidential and transparent way that’s never been done before.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Enjoy Mondays takes all the hassle out of the hiring process and introduces candidates and
                            hiring managers when there’s a 95% match on both sides of the hiring process.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            In a labor market where workers have the luxury of choice, employee experience, benefits,
                            and non-economic perks are extremely important. Everyone stands to benefit from a more
                            positive hiring process when all of the parties involved are on equal footing.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            Additionally, Enjoy Mondays offers job seekers personalized career coaching and resources to
                            help them improve their resumes, prepare for interviews, and negotiate job offers.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            What is Ramit Sethi's "Find Your Dream Job" course like
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Ramit Sethi's "Find Your Dream Job" course is a way to help you get your dream job. You will
                            learn how to make a great resume, perform a career assessment, review job descriptions, meet
                            people in the industry you want, search for jobs online, practice interviewing and discuss
                            career goals. You will also learn how to stay positive and keep trying even when it gets
                            hard.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[15px]">
                            Identify what fulfilling and meaningful work means to you
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            It’s only unrealistic if you don’t have a detailed plan. As you get ready, map out your plan
                            while keeping your day job.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[20px]">
                            Set goals and follow the plan
                        </p>
                        <div className="flex flex-col gap-[20px] mb-[25px]">
                            {
                                goals.map((item, index) => <div
                                    key={index}
                                    className="w-full flex items-center gap-[12px]"
                                >
                                    <Img
                                        src="/images/check.svg"
                                        alt="Check"
                                        className="w-[13px] h-[13px]"
                                    />
                                    <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570]">
                                        {item}
                                    </p>
                                </div>)
                            }
                        </div>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            When do you give up looking for your dream job
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            Finding your ideal career match can be a long and arduous process that requires patience and
                            perseverance. However, there may come a point when you need to reassess the situation and
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            consider whether it's time to give up looking for your dream job. Ultimately, this decision
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            should depend on how long you have been searching, the number of opportunities you've
                            pursued, and how close you are to achieving your goals. If after months or even years of
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            effort, you still haven't found success in landing the job of your dreams, it might be worth
                            considering alternative paths or reevaluating your expectations. Additionally, if other
                            aspects of personal or professional life, such as financial stability or family obligations,
                            take precedence over pursuing career aspirations at this time, giving up on finding your
                            dream job may be necessary.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Can you still get my dream job if I didn't do well in high school
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            If you didn't perform well in high school, don't worry - it doesn't necessarily mean that
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            you can't find your dream job. Many successful individuals have gone on to achieve greatness
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            without doing well academically. In fact, some of the world's most successful entrepreneurs,
                            such as Steve Jobs and Bill Gates, dropped out of college to pursue their vision. While
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            education is important, it's not the sole determinant of your success. What you need is
                            dedication, hard work, and a willingness to learn and grow. There are many industries and
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            jobs that prioritize skills and experience over education. It's important to identify your
                            strengths, hone your skills, and pursue opportunities that allow you to showcase your
                            abilities. With perseverance and determination, you can achieve your dreams and find the job
                            that makes you truly happy.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            What does it feel like to chase a dream role and succeed
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Chasing a career happiness can be an exhilarating yet daunting experience. The pursuit of
                            your goals often comes with its share of ups and downs - moments that test your will and
                            resilience. But when you finally succeed in achieving what you set out to do, it is
                            incredibly rewarding and empowering. It feels like the ultimate victory after months or even
                            years of hard work, dedication, and passion for what you are doing.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            The Enjoy Mondays platform is changing the way that people hire and get hired in a big way.
                            Through its AI, human intelligence, and fact-based marketplace, Enjoy Mondays brings
                            together candidates looking for their perfect job, and employers looking to streamline
                            sourcing, in a confidential and transparent way that’s never been done before.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            You feel proud of yourself for having taken the necessary steps to make your dreams come
                            true, knowing that all the effort was worth it in the end.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Succeeding at something so important to you also gives you a newfound sense of confidence
                            which can propel you further towards greater success in life.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            If you need help in your journey to loving Mondays again, reach out to our team of career
                            experts at Enjoy Mondays!
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
