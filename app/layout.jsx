import Script from 'next/script'
import './globals.css'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
	title: 'Prospera',
	description : 'Sua amiga nos investimentos!',
}

export default function RootLayout({ children }) {

	return (
		<html lang="pt-br">

			
			<body className={openSans.className}>{children}
			<Script src='https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js' strategy='afterInteractive'/>
			<Script src='../pubic/multislider/multislider.min.js' strategy='afterInteractive' />
			</body>
		</html>

	)
}
