import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react'

test('render home page', () => {
    const element = screen.findByText('Phone list');
    expect(element).toBeDefined();
})