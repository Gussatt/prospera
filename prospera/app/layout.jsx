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
			<body className={openSans.className}>{children}</body>
		</html>

	)
}
