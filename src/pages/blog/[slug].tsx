import React from "react";
import { BlogP } from "@/utils/BlogPage";
import { BlogInterface } from "@/utils/types";

const BlogP1: React.FC = () => {
  const BlogData: BlogInterface = {
    id: "1",
    slug: "first",
    title: " Top 5 In-Demand Skills Employers Want in 2023",
    subTitle: "",
    description:
      "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam placerat tortor commodo lectus laoreet venenatis. Donec ultricies, metus vitae bibendum consequat, tortor neque euismod lectus",
    img: "/bloglogo.svg",
    body: {
      title: " Lorem Ipsum is that it has a more-or-less normal",
      description:
        "In lacinia sapien a libero accumsan facilisis. Donec vitae lorem massa. Aliquam tristique vehicula enim ut luctus. Vivamus gravida dignissim ligula, dictum laoreet elit malesuada ac. Praesent est justo, posuere a nisl porta, pharetra posuere lectus. Nulla velit odio, tincidunt vel metus a, viverra placerat ligula. ",
      content: ["", "", " "],
      list: [
        {
          title: "Heading for subtopic",
          description: "",
          content: [
            "Morbi pellentesque finibus libero, in blandit lorem eleifend eget. Praesent egestas hendrerit augue a vestibulum. Nullam fringilla, eros malesuada eleifend placerat, lacus tellus egestas erat, nec varius sem lorem ut mauris. Morbi libero felis.",
            "Cras eget dolor accumsan, blandit risus vitae, faucibus erat. Aliquam scelerisque, diam ut feugiat scelerisque, diam felis venenatis purus, eget cursus enim turpis at sem. Fusce nec tristique dolor, sit amet tristique purus.",
            "Morbi pellentesque finibus libero, in blandit lorem eleifend eget. Praesent egestas hendrerit augue a vestibulum. Nullam flavoring, eros malesuada eleifend placerat, lacus tellus egestas erat, nec varius sem lorem ut mauris. Morbi libero felis.",
            "Cras eget dolor accumsan, blandit risus vitae, faucibus erat. Aliquam scelerisque, diam ut feugiat scelerisque, diam felis venenatis purus, eget cursus enim turpis at sem. Fusce nec tristique dolor, sit amet tristique purus.",
          ],
        },
        {
          title: "Heading for subtopic",
          description: "",
          content: [
            "Morbi pellentesque finibus libero, in blandit lorem eleifend eget. Praesent egestas hendrerit augue a vestibulum. Nullam fringilla, eros malesuada eleifend placerat, lacus tellus egestas erat, nec varius sem lorem ut mauris. Morbi libero felis.",
            "Cras eget dolor accumsan, blandit risus vitae, faucibus erat. Aliquam scelerisque, diam ut feugiat scelerisque, diam felis venenatis purus, eget cursus enim turpis at sem. Fusce nec tristique dolor, sit amet tristique purus.",
            "Morbi pellentesque finibus libero, in blandit lorem eleifend eget. Praesent egestas hendrerit augue a vestibulum. Nullam flavoring, eros malesuada eleifend placerat, lacus tellus egestas erat, nec varius sem lorem ut mauris. Morbi libero felis.",
            "Cras eget dolor accumsan, blandit risus vitae, faucibus erat. Aliquam scelerisque, diam ut feugiat scelerisque, diam felis venenatis purus, eget cursus enim turpis at sem. Fusce nec tristique dolor, sit amet tristique purus.",
          ],
        },
        {
          title: "Heading for subtopic",
          description: "",
          content: [
            "Morbi pellentesque finibus libero, in blandit lorem eleifend eget. Praesent egestas hendrerit augue a vestibulum. Nullam flavoring, eros malesuada eleifend placerat, lacus tellus egestas erat, nec varius sem lorem ut mauris. Morbi lib",
            "Morbi pellentesque finibus libero, in blandit lorem eleifend eget. Praesent egestas hendrerit augue a vestibulum. Nullam flavoring, eros malesuada eleifend placerat, lacus tellus egestas erat, nec varius sem lorem ut mauris. Morbi lib",
          ],
        },
      ],
    },
  };

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
    </div>
  );
};

export default BlogP1;
