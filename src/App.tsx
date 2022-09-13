import type { Component } from 'solid-js'
import { Container, Box, IconButton, useColorMode } from '@hope-ui/solid'

import Welcome from './components/Welcome'
import FullPageTiles from './components/FullPageTiles'

import { HiOutlineMoon, HiOutlineSun } from 'solid-icons/hi'

const App: Component = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<>
			<Box position="fixed" right="$3" top="$3" zIndex={100}>
				<IconButton
					onclick={toggleColorMode}
					variant="outline"
					bgColor="$background"
					aria-label="Theme Toggle"
					icon={
						colorMode() === 'light' ? (
							<HiOutlineSun size={24} />
						) : (
							<HiOutlineMoon size={24} />
						)
					}
				/>
			</Box>
			<Container centered px="1rem">
				<Welcome />
				<FullPageTiles />
			</Container>
		</>
	)
}

export default App
