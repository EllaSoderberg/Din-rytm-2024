import { Component } from 'react'
import PageContainer from "@/components/PageContainer";
import { Card } from "@/components/card";

const importTjanster = async () => {
    // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
    // second flag in require.context function is if subdirectories should be searched
    const markdownFiles = require
        .context("../../content/tjanster", false, /\.md$/)
        .keys()
        .map(relativePath => relativePath.substring(2));
    return Promise.all(
        markdownFiles.map(async path => {
            const markdown = await import("../../content/tjanster" + '/' + path);
            return { ...markdown, slug: path.substring(0, path.length - 3) };
        })
    );
};

export default class Tjanster extends Component {
    static async getInitialProps() {
        const tjanstList = await importTjanster();

        return { tjanstList };
    }

    render() {
        const { tjanstList } = this.props;
        return (
            <div>
                <PageContainer>
                    <div className="text-5xl font-serif p-4">Tjänster</div>
                    <div className="flex uppercase px-4 justify-center">
                        <div className="flex flex-wrap justify-around">
                            {tjanstList.map(tjanst => {
                                console.log(tjanst)
                                return (
                                    <Card
                                        key={tjanst.attributes.title}
                                        img={tjanst.attributes.image}
                                        title={tjanst.attributes.title}
                                        slug={"tjanster/" + tjanst.slug}
                                    ></Card>
                                );
                            })}
                        </div>
                    </div>
                </PageContainer>
            </div>
        );
    }
}