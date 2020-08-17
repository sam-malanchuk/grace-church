import React from 'react';
import { Page, Navbar, BlockTitle, Card, CardHeader, CardContent, CardFooter, Link } from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Page name="events">
        <Navbar title="Events" />
        <BlockTitle>Facebook Cards</BlockTitle>
        <Card className="demo-facebook-card">
          <CardHeader className="no-border">
            <div><img src="https://cdn.framework7.io/placeholder/people-68x68-1.jpg" width="34" height="34"/></div>
            <div>John Doe</div>
            <div>Monday at 2:15 PM</div>
          </CardHeader>
          <CardContent>
            <p>What a nice photo i took yesterday!</p><img src="https://cdn.framework7.io/placeholder/nature-1000x700-8.jpg" width="100%"/>
            <p>Likes: 112 &nbsp;&nbsp; Comments: 43</p>
          </CardContent>
          <CardFooter className="no-border">
            <Link>Like</Link>
            <Link>Comment</Link>
            <Link>Share</Link>
          </CardFooter>
        </Card>

      </Page>
    );
  }
}