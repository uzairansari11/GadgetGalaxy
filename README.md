# GadgetGalaxy.com

GadgetGalaxy is a clone of an Indian online store that specializes in selling a wide range of designer mobile phone cases, laptop sleeves, and other tech accessories

## API Reference

#### Get all items

```http
  GET /Add Link Here
```

| End Point     | Type     | Description                         |
| :------------ | :------- | :---------------------------------- |
| `products`    | `string` | **Required**. All Products page     |
| `product/:id` | `string` | **Required**. Single Product page   |
| `login`       | `string` | **Required**. Login page            |
| `signup`      | `string` | **Required**. Signup page           |
| `wishlist`    | `string` | **Required**. Wishlist page         |
| `search`      | `string` | **Required**. Search page           |
| `*`           | `string` | **Required**. 404 Not Found page    |
| `cart`        | `string` | **Required**. cart page             |
| `admin`       | `string` | **Required**. Admin page            |
| `address`     | `string` | **Required**. user shipping address |

## Tech Stack

**Front-end :** React, Redux, Chakra UI, Material UI, Mantine UI, NodeJS, Express JS, Ant-design UI,

**Back-end :** JSON-Server, JSON-Web-Token, CORS, DOTENV, Bcrypt (for hashing), Mongoose, Nodemon

## Color Reference

| Color     | Hex                                                              |
| --------- | ---------------------------------------------------------------- |
| Primary   | ![#17274a](https://via.placeholder.com/10/17274a?text=+) #17274a |
| Secondary | ![#ee5e68](https://via.placeholder.com/10/ee5e68?text=+) #ee5e68 |

## Badges

[![Netlify Status](https://api.netlify.com/api/v1/badges/b05289d0-09c8-4f2a-833c-a58d8cd7a1fd/deploy-status)](https://gadgetgalaxy.netlify.app/)

[![](https://img.shields.io/github/last-commit/uzairansari11/native-order-609?logo=GadgetGalaxt&style=for-the-badge)]()

[![](https://img.shields.io/github/contributors-anon/uzairansari11/native-order-609?style=for-the-badge)]()

[![](https://img.shields.io/github/languages/count/uzairansari11/native-order-609?style=for-the-badge)]()

## Deployment

To deploy this project run

```bash
npm run build
npm run deploy
```

## Pages

-   Navbar
-   Landing page
-   Products page
-   Cart page
-   Login page
-   Signup page
-   Admin page
-   Wishlist page
-   Search page
-   Single product page
-   Payment page
-   Payment method
-   Payment successful page

## Features

-   Get Request Api call
-   Post Request Api call
-   Patch Request Api call
-   Delete Request Api call
-   User Register
-   User login
-   Admin Register
-   Admin login
-   Add product
-   Delete product
-   Edit product
-   Sorting & filter

## ScreenShots

### 1. Login
![screencapture-gadgetgalaxy-netlify-app-login-2023-04-03-12_28_00](https://user-images.githubusercontent.com/110021464/229438100-ffe29a45-5450-4a7b-843f-e81696908502.png)

### 2. Signup

![screencapture-gadgetgalaxy-netlify-app-signup-2023-04-03-12_28_53](https://user-images.githubusercontent.com/110021464/229438184-2f1d98fe-aecf-4c8e-8d12-471a9700e08c.png)

### 3. Homepage

![Home](https://user-images.githubusercontent.com/110021464/229436194-106bfbb6-5200-4bf6-830e-99c9c6fe0a86.png)

### 4. Products Page

![products](https://user-images.githubusercontent.com/110021464/229436421-2751913f-328b-4eee-8494-f5d99bdde8c6.png)

### 5. Signle Product Page

![signle](https://user-images.githubusercontent.com/110021464/229436670-915e1c35-25fd-43f7-98cd-8673ed9f6db8.png)

### 6. Cart Page

![Cart](https://user-images.githubusercontent.com/110021464/229436927-14868cb6-a297-45f5-b637-79f634f728d2.png)

### 7. Order Page

![screencapture-gadgetgalaxy-netlify-app-checkout-2023-04-03-12_31_41](https://user-images.githubusercontent.com/110021464/229437078-06a153bf-20cd-4c8e-9955-4dcace070dae.png)

### 8. Payment Page

![screencapture-gadgetgalaxy-netlify-app-checkout-2023-04-03-12_31_51](https://user-images.githubusercontent.com/110021464/229437125-9edaabfc-0a64-45e8-9ebf-778478b007db.png)


<!-- ![Screenshot (137)](https://user-images.githubusercontent.com/112754439/222426239-dee8cd63-3b68-4754-98c1-f4fe8a89e300.png)
![Screenshot (138)](https://user-images.githubusercontent.com/112754439/222426322-e903ae80-1511-4bf4-bc69-ec2e602cb8ec.png)
![Screenshot (139)](https://user-images.githubusercontent.com/112754439/222426349-a1b407d5-9ac4-423e-b235-9503142f7dc9.png) -->
### 9. Admin Login
![AdminLogin](https://user-images.githubusercontent.com/110021464/229438590-91dafcdf-c198-4470-9ce8-03d9a8505a2c.png)

### 9. Admin Signup
![AdminSignup](https://user-images.githubusercontent.com/110021464/229438692-57cbac95-19b1-47f5-9918-14f9dc8cc0f2.png)

### 9. Admin Dashboard

![screencapture-gadgetgalaxy-netlify-app-admin-2023-04-03-12_33_04](https://user-images.githubusercontent.com/110021464/229437157-4e66f48c-d1b8-4e0e-8d4b-362d74672f13.png)

### 10. Admin Products

![Screenshot 2023-04-03 124516](https://user-images.githubusercontent.com/110021464/229438386-be4852d1-6882-44e7-9d10-d00e1afb92c4.png)

### 11. Admin Edit Product

![AdminEditPrd](https://user-images.githubusercontent.com/110021464/229439290-ea803007-25e3-4e9d-927d-cbc9db87179c.png)


## Run Locally

Clone the project

```bash
  git clone https://github.com/uzairansari11/native-order-609.git
```

Go to the project directory

```bash
  cd my-native-order-609
```

Install dependencies

```bash
  npm install
  npm i axios
  npm i react-redux
  npm i redux
  npm i thunk
  npm i json-server
  npm i chakra-ui
  npm i material-UI
  npm i material-icon
  npm i bcrypt
  npm i cors
  npm i dotenv
  npm i express
  npm i jsonwebtoken
  npm i mongoose
  npm i nodemon
```

Start the server

```bash
  npm run server
  npm start
```

## Demo

Link

## FAQ

<!--#### What is a clone of Aeropostale?-->

<!-- A clone of Aeropostale is a replica or imitation of the popular clothing brand Aeropostale. It may sell similar styles of clothing or try to emulate the overall aesthetic of the brand. -->

<!--#### Is a clone of Aeropostale the same as an official Aeropostale store?-->

<!-- No, a clone of Aeropostale is not an official Aeropostale store. It is a separate business that is not affiliated with the original brand. -->

#### Is this website fully Responsive?

No, As of Now this website isn't fully Responsive. Some of our the part of this website is broken for small screen devices. Our team is working on this soon we will fix this.
