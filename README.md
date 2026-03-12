# Company & Founder Search (Vue 3)

A **Vue.js 3 application** for searching companies and their founders. The project is designed to demonstrate **senior-level frontend engineering practices**, focusing on **component reusability, modular architecture, performance optimization, and client-side data management**.

🔗 Repository: [https://github.com/goutamwms/company_founder](https://github.com/goutamwms/company_founder)

---

## Overview

This application allows users to search and explore companies and their founders through a responsive UI built with **Vue.js 3**.

The primary purpose of this project is to showcase **frontend architecture decisions and best practices**, rather than just implementing UI functionality.

Key engineering concepts implemented include:

* Reusable component architecture
* Modular folder structure
* Promise-based asynchronous workflows
* Debounced search functionality
* IndexedDB for client-side persistence
* Error boundaries for graceful UI failure handling
* Caching strategies to minimize redundant operations

---

## Tech Stack

* **Vue.js 3**
* **IndexedDB** (for browser-side data storage)
* **JavaScript (ES6+)**
* **Vite** (depending on repo setup)

---

## Key Features

### Company & Founder Search

Search functionality allows users to explore company records and associated founders efficiently.

### IndexedDB Data Storage

The application uses **IndexedDB** to store and retrieve data locally, enabling:

* Faster subsequent lookups
* Reduced redundant data fetching
* Offline-friendly architecture

### Debounced Search

Search requests are **debounced** to avoid unnecessary computation and improve performance.

### Component Reusability

UI is broken down into reusable components to promote maintainability and scalability.

### Modular Code Structure

Codebase is organized to ensure clear separation of concerns.

Example structure:

```
src/
  components/
  hooks/
  services/
```

### Promise-based Data Handling

All async flows use **Promises**, ensuring predictable data management.

### Error Boundaries

The UI handles unexpected runtime errors gracefully without crashing the entire application.

### Client-side Caching

Results are cached to improve performance and avoid repeated expensive operations.

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/goutamwms/company_founder.git
cd company_founder
```

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## Architecture Highlights

This project demonstrates several patterns useful in **large-scale frontend systems**:

| Pattern               | Purpose                                     |
| --------------------- | ------------------------------------------- |
| Component Composition | Build complex UI using small reusable units |
| Debounce Utility      | Optimize user input handling                |
| IndexedDB Layer       | Persist client-side data efficiently        |
| Service Layer         | Separate data access logic from UI          |
| Error Boundary        | Prevent full application crashes            |

---

## Potential Improvements / TODO

Future improvements that could further enhance the project:

### Testing

* Add **unit tests**
* Add **component tests**
* Integrate **Vitest + Vue Test Utils**

### Type Safety

* Migrate project to **TypeScript**
* Add type definitions for services and data models

### Framework Updates

* Update dependencies to the **latest Vue ecosystem versions**
* Align with latest **Vue 3 composition API patterns**

### Performance

* Improve IndexedDB query optimization
* Introduce **virtualized lists for large datasets**

### Developer Experience

* Add **Prettier configuration**
* Improve project documentation
* Add architectural diagrams

---

## Purpose of the Project

This project was built as a **technical evaluation exercise for senior frontend developers**, emphasizing:

* maintainable architecture
* scalable component design
* performance-conscious development
* real-world frontend patterns

---

