import { Component, h } from '@stencil/core';


@Component({
	tag: 'app-root'
})
export class AppRoot {

	render() {
		return (
			<main>
				<stencil-router historyType="hash">
					<stencil-route-switch scrollTopOffset={0}>
						<stencil-route url='/' component='home-page' exact={true} />
						<stencil-route url='/contact' component='contact-page' />
					</stencil-route-switch>
				</stencil-router>
			</main>
		);
	}
}