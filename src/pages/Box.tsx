import React from 'react'
import { type ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import {BrowserRouter } from 'react-router-dom'

function Box (): ReactJSXElement {
    return (
        <div className="app">
            <h1>Box</h1>
        </div>
    )
}

export default Box