import {
	Anchor,
	Box,
	Button,
	IconButton,
	notificationService,
	Text,
} from '@hope-ui/solid'
import { HiOutlineDocumentDownload, HiOutlineMail } from 'solid-icons/hi'
import {
	FaBrandsFacebook,
	FaBrandsGithub,
	FaBrandsLinkedinIn,
} from 'solid-icons/fa'
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
			<Text textAlign="center" mt="$8">
				My Social Links:
			</Text>
			<Box m="$4" display="flex" justifyContent="center" gap="$4">
				<Anchor href="https://www.linkedin.com/in/davidmunjishvili/" external>
					<IconButton
						colorScheme="info"
						aria-label="LinkedIn Profile"
						icon={<FaBrandsLinkedinIn size="24px" />}
					/>
				</Anchor>
				<Anchor href="https://github.com/Drummer3/" external>
					<IconButton
						colorScheme="neutral"
						aria-label="GitHub Profile"
						icon={<FaBrandsGithub size="24px" />}
					/>
				</Anchor>
				<Anchor href="https://www.facebook.com/drumm3r3/" external>
					<IconButton
						colorScheme="info"
						aria-label="Facebook Profile"
						icon={<FaBrandsFacebook size="24px" />}
					/>
				</Anchor>
			</Box>
		</Tile>
	)
}

export default Footer
