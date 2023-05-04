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
            img: "/images/blog.png",
            title: "Make Your Dreams Come True: A Guide to Finding the Perfect Job",
            description: "Are you ready to take the next step in your professional journey and start searching for your dream job? You’ve come to the right place! In this blog post, you will learn the practical...",
            slug: "makeYourDreamsComeTrueAGuideToFindingThePerfectJob"
        },
        {
            tag: "Article",
            img: "/images/blog.png",
            title: "Overview of Enjoy Mondays - How our marketplace works for job-seekers",
            description: "Are you tired of having unproductive conversations with recruiters about jobs that don't fit your needs? Maybe the job isn't remote, or the compensation doesn't match your expectations...",
            slug: "overviewOfEnjoyMondaysHowOurMarketplaceWorksForJobSeekers"
        }
    ]
    const jobs = [
        "Cybersecurity",
        "DevOps Engineers",
        "Prompt Engineers",
        "Data Scientist",
        "Full Stack Engineering",
        "Digital Marketing",
        "Cloud Engineers",
        "Network Architect",
        "Security Analysts",
        "Software Engineers",
        "Systems Analysts",
        "Any IT job within a growing tech company"
    ];
    return (
        <div style={{ background: "linear-gradient(109.04deg, #FFFCF3 0%, #EFF7FF 43.23%, #E8FAF3 98.1%)" }}>
            <Header/>
            <div className="xl:pt-[144px] md:pt-[100px] sm:pt-[65px] flex flex-col items-center">
                <h1 className="max-w-[1242px] p-[12px] font-semibold xl:text-[35px] md:text-[30px] sm:text-[22px] text-[16px] sm:leading-[52px] leading-[24px] tracking-[1.42px] text-center text-[#313131]">
                    A Guide for woman to break into information technology
                </h1>
                <div className="max-w-[980px] w-full md:mt-[68px] mt-[12px] md:p-[12px] p-[32px]">
                    <Img
                        src="/images/blog.png"
                        alt=""
                        className="w-full"
                    />
                    <div className="mt-[60px]">
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            According to the Bureau of Labor Statistics (BLS), careers in computer and information
                            technology (IT) are projected to grow by 12% in the next decade, making it one of the
                            fastest-growing industries. Despite the tech sector offering fulfilling careers and high
                            salaries, IT and computing jobs are largely male-dominated, as research has shown.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Although there is currently an imbalance, there are numerous resources and career
                            opportunities available to encourage women to explore computing and other STEM fields. Many
                            companies have recognized the advantages of having a diverse workforce, and the tech
                            industry is no exception. Diverse teams can develop more creative solutions, create a larger
                            talent pool for employers, bring together a variety of experiences to foster innovation, and
                            contribute to a better work culture.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            There is an increasing number of resources being offered by organizations, non-profits, and
                            companies to assist women in building successful careers in the tech industry. This guide
                            provides information on career paths, advantages, educational and training resources, as
                            well as networking events that can aid in advancing in the computer and IT field.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[10px]">
                            This article discusses various difficulties that women encounter in the technology sector.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            It outlines the challenges they face, such as unequal access to resources, gender
                            discrimination and lack of representation. Additionally, it provides actionable advice on
                            how female professionals can gain skills and visibility to overcome these. The article
                            encourages women to continue pursuing their dreams of working in technology, despite the
                            many challenges that may stand in their way. It also emphasizes the importance of
                            collaboration, networking and mentorship as key tools for success.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            Finally, it underscores the need for organizations to create an inclusive culture that
                            values diversity and respect. By creating a supportive environment, companies can foster
                            positive change and growth in the technology sector. It concludes by offering hope that with
                            continued effort, women will ultimately break down barriers and make their mark in the tech
                            industry.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            Why Should Women Get Into IT?
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[10px]">
                            Huge Earnings Potential
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            The job market for computer and information technology is booming, with the U.S. Bureau of
                            Labor Statistics (BLS) predicting a 13 percent increase in employment from 2020 to 2030.
                            This results in an estimated 667,600 new jobs that can offer people immense potential for
                            earning. The median wage for these occupations is significantly higher than the overall
                            median wage of $45,760, standing at a very competitive $97,430 per year.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Those seeking a career in computer and information technology are likely to find ample
                            opportunity for high pay and steady employment as the field is projected to expand rapidly
                            over the coming decade. With such impressive earnings potential available, now may be the
                            perfect time to pursue a job in this area while securing long-term financial security
                            through sustained employment and wages.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[10px]">
                            Tons of Work From Home Opportunities
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            The proliferation of technology has created an opportunity for anyone in IT to take their
                            career virtually anywhere. Any major tech company now days support WFH or even work from
                            anywhere. With the right skills and know-how, it is possible to not only find openings in
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            different locations but also to create and begin a remote job. Taking one's work anywhere
                            can mean more than just jumping from state to state, but can also mean doing whatever type
                            of IT work interests you in any necessary place.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            From software development to building to cloud infrastructure, there is no limit when it
                            comes to what an individual with the right qualifications can achieve with regard to where
                            they choose to do their work. Women especially have access now, more than ever before, to be
                            able pull themselves out of limiting 9-5 office jobs and into creative and stimulating
                            positions that are rewarding on both a personal level or financially. With the option
                            available of setting up a remote job from home or even working from abroad if needed,
                            there’s definitely much less holding women back from taking advantage of opportunities
                            around the globe.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[10px]">
                            Continually Evolving Projects
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            For those looking for a job that provides more than just a paycheck, consider the
                            ever-evolving world of information technology. With the emergence of new markets and
                            advancements in technology, there is something new to learn every day. Women in this field
                            have the opportunity to work with the latest tools and software from leading developers
                            around the globe. As markets expand and evolve, these workers can seek out more
                            opportunities for growth and exploration as well as keep up to date on changes to industry
                            standards.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            Not only does IT provide workers with an interesting job market, but it also provides them
                            with a wide range of challenges that allow them to grow both personally and professionally.
                            There is always something exciting coming down the development pipeline which often requires
                            its practitioners to stay proactive and flexible when making decisions or responding to
                            customer needs. The current competitive landscape keeps many technically savvy women engaged
                            which helps maintain their proficiency while discovering novel ways of thinking or solving
                            issues that arise in their work.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            How to Thrive as a Woman in IT
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Women have made groundbreaking strides in the technology field since the 19th century. Ada
                            Lovelace, widely considered to be the first computer programmer, paved the way for all kinds
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            of computing advances, and Katherine Johnson's space calculations aided NASA missions in
                            Hidden Figures. Despite these incredible female landmarks, women are still greatly
                            underrepresented in information technology and today only make up 31% of IT employees
                            according to Gartner.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Despite this oversight, now more than ever is an exciting time to be a woman in tech due to
                            an increasing number of new initiatives aimed at closing this gender gap. Aspiring female IT
                            professionals can take advantage of those opportunities by getting involved with
                            organizations like Women Who Code and Girls Who Code. Additionally, there is more emphasis
                            on diversity & inclusion in the tech world and companies are recognizing that diversified
                            teams create better results. With this shift gaining momentum, there are some key steps that
                            both current and upcoming female IT professionals can take to ensure that they remain
                            competitive and valuable members of a team in 2023: engaging in continuing education courses
                            relevant to various aspects of coding; joining Women Who Code and other similar groups;
                            attending conferences such as SheHacks; taking part in helpful hackathons; participating in
                            mentorships from experienced leaders ; and networking with other IT professionals.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            These steps can help women become knowledgeable, well-rounded tech players in the industry
                            and make a name for themselves in the coming years. Ultimately, embracing the growth of
                            diversity & inclusion initiatives is key to breaking down gender stereotypes and creating
                            more equitable opportunities for women in tech. Additionally, there will be more
                            opportunities for women to take on leadership roles in the industry, as more organizations
                            recognize the value of having a gender-balanced and diverse team. By 2023, there will be no
                            excuse for any organization not to have female IT professionals at all levels.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            Women who embrace this digital revolution by taking these steps now can confidently look
                            forward to success in the IT field in 2023. Despite the current gender gap, there is still
                            great potential for women to make a major impact on the industry and create a more inclusive
                            environment for everyone.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            Why Should Women Get Into IT?
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[10px]">
                            Education
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            It is clear that, despite the steady growth in technology fields, the gender gap in computer
                            science remains. This trend is seen by looking at the National Center for Women and
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Information Technology (NCWIT) statistics on bachelor's degree recipients in 2020; only 22%
                            were women. According to NCWIT, women hold 26% of professional computing occupations in the
                            2021 US workforce.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Fortunately, there are numerous avenues to equip people with the skills necessary to pursue
                            a career in tech, such as boot camps, certification programs, educational courses and
                            scholarships. Furthermore, many employers now recognize that teaching on-the-job skill sets
                            might be easier than trying to source talent from scratch.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            The prevalence of these opportunities enables more women to gain access to education so they
                            can explore tech related careers. It is vital for any aspiring female coder to investigate
                            these career paths and should also consider taking advantage of mentorship programs designed
                            for them such as Ada Developers Academy or Girls Who Code, providing support and guidance
                            throughout their journey into coding.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Additionally having an apprenticeship or internship can show companies your capabilities
                            allowing you entry into this competitive job market. With an increase of resources available
                            today full of knowledge it has become easier than ever before for women to break into tech.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[10px]">
                            Discrimination and Harassment in the Workplace
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Regardless of the industry, the workplace should be an environment free of discrimination
                            and harassment. Unfortunately, many women regularly report that they face unwanted sexual
                            advances and even fear for their safety while in the workplace. A study into sexual
                            harassment in the tech industry revealed that 60% of women had experienced strange advances
                            from their male colleagues or employers, with 65% of those coming from a higher-up. It was
                            also reported that 84% had been told they are too aggressive and one in three felt afraid
                            for their personal safety because of situations related to work.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Businesses have a responsibility to take action against any instances of harassment or
                            discrimination experienced by its employees in order to create a comfortable and safe
                            working environment for all. This can be achieved through rigorous changes to company
                            policies which explicitly explain the different forms of behavior which are considered
                            inappropriate as well as their appropriates consequences should these regulations not be
                            followed. All employees must also be informed about harassment policies so that everyone is
                            aware what could happen if disrespectful conduct is exhibited, preventing further incidents
                            from occurring.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[10px]">
                            Gender Discrimination
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Gender bias is a serious issue that affects people from all walks of life every day. It
                            crops up in our everyday interactions, as well as more grandiose forms such as pay gaps and
                            gender disparity in powerful positions. According to research, 42% of women experience
                            gender bias in the workplace, making it clear that this form of discrimination is far from
                            obsolete. Furthermore, men occupationally dominate the tech industry. In fact, 61% more
                            males than women are paid for their work and only 5% of leadership positions are held by
                            women. This creates a wide disparity between genders and sends a message that women are not
                            valued or respected in the tech industry.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            With the lack of female tech leaders and with disparities in pay between genders, these
                            gender biases can be challenging to recognize and ultimately overcome. Additionally,
                            unconscious bias makes it difficult for people to become aware that they have gender biases
                            against certain groups of people to begin with — meaning they will often never set out to
                            actively remove these discriminatory beliefs and practices. Gender bias is an issue we
                            should all be conscious of and work towards reducing in order to create an equal playing
                            field free of judgement based on someone’s sex or gender identity.
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[30px]">
                            Resources to Help Get Women Into Information Technology (IT)
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            The tech industry is growing at a lightning speed, offering careers that are highly
                            fulfilling and lucrative. As reported by the Bureau of Labor Statistics (BLS), the number of
                            computer and information technology (IT) jobs is estimated to expand by 12% over the next
                            decade. This is much faster than any other occupation and IT professionals can expect to
                            earn an average salary of $88,240 as reported in 2019 BLS data. Despite the opportunities
                            offered by this thriving field, research shows that women are not taking full advantage of
                            them. According to the National Center for Women and Information Technology (NCWIT), less
                            than a third of all computing jobs are held by women despite them making up more than half
                            of the workforce, with participation percentage having fallen since 1991 when it was at its
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            peak at 36%. With technology transforming many aspects of modern life, it's important to
                            ensure equal access to these opportunities so that more women can benefit from entering this
                            exciting field.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            Fortunately, there are now numerous resources available online that help bring more
                            diversity into IT. For example, websites like Girls Who Code offer projects, activities,
                            challenges and lessons designed to build coding skills for girls aged 11-18; Professional
                            associations such as Anita Borg Institute have dedicated programs
                        </p>
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[15px]">
                            Tech Jobs and IT Career Options
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            In recent years, information technology has become an increasingly attractive option for
                            college students and professionals seeking long-term career opportunities. With rising
                            demand worldwide for experienced IT personnel, it’s no surprise that computer science and
                            technological studies are proving popular amongst the workforce. Those looking to enter the
                            IT and tech industry can expect a variety of career options across software development, UX
                            design, multimedia production, support engineering, system administration, technical writing
                            and more.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Depending on the desired position within the IT sector of choice, employers might require
                            candidates to have either a diploma or a bachelor degree in computing or related field.
                            However some positions may be available with less formal education requirements but many
                            will require experience or proof of participation in computing. Additionally, those who do
                            choose an IT career path almost always realize larger salaries than those in other
                            disciplines such as social sciences providing them with greater financial freedom for future
                            investments and savings plans. Studies also suggest that people working in the digital
                            profession typically experience higher job satisfaction too; making it a win-win situation
                            all round
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[20px]">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Here's a list of fast growing tech jobs that you may want to consider:
                        </p>
                        <div className="flex flex-col gap-[20px] mb-[20px]">
                            {
                                jobs.map((item, index) => <div
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
                        <h3 className="font-medium xxl:text-[30px] xl:text-[25px] md:text-[20px] text-[15px] md:leading-[42px] leading-[21px] tracking-[-2%] text-[#1D1E25] mb-[15px]">
                            Tech Training Options for Woman Interested in Pivoting inot a Tech Career
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[20px]">
                            Online Certification Programs
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Certification programs offer a great opportunity for IT professionals to advance in their
                            careers. By taking advantage of these programs, individuals can gain the knowledge and
                            skills necessary to face the challenges their industry presents. Additionally, these
                            programs are often shorter and less expensive than taking a regular schooling program.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            For those looking to climb the ranks of the IT industry, there are some certification
                            programs specifically dedicated to helping women break through certain barriers. For
                            instance, Certified Scrum Master (CSM) provides an education on project management methods
                            which is useful for roles such as IT management and positions that involve leading teams.
                            Isaca is also an organization that offers certifications aimed at helping women further
                            their IT careers with various educational resources like white papers, books, and webinars.
                            This can be especially beneficial when individuals need support navigating their career
                            paths or searching for new tech-related job opportunities.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[20px]">
                            Bootcamps
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Courses, workshops, and bootcamps are ideal for women looking to get their start in the tech
                            industry. There are many affordable programs available that provide comprehensive training
                            in coding and software development. These courses typically last an average of six
                            weeks—which is a practical amount of time for busy individuals to dedicate towards learning
                            new skills. For example, Apprenti offers apprenticeship programs which connect aspiring tech
                            professionals with immediate opportunities and careers. Plus, they actively recruit
                            minorities, such as women, veterans, and people of color to help spread diversity throughout
                            the industry.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Another great program specifically tailored to women is Hackbright Academy—a highly
                            acclaimed software engineer bootcamp based in San Francisco. Their mission is to educate and
                            empower aspiring female engineers by providing top-notch course materials so they can pursue
                            successful careers in the technology industry. Both Apprenti and Hackbright Academy should
                            be taken advantage of for anyone looking for a jumpstart in their tech career.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[20px]">
                            National Center for Women and Information Technology
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            The National Center for Women and Information Technology (NCWIT) is a non-profit
                            organization that works to increase the quality, quantity, and diversity of women in
                            computing. They do this through various strategies such as providing free resources,
                            programming tools, research-based solutions and engaging industry partners.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Their goal is to build an inclusive digital world by increasing access to opportunity for
                            all young women so that they can pursue rewarding careers in IT no matter their background
                            or socio-economic status. NCWIT offers free resources on topics from recruitment and
                            organizational change to outreach and mentoring so that educational institutions can develop
                            comprehensive programs that support diverse computer science course offerings as well as
                            work-driven opportunities. In addition to these resources, they provide networking
                            opportunities with other leading professionals in the tech community so members can stay up
                            to date with trends, news and technology breakthroughs. By working together towards a more
                            diverse technical workforce, NCWIT helps create better solutions for society’s most pressing
                            challenges and drive innovation across industries.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[20px]">
                            Networking Groups for Women in Tech
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Networking is a key ingredient to success as a career woman in the tech industry. For many,
                            finding the right network may feel overwhelming and intimidating, but it need not be so.
                            Connecting with other female professionals in your field can open up a world of opportunity
                            to examine different perspectives, share resources and insights, advice on the latest trends
                            and tech changing the industry, mutual support during times of challenge or frustration, or
                            provide potential job or business prospects.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            There are several online forums and conferences that focus on connecting women in technology
                            which offer various benefits, including building confidence through encouragement of all
                            members as well as furthering your knowledge through interactive discussions about emerging
                            technologies that may be applicable to your work. Plus, it allows you to continue to develop
                            your soft skills, which is a great asset in the world of tech.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            The diverse settings provide an amazing platform for women to express their thoughts, ask
                            questions and explore how they can take advantage of trends that could help their
                            professional growth journey. Building relationships is key when developing as a professional
                            in any field, notably careers in tech where there are constantly new advancements being made
                            which require staying current on trends; attending such events can also promote visibility
                            which leads to increased brand recognition or job opportunities that would otherwise have
                            been missed out on. Networking events provide ideal opportunities for both exploration and
                            collaboration alike among likeminded individuals looking for connections within tech.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[20px]">
                            Other Options to Consider
                        </p>
                        <div className="flex flex-col gap-[20px] mb-[20px]">
                            {
                                jobs.map((item, index) => <div
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
                            The Challenges that Women Encounter in the Technology Industry
                        </h3>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[10px]">
                            Harassment in the Workplace
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            Certification programs offer a great opportunity for IT professionals to advance in their
                            careers. By taking advantage of these programs, individuals can gain the knowledge and
                            skills necessary to face the challenges their industry presents. Additionally, these
                            programs are often shorter and less expensive than taking a regular schooling program.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            For those looking to climb the ranks of the IT industry, there are some certification
                            programs specifically dedicated to helping women break through certain barriers. For
                            instance, Certified Scrum Master (CSM) provides an education on project management methods
                            which is useful for roles such as IT management and positions that involve leading teams.
                            Isaca is also an organization that offers certifications aimed at helping women further
                            their IT careers with various educational resources like white papers, books, and webinars.
                            This can be especially beneficial when individuals need support navigating their career
                            paths or searching for new tech-related job opportunities.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[10px]">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            The “Bro Culture” and Why it's Still an Issue
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            The “bro culture” has become pervasive in the technology industry, creating environments
                            that are often intimidating and unsupportive for female employees. Despite the fact that
                            women make up a significant portion of the tech workforce, these companies still tend to be
                            dominated by male employees, with nearly seventy-one percent of women in tech reporting
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            feeling like they work in a bro culture. Within this atmosphere, women's contributions and
                            perspectives may be disregarded and instances of off-color jokes or inappropriate remarks
                            are not uncommon. The consequence of this environment is that women feel unable to speak up
                            or voice their feelings freely due to fear of retribution from higher ups.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[10px]">
                            The “bro culture” should not be tolerated as it plagues a company’s overall diversity
                            efforts and encourages harmful gender stereotypes that can further marginalize female
                            professionals. Organizations need to do away with this outdated way of thinking if they want
                            to truly embrace inclusion and foster an inclusive environment where everyone feels welcome
                            and respected. Companies should employ policies that discourage sexist behavior and create
                            structures whereby individuals are able to voice their concerns without worry or hesitation
                            so real progress can be made toward achieving total equality across genders in the
                            workplace.
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#44B480] mb-[10px]">
                            In Conclusion
                        </p>
                        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] mb-[25px]">
                            This is a comprehensive guide for women looking to break into the male-dominated field of
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            tech, offering solutions to a problem that has existed since the industry's inception. With
                            this knowledge of pitfalls to avoid and opportunities available, you can now shine in your
                            role and become a successful women in the tech field.
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
