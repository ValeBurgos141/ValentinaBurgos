# Playwright Test Project

This project contains automated tests using Playwright to navigate to Google and perform a search.

## Project Structure

```
Test
├── .github
│   └── workflows
│       └── playwright-tests.yml
├── TestPrueba.spec.ts
├── package.json
├── playwright.config.ts
└── README.md
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd Test
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run tests locally**:
   ```
   npx playwright test
   ```

## Usage

The main test is located in `TestPrueba.spec.ts`, which navigates to Google and searches for "Valentina Burgos Herrera". 

## GitHub Actions

The project includes a GitHub Actions workflow defined in `.github/workflows/playwright-tests.yml` that automatically runs the Playwright tests on push and pull request events.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.