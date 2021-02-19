import React from 'react';
import { Document, Page } from 'react-pdf';

export class ComponentToPrint extends React.PureComponent {
    render() {
      return (
        <div> 
            <img src="images/Resume.png" alt="Trulli" width="800" height="1000"></img>
        </div>        
      );
    }
  }