
'use client'

import { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-green-400 text-sm text-white text-center flex justify-center">
                    <nav className="sm:flex sm:justify-between w-full max-w-5xl p-4 md:p-8">
                        <p className="p-2">
                            Utvecklad av {` `}
                            <a
                                className="font-bold no-underline"
                                href="https://github.com/EllaSoderberg"
                            >
                                Ella Söderberg
                            </a>
                        </p>
                        <p className="p-2">
                            Designad av {` `}
                            <a className="font-bold no-underline">
                                Maja Lundquist
                            </a>
                            {" "} & {` `}
                            <a className="font-bold no-underline">
                                Sanna Mogren
                            </a>
                        </p>
                        <p className="p-2">
                            Se denna sida på {` `}
                            <a
                                className="font-bold no-underline"
                                href="https://github.com/EllaSoderberg/dinrytm"
                            >
                                GitHub
                            </a>
                        </p>
                    </nav>
                </footer>
            </div>
        )
    }
}
