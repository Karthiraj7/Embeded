import * as React from 'react';

const InstagramEmbed: React.FC = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    const handleClick = () => {
      // Replace with your tracking logic
      console.log('Instagram embed clicked');
      // Example: Send data to analytics service
      // analytics.track('InstagramEmbedClick', { url: 'https://www.instagram.com/rakgasofficial/' });
    };

    const blockquote = document.querySelector('.instagram-media');
    blockquote?.addEventListener('click', handleClick);

    return () => {
      document.body.removeChild(script);
      blockquote?.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/rakgasofficial/?utm_source=ig_embed&ig_rid=3d28af37-553f-4f51-81b6-197c1e40f22b"
      data-instgrm-version="12"
      style={{
        background: "#FFF",
        border: "0",
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "540px",
        minWidth: "326px",
        padding: "0",
        width: "99.375%",
        maxHeight: "100%"
      }}
    >
      {/* Instagram post content */}
    </blockquote>
  );
};

export default InstagramEmbed;
