export default function BasicTabsDisabled() {
    return (
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
            <li className="mr-2">
                <a href="#" className="inline-block p-4 text-gray-800 bg-white rounded-t-lg active ">
                    Home
                </a>
            </li>
            <li className="mr-2">
                <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
                    Calendar
                </a>
            </li>
            <li className="mr-2">
                <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
                    Results
                </a>
            </li>
            <li className="mr-2">
                <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
                    Live
                </a>
            </li>
            <li>
                <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
                    Disabled
                </a>
            </li>
        </ul>
    );
}
