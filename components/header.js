import { Component } from 'react';
import Logo from "@/public/img/LogoWhite.svg"
import Link from "next/link"
import Image from "next/image"

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  listenScrollEvent = () => {
    if (window.scrollY > 30) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    let transparent = false;
    transparent = (!this.state.scrolled && this.props.isIndex);
    return (
      <header
        className={`${
          transparent ? `` : `bg-green-400`
        } z-40 uppercase fixed w-full ease-out duration-300 transition-all`}
      >
        <div className="flex justify-start mx-auto p-4 md:p-8 ">
          <Link
            className={`${
              transparent
                ? `xs:h-64 xs:w-64 h-32 w-32`
                : `h-32 w-32`
            } z-40 absolute top-0 right-0 -m-2 transform ease-in duration-500 transition-all`}
            href="/"
          >
            <Image src={Logo} alt="Din rytm"/>
          </Link>
        </div>
      </header>
    );
  }
}
