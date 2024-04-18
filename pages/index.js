import Image from "next/image";
import { Component } from 'react'
import Layout from "@/components/layout";
import greenB from "@/public/img/GreenPattern.png";
import { TextboxRow } from "@/components/textboxrow";
import { CenterText } from "@/components/centertext";
import { BackgroundImg } from "@/components/backgroundimg";
import background from "@/public/img/GreenBg.jpg";
import { attributes } from "@/content/index.md"


export default class Home extends Component {
  render() {
    let { image, slogan, box1title, box1slug, box1text, box2title, box2slug, box2text, box3title, box3slug, box3text, om } = attributes
    return (
      <main>
        <BackgroundImg
          src={image}
          height={110}
        />
        <Layout isIndex={true}>
          <CenterText text={slogan} />
          <section className="block z-30 pb-20 bg-white">
            <div className="flex justify-center">
              <div className="flex flex-col w-full max-w-7xl">
                <div className="-mt-16 text-white">
                  <TextboxRow
                    boxData={[
                      {
                        title: box1title,
                        text: box1text,
                        slug: box1slug
                      },
                      {
                        title: box2title,
                        text: box2text,
                        slug: box2slug
                      },
                      {
                        title: box3title,
                        text: box3text,
                        slug: box3slug
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </section>
          {/*Bottom section*/}
          <section>
            <div className="flex text-white">
              <div className="w-full md:w-7/12 h-fit px-12 xs:px-16 py-10 bg-green-600">
                <h3 className="text-5xl font-serif">Om Din rytm</h3>
                <p className="text-sm p-3">
                  {om}
                </p>
              </div>
              <div className="md:w-5/12 relative">
                <Image
                className="absolute"
                src={greenB}
                alt="Grön bakgrund"
                fill
                style={{
                  objectFit: 'cover',
                }}
                ></Image>
                  <span className="w-full h-full absolute opacity-25 bg-green-400"></span>
                
              </div>
            </div>
          </section>
        </Layout>
      </main>
    );
  }
}
