import * as React from 'react';

class FacebookEmbed extends React.Component {
  componentDidMount() {
 
    const script = document.createElement('script');
    script.src = 'https://www.embedista.com/j/likeshare.js'; 
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
        <div>
      <div style={{ position: 'relative', width: '400px' }}>
        <iframe
          width=""
          height="44"
          frameBorder="0"
          src="https://www.facebook.com/v9.0/plugins/like.php?action=recommend&amp;app_id=113869198637480&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df38739b8f21bc8%26domain%3Ddevelopers.facebook.com%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff12b5052557ef34%26relation%3Dparent.parent&amp;container_width=734&amp;href=https://www.facebook.com/technosportindia&amp;locale=en_US&amp;sdk=joey&amp;share=true"
          style={{ width: '400px' }}
          title="Facebook Like Button"
        ></iframe>
        <div id="fbroot"></div>
        <div
          style={{
            overflow: 'auto',
            position: 'absolute',
            height: '0pt',
            width: '0pt',
          }}
        >
          <a href="https://www.embedista.com/fb-buttons">Facebook Like Button Generator</a>
        </div>
        <div
          className="fblike"
          data-width=""
          data-layout=""
          data-action=""
          data-size=""
          data-share="true"
        ></div>
      </div>

<div>

<iframe width="500px" height="500px" src="https://www.facebook.com/v9.0/plugins/page.php?adapt_container_width=true&amp;app_id=113869198637480&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df310a21b6f5a654%26domain%3Ddevelopers.facebook.com%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff3cf179cd85d47c%26relation%3Dparent.parent&amp;container_width=3400&amp;height=1300&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2F/technosportindia&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline&amp;width=500"></iframe><script type="text/javascript" src="https://www.embedista.com/j/fbwidget.js"></script><div id="fbroot"></div><div style={{overflow: 'auto', position: 'absolute' ,height: '0pt', width: '0pt'}}><a href="https://www.embedista.com/embed-facebook-feed">Embed Facebook Feed</a></div><div className="fblike" data-width="" data-layout="" data-action="" data-size="" data-share="true"></div>
</div>

      </div>
    );
  }
}

export default FacebookEmbed;
