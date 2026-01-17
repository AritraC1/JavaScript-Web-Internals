# Notes JS Web Internals

> **JavaScript Runtime, Event Loop, Async Patterns & Raw Node.js HTTP Server**

This repository is a structured collection of **notes, experiments, diagrams, and implementations** focused on understanding how **JavaScript and the web actually work under the hood**.

The goal is not to learn frameworks, but to build **strong mental models** for:
- JavaScript execution
- Asynchronous behavior
- The event loop
- HTTP and Node.js internals

This repo serves as the **foundation layer** for building reliable, scalable backend systems.

---

## 🎯 Why This Repository Exists

>Most developers learn *how* to write code. This repository focuses on *how code runs*.

By the end of this project, you should be able to confidently answer questions like:
- How does JavaScript execute a function?
- Why does `setTimeout` behave the way it does?
- What actually happens when a request hits a Node.js server?
- How does async/await work internally?
- How do HTTP requests flow from browser to server?

---

## 📂 Repository Structure
notes-js-web-internals/
├── async-utilities/ # Custom async helpers (Promises, retries, timeouts)
├── raw-http-server/ # Node.js HTTP server (no Express)
├── notes/ # Deep-dive markdown notes
├── diagrams/ # Architecture & execution flow diagrams
├── experiments/ # Small experiments to test runtime behavior
└── references/ # Curated learning resources

---


## 🧵 Async Utilities

**Location:** `async-utilities/`

A set of small utilities built from scratch to understand:
- Promises
- Async / Await
- Concurrency vs sequencing
- Error propagation

Examples:
- `sleep(ms)`
- `retry(fn, retries)`
- `timeout(promise, ms)`
- Custom `promiseAll`

Each utility is intentionally minimal and documented to highlight **runtime behavior**, not just usage.

---

## 🌐 Raw Node.js HTTP Server (No Express)

**Location:** `raw-http-server/`

A minimal HTTP server built using Node’s `http` module to understand:
- Request / response lifecycle
- Routing without frameworks
- Streams & buffers
- HTTP methods and status codes

This server avoids abstractions to expose how Node.js actually handles network I/O.

---

## 🧠 Notes

**Location:** `notes/`

Organized by concept, not API:

- **js-runtime/**
  - Execution context
  - Call stack
  - Closures
- **event-loop/**
  - Microtasks vs macrotasks
  - Timers
  - Promise queues
- **async-js/**
  - Promises
  - Async/await
  - Error handling
- **web/**
  - HTTP
  - Status codes
  - What happens when you type a URL
- **nodejs/**
  - Node event loop
  - libuv
  - Streams and buffers

These notes are written for **long-term retention and interview clarity**.

---

## 📊 Diagrams

**Location:** `diagrams/`

Visual explanations of:
- JavaScript execution flow
- Event loop lifecycle
- Promise resolution
- HTTP request/response journey

Diagrams are intentionally simple and conceptual.

---

## 🧪 Experiments

**Location:** `experiments/`

Small scripts to observe real runtime behavior, such as:
- Event loop execution order
- Promise vs `setTimeout`
- Async stack traces

These are used to **validate assumptions**, not memorize rules.

---
