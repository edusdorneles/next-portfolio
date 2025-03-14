import Image from 'next/image';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Home() {
	return (
		<main className='bg-white dark:bg-black min-h-screen w-full flex justify-center items-center h-screen'>
			<div className='flex flex-col items-center gap-4 w-full'>
				<Image width={160} height={160} alt='Foto de perfil' className='rounded-full' src='/images/profile.jpg' />

				<section className='grid justify-items-center grid-cols-3 gap-4'>
					<a
						target='_blank'
						href='https://linkedin.com/in/edusdorneles'
						aria-label='Link que redireciona para o LinkedIn'
						className='bg-slate-200 transition-all dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 cursor-pointer w-full p-3 rounded-xl flex flex-row items-center justify-between'
						rel='noreferrer'
					>
						<FaLinkedin className='text-zinc-800 dark:text-white text-3xl' />
					</a>

					<a
						target='_blank'
						href='https://github.com/edusdorneles'
						aria-label='Link que redireciona para o GitHub'
						className='bg-slate-200 transition-all dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 cursor-pointer w-full p-3 rounded-xl flex flex-row items-center justify-between'
						rel='noreferrer'
					>
						<FaGithub className='text-zinc-800 dark:text-white text-3xl' />
					</a>

					<a
						target='_blank'
						href='https://www.instagram.com/edusdorneles/'
						aria-label='Link que redireciona para o Instagram'
						className='bg-slate-200 transition-all dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 cursor-pointer w-full p-3 rounded-xl flex flex-row items-center justify-between'
						rel='noreferrer'
					>
						<FaInstagram className='text-zinc-800 dark:text-white text-3xl' />
					</a>
				</section>

				<section className='max-w-96 px-4 md:px-0 flex flex-col items-center justify-center gap-2'>
					<h1 className='text-zinc-800 dark:text-white text-xl text-medium'>Eduardo Dorneles</h1>

					<p className='text-zinc-500 dark:text-slate-400 text-sm'>Tech Lead | Software Engineer</p>

					<p className='text-center text-zinc-800 dark:text-white'>
						Na área há mais de 5 anos, trabalhei em projetos nos quais impactam mais de 2 milhões de clientes.
					</p>
				</section>
			</div>
		</main>
	);
}
