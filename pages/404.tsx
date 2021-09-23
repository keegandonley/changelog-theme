import { useRouter } from 'next/router';
import { fetchSite, ISite, PrebuiltError } from '@pinpt/react';
import config from '../pinpoint.config';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

export interface NotFoundErrorProps {
	site: ISite;
}

const NotFoundError = (props: NotFoundErrorProps) => {
	const { site } = props;
	const router = useRouter();

	return (
		<PrebuiltError.NotFound
			site={site}
			handleLinkClick={() => router.push('/')}
			renderLogo={() => <Logo />}
			renderFooter={(site) => <Footer site={site} />}
		/>
	);
}

export async function getStaticProps() {
	const site = await fetchSite(config);

	return {
		props: {
			site,
		},
	};
}

export default NotFoundError;
