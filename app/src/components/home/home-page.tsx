import { Component, h } from '@stencil/core';

@Component({
    tag: 'home-page'
})
export class HomePage {
    render() {
        return (
            <div>
                <menu-component></menu-component>
            </div>
        )
    }
}