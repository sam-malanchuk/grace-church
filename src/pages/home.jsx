import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from 'framework7-react';

export default () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavLeft>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle sliding>Grace Church</NavTitle>
      {/* <NavRight>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight> */}
      <NavTitleLarge>Grace Church</NavTitleLarge>
    </Navbar>

    {/* Page content */}
    <Block strong>
      <p>Welcome to Grace Baptist Church, we are glad to provide you with our most recent informationa and media through our new app.</p>

      <p>Use the tabs below or the menu options to navigate through the content.</p>
    </Block>
    <BlockTitle>Navigation</BlockTitle>
    <List>
      <ListItem link="/about/" title="About"/>
      <ListItem link="/form/" title="Form"/>
    </List>

    {/* <BlockTitle>Modals</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised popupOpen="#my-popup">Popup</Button>
        </Col>
        <Col width="50">
          <Button fill raised loginScreenOpen="#my-login-screen">Login Screen</Button>
        </Col>
      </Row>
    </Block>

    <BlockTitle>Panels</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised panelOpen="left">Left Panel</Button>
        </Col>
        <Col width="50">
          <Button fill raised panelOpen="right">Right Panel</Button>
        </Col>
      </Row>
    </Block>

    <List>
      <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      />
    </List> */}
  </Page>
);