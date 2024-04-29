# Documentação do Projeto News-GE

### Visão Geral
O projeto News-GE é um jornal de notícias de tecnologia apresentado em forma de feed. Ele utiliza a API Gnews News API para fornecer uma variedade de notícias relacionadas à tecnologia. Além disso, o sistema é capaz de coletar os principais artigos com base no ranking do Google News.

O projeto foi desenvolvido utilizando o framework Next.js, que é uma estrutura de aplicativo web React de código aberto que permite renderização do lado do servidor (SSR) e geração de sites estáticos para aplicativos da web.

### Demonstração
Uma versão online do projeto News-GE está disponível para visualização. Você pode acessá-lo [aqui](https://news-ge.vercel.app/).

### Funcionalidades
1. Feed de Notícias de Tecnologia

O News-GE fornece aos usuários um feed contínuo de notícias relacionadas à tecnologia, obtidas por meio da API Gnews News API. Os usuários podem navegar por uma variedade de artigos e tópicos relevantes.

2. Principais Manchetes do Google News

Além do feed de notícias padrão, o News-GE também é capaz de coletar os principais artigos com base no ranking do Google News. Isso oferece aos usuários uma visão rápida e abrangente dos eventos e notícias mais importantes no mundo da tecnologia.

3. Integração com Next.js

O projeto foi desenvolvido utilizando o Next.js, o que oferece várias vantagens, incluindo:

* Renderização do lado do servidor (SSR): Isso melhora a velocidade de carregamento da página e a experiência do usuário, especialmente em dispositivos móveis ou em conexões de internet mais lentas.

* Geração de sites estáticos: Permite pré-renderizar páginas estáticas para otimizar ainda mais o desempenho e a indexação do mecanismo de busca.

### Tecnologias Utilizadas

O projeto News-GE foi desenvolvido utilizando as seguintes tecnologias:

* Next.js: Framework React para renderização do lado do servidor e geração de sites estáticos.

* Tailwind CSS: Uma estrutura de design CSS de baixo nível que oferece uma maneira simples de construir interfaces de usuário.

* Axios: Uma biblioteca Promise baseada em HTTP para fazer solicitações HTTP do navegador ou do Node.js.

* Gnews News API: API para obtenção de notícias relacionadas à tecnologia.

### Como Instalar
Para instalar o projeto News-GE em sua máquina, siga estas etapas:

1. Clone o repositório do projeto em seu ambiente local:`

`git clone https://github.com/seu-usuario/news-ge.git`

2. Navegue até o diretório do projeto:

`cd news-ge`

3. Instale as dependências do projeto:

`npm install`

4. Inicie o servidor de desenvolvimento:

`npm run dev`

5. Abra seu navegador e acesse:
`http://localhost:3000`