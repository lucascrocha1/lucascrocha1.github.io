import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'menu-desktop',
    styleUrl: 'menu-desktop.scss'
})
export class MenuDesktop {
    @Prop() menu: { title: string }[];

    renderMenu(menu: { title: string }) {
        return (
            <div>
                <span>{menu.title}</span>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.menu.map(item => this.renderMenu(item))}
            </div>
        )
    }
}