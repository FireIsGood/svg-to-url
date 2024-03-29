# SVG to URL

Literally what it says.

The SVG functions are in the `src/scripts` folder if you want to double check my
homework.

## Installation

<details>  
<summary>If you want to develop this (why though?)</summary>

### Prerequisites

Read the [Astro quick start guide's prerequisite list](https://docs.astro.build/en/install/manual/#prerequisites).

This project uses pnpm. You can check that pnpm is installed in the terminal by running:

```bash
pnpm -v
```

### Setup

Once the prerequisites are installed, [clone the repository](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) to your local machine.

This can be done from the command line:

```bash
git clone git@github.com:FireIsGood/svg-to-url.git ./svg-to-url
```

### Local Development

You can run the development server through the terminal. The default port is
1625 because I thought it was a funny number, but you can change it with the
`--port` flag.

From the command line:

```bash
# Default port 1625
pnpm dev

# Custom port
pnpm dev --port 1234
```

When astro is done setting up, you should see a success message.

```bash
┃ Local    http://localhost:1625/
┃ Network  use --host to expose
```

There are additional commands you can run from the terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:1625`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

</details>

## Contributing

Feel free to make issues about any features you feel are both simple and
important.

Note that this project is **not** meant to be complex, so please don't ask me to
do something like parse the SVG into an AST so you can resize the individual
widths with a GUI. I will cry.

## License

[MIT](https://choosealicense.com/licenses/mit/)
