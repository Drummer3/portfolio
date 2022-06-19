import { Component } from 'solid-js'
import { Box, Text, Icon } from '@hope-ui/solid'
import {
	BsMusicNoteBeamed,
	BsLaptop,
	BsCodeSlash,
	BsHeart,
} from 'solid-icons/bs'
import { SiFedora, SiReact } from 'solid-icons/si'

const Welcome: Component = () => {
	return (
		<Box
			h="100vh"
			display="flex"
			justifyContent="center"
			alignItems="center"
			flexDirection="column"
			color="$primary9"
		>
			<Icon
				pos="absolute"
				top="50%"
				left="50%"
				opacity="0.4"
				transform="translate(-11rem, -6rem) scale(2) rotate(-10deg)"
				as={SiFedora}
			/>
			<Icon
				pos="absolute"
				top="50%"
				left="50%"
				opacity="0.4"
				transform="translate(0, -9rem) scale(2)"
				as={BsHeart}
			/>
			<Icon
				pos="absolute"
				top="50%"
				left="50%"
				opacity="0.4"
				transform="translate(11rem, -6rem) scale(2) rotate(10deg)"
				as={SiReact}
			/>

			<Icon
				pos="absolute"
				top="50%"
				left="50%"
				opacity="0.4"
				transform="translate(-11rem, 4rem) scale(2) rotate(10deg)"
				as={BsLaptop}
			/>
			<Icon
				pos="absolute"
				top="50%"
				left="50%"
				opacity="0.4"
				transform="translate(0, 7rem) scale(2)"
				as={BsMusicNoteBeamed}
			/>
			<Icon
				pos="absolute"
				top="50%"
				left="50%"
				opacity="0.4"
				transform="translate(11rem, 4rem) scale(2) rotate(-10deg)"
				as={BsCodeSlash}
			/>

			<Text size="5xl">Data Munjishvili</Text>
			<Text size="xl">Full-Stack Developer</Text>
		</Box>
	)
}

export default Welcome
