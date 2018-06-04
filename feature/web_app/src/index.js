import React from 'react';
import { render } from 'react-dom';
import RootLayout from './components/layouts/RootLayout';
import './index.scss';

const mountElement = document.getElementById('root');

export default function App({ name }) {
  return <RootLayout>Hello {name}</RootLayout>
}

render(<App name="Word !" />, mountElement);
