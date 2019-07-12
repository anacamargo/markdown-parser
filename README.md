# Extrai links de arquivo Markdown
Projeto proposta pela Laboratoria durante o bootcamp de 2019.

Esta biblioteca receba uma string (em formato Markdown) e devolve um vetor de objetos com todos os links encontrados.

Essa versão abrange os seguintes tipos de links markdown: 

``` markdown
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a relative reference to a repository file](../blob/master/LICENSE)
```

## Como instalar:
```bash
$ npm install gtech-markdown-parser
```

## Como utilizar:
```javascript
const MarkdownParser = require('gtech-markdown-parser');
const markdownString = `[I'm an inline-style link](https://www.google.com)`;
const links = MarkdownParser.getLinksFromMd(markdownString);

//return [ { href: 'https://www.google.com', 
//           text: 'I\'m an inline-style link' } ]

```



