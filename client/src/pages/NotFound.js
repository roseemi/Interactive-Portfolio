export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center h-dvh w-dvw">
            <p className="p-10">Not Found</p>
            <a href="/" className="font-semibold leading-6 p-10">
                Return Home <span aria-hidden="true">→</span>
            </a>
        </div>
    );
}