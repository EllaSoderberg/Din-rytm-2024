import PageContainer from "@/components/PageContainer";
import attributes from "@/content/om.md"
import { Component } from "react";

export default class Om extends Component {
    render() {
        let { aboutme } = attributes
        return (
            <div>
                <PageContainer>
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-2/3 p-6">
                            <h1 className="font-serif text-4xl xs:text-6xl">Om Din rytm</h1>
                            <p
                                className="text-sm py-4"
                                dangerouslySetInnerHTML={{ __html: aboutme }}
                            ></p>
                        </div>
                        <div className="max-w-xs flex justify-center md:w-1/3 self-center">
                            <div className="w-xxl">
                                {{/*<CompatibleImage imageInfo={text.image} />*/ }}
                            </div>
                        </div>
                    </div>
                </PageContainer>
            </div>
        );
    }
}
