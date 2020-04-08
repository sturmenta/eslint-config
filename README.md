# eslint-config

My personal eslint config for node and react

## Steps to use in node or react combination with prettier

1. Install the dependencies as dev dependencies:

```
yarn add -D eslint eslint-config-sturmenta prettier
```

---

(the following points 2,3 & 4, has to be the root folder that opens with the editor)

---

2. Create eslint files

- Create the file `.eslintignore` in the root with the follow text inside

```
node_modules/*
```

- Create the file `.eslintrc.json` in the root with the follow text inside (use node or react depend your project)

```
{ "extends": ["eslint-config-sturmenta/node"] }
```

3. Create the prettier files

- Create the file `.prettierignore` in the root with the follow text inside

```
node_modules
```

- Create the file `.prettierrc` in the root with the follow text inside

```
{
  "printWidth": 120,
  "singleQuote": true
}
```

4. If you use VSCode text editor add the custom settings

- Create the folder `.vscode` in the root
- Create the file `settings.json` inside `.vscode` folder with the follow text inside

```
{
  "editor.formatOnSave": true,
  "eslint.alwaysShowStatus": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

5. Restart VSCode text editor and enjoy! 🔥
