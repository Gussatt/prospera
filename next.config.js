/** @type {import('next').NextConfig} */
const nextConfig = {

	modularizeImports: {
		'react-icons/bi/?(((\\w*)?/?)*)': {
			transform: 'react-icons/bi/{{ matches.[1] }}/{{member}}'
		}
	},
}

module.exports = nextConfig;
