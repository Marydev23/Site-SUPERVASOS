# 🪴 Site Super Vasos

Site institucional para uma fábrica de vasos, com catálogo de produtos, páginas de políticas da loja e contato direto por WhatsApp e formulário.

🔗 **Site no ar:** [supervasos.com.br](https://supervasos.com.br/)

---

## 🚀 Funcionalidades
<h1 align="center">🪴 Super Vasos</h1>

<p align="center">
  Site institucional e catálogo online desenvolvido para uma fábrica de vasos real.<br/>
  <b>Projeto freelance para cliente · em produção com domínio próprio.</b>
</p>

<p align="center">
  <a href="https://supervasos.com.br/"><img src="https://img.shields.io/badge/🌐_Ver_site_no_ar-supervasos.com.br-2e7d32?style=for-the-badge" alt="Site no ar"/></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/GitHub_Pages-222222?style=flat&logo=githubpages&logoColor=white" alt="GitHub Pages"/>
  <img src="https://img.shields.io/badge/Status-Em_produção-success?style=flat" alt="Status"/>
</p>

---

## 📌 Sobre o projeto

A **Super Vasos** é uma fábrica de vasos de cimento que também revende vasos de barro e produtos de jardinagem. O cliente precisava de uma presença online para **apresentar o catálogo** e **facilitar o contato dos compradores**, principalmente pelo WhatsApp.

Este repositório contém o site completo, que **está publicado e sendo usado pelo cliente**: <https://supervasos.com.br/>

> 💼 **Não é um projeto de estudo.** Foi um trabalho real: levantei o que o cliente precisava, desenvolvi o site do zero, configurei o domínio próprio e coloquei no ar.

## 🖼️ Preview

<!-- Troque pelos seus prints. Sugestão: crie a pasta /docs e salve as imagens lá. -->
<p align="center">
  <img src="docs/preview-desktop.png" alt="Página inicial no desktop" width="80%"/>
</p>
<p align="center">
  <img src="docs/preview-mobile.png" alt="Site no celular" width="30%"/>
</p>

## ✨ Funcionalidades

- **Catálogo por categoria**: vasos de cimento (70+ modelos), vasos de barro (~30 modelos) e produtos para jardinagem (terras, seixos, casca de pinus e outros).
- **Filtro por categoria** na lateral do catálogo, feito com JavaScript puro (sem bibliotecas).
- **Integração com WhatsApp**: botão no menu e botão flutuante em todas as páginas, levando o cliente direto para a conversa com a fábrica.
- **Formulário de contato** que envia mensagem para o e-mail da empresa, sem back-end próprio (via FormSubmit).
- **Mapa do Google Maps** incorporado, mostrando a localização da fábrica.
- **Layout responsivo** com menu hambúrguer no celular.
- **SEO básico**: `title`, `meta description` e `keywords` na página inicial.
- **Páginas institucionais**: Sobre nós, Política de Venda, Política de Frete e Política de Troca e Devolução.

## 🛠️ Tecnologias e decisões

| Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica das páginas |
| **CSS3** | Layout com Flexbox/Grid, responsividade com media queries |
| **JavaScript (vanilla)** | Filtro do catálogo e menu mobile |
| **Font Awesome** | Ícones (redes sociais, WhatsApp, telefone) |
| **FormSubmit** | Envio do formulário de contato por e-mail |
| **Google Maps Embed** | Localização da fábrica |
| **GitHub Pages + CNAME** | Hospedagem gratuita com domínio próprio (`supervasos.com.br`) |

**Por que sem framework?** O site é estático e o principal objetivo do cliente é mostrar produtos e receber contatos. HTML, CSS e JS puros deixam o site leve, barato de hospedar e fácil de manter.

## 📁 Estrutura do projeto

```
Site-SUPERVASOS/
├── index.html                    # Página inicial
├── sobre.html                    # Sobre a empresa
├── contato.html                  # Formulário, mapa e contatos
├── catalogovasoscimento.html     # Catálogo de vasos de cimento
├── catalogovasosbarro.html       # Catálogo de vasos de barro
├── produtosvariavel.html         # Produtos para jardinagem
├── carrossel.js                  # Filtro do catálogo e menu hambúrguer
├── styles/
│   └── style.css                 # Estilos do site
├── rodape/                       # Políticas de venda, frete e troca
├── imagens/                      # Banners, logotipos e fotos dos produtos
└── CNAME                         # Domínio personalizado do GitHub Pages
```

## 🚀 Como rodar localmente

Não precisa instalar nada. Clone o repositório e abra no navegador:

```bash
git clone https://github.com/SEU-USUARIO/Site-SUPERVASOS.git
cd Site-SUPERVASOS
```

Depois, abra o `index.html` no navegador, ou use a extensão **Live Server** do VS Code. Se preferir um servidor local pelo terminal:

```bash
python -m http.server 5501
# acesse http://localhost:5501
```

## 🌍 Deploy

O site é publicado com o **GitHub Pages** direto da branch `main`. O arquivo `CNAME` aponta para o domínio `supervasos.com.br`, que foi configurado por mim no registro DNS.

## 🔭 Próximos passos

Melhorias que já mapeei para as próximas versões:

- [ ] Gerar os cards do catálogo a partir de um arquivo JSON, em vez de HTML repetido
- [ ] Otimizar imagens (converter para WebP e comprimir os banners) para carregar mais rápido
- [ ] Melhorar SEO e acessibilidade nas páginas internas
- [ ] Adicionar aviso de indisponibilidade de produtos

## 👤 Autor

**SEU NOME**
Desenvolvedor Front-end

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/SEU-PERFIL)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/SEU-USUARIO)
[![E-mail](https://img.shields.io/badge/E--mail-D14836?style=flat&logo=gmail&logoColor=white)](mailto:SEU-EMAIL@exemplo.com)

---

<p align="center">Feito com dedicação para um cliente real. 🌱</p>
- **Página inicial** com apresentação da fábrica e destaques dos produtos
- **Catálogos separados** por material: vasos de cimento, vasos de barro e produtos variados
- **Filtro por categoria** nos catálogos, feito com JavaScript
- **Menu responsivo** com botão hambúrguer para celular
- **Contato por WhatsApp**, com botões em todas as páginas
- **Formulário de contato** com envio por e-mail (via FormSubmit)
- **Páginas institucionais:** Sobre nós, Política de Frete, Política de Venda (atacado e varejo) e Política de Troca e Devolução
- **Layout adaptado** para computador e celular

---

## 🛠️ Tecnologias

- **HTML5:** estrutura semântica das páginas
- **CSS3:** layout, responsividade e estilo
- **JavaScript:** filtro de produtos e menu hambúrguer
- **Font Awesome:** ícones
- **FormSubmit:** envio do formulário de contato
- **GitHub Pages:** hospedagem, com domínio próprio

---

## 📁 Estrutura do projeto

```
Site-SUPERVASOS/
├── index.html                    # Página inicial
├── sobre.html                    # Sobre nós
├── contato.html                  # Formulário de contato
├── catalogovasoscimento.html     # Catálogo de vasos de cimento
├── catalogovasosbarro.html       # Catálogo de vasos de barro
├── produtosvariavel.html         # Produtos variados
├── carrossel.js                  # Filtro por categoria e menu hambúrguer
├── styles/
│   └── style.css                 # Estilos do site
├── rodape/                       # Páginas de políticas da loja
├── imagens/                      # Imagens dos produtos e banners
└── CNAME                         # Domínio personalizado
```

---

## ▶️ Como executar localmente

Não precisa instalar nada. O projeto é estático.

```bash
git clone https://github.com/Marydev23/Site-SUPERVASOS.git
cd Site-SUPERVASOS
```

Depois abra o arquivo `index.html` no navegador. Se preferir, use a extensão **Live Server** do VS Code, que atualiza a página sozinha a cada alteração.

---

## 🚧 Próximos passos

- Otimizar as imagens dos banners para o site carregar mais rápido
- Finalizar o filtro por categoria no catálogo de vasos de cimento
- Adicionar mapa de localização na página de contato

---

## 👩‍💻 Autora

**Marilza de Souza Santos**
[LinkedIn](https://www.linkedin.com/in/marilzadesouza) · [GitHub](https://github.com/Marydev23)
