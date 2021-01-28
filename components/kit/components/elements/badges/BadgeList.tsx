import React, { FC } from 'react';
import Badge from './Badge';

const BadgeList: FC = () => {
    return (
        <div className="flex flex-wrap items-center gap-4">
            <Badge label="refused" color="bg-red-200" textColor="text-red-600" />
            <Badge label="pending" color="bg-yellow-200" textColor="text-yellow-600" />
            <Badge label="accepted" color="bg-green-200" textColor="text-green-600" />
        </div>
    );
};

export default BadgeList;
