import * as React from 'react';

class Twitter extends React.Component {
  componentDidMount() {
    // Dynamically load the Twitter widget script
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    // Dynamically load the Embedista script
    const embedistaScript = document.createElement('script');
    embedistaScript.src = 'https://www.embedista.com/j/twitterfeed.js';
    embedistaScript.type = 'text/javascript';
    document.body.appendChild(embedistaScript);
  }

  componentWillUnmount() {
    // Clean up the scripts
    const scripts = document.querySelectorAll('script[src="https://platform.twitter.com/widgets.js"], script[src="https://www.embedista.com/j/twitterfeed.js"]');
    scripts.forEach(script => {
      document.body.removeChild(script);
    });
  }

  render() {
    return (
      <div style={{ position: 'relative', width: '300px', maxWidth: '100%', maxHeight: '300px', height: '300px' }}>
        <blockquote className="twitter-tweet" data-dnt="true">
          <a className="twitter-timeline" href="https://Twitter.com/elonmusk">Loading...</a>
        </blockquote>
        <div
          style={{
            position: 'absolute',
            width: '77%',
            bottom: '3px',
            left: '0',
            right: '0',
            marginLeft: 'auto',
            marginRight: 'auto',
            color: '#000',
            textAlign: 'center',
          }}
        >
          <small style={{ lineHeight: 1.3, fontSize: 0, background: '#fff' }}>
            <div style={{ overflow: 'auto', position: 'absolute', height: 0, width: 0 }}>
              <a href="https://www.embedista.com/embed-twitter-feed-publish">Twitter Embed Code</a>
            </div>
            <style>
              {`
                .twit2 { height: 221px; width: 211px; }
                #fav img { max-height: none !important; max-width: none !important; background: none !important; }
                #twit twit { max-height: none !important; max-width: none !important; background: none !important; }
              `}
            </style>
          </small>
        </div>
      </div>
    );
  }
}

export default Twitter;
