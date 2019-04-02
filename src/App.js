import React, { Component } from 'react';

import './App.css';
import {
  DocumentCard,
  DocumentCardPreview,
  DocumentCardTitle,
  DocumentCardActivity
} from 'office-ui-fabric-react/lib/DocumentCard';

class App extends Component {
  render() {
    return (
       <div>
          <DocumentCard onClickHref = 'http://bing.com' >
            <DocumentCardPreview
          previewImages = {
            [{
              previewImageSrc: '',
              iconSrc: '',
              width: 318,
              height: 196,
              accentColor: '#ce4b1f'
            }]
          }
          /> 
          <DocumentCardTitle title = 'Revenue stream proposal fiscal year 2016 version02.pptx' / >
            <DocumentCardActivity
          activity = 'Created Feb 23, 2016'
          people = {
            [{
              name: 'Kat Larrson',
              profileImageSrc: ''
            }]
          }
          /> 
        </DocumentCard>
        </div>
    );
  }
}

export default App;
