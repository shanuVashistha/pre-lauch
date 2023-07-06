import Document, { Head, Html, Main, NextScript } from 'next/document';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';
import React from 'react';

const getCache = () => {
    const cache = createCache({ key: 'css', prepend: true });
    cache.compat = true;
    return cache;
};

class MyDocument extends Document {
    static async getInitialProps (ctx: any) {
        const originalRenderPage = ctx.renderPage;

        const cache = getCache();
        const { extractCriticalToChunks } = createEmotionServer(cache);

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App: any) => (props: any) =>
                    (
                        <CacheProvider value={cache}>
                            <App {...props} />
                        </CacheProvider>
                    ),
            });

        const initialProps = await Document.getInitialProps(ctx);
        const emotionStyles = extractCriticalToChunks(initialProps.html);
        const emotionStyleTags = emotionStyles.styles.map((style) => (
            <style
                data-emotion={`${style.key} ${style.ids.join(' ')}`}
                key={style.key}
                dangerouslySetInnerHTML={{ __html: style.css }}
            />
        ));

        return {
            ...initialProps,
            styles: [
                ...React.Children.toArray(initialProps.styles),
                ...emotionStyleTags,
            ],
        };
    }

    render () {
        return (
            <Html lang="en">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" href="/images/favicon.ico"/>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-DQ5QHTS0R3"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments)}
                        gtag('js', new Date());
                        gtag('config', 'G-DQ5QHTS0R3');`,
                        }}
                    ></script>
                    <meta name="cf-2fa-verify" content="234234"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
