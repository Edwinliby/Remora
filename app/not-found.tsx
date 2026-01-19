import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center bg-[var(--background)] px-6 text-center">
            <div className="relative">
                <h1 className="select-none text-9xl font-bold text-primary opacity-20 blur-[1px]">
                    404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-3xl font-semibold text-[#1A0053]">
                        Page Not Found
                    </h2>
                </div>
            </div>

            <p className="mt-6 max-w-md text-lg text-gray-600">
                We couldn't find the page you were looking for. It might have been moved or doesn't exist.
            </p>

            <Link
                href="/"
                className="mt-10 rounded-full bg-primary px-8 py-3 text-white transition-all hover:scale-105 hover:bg-[#1A0053] hover:shadow-lg font-medium"
            >
                Return Home
            </Link>
        </div>
    );
}
