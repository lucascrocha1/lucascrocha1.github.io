import { Component, h } from '@stencil/core';

@Component({
    tag: 'contact-page'
})
export class ContactPage {
    render() {
        return (
            <div>
                <menu-component></menu-component>,
                <span>teste</span>
            </div>
        )
    }
}