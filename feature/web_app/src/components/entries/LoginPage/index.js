import React from 'react';
import Button from '../../shared/atoms/Button';
import RootLayout from '../../layouts/RootLayout';
import './styles.css';

export default function LoginPage() {
  return (
    <RootLayout>
      <Button caption='click me!' />
    </RootLayout>
  );
}