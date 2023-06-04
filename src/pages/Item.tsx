import React from 'react'
import { type ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import {BrowserRouter } from 'react-router-dom'

function Item (): ReactJSXElement {
    return (
        <div className="app">
            <h1>Item</h1>
        </div>
    )
}

export default Item