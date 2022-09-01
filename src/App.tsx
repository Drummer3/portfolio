import type { Component } from 'solid-js'
import {
	Container,
	Box,
	IconButton,
	useColorMode,
	notificationService,
} from '@hope-ui/solid'

import Welcome from './components/Welcome'
import FullPageTiles from './components/FullPageTiles'

import { HiOutlineMail, HiOutlineMoon, HiOutlineSun } from 'solid-icons/hi'

const App: Component = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<>
			<Box position="fixed" right="$3" top="$3" zIndex={100}>
				<IconButton
					mx="$2"
					onClick={() => {
						try {
							navigator.clipboard.writeText('munjishvili@proton.me')
							notificationService.show({
								status: 'success',
								title: 'Mail copied successfully!',
							})
						} catch (error) {
							notificationService.show({ status: 'warning', title: 'Error!' })
						}
					}}
					variant="outline"
					bgColor="$background"
					aria-label="Copy Mail"
					icon={<HiOutlineMail size={24} />}
				/>
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
