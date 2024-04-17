import PageContainer from "@/components/PageContainer";
import attributes from "@/content/om.md"
import { Component } from "react";
import Image from "next/image";

export default class Om extends Component {
    render() {
        let { about, image } = attributes.attributes
        console.log(attributes.about)
        return (
            <div>
                <PageContainer>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-2/3 p-6">
                            <h1 className="font-serif text-4xl xs:text-6xl">Om Din rytm</h1>
                            <p
                                className="text-sm py-4"
                                dangerouslySetInnerHTML={{ __html: about }}
                            ></p>
                        </div>
                        <div className="max-w-xs flex justify-center md:w-1/3 self-center">
                            <div className="w-xxl">
                                <Image width={500}
                                    height={500}
                                    src={image} />
                            </div>
                        </div>
                    </div>
                </PageContainer>
            </div>
        );
    }
}
