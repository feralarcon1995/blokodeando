function Header() {
    return (
        <section className="relative bg-[url(https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25">
            </div>
            <div className="relative mx-auto max-w-screen-xl px-4 py-14 sm:px-6 lg:flex  lg:items-center lg:px-8">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:py-12 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="text-center">
                            <h2 className="text-3xl  font-extrabold text-purple-700  font-text sm:text-4xl">Blog</h2>
                            <p className="mt-3 max-w-2xl mx-auto text-xl text-white sm:mt-4">
                                Encuentra diferentes artículos con información de gran ayuda en programación.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header