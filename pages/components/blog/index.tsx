import React from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import BlogList from '../../../components/kit/components/pagesection/blog/BlogList';
import BlogCard from '../../../components/kit/components/pagesection/blog/BlogCard';

const BlogPage = () => {
    return (
        <AppLayout
            title="Blogs free Tailwind components"
            desc="Blogs cards, Blogs layouts,... components for tailwind css"
        >
            <SectionHeader title="Blog" />
            <ComponentLayout
                vertical={false}
                showSwitchMode={true}
                title="Blog card"
                element={
                    <BlogCard
                        tags={['Car', 'Money']}
                        title="New Mac is here !"
                        img="/images/blog/1.jpg"
                        desc="The new supermac is here, 543 cv and 140 000$. This is best racing computer about 7 years on..."
                    />
                }
                component={BlogCard}
            />
            <ComponentLayout
                vertical={false}
                showSwitchMode={true}
                title="With categ"
                element={
                    <BlogCard
                        categ="Article"
                        tags={['Car', 'Money']}
                        title="Supercharged"
                        img="/images/blog/1.jpg"
                        desc="The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on..."
                    />
                }
                component={BlogCard}
            />
            <ComponentLayout
                vertical={false}
                showSwitchMode={true}
                title="With tags"
                element={
                    <BlogCard
                        showTags={true}
                        categ="Article"
                        tags={['Car', 'Money']}
                        title="Supercharged !"
                        img="/images/blog/1.jpg"
                        desc="The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on..."
                    />
                }
                component={BlogCard}
            />
            <ComponentLayout
                vertical={false}
                showSwitchMode={true}
                title="With author"
                element={
                    <BlogCard
                        showAuthor={true}
                        categ="Article"
                        tags={['Car', 'Money']}
                        title="Supercharged !"
                        img="/images/blog/1.jpg"
                        desc="The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on..."
                    />
                }
                component={BlogCard}
            />

            <ComponentLayout
                vertical={true}
                showSwitchMode={true}
                title="Blog list"
                element={<BlogList withSearch={true} />}
                component={BlogList}
            />
        </AppLayout>
    );
};

export default BlogPage;
