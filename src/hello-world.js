import Heading from './components/heading/heading';
import HelloWorldButton from './components/hello-world-button/hello-world-button';
import React from 'react';

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();

heading.render('hello-world');
helloWorldButton.render();

if (process.env.NODE_ENV == 'production') {
  console.log('Production mode');
} else {
  console.log('Development mode');
}
