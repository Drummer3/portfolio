/* @refresh reload */
import { render } from 'solid-js/web'
import {
	HopeThemeConfig,
	HopeProvider,
	NotificationsProvider,
} from '@hope-ui/solid'
import Particles from 'solid-particles'

import App from './App'
import './index.css'
import { loadFull } from 'tsparticles'

const config: HopeThemeConfig = {
	initialColorMode: 'dark',
}

const particlesInit = async (main: any) => {
	// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
	// starting from v2 you can add only the features you need reducing the bundle size
	await loadFull(main)
}

render(
	() => (
		<HopeProvider config={config}>
			<NotificationsProvider placement="top">
				<Particles
					id="tsparticles"
					init={particlesInit}
					options={{
						fpsLimit: 30,
						interactivity: {
							detect_on: 'canvas',
							events: {
								onhover: {
									enable: true,
									mode: 'bubble',
									parallax: { enable: false, force: 2, smooth: 10 },
								},
								resize: true,
							},
							modes: {
								bubble: {
									distance: 200,
									duration: 2,
									opacity: 0,
									size: 0,
									speed: 3,
								},
								grab: { distance: 400, line_linked: { opacity: 1 } },
								push: { particles_nb: 4 },
								remove: { particles_nb: 2 },
								repulse: { distance: 400, duration: 0.4 },
							},
						},
						particles: {
							color: { value: '#ffffff' },
							line_linked: {
								color: '#ffffff',
								distance: 150,
								enable: false,
								opacity: 0.4,
								width: 1,
							},
							move: {
								attract: { enable: false, rotateX: 600, rotateY: 600 },
								bounce: false,
								direction: 'none',
								enable: true,
								out_mode: 'out',
								random: true,
								speed: 0.1,
								straight: false,
							},
							number: {
								density: { enable: true, value_area: 800 },
								value: 300,
							},
							opacity: {
								anim: {
									enable: true,
									opacity_min: 0.3,
									speed: 5,
									sync: false,
								},
								random: {
									enable: true,
									minimumValue: 0.3,
								},
								value: 0.6,
							},
							shape: {
								type: 'circle',
							},
							size: {
								anim: { enable: false, size_min: 0.3, speed: 4, sync: false },
								random: false,
								value: 1,
							},
						},
						retina_detect: true,
					}}
				/>
				<App />
			</NotificationsProvider>
		</HopeProvider>
	),
	document.getElementById('root') as HTMLElement
)
