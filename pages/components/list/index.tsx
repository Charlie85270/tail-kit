import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import BlockList from '../../../components/kit/components/list/list/BlockList';
import SimpleList from '../../../components/kit/components/list/list/SimpleList';
import DescriptionList from '../../../components/kit/components/list/list/DescriptionList';
import TodoList from '../../../components/kit/components/list/list/TodoList';

const ListPages: FC = () => {
    return (
        <AppLayout
            title="List display text free Tailwind components"
            desc="List, Ordered list and more components for tailwind css"
        >
            <SectionHeader title="List" />
            <ComponentLayout
                showSwitchMode={true}
                title="Simple list"
                element={<SimpleList />}
                component={SimpleList}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="With action"
                element={<SimpleList withAction={true} />}
                component={SimpleList}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="With header"
                element={<SimpleList withAction={true} withHeader={true} />}
                component={SimpleList}
            />
            <ComponentLayout showSwitchMode={true} title="Bloc list" element={<BlockList />} component={BlockList} />
            <ComponentLayout
                showSwitchMode={true}
                title="With desc"
                element={<BlockList withDesc={true} />}
                component={BlockList}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="With desc and action "
                element={<BlockList withDesc={true} withAction={true} />}
                component={BlockList}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="With header"
                element={<BlockList withDesc={true} withAction={true} withHeader={true} />}
                component={BlockList}
            />
            <ComponentLayout
                showSwitchMode={true}
                title="With hover effect"
                element={<BlockList withDesc={true} withEffect={true} withAction={true} withHeader={true} />}
                component={BlockList}
            />
            <ComponentLayout title="Todo list" showSwitchMode={true} element={<TodoList />} component={TodoList} />
            <ComponentLayout title="Desc bloc list" element={<DescriptionList />} component={DescriptionList} />
            <ComponentLayout
                title="With header"
                element={<DescriptionList withHeader={true} />}
                component={DescriptionList}
            />
        </AppLayout>
    );
};

export default ListPages;
