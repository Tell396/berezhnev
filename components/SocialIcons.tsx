import { FaDev, FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa'

const links = [
    {
        Icon: FaDev,
        href: 'https://dev.to/tell396',
    },
    {
        Icon: FaGithub,
        href: 'https://github.com/Tell396',
    },
		{
				Icon: FaTelegram,
				href: 'https:/t.me/VladimirBerezhnev'
		},
    {
        Icon: FaLinkedinIn,
        href: 'https://www.linkedin.com/in/vladimir-berezhnev-53980020b',
    },
]

const SocialIcons = (): JSX.Element => (
    <div className="flex flex-row text-2xl my-6 text-gray-500 dark:text-gray-300">
        {links.map(({ Icon, href }, i) => (
            <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={`hover:text-gray-800 dark:hover:text-white transition-colors ${
                    i < links.length - 1 ? 'mr-3' : ''
                }`}
            >
                <Icon />
            </a>
        ))}
    </div>
)

export default SocialIcons
