import * as React from 'react';
import type { IEmbedistaProps } from './IEmbedistaProps';
import InstagramEmbed from './instagram';
import YouTubeEmbed from './youtube';
import FacebookEmbed from './facebook';
import Twitter from './Twitter';
export default class Embedista extends React.Component<IEmbedistaProps, {}> {
  public render(): React.ReactElement<IEmbedistaProps> {
    return (
      // https://3c3tsp.sharepoint.com/sites/demosite/siteone/karthiassessment/SitePages/zvlot0ku.aspx?loadSPFX=true&debugManifestsFile=https%3A%2F%2Flocalhost%3A4321%2Ftemp%2Fmanifests.js&Mode=Edit
     
     
     <div>
      <div className="embedista" style={{display:'flex'}}>


<div> 
<InstagramEmbed  />

</div>
<div>

  <YouTubeEmbed/>
</div>

     
      </div>
      <div style={{display:'flex'}}>
    <div>
    <FacebookEmbed/>
    </div>
    <div>
      <Twitter/>
    </div>
    </div>
      </div>
    );
  }
}
