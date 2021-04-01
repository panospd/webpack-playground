import Heading from './components/heading/heading';
import KiwiImage from './components/kiwi-image/kiwi-image';
import React from 'react';

const kiwi = new KiwiImage();
const heading = new Heading();

heading.render('kiwi');
kiwi.render();
