# Form-Renderer

-   This project is based on React v17 and compiled with TypeScript.
-   Configuration overrides is handled by craco.
-   UI system used is antd.

### Purpose of Project

-   A form renderer view that dynamically renders form components based on a set configs sent by API.

### Glossary:

-   [Installation](#installation)
-   [Working With This Project](#working-with-this-project)

## Installation

You will need to perform the following on your development machine:

1. Node.js (v16.4.0 is recommended) and NPM (see <https://nodejs.org/en/download/package-manager/>)
2. Clone this repo
3. Run `npm install` from the root folder
4. Run `npm run start`

## Working With This Project

|  Command   | Description                                                                                                                                                                                 |
| :--------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  `start`   | Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. Changes are watched and will trigger reload once rebuilt (hot reload). |
|  `build`   | Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.                                        |
| `prettify` | Formatting is done on covered files based on prettier config                                                                                                                                |
|   `test`   | Launches the test runner in the interactive watch mode.                                                                                                                                     |

-   The project is configured with eslint and prettier rules based on the recommendations set in [Style-guide](src/README.md), these rules are checked as part of the pre-commit hook.
-   See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Preview Link

-   https://form-renderer.vercel.app/
