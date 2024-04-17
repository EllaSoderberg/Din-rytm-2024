'use client'

import { Component } from 'react'
import Layout from './layout';

export default class PageContainer extends Component {
  render() {
    return (
      <Layout isIndex={false}>
      <div className="mt-24 lg:mt-32 flex justify-center lg:p-4">
        <div className="flex flex-col w-full md:max-w-4xl">
          {this.props.children}
        </div>
      </div>
    </Layout>
    );
  }
}