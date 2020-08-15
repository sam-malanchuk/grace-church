import React from 'react';
import { Page, Navbar } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Page name="events">
        <Navbar title="Events" />
      </Page>
    );
  }
}