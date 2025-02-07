<a href="https://github.com/whosramoss/nextjs-kanban">
  <img alt="nextjs-kanban" src="./public/thumbnail.png" />
  <h1 align="center">Nextjs kanban</h1>
</a>

<p align="center">
  Flexible and interactive board for organizing workflows
</p>

<div align="center">
  <img src="https://img.shields.io/badge/next.js-242424?style=for-the-badge&logo=nextdotjs" alt="Website">
  <img src="https://img.shields.io/badge/React-563D7C?style=for-the-badge&logo=React&logoColor=fff" alt="React">
  <img src="https://img.shields.io/badge/Tailwind-FEFEFE?style=for-the-badge&logo=tailwindcss" alt="Tailwind">
  <img src="https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&logo=typescript&logoColor=fff" alt="TypeScript">
  <br/>
  <img src="https://img.shields.io/badge/Framer%20Motion-CC6699?style=for-the-badge&logo=framer" alt="Framer Motion">
  <img src="https://img.shields.io/badge/Prettier-242424?style=for-the-badge&logo=prettier" alt="Prettier">
  <img src="https://img.shields.io/badge/eslint-0170FE?style=for-the-badge&logo=eslint" alt="eslint">
  <img src="https://img.shields.io/badge/zod-242424?style=for-the-badge&logo=zod" alt="zod">
</div>
<br/>

<br/>



## How to install 

```bash
  # Clone the project
  git clone https://github.com/whosramoss/nextjs-kanban/

  # Go to the project directory
  cd nextjs-kanban

  # Install dependencies
  npm install

  # Start the server 
  npm run dev
```

## How to build 
- Before generating the build, don't forget to update the [layout](./src/app/layout.tsx) file and set ```isLocalMetadata = false```.
- To generate a static compilation, the [next.config.mjs](./next.config.mjs) file must have the object below :
```bash
const staticbuild = {
  distDir: 'build',
  output: 'export',
  trailingSlash: true,
}
```
- Run the command:
```bash
  npm run build
```

## Contributing 
If you want to contribute to `nextjs-kanban`, please make sure to review the [contribution guidelines](https://github.com/whosramoss/nextjs-kanban/blob/master/CONTRIBUTING.md). This project makes use of [GitHub issues](https://github.com/whosramoss/nextjs-kanban/issues) for
tracking requests and bugs.

## License 

MIT License. [LICENSE](./LICENSE)

## Author 

Gabriel Ramos ([@whosramoss](https://github.com/whosramoss))

