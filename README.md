<h3 align="center">
  <div style="display: flex; align-items: center; gap: 30px" align="center">
    <img src="./.github/prisma.png" style="width: 100px" alt="Prisma ORM" />
    <img src="./.github/sequelize.png" style="width: 100px" alt="Prisma ORM" />
    <img src="./.github/typeorm.png" style="width: 100px" alt="Prisma ORM" />
  </div>
  <br><br>
  <b>Prisma, Sequelize and TypeORM - Back-end authentication with all major ORM available in the market</b>
  <br>
</h3>

# Index

- [About](#about)
- [Functionalities](#functionalities)
- [Technologies](#technologies)
- [How to use](#how-to-use)

<a id="about"></a>

## :bookmark: About

This project is a boiler-plate for further developing a backend api with authentication, made with bcrypt and JWT.
Choose the ORM of your liking, and start coding. Want to start a project with prisma ? (i recommend to) no worries, just clone and use the contents from the prisma folder, so you don't need to worry about authentication and JWT token generation part.

Just use the authMiddleware on your express routes to protect that route, then the ID of the current user will be available through express ```req.userId```.


<a id="functionalities"></a>

## :fire: Functionalities

- ### **Register**

  - Register User with: Email and Password.
  - On Register: check if user alreay exists (unique email).
  - On Register: check if user inputed email correctly and password.
  - Verification of the inputed data using Zod library.
  - Hash user password using bcryptjs.

- ### **Authenticate**

  - Authenticate user with Email and Password.
  - On authenticate: check if user is valid.
  - On authenticate: check if password matches with hash.
  - Receive token as response containing: id, email.

- ### **Middleware**

  - Middleware check if has a token and if is a valid JWT signed by a secret on the .env file present in the API.

<a id="technologies"></a>

## :rocket: Technologies

The project is made with:

- [TypeScript](https://www.typescriptlang.org/)
- [JWT](https://jwt.io/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [TypeORM](https://typeorm.io/)
- [Prisma](https://www.prisma.io/)
- [Sequelize](https://sequelize.org/)

<a id="how-to-use"></a>

## :fire: How to Use

- ### **Dependencies**

  - Is **required** to install **[Node.js](https://nodejs.org/en/)**
  - In order to run scripts and install dependencies you need to install a **package manager**, like NPM.
  <br>

1. First step, clone this github repository:

```sh
  $ git clone https://github.com/lamongabrie/jwt-authentication-orm.git
```

2. Choose your ORM of preference, then open the project folder:
```
cd <orm_name>
```

3. Add variables on `.env` file:

The **api** requires some environment variables stored inside the `.env` file, please follow the .example.env file accordingly.


4. Configure the migrations for the choosen ORM to connect the database.

### Sequelize

```
 npx sequelize-cli db:migrate     
```

### Prisma

```
 npx prisma migrate dev
```

### TypeORM

```
 npx prisma migrate dev
```

4. Run the application:

```sh
  # Install dependencies.
  $ npm install

  ## Start the API
  $ npm run dev
```