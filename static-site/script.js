// // Animação de entrada ao rolar
// document.addEventListener('DOMContentLoaded', () => {
//   const obs = new IntersectionObserver((entries) => {
//     entries.forEach(e => {
//       if (e.isIntersecting) {
//         e.target.style.opacity = '1';
//         e.target.style.transform = 'translateY(0)';
//         obs.unobserve(e.target);
//       }
//     });
//   }, { threshold: 0.1 });
//
//   document.querySelectorAll('.card, .concept, .video-wrapper, .video-text, .stat, .course-list li').forEach(el => {
//     el.style.opacity = '0';
//     el.style.transform = 'translateY(20px)';
//     el.style.transition = 'opacity .6s ease, transform .6s ease';
//     obs.observe(el);
//   });
//
//   initQuiz();
// });
//
// // ==== QUIZ ====
// const questions = [
//   {
//     q: "O que diferencia o Aprendizado de Máquina da programação tradicional?",
//     options: [
//       "A máquina aprende padrões a partir de dados, sem regras explícitas.",
//       "Usa apenas estruturas if/else mais complexas.",
//       "Roda exclusivamente em supercomputadores.",
//       "Não precisa de dados para funcionar."
//     ],
//     correct: 0,
//     explain: "No ML, ensinamos a máquina a aprender com exemplos — ela mesma descobre os padrões."
//   },
//   {
//     q: "Qual destes é um exemplo do dia a dia que usa Machine Learning?",
//     options: [
//       "Uma calculadora simples.",
//       "Um relógio de pulso analógico.",
//       "Recomendações da Netflix e reconhecimento facial do celular.",
//       "Um documento de texto em branco."
//     ],
//     correct: 2,
//     explain: "Recomendações personalizadas e reconhecimento facial são clássicos do ML na prática."
//   },
//   {
//     q: "O que são Redes Neurais Artificiais?",
//     options: [
//       "Cabos físicos que ligam computadores em rede.",
//       "Modelos inspirados no cérebro humano que processam dados em camadas.",
//       "Uma rede social para programadores.",
//       "Um tipo de vírus de computador."
//     ],
//     correct: 1,
//     explain: "Redes neurais imitam neurônios e processam informações em várias camadas para reconhecer padrões."
//   },
//   {
//     q: "O que acontece com um modelo de ML quando recebe mais dados de qualidade?",
//     options: [
//       "Fica mais lento e impreciso.",
//       "Esquece o que aprendeu antes.",
//       "Tende a melhorar suas previsões e decisões.",
//       "Para de funcionar automaticamente."
//     ],
//     correct: 2,
//     explain: "Mais dados de qualidade = modelo mais preciso. Por isso o ML evolui continuamente."
//   },
//   {
//     q: "Qual é a diferença entre Aprendizado Supervisionado e Não Supervisionado?",
//     options: [
//       "Supervisionado usa dados rotulados; não supervisionado encontra padrões sozinho.",
//       "Um roda online e o outro offline.",
//       "Não há diferença prática entre eles.",
//       "Supervisionado é mais lento que não supervisionado."
//     ],
//     correct: 0,
//     explain: "Supervisionado aprende com exemplos rotulados (entrada → resposta). Não supervisionado descobre agrupamentos sem rótulos."
//   },
//   {
//     q: "O que é 'overfitting' em Machine Learning?",
//     options: [
//       "Quando o modelo é rápido demais.",
//       "Quando o modelo decora os dados de treino e falha em dados novos.",
//       "Quando faltam dados para treinar.",
//       "Quando o computador superaquece."
//     ],
//     correct: 1,
//     explain: "Overfitting acontece quando o modelo memoriza ao invés de generalizar — vai bem no treino, mal no mundo real."
//   },
//   {
//     q: "Qual destas tarefas é típica de Visão Computacional?",
//     options: [
//       "Calcular juros compostos.",
//       "Imprimir um documento.",
//       "Identificar objetos e rostos em imagens.",
//       "Compilar código C++."
//     ],
//     correct: 2,
//     explain: "Visão computacional permite que máquinas 'enxerguem' — reconhecendo rostos, objetos e cenas em imagens e vídeos."
//   },
//   {
//     q: "O que é um 'dataset' em Machine Learning?",
//     options: [
//       "Um tipo de placa de vídeo.",
//       "Um conjunto de dados usado para treinar e testar modelos.",
//       "Uma linguagem de programação.",
//       "Um modelo já treinado."
//     ],
//     correct: 1,
//     explain: "Dataset é a matéria-prima do ML — os dados que alimentam o aprendizado do modelo."
//   },
//   {
//     q: "Qual área da IA é responsável por entender e gerar linguagem humana?",
//     options: [
//       "Processamento de Linguagem Natural (PLN).",
//       "Computação Gráfica.",
//       "Banco de Dados Relacional.",
//       "Sistemas Operacionais."
//     ],
//     correct: 0,
//     explain: "PLN (NLP) é o que permite chatbots, tradutores automáticos e assistentes como ChatGPT funcionarem."
//   },
//   {
//     q: "Por que a ética é importante no desenvolvimento de IA?",
//     options: [
//       "Para deixar o código mais bonito.",
//       "Não é importante, IA é neutra.",
//       "Para evitar vieses, discriminação e garantir uso responsável da tecnologia.",
//       "Apenas para cumprir burocracia."
//     ],
//     correct: 2,
//     explain: "IAs aprendem com dados humanos e podem reproduzir preconceitos. Ética garante tecnologia justa e segura para todos."
//   }
// ];
//
// let current = 0;
// let score = 0;
// let answers = [];
//
// function initQuiz() {
//   current = 0;
//   score = 0;
//   answers = [];
//   document.getElementById('quiz').style.display = 'block';
//   document.getElementById('result').style.display = 'none';
//   renderQuestion();
// }
//
// function renderQuestion() {
//   const q = questions[current];
//   document.getElementById('counter').textContent = `Pergunta ${current + 1} de ${questions.length}`;
//   document.getElementById('progressBar').style.width = `${((current) / questions.length) * 100}%`;
//   document.getElementById('question').textContent = q.q;
//   document.getElementById('feedback').textContent = '';
//   document.getElementById('feedback').className = 'quiz-feedback';
//   document.getElementById('nextBtn').style.display = 'none';
//
//   const opts = document.getElementById('options');
//   opts.innerHTML = '';
//   q.options.forEach((text, i) => {
//     const btn = document.createElement('button');
//     btn.className = 'quiz-option';
//     btn.textContent = text;
//     btn.onclick = () => selectAnswer(i, btn);
//     opts.appendChild(btn);
//   });
// }
//
// function selectAnswer(i, btn) {
//   const q = questions[current];
//   const buttons = document.querySelectorAll('.quiz-option');
//   buttons.forEach(b => b.disabled = true);
//
//   const isCorrect = i === q.correct;
//   answers.push({ q: q.q, correct: isCorrect });
//
//   const feedback = document.getElementById('feedback');
//   if (isCorrect) {
//     btn.classList.add('correct');
//     feedback.textContent = '✓ Correto! ' + q.explain;
//     feedback.className = 'quiz-feedback correct';
//     score++;
//   } else {
//     btn.classList.add('wrong');
//     buttons[q.correct].classList.add('correct');
//     feedback.textContent = '✗ Quase! ' + q.explain;
//     feedback.className = 'quiz-feedback wrong';
//   }
//
//   const nextBtn = document.getElementById('nextBtn');
//   nextBtn.style.display = 'inline-block';
//   nextBtn.textContent = current === questions.length - 1 ? 'Ver resultado →' : 'Próxima →';
//   nextBtn.onclick = nextQuestion;
// }
//
// function nextQuestion() {
//   current++;
//   if (current < questions.length) {
//     renderQuestion();
//   } else {
//     showResult();
//   }
// }
//
// function showResult() {
//   document.getElementById('quiz').style.display = 'none';
//   const result = document.getElementById('result');
//   result.style.display = 'block';
//
//   const total = questions.length;
//   const pct = Math.round((score / total) * 100);
//   document.getElementById('scoreText').innerHTML =
//     `<strong>${score}</strong> de <strong>${total}</strong> &middot; <strong>${pct}%</strong>`;
//
//   let title, msg, emoji;
//   if (pct === 100) {
//     emoji = '🏆'; title = 'Perfeito!';
//     msg = 'Você dominou os conceitos de Machine Learning. Nota máxima!';
//   } else if (pct >= 80) {
//     emoji = '🌟'; title = 'Excelente!';
//     msg = 'Conhecimento sólido em IA. Faltou pouco para o gabarito!';
//   } else if (pct >= 60) {
//     emoji = '👏'; title = 'Muito bem!';
//     msg = 'Você entendeu o essencial. Reveja os pontos errados e fixe ainda mais.';
//   } else if (pct >= 40) {
//     emoji = '📖'; title = 'No caminho certo';
//     msg = 'Reveja o vídeo do avatar e os conceitos acima para evoluir.';
//   } else {
//     emoji = '📚'; title = 'Continue estudando!';
//     msg = 'Não desanime — assista de novo e tente outra vez. Você consegue!';
//   }
//   document.getElementById('resultTitle').textContent = `${emoji} ${title}`;
//   document.getElementById('resultMsg').textContent = msg;
//
//   // Barra visual de pontuação + detalhamento
//   let extra = document.getElementById('scoreDetails');
//   if (!extra) {
//     extra = document.createElement('div');
//     extra.id = 'scoreDetails';
//     document.getElementById('result').insertBefore(
//       extra,
//       document.querySelector('#result button')
//     );
//   }
//   const reviewItems = answers.map((a, idx) =>
//     `<li class="${a.correct ? 'ok' : 'fail'}">
//        <span class="mark">${a.correct ? '✓' : '✗'}</span>
//        <span>Q${idx + 1}. ${a.q}</span>
//      </li>`
//   ).join('');
//   extra.innerHTML = `
//     <div class="score-bar-outer" aria-label="Pontuação">
//       <div class="score-bar-inner" style="width:${pct}%"></div>
//     </div>
//     <h4 class="review-title">Revisão das respostas</h4>
//     <ul class="review-list">${reviewItems}</ul>
//   `;
// }
//
// function restartQuiz() {
//   initQuiz();
// }
