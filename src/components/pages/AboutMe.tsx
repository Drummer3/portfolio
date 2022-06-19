import { Component } from 'solid-js'
import { Text, Anchor } from '@hope-ui/solid'
import Tile from '../Tile'

const AboutMe: Component = () => {
	return (
		<Tile title="About Me">
			<Text m="$4" size="xl">
				&emsp;Hello, my name is Data (Davit) Munjishvili. I was born and raised
				in{' '}
				<Anchor
					href="https://www.google.com/maps/place/Tbilisi"
					external
					fontWeight="$bold"
					color="$primary11"
				>
					Tbilisi, Georgia 🇬🇪
				</Anchor>{' '}
				During my childhood I had access to many computers and electronic
				devices so naturally I developed high interest in them. I was always
				amazed by A.I and it's endless possibilities. I always try to learn new
				exciting sides of tech space.
			</Text>
		</Tile>
	)
}

export default AboutMe
