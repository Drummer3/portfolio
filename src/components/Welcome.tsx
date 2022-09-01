import { Component } from 'solid-js'
import { Box, Text } from '@hope-ui/solid'

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
			<Text size="5xl" textAlign="center">
				David Munjishvili
			</Text>
			<Text size="xl">Software Engineer</Text>
		</Box>
	)
}

export default Welcome
