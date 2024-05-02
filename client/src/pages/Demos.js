export default function Demos() {
    return (
        <>
            <section id="demo-body" className="flex flex-col lg:flex-row lg:h-dvh justify-center content-stretch p-20 gap-10 box-border text-center">
                <div className="grid grid-cols-1 border-4 border-pink-900 lg:basis-1/3 p-10 mb-20 gap-20 lg:gap-0 content-between lg:overflow-scroll no-scrollbar">
                    <h2 className="text-pink-700 text-7xl text-center mb-10 underline">Qu'est-ce que c'est!?</h2>
                    <h3 className="text-4xl">Browser game for French teachers and students. Questions are based on Maine Musicale's playlists.</h3>
                    <a href="/game" className="w-fit block bg-pink-700 hover:bg-violet-700 text-white font-bold py-2 px-4 border-b-4 border-pink-900 hover:border-violet-900 rounded mx-auto">Go to Demo</a>
                </div>
                <div className="grid grid-cols-1 border-4 border-pink-900 lg:basis-1/3 p-10 mb-20 gap-20 lg:gap-0 content-between lg:overflow-scroll no-scrollbar">
                    <h2 className="text-pink-700 text-7xl text-center mb-10 underline">Travel E-Commerce</h2>
                    <h3 className="text-4xl">Collects data from travel APIs, populates a database, and "sells" various travel packages. Fully supports client sessions, a cart system, an auto-email system, and working Stripe integration.</h3>
                    <a href="/travel" className="w-fit block bg-pink-700 hover:bg-violet-700 text-white font-bold py-2 px-4 border-b-4 border-pink-900 hover:border-violet-900 rounded mx-auto">Go to Demo (WIP)</a>
                </div>
                <div className="grid grid-cols-1 border-4 border-pink-900 lg:basis-1/3 p-10 mb-20 gap-20 lg:gap-0 content-between lg:overflow-scroll no-scrollbar">
                    <h2 className="text-pink-700 text-7xl text-center mb-10 underline">Retro Storefront</h2>
                    <h3 className="text-4xl">A multipage website all about Beanie Babies. Contains a storefront for browsing products. This is unofficial, and no products are able to be bought</h3>
                    <a href="/beaniebaby" className="w-fit block bg-pink-700 hover:bg-violet-700 text-white font-bold py-2 px-4 border-b-4 border-pink-900 hover:border-violet-900 rounded mx-auto">Go to Demo (WIP)</a>
                </div>
            </section>
        </>
    );
}