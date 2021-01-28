import React, { FC } from 'react';
import AppLayout from '../../../components/layout/AppLayout';
import ComponentLayout from '../../../components/layout/ComponentLayout';
import SectionHeader from '../../../components/site/header/SectionHeader';
import Table from '../../../components/kit/components/list/table/Table';
import ComplexTable from '../../../components/kit/components/list/table/ComplexTable';

const TablesPage: FC = () => {
    return (
        <AppLayout title="Tables free Tailwind components" desc="Tables and more components for tailwind css">
            <SectionHeader title="Table" />
            <ComponentLayout title="Simple Table" element={<Table />} component={Table} />
            <ComponentLayout title="With border" element={<Table withBorder={true} />} component={Table} />
            <ComponentLayout title="Stylised" vertical={true} element={<ComplexTable />} component={ComplexTable} />
            <ComponentLayout
                title="With pager"
                vertical={true}
                element={<ComplexTable withPager={true} />}
                component={ComplexTable}
            />
            <ComponentLayout
                title="With action"
                vertical={true}
                element={<ComplexTable withAction={true} withPager={true} />}
                component={ComplexTable}
            />
            <ComponentLayout
                title="With header"
                vertical={true}
                element={<ComplexTable withAction={true} withHeader={true} withPager={true} />}
                component={ComplexTable}
            />
        </AppLayout>
    );
};

export default TablesPage;
