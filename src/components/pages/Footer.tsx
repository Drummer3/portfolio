import { Anchor, Box, Button, notificationService, Text } from '@hope-ui/solid'
import { HiOutlineDocumentDownload, HiOutlineMail } from 'solid-icons/hi'
import { Component } from 'solid-js'
import Tile from '../Tile'
import CV from '../../assets/David_Munjishvili.pdf'

const Footer: Component = () => {
	return (
		<Tile title="Do You Like Me?">
			<Text m="$4" size="xl">
				Feel free to contact me. I'm always open to new adventures and
				challenges
			</Text>
			<Box m="$4" display="flex" justifyContent="center" gap="$4">
				<Anchor external href={CV}>
					<Button
						colorScheme="primary"
						leftIcon={<HiOutlineDocumentDownload size="24px" />}
					>
						Download CV
					</Button>
				</Anchor>
				<Button
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
					colorScheme="accent"
					leftIcon={<HiOutlineMail size="24px" />}
				>
					Email Me
				</Button>
			</Box>
		</Tile>
	)
}

export default Footer
