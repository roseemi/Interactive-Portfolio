export default function Demos() {
    return (
        <>
            <section id="demo-body" className="flex flex-col lg:flex-row lg:h-dvh-nav justify-center content-stretch p-20 gap-10 box-border text-center">
                <div className="grid grid-cols-1 border-4 border-pink-900 lg:basis-1/3 p-10 mb-20 gap-20 lg:gap-0 content-between lg:overflow-scroll no-scrollbar">
                    <h2 className="text-pink-700 text-7xl text-center mb-10 underline">Qu'est-ce que c'est!?</h2>
                    <h3 className="text-4xl">
                        Browser game for French teachers and students. Questions are based on Maine Musicale's playlists.
                    </h3>
                    <a href="/game" className="w-fit block bg-pink-700 hover:bg-violet-700 text-white font-bold py-2 px-4 border-b-4 border-pink-900 hover:border-violet-900 rounded mx-auto">Go to Live Demo</a>
                </div>
                <div className="grid grid-cols-1 border-4 border-pink-900 lg:basis-1/3 p-10 mb-20 gap-20 lg:gap-0 content-between lg:overflow-scroll no-scrollbar">
                    <h2 className="text-pink-700 text-7xl text-center mb-10 underline">To-Do Android Mobile Application</h2>
                    <h3 className="text-4xl">
                        A classic to-do mobile application built using Android Studio and Kotlin. The application uses Firebase Firestore as its database for persistent data,
                        so entries and their statuses are always saved.
                    </h3>
                    <a href="https://www.youtube.com/watch?v=-QuAUog2gGg" target="_blank" className="w-fit block bg-pink-700 hover:bg-violet-700 text-white font-bold py-2 px-4 border-b-4 border-pink-900 hover:border-violet-900 rounded mx-auto">Go to YouTube Demo</a>
                </div>
                <div className="grid grid-cols-1 border-4 border-pink-900 lg:basis-1/3 p-10 mb-20 gap-20 lg:gap-0 content-between lg:overflow-scroll no-scrollbar">
                    <h2 className="text-pink-700 text-7xl text-center mb-10 underline">Travel E-Commerce</h2>
                    <h3 className="text-4xl">
                        Collects data from travel APIs, populates a database, and "sells" various travel packages. Fully supports client sessions, a cart system, an auto-email system, and working Stripe integration.
                    </h3>
                    <a href="/travel" className="w-fit block bg-pink-700 hover:bg-violet-700 text-white font-bold py-2 px-4 border-b-4 border-pink-900 hover:border-violet-900 rounded mx-auto">Go to Demo (WIP)</a>
                </div>
            </section>
        </>
    );
}