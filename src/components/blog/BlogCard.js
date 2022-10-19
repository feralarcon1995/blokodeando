import { Link } from "react-router-dom"
import Moment from 'react-moment';
import { BiTimeFive } from 'react-icons/bi';

function BlogCard(data) {
    let post = data && data.data

    return (
        <div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={post.thumbnail} alt={post.title} />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <article className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                            <Link to={`/blog/categories/${post.category.id}`} className="hover:underline">
                                {post.category.name}
                            </Link>
                        </p>
                        <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
                        <p className="mt-3 text-base text-gray-400">{post.slug}</p>
                        <p className="mt-3 text-base text-gray-400">
                            Publicado:
                            <Moment format="DD/MM/YYYY">
                                {post.published}
                            </Moment>
                        </p>
                        <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>

                        <Link to={`/blog/post/${post.slug}`} className="block mt-2 self-end">
                            <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Ver Post</button>
                        </Link>
                    </article>
                </div>
            </div>
        </div >
    )
}

export default BlogCard