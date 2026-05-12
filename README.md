# IA com Aprendizado de Máquina — IHC / IFTM Ituiutaba

Site estático (HTML + CSS + JS puro) da atividade da disciplina de **Interação Homem-Computador** do curso de **Bacharelado em Ciência da Computação** do IFTM Campus Ituiutaba.

- **Aluno:** Viccenzo de Oliveira Nunes Resende
- **Professor:** Reane Franco Goulart
- **Período:** 7º
- **Entrega:** 28/04/2026

## Conteúdo do site
1. **Hero institucional** com identidade do IFTM.
2. **Vídeo do avatar** explicando IA com Machine Learning.
3. **Sobre o curso** de Ciência da Computação.
4. **Conceitos de Machine Learning** (3 pilares).
5. **IHC aplicado ao Machine Learning** — 6 princípios de Nielsen aplicados a sistemas de IA (visibilidade, feedback, controle, explicabilidade, prevenção de erros, acessibilidade).
6. **Demonstração interativa** — Classificador de sentimento (bag-of-words em JavaScript) que aplica os princípios de IHC: feedback imediato, barra de confiança visível, explicabilidade (mostra quais palavras pesaram na decisão).
7. **Quiz de 10 perguntas** sobre Machine Learning com pontuação detalhada e revisão das respostas.

## Acessibilidade (IHC na prática)
- Skip-link para pular direto ao conteúdo.
- `aria-live` no resultado do classificador.
- `:focus-visible` com contorno destacado para navegação por teclado.
- Respeita `prefers-reduced-motion`.
- Estrutura semântica com `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`.

## Como executar
**Opção 1 — abrir direto:**  
Dê duplo clique em `index.html`.

**Opção 2 — servidor local (recomendado, p/ o vídeo carregar):**
```bash
cd static-site
python3 -m http.server 8000
```
Depois acesse <http://localhost:8000>.

## Estrutura
```
static-site/
├── index.html      # Estrutura da página
├── styles.css      # Identidade visual (verde IFTM)
├── script.js       # Quiz + classificador ML + animações
├── avatar-ia.mp4   # Vídeo do avatar
└── README.md       # Este arquivo
```
