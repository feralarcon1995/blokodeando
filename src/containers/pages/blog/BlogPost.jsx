import LoadingCard from "components/loaders/LoadingCard";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_blog } from "redux/actions/blog";
import Moment from 'react-moment';

function BlogPost({
    get_blog,
    post
}) {
    const params = useParams()
    const slug = params.slug

    useEffect(() => {
        get_blog(slug)
    }, [get_blog, slug])

    return (
        <FullWidthLayout>
            {
                post ?
                    <div className="relative py-16 bg-white overflow-hidden">
                        <div className="relative mx-8 px-4 sm:px-6 lg:px-8">
                            <div className="text-lg max-w-prose mx-auto">
                                <h1>
                                    <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                                        {post.category.name}
                                    </span>
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                        {post.title}
                                    </span>
                                </h1>
                                <p className="mt-3 text-base text-gray-400">
                                    Publicado:
                                    <Moment format="DD/MM/YYYY">
                                        {post.published}
                                    </Moment>
                                </p>
                                <p className="mt-8 text-xl text-gray-400 text-center leading-8 underline-offset-4">
                                    {post.excerpt}
                                </p>
                            </div>

                            <img className="h-full w-full object-cover" src={post.thumbnail} alt={post.title} />                            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                                <p className="text-4xl text-gray-800 w-full ">
                                    {post.description}
                                </p>

                            </div>
                        </div>
                    </div>
                    :
                    <LoadingCard />
            }

        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
    post: state.blog.post
})

export default connect(mapStateToProps, {
    get_blog
})(BlogPost)