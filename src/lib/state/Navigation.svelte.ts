import { Home, CircleUserRound, Star } from 'lucide-svelte';
import { SiGithub, SiLinkedin } from '@icons-pack/svelte-simple-icons';
import { getContext, setContext } from 'svelte';

export class Navigation {
    static readonly KEY = 'NAV';

    data = $state([
        {
            id: '/',
            icon: Home,
            title: 'Home',
            color: 'bg-blue-500',
            category: 'general'
        },
        {
            id: '/my-skills',
            icon: Star,
            title: 'My Skills',
            color: 'bg-yellow-500',
            category: 'general'
        },
        {
            id: '/about-me',
            icon: CircleUserRound,
            title: 'About Me',
            color: 'bg-green-500',
            category: 'general'
        },
        {
            id: 'https://github.com/elias-knodel',
            icon: SiGithub,
            title: 'Github',
            color: 'bg-[#181717]',
            category: 'socials'
        },
        {
            id: 'https://www.linkedin.com/in/elias-knodel-4766bb17a/',
            icon: SiLinkedin,
            title: 'Linkedin',
            color: 'bg-[#0077B5]',
            category: 'socials'
        }
    ]);
}

const NAV_KEY = Symbol(Navigation.KEY);

export function setNavigationContext() {
    return setContext(NAV_KEY, new Navigation());
}

export function getNavigationContext() {
    return getContext<ReturnType<typeof setNavigationContext>>(NAV_KEY);
}
