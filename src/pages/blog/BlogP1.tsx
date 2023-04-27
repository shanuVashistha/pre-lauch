// import React from "react";
// import { BlogInterface } from "./types";

// const blog: BlogInterface = {
//   id: "123",
//   slug: "my-first-blog-post",
//   title: "My First Blog Post",
//   subTitle: "This is a subtitle",
//   description: "This is a short description",
//   imageUrl: "https://example.com/my-image.png",
//   body: {
//     title: "Welcome to my blog",
//     description: "This is a blog post about my blog",
//     content: ["This is the first paragraph", "This is the second paragraph"],
//     list: [
//       {
//         title: "My first list item",
//         description: "This is a description of my first list item",
//         content: ["This is the first item in my first list"],
//       },
//       {
//         title: "My second list item",
//         description: "This is a description of my second list item",
//         content: ["This is the first item in my second list"],
//       },
//     ],
//   },
// };

// function App() {
//   return (
//     <div>
//       <h1>{blog.title}</h1>
//       <p>{blog.subTitle}</p>
//       <img src={blog.imageUrl} alt={blog.title} />
//       <p>{blog.description}</p>
//       <h2>{blog.body.title}</h2>
//       <p>{blog.body.description}</p>
//       <ul>
//         {blog.body.content?.map((item) => (
//           <li>{item}</li>
//         ))}
//       </ul>
//       <ul>
//         {blog.body.list?.map((item) => (
//           <li>
//             <h3>{item.title}</h3>
//             <p>{item.description}</p>
//             <ul>
//               {item.content?.map((listItem) => (
//                 <li>{listItem}</li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



// import React from "react";
// import { Img } from "@/utils/Img";
// import { BlogInterface ,BlogBodyInterface} from "@/utils/types";

// const Data = {
//   id: "1",
//   slug: "first",
//   title: " Top 5 In-Demand Skills Employers Want in 2023",
//   subTitle: "",
//   description: "  varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam placerat tortor commodo lectus laoreet venenatis. Donec ultricies, metus vitae bibendum consequat, tortor neque euismod lectus",
//   img:"/bloglogo.svg",
//   body: {
//     title: "Lorem Ipsum is that it has a more-or-less normal",
//     description: "body 1 description",
//     content: [" qwerty", "pan", "new data"],
//     list: [
//       {
//         title: "1",
//         description: "1 des",
//         content: [" list content", "list content 2"],
//       },
//       {
//         title: "2",
//         description: "2 des",
//         content: [" 2list content", "2list content 2"],
//       },
//       {
//         title: "3",
//         description: "3 des",
//         content: [" 3list content", "3list content 2"],
//       },
//     ],
//   },
// };

// const Blog = ({ props }: any) => {
//   console.log("Data :", Data);

//   return (
    
//       <div>
//         <div>
//       <Img className=" md:w-[105px] md:h-[64px] w-[73.93px] h-[45px]" src="/images/logo.png" alt=""/>
//         </div>

//         <h3 className=" flex justify-center md:text-[37px] md:pt-[105px] pt-[35px] font-semibold md:leading-[74.27px] text-bannerHeading text-[13px] leading-[40px] tracking-normal">
//           {Data.title}
//         </h3>
//         <p className="flex md:text-center text-start md:pt-[15px] pt-[7px] md:text-[18px] font-normal md:leading-[26px] text-[#77838F] md:w-[790px] w-[290px] m-auto text-[12px] leading-[12.41px]">
//           {Data.description}
//         </p>
//         <h3 className="md:text-[28px] text-[15px] md:mt-[35px] font-semibold  text-bannerHeading md:mx-[185px] mx-[47px]">
//           {Data.subTitle}
//         </h3>
//         <div className="flex justify-center md:pt-[60px] pt-[25px]">
//       <Img
//        src={Data.img}
//        alt="ll "
//        className="md:w-auto w-[300px] md:h-auto h-[190px]"/>
//         </div>
        
//             <div>
             
//           {Data.body.title}
//           <div className=" bg-slate-400">
//           {Data.body.content}
//           </div>
//               <div>
//                 {/* {Data.body.list} */}
//               </div>
//             </div>
//       </div>
//   );
// };
// export default Blog;
