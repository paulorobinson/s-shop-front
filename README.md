# 🛒 S-Shop

O s-shop é um sistema do tipo "carrinho de compras" que possui uma página administrativa simples para cadastro de produtos e listagem de compras.

![Home Screen](https://user-images.githubusercontent.com/61739417/193271986-9eb8cbf8-2199-439b-9d3b-d195120e0727.png)

## 📑 Descrição

O desafio consiste em criar uma aplicação front-end onde o usuário possa escolher os produtos e adicionar em uma cesta de compras. A cesta não pode ser limpa ao fazer o reload da página.

Na página da cesta deve ser obrigatório adicionar um nome para prosseguir com a compra e o usuário pode remover o produto.

## ✅ Característica da aplicação

- Usuário pode escolher os produtos e adicionar em uma cesta de compra;
- A cesta não pode ser limpa ao fazer o reload da página (localStorage);
- Na página da cesta deve ser obrigatório adicionar um nome para prosseguir com a compra;
- Consumo de API com Axios;
- Utilizado como API Fake o Json-Server.

## 👽 Libs utilizadas:

- React
- React Hooks
- Context API
- Axios
- Styled Components
- uuid
- Json Server
- Jest
- React Testing Library

## ⌨ Procedimento de instalação

```
# Clone o projeto e acesse a pasta:
$ git clone https://github.com/paulorobinson/s-shop-front.git

# Acesse a pasta
$ cd s-shop-front

# Instale as dependências:
$ npm i

# Execute o servidor Fake com Json-Server:
$ npm run json-server

# Endpoints:
http://localhost:3001/products
http://localhost:3001/shopping

# Execute o projeto:
$ npm start

# A aplicação estará disponível em seu navegador em http://localhost:3000

```

## 🖥 Desktop (screenshot):

| Admin > Produtos (http://localhost:3000/admin)                                                                           |
| ------------------------------------------------------------------------------------------------------------------------ |
| ![admin_products](https://user-images.githubusercontent.com/61739417/193269093-9001bb0b-9f7c-4f8b-b3ca-b54e051f0326.gif) |

| Home (http://localhost:3000/)                                                                                  |
| -------------------------------------------------------------------------------------------------------------- |
| ![home](https://user-images.githubusercontent.com/61739417/193269106-7da2c95b-385f-4aab-9164-b5933ff6941b.gif) |

| Cesta (http://localhost:3000/cart)                                                                             |
| -------------------------------------------------------------------------------------------------------------- |
| ![cart](https://user-images.githubusercontent.com/61739417/193269102-3549a406-daf3-4f47-9866-4f199ffbb5c2.gif) |

| Compras (http://localhost:3000/admin/shopping)                                                                     |
| ------------------------------------------------------------------------------------------------------------------ |
| ![shopping](https://user-images.githubusercontent.com/61739417/193269108-e447250f-71cc-48dd-8434-044453960b87.gif) |

### 🧔🏻 Autor

Feito por Paulo Robinson Giaciani. Entre em contato!

[![assinatura](https://user-images.githubusercontent.com/61739417/193269109-e7f95a83-7578-4e2d-b51b-aeb17bc1fca0.png)](https://www.linkedin.com/in/paulo-robinson-giaciani/)

<br>
