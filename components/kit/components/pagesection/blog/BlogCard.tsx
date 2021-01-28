import React from 'react';
import Avatar from '../../elements/avatars/Avatar';

interface Props {
    img?: string;
    title: string;
    desc: string;
    tags: string[];
    categ?: string;
    icon?: string;
    showTags?: boolean;
    showAuthor?: boolean;
}

const BlogCard = (props: Props) => {
    return (
        <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a href="#" className="w-full block h-full">
                <img alt="blog photo" src={props.img} className="max-h-40 w-full object-cover" />
                <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <p className="text-indigo-500 text-md font-medium">{props.categ}</p>
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">{props.title}</p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">{props.desc}</p>
                    {props.showTags && (
                        <div className="flex flex-wrap justify-starts items-center mt-4">
                            {props.tags.map((tag) => {
                                return (
                                    <div
                                        key={tag}
                                        className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl"
                                    >
                                        #{tag}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    {props.showAuthor && (
                        <div className="flex items-center mt-4">
                            <Avatar size="small" img="/images/person/6.jpg" />
                            <div className="flex flex-col justify-between ml-4 text-sm">
                                <p className="text-gray-800 dark:text-white">Jean Jacques</p>
                                <p className="text-gray-400 dark:text-gray-300">20 mars 2029 - 6 min read</p>
                            </div>
                        </div>
                    )}
                </div>
            </a>
        </div>
    );
};

export default BlogCard;
