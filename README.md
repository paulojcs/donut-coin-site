# Donut Coin — site

Landing page do Donut Coin, banco de tempo de vizinhança. Site estático, sem build:
HTML + CSS + um JS mínimo para a lista de espera.

Implementado a partir do projeto Claude Design "DONUT" (`Donut Coin Site.dc.html`).

## Rodar localmente

Abra `index.html` no navegador, ou sirva a pasta:

```
npx serve .
```

## Estrutura

```
index.html        página única
css/styles.css    estilos (tokens de cor no :root)
js/main.js        formulários da lista de espera
assets/           banners exportados do projeto de design
favicon.svg       marca (donut)
```

## Lista de espera

Os dois formulários (`hero` e `CTA`) fazem POST JSON `{ email }` para o endpoint
definido em `WAITLIST_ENDPOINT` no topo de [js/main.js](js/main.js).

**Enquanto o endpoint estiver vazio, o formulário mostra a confirmação mas não
grava o e-mail em lugar nenhum.** Configure antes de publicar — por exemplo um
form do Formspree, ou uma edge function do Supabase gravando numa tabela
`lista_espera`.

Os links "Contato" e "Privacidade" do rodapé ainda apontam para `#lista`
(placeholder, igual ao design).

## Publicar

Qualquer host estático serve: GitHub Pages, Netlify, Vercel, Cloudflare Pages.
Para GitHub Pages: Settings → Pages → Deploy from branch → `main`, pasta `/ (root)`.

## Design

- Fontes: Lora (display) + Spline Sans (texto), via Google Fonts
- Paleta em `:root` no [css/styles.css](css/styles.css)
- A marca (donut) vive como sprite SVG inline no fim do `index.html`
  (variantes `#m-brown`, `#m-cream`, `#m-yellow`)
