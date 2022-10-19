import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import LoadingCard from "components/loaders/LoadingCard";
import { get_blog_list, blog_list } from "redux/actions/blog";
import Moment from 'react-moment';
function Home({
    get_blog_list,
    blog_list,

}) {

    useEffect(() => {
        get_blog_list()
    }, [get_blog_list])

    return (
        <FullWidthLayout>
            <section
                class="relative bg-[url(https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    class="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25"
                ></div>

                <div
                    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div class="max-w-xl text-center sm:text-left">
                        <h1 class="text-3xl font-extrabold sm:text-5xl text-white">
                            Encontra lo que estas buscando

                            <strong class="block font-extrabold text-purple-900 font-text text-4xl sm:text-7xl  ">
                                Blokodeando.
                            </strong>
                        </h1>

                        <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-white" >
                            Información al paso sobre el mundo de la programación y las buenas prácticas.
                        </p>

                        <div class="mt-8 flex flex-wrap gap-4 text-center">
                            <Link
                                to="/blog"
                                class="block w-full rounded bg-purple-900 px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-500 sm:w-auto"
                            >
                                Empecemos
                            </Link>

                            <Link
                                to="#"
                                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-purple-900 shadow hover:text-purple-700 focus:outline-none focus:ring active:text-purple-500 sm:w-auto"
                            >
                                Saber mas
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            <section class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-10 mx-auto">
                    <div class="text-center">
                        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white font-text">Desde el blog</h1>

                        <p class="max-w-lg mx-auto mt-4 text-gray-500">
                            Los últimos artículos agregados al blog.
                        </p>
                    </div>

                    {blog_list ?

                        <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
                            <div>

                                <img class="relative z-10 object-cover w-full rounded-md h-96" src={blog_list[0].thumbnail} alt={blog_list[0].title} />

                                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">

                                    <Link to="/blog" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                        {blog_list[0].title}
                                    </Link>

                                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                        {blog_list[0].excerpt}
                                    </p>

                                    <p class="mt-3 text-sm text-blue-500">
                                        Publicado:
                                        <Moment format="DD/MM/YYYY">
                                            {blog_list[0].published}
                                        </Moment>
                                    </p>
                                    <Link to={`/blog/post/${blog_list[0].slug}`} className="block mt-2 self-end">
                                        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Ver Post</button>
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <img class="relative z-10 object-cover w-full rounded-md h-96" src={blog_list[1].thumbnail} alt={blog_list[1].title} />

                                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                    <Link to="blog" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                        {blog_list[1].title}
                                    </Link>

                                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                        {blog_list[1].excerpt}
                                    </p>
                                    <p class="mt-3 text-sm text-blue-500">
                                        Publicado:
                                        <Moment format="DD/MM/YYYY">
                                            {blog_list[1].published}
                                        </Moment>
                                    </p>
                                    <Link to={`/blog/post/${blog_list[1].slug}`} className="block mt-2 self-end">
                                        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Ver Post</button>
                                    </Link>
                                </div>
                            </div>
                        </div>


                        :

                        <LoadingCard />



                    }

                </div>
            </section>

        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
    blog_list: state.blog.blog_list,

})

export default connect(mapStateToProps, {
    get_blog_list

})(Home)