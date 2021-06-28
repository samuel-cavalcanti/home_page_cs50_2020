# HomePage web app

Deveria ser uma aplicação web simples, onde deveria ser utilizado apenas html, css e javascript,
por algum motivo que não lembro, criei um command line application __CLI__ em python, que cria web components com ou sem bootstrap
inspirado no angular 2.(CLI muito mal feito).

A home page foi construída com 6 web components:

- about-me

- android-track

- games-track

- ios-track

- nav-bar

- web-track

Cada componente tem um arquivo __html__ e um arquivo __javascript__.
Para o usar o CLI, tenha python 3 instalado.

exemplo de uso do CLI:

```sh
./createWebComponet.py new-component true # o true é para criar com bootstrap

./createWebComponet.py new-component # cria sem o bootstrap
```

### Para Samuel Do Futuro

Se for criar mais um framework front-end para web, por-favor não usar javascript.

Crie um CLI descente, de preferência use __rust__.

Resolver o problema da testagem de UI de maneira satisfatória.

Não esquecer dos testes.

Mecanísmos para impedir ou dificultar a inserção da regra de negócio na view.