# Playwright Scalable Test Framework

This repository contains a **scalable, maintainable Playwright automation framework** designed using modern best practices:

- Page Object Model (POM)
- Typed Fixtures
- Reusable Steps (Nightwatch-style)
- API + UI hybrid testing
- Storage-state based authentication
- Tag-based test execution
- CI-friendly artifacts and reporting

The goal of this framework is to keep **tests readable**, **logic reusable**, and **execution fast and reliable**.

---

## 📁 Project Structure

```
tests/
├─ api/
│  └─ clients/
│     └─ ItemsClient.ts
│
├─ fixtures/
│  └─ test.ts
│
├─ pages/
│  ├─ BasePage.ts
│  ├─ DropdownPage.ts
│  ├─ FileUploadPage.ts
│  ├─ ItemsPage.ts
│  └─ RadioPage.ts
│
├─ specs/
│  ├─ dropdown.spec.ts
│  ├─ file-upload.spec.ts
│  ├─ items.api-ui.spec.ts
│  └─ radio.spec.ts
│
├─ steps/
│  └─ common.steps.ts
│
├─ test-data/
│  └─ sample-upload.txt
│
├─ utils/
│  └─ paths.ts
│
├─ global-setup.ts
└─ example.spec.ts
```

---

## 🧠 Architecture Overview (Why This Structure)

This framework intentionally separates **what we test** from **how we test it**.

| Layer | Responsibility |
|----|----|
| **Specs** | Test intent & assertions |
| **Pages (POM)** | UI structure, selectors, and page actions |
| **Steps** | Reusable business flows |
| **Fixtures** | Test setup & dependency injection |
| **API Clients** | Fast data setup/cleanup |
| **Utils** | Shared helpers |
| **Global Setup** | One-time authentication |

---

## 📦 Folder & File Explanations

### `tests/api/clients/`
**Purpose:** API abstraction layer.

- Contains lightweight API clients used for:
  - Test data setup
  - Test data cleanup
  - API + UI hybrid tests

**Why:**  
Creating data via API is faster and more reliable than doing everything through the UI.

---

### `tests/fixtures/test.ts`
**Purpose:** Typed Playwright fixtures.

- Extends Playwright’s `test` object
- Injects Page Objects directly into tests

**Why:**
- Keeps specs clean
- Avoids repeated `new PageObject(page)` calls
- Provides strong typing and IntelliSense

---

### `tests/pages/`
**Purpose:** Page Object Model (POM).

Each file represents a **single page or screen**.

Responsibilities:
- Define locators
- Encapsulate UI actions
- Contain page-specific assertions

---

### `tests/specs/`
**Purpose:** Test definitions.

Specs:
- Describe *what* is being validated
- Should read like documentation
- Contain no selectors or setup noise

---

### `tests/steps/`
**Purpose:** Reusable business flows

Examples:
- Login flow
- Navigation flow
- Common setup sequences

---

### `tests/test-data/`
**Purpose:** Static test assets.

Examples:
- Files for upload tests
- Static JSON payloads
- Mock data files

---

### `tests/utils/`
**Purpose:** Cross-cutting utilities.

Provides OS-independent helpers.

---

### `tests/global-setup.ts`
**Purpose:** One-time authentication using `storageState`.

- Logs in once before all tests
- Saves cookies/localStorage to `.auth/user.json`
- All tests start already authenticated

---

## 🔐 Environment Variables

This framework uses **environment variables** for configuration.

```env
BASE_URL=https://your-app.com
API_BASE_URL=https://your-app.com
E2E_USERNAME=your-username
E2E_PASSWORD=your-password
```

Create a `.env` file locally (ignored by git) or configure these as GitHub Actions secrets in CI.

---

## ▶️ Running Tests

```bash
npm ci
npx playwright install --with-deps
npx playwright test
```

Run a single spec:
```bash
npx playwright test tests/specs/file-upload.spec.ts
```

Run Chromium only:
```bash
npx playwright test --project=chromium
```

---

## 🏷️ Tags & Selective Runs

```ts
test('upload file @smoke @ui', async () => { ... });
```

Run smoke tests:
```bash
npx playwright test --grep "@smoke"
```

---

## 📊 Reports & Artifacts

- `playwright-report/` → HTML report
- `test-results/` → screenshots, videos, traces

Open report:
```bash
npx playwright show-report
```

---

## 🧪 API + UI Hybrid Testing

Pattern:
1. Create data via API
2. Verify behavior via UI
3. Cleanup via API (optional)

This keeps tests fast, stable, and truly end-to-end.

---

## 📌 Summary

This framework is designed to:
- Scale cleanly
- Support team collaboration
- Minimize flakiness
- Keep tests expressive and maintainable
