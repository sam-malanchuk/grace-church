import React from 'react';

import {
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';

import routes from '../js/routes';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        name: 'Grace Church', // App name
        theme: 'auto', // Automatic theme detection

        // App root data
        data: function () {
          return {

            // Demo products for Catalog section
            products: [
              {
                id: '1',
                title: 'Apple iPhone 8',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
              },
              {
                id: '2',
                title: 'Apple iPhone 8 Plus',
                description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
              },
              {
                id: '3',
                title: 'Apple iPhone X',
                description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
              },
            ]
          };
        },

        // App routes
        routes: routes,
      },
      // Login screen demo data
      username: '',
      password: '',
    }
  }
  render() {
    return (
      <App params={ this.state.f7params } >

        {/* Left panel with cover effect*/}
        <Panel left reveal themeDark>
          <View>
            <Page>
              <Navbar title="Left Panel"/>
              <Block>Left panel content goes here</Block>
            </Page>
          </View>
        </Panel>


        {/* Right panel with reveal effect*/}
        <Panel right cover themeDark>
          <View>
            <Page>
              <Navbar title="Card Payments"/>
              <Block>Fill out the credit card details below</Block>
            </Page>
          </View>
        </Panel>


        {/* Views/Tabs container */}
        <Views tabs className="safe-areas">
          {/* Tabbar for switching views-tabs */}
          <Toolbar tabbar labels bottom>
            <Link tabLink="#view-home" tabLinkActive iconIos="f7:house_fill" iconAurora="f7:house_fill" iconMd="material:home" text="Home" />
            <Link tabLink="#view-events" iconIos="f7:calendar" iconAurora="f7:calendar" iconMd="material:calendar" text="Events" />
            <Link tabLink="#view-contact" iconIos="f7:bubble_left_bubble_right_fill" iconAurora="f7:bubble_left_bubble_right_fill" iconMd="material:contact" text="Contact" />
            <Link tabLink="#view-archive" iconIos="f7:mic_fill" iconAurora="f7:mic_fill" iconMd="material:audio" text="Archive" />
            <Link tabLink="#view-give" iconIos="f7:creditcard_fill" iconAurora="f7:creditcard_fill" iconMd="material:give" text="Give" />
          </Toolbar>

          {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
          <View id="view-home" main tab tabActive url="/" />

          {/* Events View */}
          <View id="view-events" name="events" tab url="/events/" />

          {/* Contact View */}
          <View id="view-contact" name="contact" tab url="/contact/" />

          {/* Archive View */}
          <View id="view-archive" name="archive" tab url="/archive/" />

          {/* Give View */}
          <View id="view-give" name="give" tab url="/give/" />

        </Views>

        {/* Popup */}
        <Popup id="my-popup">
          <View>
            <Page>
              <Navbar title="Popup">
                <NavRight>
                  <Link popupClose>Close</Link>
                </NavRight>
              </Navbar>
              <Block>
                <p>Popup content goes here.</p>
              </Block>
            </Page>
          </View>
        </Popup>

        <LoginScreen id="my-login-screen">
          <View>
            <Page loginScreen>
              <LoginScreenTitle>Login</LoginScreenTitle>
              <List form>
                <ListInput
                  type="text"
                  name="username"
                  placeholder="Your username"
                  value={this.state.username}
                  onInput={(e) => this.setState({username: e.target.value})}
                ></ListInput>
                <ListInput
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={this.state.password}
                  onInput={(e) => this.setState({password: e.target.value})}
                ></ListInput>
              </List>
              <List>
                <ListButton title="Sign In" onClick={() => this.alertLoginData()} />
                <BlockFooter>
                  Some text about login information.<br />Click "Sign In" to close Login Screen
                </BlockFooter>
              </List>
            </Page>
          </View>
        </LoginScreen>
      </App>
    )
  }
  alertLoginData() {
    this.$f7.dialog.alert('Username: ' + this.state.username + '<br>Password: ' + this.state.password, () => {
      this.$f7.loginScreen.close();
    });
  }
  componentDidMount() {
    this.$f7ready((f7) => {

      // Call F7 APIs here
    });
  }
}