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

import { BsMoonStars, BsSun } from 'solid-icons/bs'
import { FiMail } from 'solid-icons/fi'
const App: Component = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<>
			<Box position="fixed" right="$3" top="$3">
				<IconButton
					mx="$2"
					onClick={() => {
						try {
							navigator.clipboard.writeText('drummerthree@gmail.com')
							notificationService.show({
								status: 'success',
								title: 'Mail copied successfully!',
							})
						} catch (error) {
							notificationService.show({ status: 'warning', title: 'Error!' })
						}
					}}
					variant="ghost"
					aria-label="Theme Toggle"
					icon={<FiMail size={24} />}
				/>
				<IconButton
					onclick={toggleColorMode}
					variant="ghost"
					aria-label="Theme Toggle"
					icon={
						colorMode() === 'light' ? (
							<BsSun size={24} />
						) : (
							<BsMoonStars size={24} />
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
