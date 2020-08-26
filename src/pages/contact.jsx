import React from 'react';
import { Page, Navbar } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Page name="contact">
        <Navbar title="Contact" />
      </Page>
    );
  }
}