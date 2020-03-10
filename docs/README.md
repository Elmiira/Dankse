
## Note about  Clickable Element
First off and generally, in my opinion, this code just contains an extra and useless arbitration layer that causes:1- Complexity2- Difficult to understand
specifically, form the __functional programming__ view, it's better we follow pure functionality, In __React.js__ programming literature, it means: decoupled into some different components each with specific task and features that yield into: 1- Modularity  2- Readability  

It has also some problems:
- It passes some property to elements that will never match with them (For instance - sending disable for link element)
- The way of passing id to elements are not standard
- importing ../../../../util is not best practice


## Description

This project was bootstrapped with [React Boilerplate](https://github.com/react-boilerplate/react-boilerplate).


## Available Scripts

```bash
# development
npm  run start

```
Alternatively you may use `yarn`:

```sh
yarn run start
```
