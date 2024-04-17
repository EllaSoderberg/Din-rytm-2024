import { Component } from "react";
import Header from "./header";
import Footer from "./footer";


export default class Layout extends Component {
    render() {
        return (
            <div className="z-30 flex flex-col min-h-screen">
                <Header isIndex={this.props.isIndex} />
                <main className="flex flex-col md:justify-center">
                    {this.props.children}
                </main>
                <Footer />
            </div>

        );
    }
}
