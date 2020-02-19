import { Component, h, State } from '@stencil/core';

@Component({
    tag: 'menu-component'
})
export class MenuComponent {
    @State() menu = [
        {
            title: 'Sobre',
        },
        {
            title: 'Contato',
        },
    ];

    render() {
        return (
            <div>
                <menu-desktop menu={this.menu}></menu-desktop>
            </div >
        )
    }
}