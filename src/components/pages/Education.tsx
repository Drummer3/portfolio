import { Component } from 'solid-js'
import { Text, Anchor, List, ListIcon, ListItem } from '@hope-ui/solid'
import { BsCheckLg } from 'solid-icons/bs'

import Tile from '../Tile'

const Education: Component = () => {
	return (
		<Tile title="Education">
			<Text m="$4" size="xl">
				&emsp;I went to couple of IT centres. Such as:
				<List>
					<ListItem>
						<ListIcon as={BsCheckLg} />
						<Anchor
							href="https://www.mziuri.ge/"
							external
							fontWeight="$bold"
							color="$primary11"
						>
							IT center "Mziuri"
						</Anchor>{' '}
						where I studied C++ and competitive programming for 3 years. I also
						studied python for 1 year.
					</ListItem>

					<ListItem>
						<ListIcon as={BsCheckLg} />
						<Anchor
							href="http://itvet.ge/en"
							external
							fontWeight="$bold"
							color="$primary11"
						>
							"ITVET" Academy
						</Anchor>{' '}
						where I studied php for 3 month and I realized that I was able to
						learn without help of others'.
					</ListItem>
				</List>
				<br />
				&emsp;I started my journey to learn as much frameworks and languages as
				possible, starting with{' '}
				<Anchor
					href="https://laravel.com/"
					external
					fontWeight="$bold"
					color="$primary11"
				>
					Laravel framework.
				</Anchor>
				<br />
				&emsp;I study computer science at the{' '}
				<Anchor
					href="https://ibsu.edu.ge/en/"
					external
					fontWeight="$bold"
					color="$primary11"
				>
					International Black Sea University (IBSU)
				</Anchor>
			</Text>
		</Tile>
	)
}

export default Education
