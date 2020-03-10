
## Note about  Clickable Element
First off and generally, in my opinion, this code just contains an extra and useless abstraction that causes:
- Complexity
- Difficult to understand

specifically, form the __functional programming__ view, it's better we follow pure functionality principle, In __React.js__ programming literature, it means: `decoupling into some different components each of which with specific task and features` that yield into: 
- Strong Modularity  
- Readability  

It has also some problems:
- It passes some property to elements that will never match with them (For instance - sending disable for link element)
- The way of passing id to elements are not standard
- importing ../../../../util is not recommended as  a best practice


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
