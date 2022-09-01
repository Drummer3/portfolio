import { Box, Text, useColorModeValue } from '@hope-ui/solid'

type TileProps = {
	title: string
	children?: any
}
let counter = 0
const Tile = (props: TileProps) => {
	const tileBackground = useColorModeValue('$background', '$neutral3')

	return (
		<Box
			w="100%"
			p="$2"
			zIndex={99}
			bg={tileBackground()}
			borderRadius="$lg"
			boxShadow="$2xl"
			borderColor="$primary9"
			borderStyle="solid"
			borderWidth="medium"
			color="$primary9"
			transitionDuration="250ms"
			cursor="default"
			_hover={{
				transform: `scale(1.02) ${
					counter++ % 2 ? 'rotate(0.25deg)' : 'rotate(-0.25deg)'
				}`,
			}}
		>
			<Text mt="$2" size="3xl" textAlign="center" fontWeight="$bold">
				{props.title}
			</Text>
			{props.children}
		</Box>
	)
}

export default Tile
