import React from 'react';
import { Page, Navbar, BlockTitle, Block } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Page name="give">
        <Navbar title="Give" />
        <BlockTitle>Send Money</BlockTitle>
        <Block strong>
          <p>You can donate using your credit card through our partnered payment processor. Click below to get started.</p>
          <p>Or you can send a check Payable to:</p>
          <p>Grace Baptist Church</p>
          <p>123 Gracehill Dr. Chicago, IL 60625</p>
        </Block>
      </Page>
    );
  }
}