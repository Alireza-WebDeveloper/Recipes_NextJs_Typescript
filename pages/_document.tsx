import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../MuiTheme/theme/createEmotionCache';
import { Stack } from '@mui/material';

export default class MyDocument extends Document<{ emotionStyleTags: any }> {
  render() {
    return (
      <Html lang="fa" dir="rtl">
        <Head>{this.props.emotionStyleTags}</Head>
        <body>
          <Main />
          <Stack component="section" id="Favorite__Notification"></Stack>
          <NextScript />
        </body>
      </Html>
    );
  }
}
MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
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
    emotionStyleTags,
  };
};
