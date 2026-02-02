# Playwright Test Suite

This project contains a Playwright test suite written in TypeScript.

## Description

This project provides a basic Playwright test setup using TypeScript. It includes various scripts to run tests in different modes and generate reports.

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd playwright-test
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

## Scripts

The following scripts are defined in the `package.json` file:

* **`npm run test`**: Runs all Playwright tests in headless mode.
    ```bash
    npm run test
    ```
* **`npm run test:headed`**: Runs all Playwright tests in headed mode (with browser UI visible).
    ```bash
    npm run test:headed
    ```
* **`npm run test:failed`**: Runs only the tests that failed in the previous run.
    ```bash
    npm run test:failed
    ```
* **`npm run test:inspect`**: Runs Playwright tests in debug mode, allowing you to step through the code.
    ```bash
    npm run test:inspect
    ```
* **`npm run ui`**: Opens the Playwright UI, providing a visual interface for running and debugging tests.
    ```bash
    npm run ui
    ```
* **`npm run report`**: Opens the Playwright HTML test report in your browser.
    ```bash
    npm run report
    ```
* **`npm run lint`**: Runs ESLint to check for code quality and style issues in the `src` directory.
    ```bash
    npm run lint
    ```

## Configuration

Playwright is configured via `playwright.config.ts`. You can modify this file to customize test execution, browser settings, and other options.
