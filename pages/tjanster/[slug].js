import { Component } from 'react'
import PageContainer from "@/components/PageContainer";
import { QuoteBlock } from "@/components/QuoteBlock";
import Image from "next/image";

export default class Tjanst extends Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const tjanst = await import(`../../content/tjanster/${slug}.md`).catch(error => null);

    return { tjanst };
  }
  render() {
    if (!this.props.tjanst) return <div>not found</div>;
    const {
      html,
      attributes: { title, image, ingress, quote, quoteauthor },
    } = this.props.tjanst;

    return (
      <PageContainer>
        <div className="block">
          <Image
            className='w-full'
            src={image}
            height={1000}
            width={1000}
          />
          <div className="text-white h-auto w-full ml-4 p-4 self-end">
            <div className="text-3xl sm:text-5xl font-serif -mt-20">
              {title}
            </div>
            <div className="text-md sm:text-xl ml-4">
              {ingress}
            </div>
            <div className="absolute bg-green-600 w-full top-0 left-0 border-red-600 border-8"></div>
          </div>
        </div>
        <div
          className="p-8 break-words text-sm"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <QuoteBlock
          quote={
            quote
          }
          author={quoteauthor}
        />
      </PageContainer>
    );
  }

}