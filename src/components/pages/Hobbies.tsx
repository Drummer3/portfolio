import { Text } from '@hope-ui/solid'
import { Component } from 'solid-js'
import Tile from '../Tile'

const Hobbies: Component = () => {
	return (
		<Tile title="Hobbies">
			<Text m="$4" size="xl">
				Other than software development I have had many interests and hobbies. I
				love music as much as software so I am a drummer in few local bands.
				Also, I love traveling, biking, hiking. I love cars and overall
				challenges. I feel like challenges lets us better get to know to
				ourselves and improve our weakest points so I am never afraid to try
				something new and
			</Text>
		</Tile>
	)
}

export default Hobbies
