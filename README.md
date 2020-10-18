# 📚 NextLevelWeek-3
A NLW é um evento da **Rocketseat** com o foco em levar conhecimento sobre programação para qualquer pessoa, iniciante ou já com algum conhecimento, de forma intensiva durante uma semana, juntamente com lives ricas de conhecimento e dicas para quem quer entrar no mercado de trabalho na área da tecnologia.
## Projeto Happy
O projeto da edição 3 da NLW foi o "Happy", uma plataforma que busca conectar as pessoas com Instituições de Acolhimento Infantil, trazendo amor e alegria tanto para as crianças presentes nas casas, como às pessoas que as visitam.
### Como funciona?
Ao entrar no site, após a página inicial, entrará um mapa com todos os Institutos cadastrados, onde o usuário pode escolher e entrar em algum para obter informações como fotos, o funcionamento, horários, whatsapp para marcar visitas e mais.
Também existe a possibilidade de cadastrar novos Institutos, preenchendo um formulário com as principais informações e fotos.
## 📝 Aprendizado
Considerando que foi meu primeiro contato com o desenvolvimento de uma aplicação completa, do front-end ao back-end, tendo um conhecimento prévio apenas de HTML e lógica básica de programação, obtive resultados incríveis de aprendizado, otimizando meu conhecimento nas diversas fases do desenvolvimento.
### ⚙️ Ferramentas utilizadas
* HTML5
* CSS3
* Javascript
* Node.js
## ✔️ Desafio
O educador da Rocketseat Mayk Brito, na última aula, deixou um desafio de descobrir um método mais simplificado da instrução `if` com o **operador condicional (ternário)** e com algumas pesquisas, descobri o método e abaixo segue a substituição:
```
if(orphanage.open_on_weekends == "0") {
   orphanage.open_on_weekends = false
} else {
   orphanage.open_on_weekends = true
}
```
para:

`orphanage.open_on_weekends == 0 ? orphanage.open_on_weekends = false : orphanage.open_on_weekends = true;`
## ✏️ Mudanças na aplicação
Como antes do curso meu conhecimento era o básico de HTML5, obtive segurança em realizar pequenas mudanças de HTML e CSS, que apesar de não ser muito, para mim, foi um grande passo ter conseguido adicionar uma funcionalidade importante dentro do formulário para adicionar uma Instituição, que além de poder adicionar o local clicando dentro do mapa, poderá também escrever o endereço e automaticamente o ícone aparecerá no mapa. É uma funcionalidade essencial, pois as vezes fica difícil procurar no mapa o local exato que encontra-se a Instituição.

Os códigos adicionais em front-end ficou:
* No create-orphanage.hbs:
```
<div class="map-container">
              <div id="mapid"></div>
              <input type="hidden" name="lat">
              <input type="hidden" name="lng">
              <footer>
                <p href="#" id="select-point">
                  Clique no mapa para adicionar a localização
                </p>
                <p>
                  ou escreva o endereço desejado aqui:
                </p>
                <div class ="input-adress">
                  <input id="adress" name="adress">
                </div>              
              </footer>
            </div>
```
* No map.css:
```
.input-adress input {
      width: 70%;
      background: #f5f8fa;
      border: 1px dashed #0089a5;
      border-radius: 2rem;
      color: #5c8599;
      outline: none;
      margin-top: 1rem;
      margin-bottom: 1rem;
  }
```
## Conclusão
A semana NLW foi extremamente proveitosa, otimizando meus estudos focados em Front-end, adquirindo conhecimentos mais a fundo de HTML, CSS, Javascript, Node.js dentre outras extensões e ferramentas durante o curso. A ideia da aplicação é sensacional, o layout ficou com um design incrível, bem prático e funcional e todo o esforço dessa semana valeu a pena. O professor Mayk Brito tem uma ótima metodologia de ensino e espero evoluir ainda mais com os próximos cursos!
