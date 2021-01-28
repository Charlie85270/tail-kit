import React from 'react';
import FormSubscribe from '../../form/layout/FormSubscribe';
import BlogCard from './BlogCard';

interface Props {
    withSearch?: boolean;
}

const BlogList = (props: Props) => {
    const blogs = [
        {
            tags: ['Car', 'Money'],
            title: 'Work at home',
            categ: 'Video',
            img: '/images/blog/1.jpg',
            desc: 'Work at home, remote, is the new age of the job, every person can work at home....',
        },
        {
            tags: ['Car', 'Money'],
            title: 'test',
            categ: 'Oui',
            img: '/images/blog/2.jpg',
            desc: 'The new supercar is here, 543 cv and 140 000$ !!',
        },
        {
            tags: ['Car', 'Money'],
            title: 'test',
            categ: 'Oui',
            img: '/images/blog/3.jpg',
            desc: 'The new supercar is here, 543 cv and 140 000$ !!',
        },
        {
            tags: ['Car', 'Money'],
            title: 'test',
            img: '/images/blog/4.jpg',
            desc: 'The new supercar is here, 543 cv and 140 000$ !!',
        },
        {
            tags: ['Car', 'Money'],
            title: 'test',
            img: '/images/blog/5.jpg',
            desc: 'The new supercar is here, 543 cv and 140 000$ !!',
        },
        {
            tags: ['Car', 'Money'],
            title: 'test',
            categ: 'Oui',
            img: '/images/blog/6.jpg',
            desc: 'The new supercar is here, 543 cv and 140 000$ !!',
        },
    ];

    return (
        <div className="w-full bg-white p-12">
            <div className="header flex items-end justify-between mb-12">
                <div className="title">
                    <p className="text-4xl font-bold text-gray-800 mb-4">Lastest articles</p>
                    <p className="text-2xl font-light text-gray-400">
                        All article are verified by 2 experts and valdiate by the CTO
                    </p>
                </div>
                {props.withSearch && (
                    <div className="text-end">
                        <FormSubscribe label="Search" placeholder="Enter a title" />
                    </div>
                )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                {blogs.map((blog) => {
                    return (
                        <BlogCard
                            key={blog.title}
                            tags={blog.tags}
                            title={blog.title}
                            categ={blog.categ}
                            img={blog.img}
                            desc={blog.desc}
                            showAuthor={true}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default BlogList;
