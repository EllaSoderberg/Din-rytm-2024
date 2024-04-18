import { Component } from 'react';
import Link from 'next/link';
import { Card } from '@/components/card';
import PageContainer from '@/components/PageContainer';
import { GreenButton } from '@/components/greenbutton';

const importBlogPosts = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context("../../content/lasmer", false, /\.md$/)
    .keys()
    .map(relativePath => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async path => {
      const markdown = await import("../../content/lasmer" + '/' + path);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

export default class Blog extends Component {
  static async getInitialProps() {
    const postsList = await importBlogPosts();

    return { postsList };
  }

  constructor(props) {
    super(props);
    this.state = { aktuelltIsActive: true, forskningIsActive: false };
    this.toggleAktuellt = this.toggleAktuellt.bind(this);
    this.toggleForskning = this.toggleForskning.bind(this);
  }

  toggleAktuellt() {
    this.setState({ aktuelltIsActive: true });
    this.setState({ forskningIsActive: false });
  }

  toggleForskning() {
    this.setState({ aktuelltIsActive: false });
    this.setState({ forskningIsActive: true });
  }
  render() {
    const { postsList } = this.props;
    return (
      <div className="">
        <PageContainer>
          <div className="text-5xl font-serif p-4 ">Läs mer</div>
          <div className="flex uppercase px-4">
            <div onClick={this.toggleAktuellt}>
              <GreenButton isActive={this.state.aktuelltIsActive}>
                Aktuellt
              </GreenButton>
            </div>
            <div onClick={this.toggleForskning}>
              <GreenButton isActive={this.state.forskningIsActive}>
                Forskning
              </GreenButton>
            </div>
          </div>
          {postsList.map(post => {
            console.log(post)
            return (
              <Card
                key={post.attributes.title}
                img={post.attributes.image}
                title={post.attributes.title}
                date={post.attributes.date}
                category={post.attributes.category}
                slug={"lasmer/" + post.slug}
                aktuelltIsActive={this.state.aktuelltIsActive}
                forskningIsActive={this.state.forskningIsActive}
              ></Card>
            );
          })}
        </PageContainer>
      </div>
    );
  }
}