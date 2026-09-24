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

## ✨ Funcionalidades

- **Página inicial** com apresentação da fábrica e destaques dos produtos
- **Catálogos separados por material:** vasos de cimento (70+ modelos), vasos de barro (~30 modelos) e produtos para jardinagem (terras, seixos, casca de pinus e outros)
- **Filtro por categoria** na lateral do catálogo, feito com JavaScript puro (sem bibliotecas)
- **Integração com WhatsApp:** botão no menu e botão flutuante, levando o cliente direto para a conversa com a fábrica
- **Formulário de contato** que envia a mensagem para o e-mail da empresa, sem back-end próprio (via FormSubmit)
- **Mapa do Google Maps** incorporado, mostrando a localização da fábrica
- **Layout responsivo**, adaptado para computador e celular, com menu hambúrguer
- **SEO básico:** `title`, `meta description` e `keywords` na página inicial
- **Páginas institucionais:** Sobre nós, Política de Venda (atacado e varejo), Política de Frete e Política de Troca e Devolução

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
├── sobre.html                    # Sobre nós
├── contato.html                  # Formulário, mapa e contatos
├── catalogovasoscimento.html     # Catálogo de vasos de cimento
├── catalogovasosbarro.html       # Catálogo de vasos de barro
├── produtosvariavel.html         # Produtos para jardinagem
├── carrossel.js                  # Filtro por categoria e menu hambúrguer
├── styles/
│   └── style.css                 # Estilos do site
├── rodape/                       # Políticas de venda, frete e troca
├── imagens/                      # Banners, logotipos e fotos dos produtos
└── CNAME                         # Domínio personalizado do GitHub Pages
```

## ▶️ Como executar localmente

Não precisa instalar nada. O projeto é estático.

```bash
git clone https://github.com/Marydev23/Site-SUPERVASOS.git
cd Site-SUPERVASOS
```

Depois abra o arquivo `index.html` no navegador. Se preferir, use a extensão **Live Server** do VS Code, que atualiza a página sozinha a cada alteração. Também dá para subir um servidor local pelo terminal:

```bash
python -m http.server 5501
# acesse http://localhost:5501
```

## 🌍 Deploy

O site é publicado com o **GitHub Pages** direto da branch `main`. O arquivo `CNAME` aponta para o domínio `supervasos.com.br`, que foi configurado por mim no registro DNS.



## 👩‍💻 Autora

**Marilza de Souza Santos**


[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marilzadesouza)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/Marydev23)

---

<p align="center">Feito com dedicação para um cliente real. 🌱</p>
