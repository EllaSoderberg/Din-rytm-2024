import { Component } from 'react';

class Post extends Component {
    static async getInitialProps({ query }) {
        const { slug } = query;
        const blogpost = await import(`../../content/lasmer/${slug}.md`).catch(error => null);

        return { blogpost };
    }
    render() {
        if (!this.props.blogpost) return <div>not found</div>;

        const {
            html,
            attributes: { title },
        } = this.props.blogpost;

        return (
            <>
                <article>
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </article>
            </>
        );
    }
}

export default Post;