import { Component } from 'react';
import PageContainer from '@/components/PageContainer';
import Image from 'next/image';

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
            attributes: { title, image, date },
        } = this.props.blogpost;

        return (
            <PageContainer>
                <div className="block">
                    <Image
                        src={image}
                        width={1000}
                        height={1000}
                    />
                    <div className="text-white w-full md:w-1/2 h-auto m-6 p-6 self-end absolute -mt-32 break-normal">
                        <div className="text-3xl font-serif font-bold">
                            {title}
                        </div>
                        <div>{date}</div>
                    </div>
                </div>
                <div
                    className="p-8 text-sm break-words"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </PageContainer>
        );
    }
}

export default Post;