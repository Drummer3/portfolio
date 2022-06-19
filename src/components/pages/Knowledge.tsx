import { Component } from 'solid-js'
import { UnorderedList, ListItem, Text } from '@hope-ui/solid'
import Tile from '../Tile'

const Knowledge: Component = () => {
	return (
		<Tile title="Knowledge">
			<Text m="$4" size="xl">
				<UnorderedList>
					<ListItem>C, C++</ListItem>
					<ListItem>Python (flask, bs4, pyqt5, tkinter and etc.)</ListItem>
					<ListItem>php (Laravel)</ListItem>
					<ListItem>Dart (Flutter)</ListItem>
					<ListItem>
						JavaScript (ReactJS, VueJS, SolidJS, alpineJS, next, nuxt, express,
						socket.io)
					</ListItem>
					<ListItem>CSS (scss, postCSS, tailwind)</ListItem>
				</UnorderedList>
			</Text>
		</Tile>
	)
}

export default Knowledge
