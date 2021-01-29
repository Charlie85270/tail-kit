import React, { FC } from 'react';
import Badge from './Badge';

const BadgeList: FC = () => {
    return (
        <div className="flex flex-wrap items-center gap-4">
            <Badge rounded="rounded-full" label="refused" color="bg-red-200" textColor="text-red-600" isSmall={false} />
            <Badge
                rounded="rounded-full"
                label="pending"
                color="bg-yellow-200"
                textColor="text-yellow-600"
                isSmall={false}
            />
            <Badge
                rounded="rounded-full"
                label="accepted"
                color="bg-green-200"
                textColor="text-green-600"
                isSmall={false}
            />
        </div>
    );
};

export default BadgeList;
