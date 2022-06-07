import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('render single todo', ()=>{
    const todo = {
        text: 'Do morning exercise',
        done: false
    }

    render(<Todo todo={todo} onClickComplete={()=>{}} onClickDelete={()=>{}}></Todo>)
    const element = screen.getByText('Do morning exercise');
    expect(element).toBeDefined();
})