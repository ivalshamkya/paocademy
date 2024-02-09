import { Head } from '@inertiajs/react';

interface Props {
    title: string;
}

function MetaHead({ title } : Props) {
    return (
        <Head>
            <title>{title}</title>

            <meta name="title" content="Meta Tags — Preview, Edit and Generate" />
            <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://metatags.io/" />
            <meta property="og:title" content="Meta Tags — Preview, Edit and Generate" />
            <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
            <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io/" />
            <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate" />
            <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!" />
            <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />

        </Head>
    );
}


export default MetaHead;
