/* @refresh reload */
import { render } from 'solid-js/web'
import {
	HopeThemeConfig,
	HopeProvider,
	NotificationsProvider,
} from '@hope-ui/solid'

import App from './App'
import './index.css'

const config: HopeThemeConfig = {
	initialColorMode: 'light',
}
render(
	() => (
		<HopeProvider config={config}>
			<NotificationsProvider placement="top">
				<App />
			</NotificationsProvider>
		</HopeProvider>
	),
	document.getElementById('root') as HTMLElement
)
