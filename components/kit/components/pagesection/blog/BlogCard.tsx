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
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a href="#" className="block w-full h-full">
                <img alt="blog photo" src={props.img} className="object-cover w-full max-h-40" />
                <div className="w-full p-4 bg-white dark:bg-gray-800">
                    <p className="font-medium text-indigo-500 text-md">{props.categ}</p>
                    <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">{props.title}</p>
                    <p className="font-light text-gray-400 dark:text-gray-300 text-md">{props.desc}</p>
                    {props.showTags && (
                        <div className="flex flex-wrap items-center mt-4 justify-starts">
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
