import React from 'react'
import { type ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import {BrowserRouter } from 'react-router-dom'

function Home (): ReactJSXElement {
    return (
        <div className="app">
            <h1>Home</h1>
        </div>
    )
}

export default Home