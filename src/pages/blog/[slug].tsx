import React from "react";
import useRouter from "next/router";
import { BlogP } from "@/utils/BlogPage";
import { BlogInterface } from "@/utils/types";
import fs from "fs";

const BlogP1: React.FC = () => {
  const BlogData: BlogInterface = {
    id: "1",
    slug: "first",
    title: " Make Your Dreams Come True: A Guide to Finding the Perfect Job",

    subTitle: "",
    description: [
      "Are you ready to take the next step in your professional journey and start searching for your dream job? You have come to the right place! In this blog post, you will learn the practical and effective steps that you need to take to find the perfect job that aligns with your professional and personal goals. So, join us as we discuss what it takes to make your dream job a reality.",
    ],
    img: "",
    body: {
      title: " How do I find a career I love",
      description: [
        "The first step in your journey to finding a career you love is to evaluate yourself and understand what kind of job would be the best fit for you. Consider what you’re passionate about, the skills you possess, and the values that are important to you. Don’t be afraid to think outside the box when it comes to potential roles or industries. You don’t need to limit yourself to traditional career paths – consider all options and explore new areas!Once you have a clearer idea of what type of job would be the best fit for you, it’s time to evaluate your strengths ",
      ],
      content: ["", "", " "],
      list: [
        {
          title: "Embrace Your Talents and Strengths",
          description: [
            "Even if you don't know exactly what career path to pursue, that doesn't mean you're unaware of your own talents! Make a list of your strengths and abilities. If this isn't something that comes easily to you, consider asking those close to you for their honest opinion or try out the Myers-Briggs personality test - it's an invaluable tool in helping figure out where your skills lie.",
            "Examining your greatest attributes and personality traits is an effective way to identify the career path that best fits you. By taking a proactive approach, you can find a profession that plays to your strengths and complements who you are as a person. ",
            "You can certainly achieve greatness in anything you set your mind to, but why exhaust yourself to build something that may not be the right fit? By deciding to pursue career paths which leverage the strengths and passions you already possess, it will help save time while also eliminating unnecessary frustrations.",
          ],

          content: [],
        },
        {
          title:
            "Reflect on your past to bypass a dead-end and open the door to success.",
          subTitle:
            "Think about the places you have worked. To help you figure out what kind of job you want in the future, answer these questions about each place:",
          content: [
            "What were my favorite and least favorite aspects of the company?",
            "What aspects of the company culture were most and least appealing to me?",
            "What was the best and worst thing about my boss?",
            "At what moments in your role did you feel the most joy (i.e. biggest accomplishment? ",
            "What stands out most to me as my greatest achievement?",
            "What were the most and least enjoyable aspects of my duties? ",
            "How close is your current role to your career personality?",
          ],
        },
        {
          title: "",
          description: [
            "Reflecting on the past can help surface ignored moments that make it clear you weren't fulfilled in your job. If revisiting your history begins to highlight recurring unfavorable patterns around a specific type of role or profession, then this is sign that change is needed.",
            "You might be missing out on chances to do things that you are really good at and love to do. Thinking about the past can help you find jobs and activities that will make you happy.",
          ],
          content: [],
        },
        {
          title: "Identify what fulfilling and meaningful work means to you",
          subTitle: "Ask yourself these questions:",
          description: [],
          content: [
            "What is my preferred job title?",
            "How important is work/life balance?",
            "Is money or quality of life more important?",
            "Do you want to travel? ",
            "Do you want to manage people?",
            "Do you want to work in a certain industry",
            "Does size of company matter?",
            "Do you want to work from home or go into an office?",
            "How important is job security?",
          ],
        },
        {
          title: "",
          description: [
            "Answering these questions, you can start to identify what a fulfilling career looks like for you. You don’t need to know the exact job title yet, but having an idea of what a meaningful and satisfying job looks like will help you narrow down your options.",
          ],
          content: [],
        },
        {
          title: "How to get your dream job in 30 days",
          description: [
            "Getting your dream job in just 30 days may seem like a daunting task, but with the right approach, it is achievable. Start by creating a well-crafted resume that highlights your skills and strengths, and tailor it to each job you apply for. Next, network with people in your desired industry by attending events or reaching out to alumni from your university. Utilize job search websites and career matching marketplaces like Enjoy Mondays, along with company career pages to apply for relevant positions, and follow up with hiring managers to express your interest.",
            "Additionally, consider taking online courses or attending workshops to enhance your skills and stay current in your desired field.",
            "Finally, don't be afraid to seek support from friends, family, or a career mentor to seek career advice. Also, consider reaching out to people on LinkedIn that have the job you want, and perform informational interviews. Most importantly, stay positive, persistent, and open-minded in your job search, and in no time, you will be one step closer to landing your dream job.",
          ],
          content: [],
        },
        {
          title: "How does Enjoy Mondays help job seekers find the perfect job",
          description: [
            "Enjoy Mondays is where AI and Human Intelligence works hand-in-hand to find your perfect match.",
            "The Enjoy Mondays platform is changing the way that people hire and get hired in a big way. Through its AI, human intelligence, and fact-based marketplace, Enjoy Mondays brings together candidates looking for their perfect job, and employers looking to streamline sourcing, in a confidential and transparent way that’s never been done before.",
            "Enjoy Mondays takes all the hassle out of the hiring process and introduces candidates and hiring managers when there’s a 95% match on both sides of the hiring process.",
            "In a labor market where workers have the luxury of choice, employee experience, benefits, and non-economic perks are extremely important. Everyone stands to benefit from a more positive hiring process when all of the parties involved are on equal footing.",
            "Additionally, Enjoy Mondays offers job seekers personalized career coaching and resources to help them improve their resumes, prepare for interviews, and negotiate job offers. ",
          ],
          content: [],
        },
        {
          title: "What is Ramit Sethi's 'Find Your Dream Job' course like",
          description: [
            "Ramit Sethi's 'Find Your Dream Job' course is a way to help you get your dream job. You will learn how to make a great resume, perform a career assessment, review job descriptions, meet people in the industry you want, search for jobs online, practice interviewing and discuss career goals. You will also learn how to stay positive and keep trying even when it gets hard.",
          ],
          content: [],
        },
        {
          title:
            "How can I make my dream career happen if it seems unrealistic",
          description: [
            "Its only unrealistic if you do not have a detailed plan. As you get ready, map out your plan while keeping your day job.",
          ],

          content: [],
        },
        {
          title: "",
          subTitle: "Set goals and follow the plan",
          description: [],

          content: [
            "Each day, seize the opportunity to rise 1–2 hours before your usual wake-up time and hone the skills required to transform into the career of your dreams.",
            "Make the most of your weekends by taking advantage of every opportunity that comes along as it relates to your perfect job, no matter what it pays.",
            "Enroll in bootcamps, online career trainings,  and acquire certifications.",
            "Talk to people who’ve already made it and reach out to them. Consider asking them if they would be open to acting as a career coach. ",
            "Review Indeeds job board and look at a variety of postings and identify gaps and what marketable skills you need to obtain. ",
            "Review common interview questions and be prepared to answer them confidently. ",
            "Look for ways to get access to industry leaders by following and connecting to them on LinkedIn. ",
          ],
        },
        {
          title: "When do you give up looking for your dream job",
          description: [
            " Finding your ideal career match can be a long and arduous process that requires patience and perseverance. However, there may come a point when you need to reassess the situation and consider whether it's time to give up looking for your dream job. Ultimately, this decision should depend on how long you have been searching, the number of opportunities you've pursued, and how close you are to achieving your goals. If after months or even years of effort, you still haven't found success in landing the job of your dreams, it might be worth considering alternative paths or reevaluating your expectations. Additionally, if other aspects of personal or professional life, such as financial stability or family obligations, take precedence over pursuing career aspirations at this time, giving up on finding your dream job may be necessary.",
          ],
          content: [],
        },
        {
          title: "What does it feel like to chase a dream role and succeed",
          description: [
            "Chasing a career happiness can be an exhilarating yet daunting experience. The pursuit of your goals often comes with its share of ups and downs - moments that test your will and resilience. But when you finally succeed in achieving what you set out to do, it is incredibly rewarding and empowering. It feels like the ultimate victory after months or even years of hard work, dedication, and passion for what you are doing.",
            "You feel proud of yourself for having taken the necessary steps to make your dreams come true, knowing that all the effort was worth it in the end.",
            "Succeeding at something so important to you also gives you a newfound sense of confidence which can propel you further towards greater success in life.",
            "If you need help in your journey to loving Mondays again, reach out to our team of career experts at Enjoy Mondays!",
          ],
        },
      ],
    },
  };
  // const BlogData2: BlogInterface = {
  //   id: "2",
  //   slug: "my-second-blog-post",
  //   title: "A Guide for woman to break into information technology",
  //   subTitle: "",
  //   description: [
  //     "According to the Bureau of Labor Statistics (BLS), careers in computer and information technology (IT) are projected to grow by 12% in the next decade, making it one of the fastest-growing industries. Despite the tech sector offering fulfilling careers and high salaries, IT and computing jobs are largely male-dominated, as research has shown.",
  //   ],
  //   img: "",
  //   body: {
  //     title: "",
  //     description: [
  //       "Although there is currently an imbalance, there are numerous resources and career opportunities available to encourage women to explore computing and other STEM fields. Many companies have recognized the advantages of having a diverse workforce, and the tech industry is no exception. Diverse teams can develop more creative solutions, create a larger talent pool for employers, bring together a variety of experiences to foster innovation, and contribute to a better work culture.",
  //       "There is an increasing number of resources being offered by organizations, non-profits, and companies to assist women in building successful careers in the tech industry. This guide provides information on career paths, advantages, educational and training resources, as well as networking events that can aid in advancing in the computer and IT field.",
  //     ],
  //     content: [],

  //     list: [
  //       {
  //         title: "",
  //         subTitle:
  //           "This article discusses various difficulties that women encounter in the technology sector.",
  //         description: [
  //           "It outlines the challenges they face, such as unequal access to resources, gender discrimination and lack of representation. Additionally, it provides actionable advice on how female professionals can gain skills and visibility to overcome these. The article encourages women to continue pursuing their dreams of working in technology, despite the many challenges that may stand in their way. It also emphasizes the importance of collaboration, networking and mentorship as key tools for success.",
  //           "Finally, it underscores the need for organizations to create an inclusive culture that values diversity and respect. By creating a supportive environment, companies can foster positive change and growth in the technology sector. It concludes by offering hope that with continued effort, women will ultimately break down barriers and make their mark in the tech industry. ",
  //         ],
  //         content: [],
  //       },
  //       {
  //         title: "Why Should Women Get Into IT?",
  //         subTitle: "Huge Earnings Potential",
  //         description: [
  //           "The job market for computer and information technology is booming, with the U.S. Bureau of Labor Statistics (BLS) predicting a 13 percent increase in employment from 2020 to 2030. This results in an estimated 667,600 new jobs that can offer people immense potential for earning. The median wage for these occupations is significantly higher than the overall median wage of $45,760, standing at a very competitive $97,430 per year.",
  //           "Those seeking a career in computer and information technology are likely to find ample opportunity for high pay and steady employment as the field is projected to expand rapidly over the coming decade. With such impressive earnings potential available, now may be the perfect time to pursue a job in this area while securing long-term financial security through sustained employment and wages.",
  //         ],
  //         content: [],
  //       },
  //       {
  //         title: "",
  //         subTitle: "Tons of Work From Home Opportunities",
  //         description: [
  //           "The proliferation of technology has created an opportunity for anyone in IT to take their career virtually anywhere. Any major tech company now days support WFH or even work from anywhere. With the right skills and know-how, it is possible to not only find openings in different locations but also to create and begin a remote job. Taking one's work anywhere can mean more than just jumping from state to state, but can also mean doing whatever type of IT work interests you in any necessary place ",
  //           "From software development to building to cloud infrastructure, there is no limit when it comes to what an individual with the right qualifications can achieve with regard to where they choose to do their work. Women especially have access now, more than ever before, to be able pull themselves out of limiting 9-5 office jobs and into creative and stimulating positions that are rewarding on both a personal level or financially. With the option available of setting up a remote job from home or even working from abroad if needed, there’s definitely m",
  //         ],
  //         content: [],
  //       },
  //       {
  //         title: "",
  //         subTitle: "Continually Evolving Projects ",
  //         description: [
  //           "For those looking for a job that provides more than just a paycheck, consider the ever-evolving world of information technology. With the emergence of new markets and advancements in technology, there is something new to learn every day. Women in this field have the opportunity to work with the latest tools and software from leading developers around the globe. As markets expand and evolve, these workers can seek out more opportunities for growth and exploration as well as keep up to date on changes to industry standards.",
  //           "Not only does IT provide workers with an interesting job market, but it also provides them with a wide range of challenges that allow them to grow both personally and professionally. There is always something exciting coming down the development pipeline which often requires its practitioners to stay proactive and flexible when making decisions or responding to customer needs. The current competitive landscape keeps many technically savvy women engaged which helps maintain their proficiency while discovering novel ways of thinking or solving issues that arise in their work.",
  //         ],
  //         content: [],
  //       },
  //       {
  //         title: "How to Thrive as a Woman in IT",
  //         description: [
  //           "Women have made groundbreaking strides in the technology field since the 19th century. Ada Lovelace, widely considered to be the first computer programmer, paved the way for all kinds of computing advances, and Katherine Johnson's space calculations aided NASA missions in Hidden Figures. Despite these incredible female landmarks, women are still greatly underrepresented in information technology and today only make up 31% of IT employees according to Gartner ",
  //           "Despite this oversight, now more than ever is an exciting time to be a woman in tech due to an increasing number of new initiatives aimed at closing this gender gap. Aspiring female IT professionals can take advantage of those opportunities by getting involved with organizations like Women Who Code and Girls Who Code. Additionally, there is more emphasis on diversity & inclusion in the tech world and companies are recognizing that diversified teams create better results. With this shift gaining momentum, there are some key steps that both current and upcoming female IT professionals can take to ensure that they remain competitive and valuable members of a team in 2023: engaging in continuing education courses relevant to various aspects of coding; joining Women Who Code and other similar groups; attending conferences such as SheHacks; taking part in helpful hackathons; participating in mentorships from experienced leaders ; and networking with other IT professionals.",
  //           "These steps can help women become knowledgeable, well-rounded tech players in the industry and make a name for themselves in the coming years. Ultimately, embracing the growth of diversity & inclusion initiatives is key to breaking down gender stereotypes and creating more equitable opportunities for women in tech. Additionally, there will be more opportunities for women to take on leadership roles in the industry, as more organizations recognize the value of having a gender-balanced and diverse team. By 2023, there will be no excuse for any organization not to have female IT professionals at all levels.",
  //           "Women who embrace this digital revolution by taking these steps now can confidently look forward to success in the IT field in 2023. Despite the current gender gap, there is still great potential for women to make a major impact on the industry and create a more inclusive environment for everyone.",
  //         ],
  //         content: [],
  //       },
  //       {
  //         title: "The tech industry presents various challenges for women.",
  //         subTitle: "Education",
  //         description: [
  //           "It is clear that, despite the steady growth in technology fields, the gender gap in computer science remains. This trend is seen by looking at the National Center for Women and Information Technology (NCWIT) statistics on bachelor's degree recipients in 2020; only 22% were women. According to NCWIT, women hold 26% of professional computing occupations in the 2021 US workforce. ",
  //           "Fortunately, there are numerous avenues to equip people with the skills necessary to pursue a career in tech, such as boot camps, certification programs, educational courses and scholarships. Furthermore, many employers now recognize that teaching on-the-job skill sets might be easier than trying to source talent from scratch.",
  //           "The prevalence of these opportunities enables more women to gain access to education so they can explore tech related careers. It is vital for any aspiring female coder to investigate these career paths and should also consider taking advantage of mentorship programs designed for ",
  //           "Additionally having an apprenticeship or internship can show companies your capabilities allowing you entry into this competitive job market. With an increase of resources available today full of knowledge it has become easier than ever before for women to break into tech. ",
  //         ],
  //         content: [],
  //       },
  //       {
  //         title: "",
  //         subTitle: "Discrimination and Harassment in the Workplace",
  //         description: [
  //           "Regardless of the industry, the workplace should be an environment free of discrimination and harassment. Unfortunately, many women regularly report that they face unwanted sexual advances and even fear for their safety while in the workplace. A study into sexual harassment in the tech industry revealed that 60% of women had experienced strange advances from their male colleagues or employers, with 65% of those coming from a higher-up. It was also reported that 84% had been told they are too aggressive and one in three felt afraid for their personal safety because of situations related to work.",
  //           "Businesses have a responsibility to take action against any instances of harassment or discrimination experienced by its employees in order to create a comfortable and safe working environment for all. This can be achieved through rigorous changes to company policies which explicitly explain the different forms of behavior which are considered inappropriate as well as their appropriates consequences should these regulations not be followed. All employees must also be informed about harassment policies so that everyone is aware what could happen if disrespectful conduct is exhibited, preventing further incidents from occurring.",
  //         ],
  //         content: [],
  //       },
  //       {
  //         title: "",
  //         subTitle: "Gender Discrimination ",
  //         description: [
  //           "Gender bias is a serious issue that affects people from all walks of life every day. It crops up in our everyday interactions, as well as more grandiose forms such as pay gaps and gender disparity in powerful positions. According to research, 42% of women experience gender bias in the workplace, making it clear that this form of discrimination is far from obsolete. Furthermore, men occupationally dominate the tech industry. In fact, 61% more males than women are paid for their work and only 5% of leadership positions are held by women. This creates a wide disparity between genders and sends a message that women are not valued or respected in the tech industry.",
  //           "With the lack of female tech leaders and with disparities in pay between genders, these gender biases can be challenging to recognize and ultimately overcome. Additionally, unconscious bias makes it difficult for people to become aware that they have gender biases against certain groups of people to begin with — meaning they will often never set out to actively remove these discriminatory beliefs and practices. Gender bias is an issue we should all be conscious of and work towards reducing in order to create an equal playing field free of judgement based on someone’s sex or gender identity.",
  //         ],
  //         content: [],
  //       },
  //       {
  //         title: "Resources to Help Get Women Into Information Technology (IT)",
  //         description: [
  //           "The tech industry is growing at a lightning speed, offering careers that are highly fulfilling and lucrative. As reported by the Bureau of Labor Statistics (BLS), the number of computer and information technology (IT) jobs is estimated to expand by 12% over the next decade. This is much faster than any other occupation and IT professionals can expect to earn an average salary of $88,240 as reported in 2019 BLS data. Despite the opportunities offered by this thriving field, research shows that women are not taking full advantage of them. According to the National Center for Women and Information Technology (NCWIT), less than a third of all computing jobs are held by women despite them making up more than half of the workforce, with participation percentage having fallen since 1991 when it was at its peak at 36%. With technology transforming many aspects of modern life, it's important to ensure equal access to these opportunities so that more women can benefit from entering this exciting field.",
  //           "Fortunately, there are now numerous resources available online that help bring more diversity into IT. For example, websites like Girls Who Code offer projects, activities, challenges and lessons designed to build coding skills for girls aged 11-18; Professional associations such as Anita Borg Institute have dedicated programs",
  //         ],
  //         content: [],
  //       },
  //       {
  //         title: "Tech Jobs and IT Career Options",
  //         description: [
  //           "In recent years, information technology has become an increasingly attractive option for college students and professionals seeking long-term career opportunities. With rising demand worldwide for experienced IT personnel, it’s no surprise that computer science and technological studies are proving popular amongst the workforce. Those looking to enter the IT and tech industry can expect a variety of career options across software development, UX design, multimedia production, support engineering, system administration, technical writing and more.",
  //           "Depending on the desired position within the IT sector of choice, employers might require candidates to have either a diploma or a bachelor degree in computing or related field. However some positions may be available with less formal education requirements but many will require experience or proof of participation in computing. Additionally, those who do choose an IT career path almost always realize larger salaries than those in other disciplines such as social sciences providing them with greater financial freedom for future investments and savings plans. Studies also suggest that people working in the digital profession typically experience higher job satisfaction too; making it a win-win situation all round",
  //           "Here's a list of fast growing tech jobs that you may want to consider:",
  //         ],
  //         content: [
  //           "Cybersecurity",
  //           "DevOps Engineers",
  //           "Prompt Engineers",
  //           "Data Scientist ",
  //           " Full Stack Engineering",
  //           " Digital Marketing",
  //           " Cloud Engineers",
  //           "Network Architect ",
  //           "Security Analysts",
  //           "Software Engineers",
  //           "Systems Analysts ",
  //           "Any IT job within a growing tech company",
  //         ],
  //       },
  //       {
  //         title:
  //           "Tech Training Options for Woman Interested in Pivoting inot a Tech Career",
  //         subTitle: "Online Certification Programs",
  //         description: [
  //           "Certification programs offer a great opportunity for IT professionals to advance in their careers. By taking advantage of these programs, individuals can gain the knowledge and skills necessary to face the challenges their industry presents. Additionally, these programs are often shorter and less expensive than taking a regular schooling program.",
  //           "For those looking to climb the ranks of the IT industry, there are some certification programs specifically dedicated to helping women break through certain barriers. For instance, Certified Scrum Master (CSM) provides an education on project management methods which is useful for roles such as IT management and positions that involve leading teams. Isaca is also an organization that offers certifications aimed at helping women further their IT careers with various educational resources like white papers, books, and webinars. This can be especially beneficial when individuals need support navigating their career paths or searching for new tech-related job opportunities.",
  //         ],
  //         content: [],
  //       },
  //       {
  //         title: "",
  //         subTitle: "Bootcamps",
  //         description: [
  //           "Courses, workshops, and bootcamps are ideal for women looking to get their start in the tech industry. There are many affordable programs available that provide comprehensive training in coding and software development. These courses typically last an average of six weeks—which is a practical amount of time for busy individuals to dedicate towards learning new skills. For example, Apprenti offers apprenticeship programs which connect aspiring tech professionals with immediate opportunities and careers. Plus, they actively recruit minorities, such as women, veterans, and people of color to help spread diversity throughout the industry.",
  //           "Another great program specifically tailored to women is Hackbright Academy—a highly acclaimed software engineer bootcamp based in San Francisco. Their mission is to educate and empower aspiring female engineers by providing top-notch course materials so they can pursue successful careers in the technology industry. Both Apprenti and Hackbright Academy should be taken advantage of for anyone looking for a jumpstart in their tech career.",
  //         ],
  //         content: [],
  //       },
  //       {
  //         title: "",
  //         subTitle: "National Center for Women and Information Technology",
  //         description: [
  //           "The National Center for Women and Information Technology (NCWIT) is a non-profit organization that works to increase the quality, quantity, and diversity of women in computing. They do this through various strategies such as providing free resources, programming tools, research-based solutions and engaging industry partners.",
  //           " Their goal is to build an inclusive digital world by increasing access to opportunity for all young women so that they can pursue rewarding careers in IT no matter their background or socio-economic status. NCWIT offers free resources on topics from recruitment and organizational change to outreach and mentoring so that educational institutions can develop comprehensive programs that support diverse computer science course offerings as well as work-driven opportunities. In addition to these resources, they provide networking opportunities with other leading professionals in the tech community so members can stay up to date with trends, news and technology breakthroughs. By working together towards a more diverse technical workforce, NCWIT helps create better solutions for society’s most pressing challenges and drive innovation across industries.",
  //         ],
  //         content: [],
  //       },
  //       {
  //         title: "",
  //         subTitle:"Networking Groups for Women in Tech",
  //         description: [""],
  //         content: ["", "", ""],
  //       },
  //       {
  //         title: "",
  //         description: [""],
  //         content: ["", "", ""],
  //       },
  //     ],
  //   },
  // };

  // const blogData3: BlogInterface = {
  //   id: "3",
  //   slug: "my-third-blog-post",
  //   title: "My third Blog Post",
  //   subTitle: "",
  //   description: ["This is my 3Rd blog post", ""],
  //   img: "/bloglogo.svg",
  //   body: {
  //     title: "the main ",
  //     description: ["This is the main idea of my blog post", ""],
  //     content: ["Paragraph 1", "Paragraph 2", "Paragraph 3"],
  //     list: [
  //       {
  //         title: "List 3",
  //         description: ["This is the first list in my blog post", ""],
  //         content: ["List item 1", "List item 2", "List item 3"],
  //       },
  //       {
  //         title: "",
  //         description: [""],
  //         content: ["List item 4", "List item 5", "List item 6"],
  //       },
  //       {
  //         title: "",
  //         description: ["", ""],
  //         content: ["List item 4", "List item 5", "List item 6"],
  //       },
  //       {
  //         title: "",
  //         description: ["", ""],
  //         content: ["List item 4", "List item 5", "List item 6"],
  //       },
  //     ],
  //   },
  // };

  return (
    <div>
      <BlogP
        id={BlogData.id}
        slug={BlogData.slug}
        title={BlogData.title}
        subTitle={BlogData.subTitle}
        description={BlogData.description}
        img={BlogData.img}
        body={BlogData.body}
      />
      {/* <BlogP
        id={BlogData2.id}
        slug={BlogData2.slug}
        title={BlogData2.title}
        subTitle={BlogData2.subTitle}
        description={BlogData2.description}
        img={BlogData2.img}
        body={BlogData2.body}
      /> */}
      {/* <BlogP
        id={blogData3.id}
        slug={blogData3.slug}
        title={blogData3.title}
        subTitle={blogData3.subTitle}
        description={blogData3.description}
        img={blogData3.img}
        body={blogData3.body}
      /> */}
    </div>
  );
};

export default BlogP1;
