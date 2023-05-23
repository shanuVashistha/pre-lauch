import React, { FC } from 'react';
import { Img } from "@/utils/Img";

interface BlogBodyInterface {
    content: any[];
}

interface BlockItemInterface {
    textColor: any;
    backgroundColor: any;
    textAlignment: any;
    children: any;
}

interface BlockItemHeadingInterface {
    textColor: any;
    backgroundColor: any;
    textAlignment: any;
    children: any;
    level: any;
}

const Heading: FC<BlockItemHeadingInterface> = (props) => {
    const { textColor, backgroundColor, textAlignment, children, level } = props;
    const HeadingTag: any = `h${level}`;

    return (
        <HeadingTag
            style={{ color: textColor, backgroundColor, textAlign: textAlignment }}
            className="font-medium text-[#1D1E25] my-[20px]"
        >
            {children}
        </HeadingTag>
    );
};

const Paragraph: FC<BlockItemInterface> = ({ textColor, backgroundColor, textAlignment, children }) => (
    <p
        style={{ color: textColor, backgroundColor, textAlign: textAlignment }}
        className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570] my-[10px]"
    >
        {children}
    </p>
);

const BulletListItem: FC<BlockItemInterface> = ({ textColor, backgroundColor, textAlignment, children }) => (
    <div
        style={{ color: textColor, backgroundColor, textAlign: textAlignment }}
        className="w-full flex items-center gap-[16px] pb-[12px]"
    >
        <Img src="/images/check.svg" alt="Check"
             className="w-[13px] h-[13px]"/>
        <p className="font-normal xxl:text-[16px] md:text-[14px] sm:text-[12px] text-[10px] md:leading-[27px] leading-[15px] tracking-[0.6px] text-[#5B6570]">
            {children}
        </p>
    </div>
);

export const BlogBody: FC<BlogBodyInterface> = (props) => {
    const { content } = props;

    return (
        <>
            {
                content?.map((item) => {
                    switch (item.type) {
                        case 'heading':
                            return (
                                <Heading
                                    key={item.id}
                                    textColor={item.props.textColor}
                                    backgroundColor={item.props.backgroundColor}
                                    textAlignment={item.props.textAlignment}
                                    level={item.props.level}
                                >
                                    {item.content[0]?.text}
                                </Heading>
                            );
                        case 'paragraph':
                            return (
                                <Paragraph
                                    key={item.id}
                                    textColor={item.props.textColor}
                                    backgroundColor={item.props.backgroundColor}
                                    textAlignment={item.props.textAlignment}
                                >
                                    {item.content[0]?.text}
                                </Paragraph>
                            );
                        case 'bulletListItem':
                            return (
                                <BulletListItem
                                    key={item.id}
                                    textColor={item.props.textColor}
                                    backgroundColor={item.props.backgroundColor}
                                    textAlignment={item.props.textAlignment}
                                >
                                    {item.content[0]?.text}
                                </BulletListItem>
                            );
                        case 'text':
                            return item.text;
                        default:
                            return null;
                    }
                })
            }
        </>
    );
}