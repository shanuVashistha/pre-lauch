import React from "react";
import useRouter from "next/router";
import { BlogP } from "@/utils/BlogPage";
import { BlogInterface } from "@/utils/types";

const BlogP1: React.FC = () => {
  const BlogData2: BlogInterface = {
    id: "3",
    slug: "my-third-blog-post",

    title:
      "Overview of Enjoy Mondays - How our marketplace works for job-seekers",
    subTitle: "",
    description: [
      " Are you tired of having unproductive conversations with recruiters about jobs that don't fit your needs? Maybe the job isn't remote, or the compensation doesn't match your expectations, or it's a contract role, or requires too much travel. If this sounds familiar, you might want to check out Enjoy Mondays. We're changing the game when it comes to getting you hired for your dream job.",
    ],
    img: "",
    body: {
      title: "",
      description: [
        "The process of searching for a new job can be very time-consuming, frustrating, and stressful. Enjoy Mondays is designed to simplify and streamline this process by gathering your wants and needs in new job in a one time online questionnarire. Once Enjoy Mondays understands what meaningful and fulfilling work looks like for you, our AI combined with human intelligence begins connecting you with employers who meet 96% of your search criteria.",
        "Enjoy Mondays is a unique recruitment platform that differentiates itself from traditional recruiting agencies, job boards, and networking sites by promoting full transparency in the job search process, hours of time saved for both job seekers and employers, and everyone stands to benefit from a more positive hiring process when all of the parties involved are on equal footing.",
      ],
      content: [],
      list: [
        {
          title: "What is the Enjoy Mondays marketplace?",
          description: [
            "Our platform is a marketplace for hiring that connects job-seekers with motivated employers. It works differently than traditional job boards. Designed by an 18 year recruiting veteran, we understand the struggles of the job search process. That's why we created a platform to make the process easier and more efficient for job seekers.",
            "Instead of applying to jobs, our AI matching platform is compassionate and takes into account your desired criteria to make sure you are only matched with the right companies.",
            "The simplest way to say it, there aren't enough people to fill all jobs. The way we see it is: In a labor market where job seekers have the luxury of choice, employee experience, benefits, and non-economic perks are extremely important. Through our AI, human intelligence, and fact-based marketplace, Enjoy Mondays cuts through all the clutter, and brings together candidates looking for their perfect job. ",
          ],
        },
        {
          title:
            "No more spending countless hours searching and applying to jobs, just matching to perfect fits ",
          description: [
            " Once signed up on the Enjoy Monday platform, you will complete a 5 minute questionnaire where you help us define what a perfect job looks like for you. Our AI uses this information and begins matching you with employers that meet all your expectations in future work. Once a match is made our career coaches confirm the match is a great fit. Once confirmed, you will receive full disclosure on the employer, job description, team makeup, career trajectory, and much more. If you like what you see, click the 'request an interview' button and sit back and wait for the interviews to come through. Take comfort knowing that all matches meet exactly what you are seeking in your next job.",
          ],
        },
        {
          title: "How much does Enjoy Mondays cost for the job seeker? ",
          description: [
            "There is never a cost for job seekers to be on Enjoy Mondays.  ",
          ],
        },
        {
          title: "As a job seeker, how do I create a profile?",
          description: [
            "The process of creating a profile on Enjoy Mondays is simple. After registering, you'll need to answer a 5-minute questionnaire that outlines your ideal job, also known as your perfect job. This process is referred to as 'one interview, many opportunities.'",
            "By providing your preferences, such as location, desired salary, ideal role, and seniority level, company size, and so much more, you will receive matches that are personalized according to your criteria. ",
            "To learn how to improve your candidate profile and stand out from other candidates, we suggest reading our blog post about maximizing your profile. ",
          ],
        },
        {
          title: "Will my current employer see my profile?",
          description: [
            "Our system offers a 100% confidential job search feature that automatically keeps your name and current employer hidden from your profile. This guarantees that your company will not find out about your job search activities. Moreover, your Enjoy Monday profile is also kept private and not visible to other job-seekers, unlike LinkedIn, Indeed, and all other job boards.",
          ],
        },
        {
          title: "What happens after I create my profile?",
          description: [
            "After submitting your application, your profile will be reviewed to ensure suitable job opportunities on Enjoy Mondays. If accepted, a member from our career coaching team will be assigned to guide and support you during your time on the platform, and make sure that you match to the perfect job that is meaningful and fulfilling. ",
            "",
          ],
        },
        {
          title: "Can you provide a definition for the role of career coach?",
          description: [
            "Enjoy Mondays has a team of career coaches that provide job seekers with support throughout their job search. This includes advice on how to optimize their profiles, reminders about unanswered messages from employers, as well as assistance during late stage interviews. ",
          ],
        },
        {
          title:
            "Receive opportunities that match 96% of what you're looking for with full transparency on the employer and job details (The level of detail Enjoy Mondays shares has never been done before)",
          description: [
            "If the role and company match your preferences, you'll receive a notification. Login to the platform to review and request an interview, or decline the match based on your interest. Job seekers must respond within 3 days to avoid expiration. The career coach will check in for any questions.",
            "Once you request an interview, recruiters and hiring managers on Enjoy Mondays can view your confidential profile. Your name and current employer will remain hidden until the employer confirms interest in a first interview.",
          ],
        },
        {
          title:
            "When you say full transparency on both sides what does that mean?",
          description: [
            "A more positive hiring process when all of the parties involved are on an equal footing. ",
          ],
        },
        {
          title:
            "What type of jobs does the Enjoy Mondays marketplace support? ",
          description: [
            "Enjoy Mondays is a place for passive and active job seekers in tech, sales, marketing, engineering, accounting, and finance within the United States and Canada.",
          ],
        },
        {
          title: "How does Enjoy Mondays reduce employer bias? ",
          description: [
            "First and last names along with current employers are hidden creating a safe space for passive and active job seekers who are looking to get hired for their perfect job. By removing names and pictures we are working to eliminate bias in the hiring process.  ",
          ],
        },
        {
          title: "How is Enjoy Mondays different from Hired.com?",
          description: [
            "Hired.com and vettery.com did a great job of thinking outside the box to create a marketplace for job seekers and employers. There are a 6 key areas where Enjoy Mondays standout: ",
            "1. Enjoy Mondays caters to tech, engineering, sales, marketing, accounting and finance. Hired.com only does tech and sales.",
            "2. Hired.com requires employers to search job seeker profiles and request an interview when there is a resume fit. We've flipped the script by resume the search and empowering job seekers with full transparency on the opportunity before deciding to interview. ",
            "3. Our one time questionnaire looks at the macro and micro of a job seekers wants and needs in a dream job. Our AI platform only makes a match if there's a 96% success rate. Hired.com asks good basic questions but lacks understanding a job seekers intrinsic motivators.  ",
            "4. Enjoy Mondays saves the employer hours per week by not sourcing for candidate profiles.  ",
            "5. Our pricing model is more cost effective for employers compared to Hire.com. ",
            "6. The quality and quantity of job details we require employers to complete are not found on any job board or marketplace.  ",
          ],
        },
        {
          description: [
            "In conclusion,  Enjoy Mondays is changing the way that people hire and get hired in a big way. Through its AI, human intelligence, and fact-based marketplace, Enjoy Mondays brings together candidates looking for their perfect job, and employers looking to streamline sourcing, in a confidential and transparent way that is never been done before. ",
            "Everyone stands to benefit from a more positive hiring process when all of the parties involved are on equal footing. ",
            "Better Mondays start here.",
          ],
        },
      ],
    },
  };
  return (
    <BlogP
      id={BlogData2.id}
      slug={BlogData2.slug}
      title={BlogData2.title}
      subTitle={BlogData2.subTitle}
      description={BlogData2.description}
      img={BlogData2.img}
      body={BlogData2.body}
    />
  );
};

export default BlogP1;
