# ts-project

This is my personal Typescript project creator. There are no fancy-pancy stuff
here, it simply initializes a TS project in the way I would do it manually.

- This will **NOT** be a NPM installable package
- This will **NOT** try to meet any arbitrary needs
- This **IS** simply created to fulfill some of my peronal needs :D

But if you find it useful, feel free to use it as you wish. And I **WILL** merge
pull requests if they do not deviate too much from the goal of this _program_.

## Install

_(This program probably doesn't work on Windows)_

Clone this repo and simply run `yarn link`. Now you should have the
`ts-project` command available.

## Usage

Simply run `ts-project` in the directory where you wish to initialize a new
project.

## What happens?

`ts-project` will fisrt run `yarn init -y`, so you have to manually add or
change some properties in `package.json` when all is done.

Then it will run `yarn add --dev` with the following packages:

- `@types/jest`
- `@types/node`
- `@types/source-map-support`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-config-prettier`
- `eslint-plugin-prettier`
- `eslint-plugin-react`
- `eslint`
- `husky`
- `jest`
- `prettier`
- `pretty-quick`
- `rimraf`
- `ts-jest`
- `typescript`

Followd by `yarn add` with the following packages:

- `source-map-support`
- `tslib`

## Project structure

`ts-project` will generate the following structure

```
Project root
  |
  |-- __tests__
  |   |
  |   |-- index.test.ts
  |
  |-- dist
  |   |
  |   |-- (generated files from initial build)
  |
  |-- jest
  |   |
  |   |-- globalSetup.js
  |   |-- globalTeardown.js
  |
  |-- node_modules
  |   |
  |   |-- (shit load of directories)
  |
  |-- package.json
  |
  |-- src
  |   |
  |   |-- index.ts
  |
  |-- .eslintignore
  |-- .eslintrc.js
  |-- .gitignore
  |-- .prettierignore
  |-- .prettierrc.js
  |-- jest.config.js
  |-- tsconfig.json
  |-- tsconfig.test.json
  |-- yarn.lock
```

And that's pretty much it. There are some entries in the `scripts` property in
`package.json` as well which might be useful.
