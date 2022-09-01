import { Container } from '@hope-ui/solid'
import { Component, For } from 'solid-js'
import AboutMe from './pages/AboutMe'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Hobbies from './pages/Hobbies'
import Knowledge from './pages/Knowledge'
import Footer from './pages/Footer'

const FullPageTiles: Component = () => {
	return (
		<>
			<For
				each={[
					<AboutMe />,
					<Education />,
					<Knowledge />,
					<Experience />,
					<Hobbies />,
					<Footer />,
				]}
			>
				{(page) => (
					<Container
						minH="100vh"
						// my="50vh"
						maxW="$containerMd"
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						{page}
					</Container>
				)}
			</For>
		</>
	)
}

export default FullPageTiles
