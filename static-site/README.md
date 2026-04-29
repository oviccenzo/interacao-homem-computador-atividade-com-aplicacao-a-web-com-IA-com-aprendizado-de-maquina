# Site IHC – IFTM | Machine Learning

Trabalho da disciplina de **Interação Humano-Computador (IHC)** do curso de **Bacharelado em Ciência da Computação** do **Instituto Federal do Triângulo Mineiro (IFTM)**.

Site estático (HTML + CSS + JavaScript puro) que apresenta:

- 🎓 Informações do **IFTM** e do curso de Ciência da Computação
- 🤖 Conceitos de **Inteligência Artificial** e **Machine Learning**
- 🎥 Vídeo com **avatar de IA** explicando o tema (`avatar-ia.mp4`)
- 🧠 **Quiz interativo** com 10 perguntas, pontuação, porcentagem, barra visual e revisão das respostas

---

## 📁 Estrutura

```
static-site/
├── index.html       # Estrutura da página
├── styles.css       # Visual (identidade IFTM – verde institucional)
├── script.js        # Animações + quiz com 10 perguntas
├── avatar-ia.mp4    # Vídeo do avatar explicando ML
└── README.md
```

---

## ▶️ Como executar

Não precisa instalar nada — é HTML/CSS/JS puro.

### Opção 1 — Abrir direto no navegador
1. Descompacte o arquivo `iftm-ihc-site-html.zip`
2. Dê duplo clique em **`index.html`**
3. Pronto! Funciona em qualquer navegador moderno (Chrome, Firefox, Edge, Safari)

> 💡 Caso o vídeo não toque ao abrir direto pelo arquivo, sirva a pasta com um servidor local (veja Opção 2).

### Opção 2 — Servidor local (recomendado para o vídeo)
Com Python instalado:
```bash
cd static-site
python -m http.server 8000
```
Depois acesse: **http://localhost:8000**

Ou com Node:
```bash
npx serve static-site
```

---

## 🧠 Sobre o Quiz

- **10 perguntas** sobre Machine Learning, Redes Neurais, NLP, Visão Computacional e Ética em IA
- Feedback imediato a cada resposta com explicação
- Barra de progresso durante o quiz
- Resultado final com:
  - Pontuação (acertos / total)
  - Porcentagem de aproveitamento
  - Barra visual animada
  - Mensagem personalizada conforme desempenho
  - Revisão pergunta a pergunta (✓ acertos / ✗ erros)
- Botão "Refazer quiz" para tentar novamente

---

## 🎨 Identidade Visual

Cores institucionais do IFTM:
- Verde primário: `#0a4d2e`
- Verde secundário: `#1f9d55`
- Tipografia limpa e responsiva (mobile-first)

---

## 👤 Autoria

- **Aluno:** [seu nome]
- **Disciplina:** Interação Humano-Computador (IHC)
- **Curso:** Bacharelado em Ciência da Computação
- **Instituição:** IFTM – Instituto Federal do Triângulo Mineiro
- **Ano:** 2026

---

## 📜 Licença

Projeto acadêmico – uso educacional.
