export const Appbar = () => {
    return (
        <div className="bg-blue-100 shadow h-14 flex justify-between items-center px-4">
            <div className="text-xl font-semibold text-blue-900">PayTM App</div>
            <div className="flex items-center">
                <div className="mr-4 text-gray-600">Hello</div>
                <div className="rounded-full h-10 w-10 bg-blue-400 flex items-center justify-center">
                    <div className="text-white text-lg font-bold">U</div>
                </div>
            </div>
        </div>
    );
};
