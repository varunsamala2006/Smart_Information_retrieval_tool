# Smart Information Retrieval Tool

A lightweight web-based tool for generating advanced Google search queries from user-provided keywords. The application simplifies the process of creating targeted search queries for information discovery, academic research, and authorized security research.

---

## Overview

The **Smart Information Retrieval Tool** provides a simple interface for generating commonly used Google search operators from a single keyword.

Instead of manually constructing multiple search queries, users can enter a keyword and instantly receive a collection of predefined search queries that can be opened directly in Google.

The application is entirely client-side and does not require a backend, database, or external framework.

---

## Features

- Generate multiple advanced search queries from a single keyword
- Generate queries using common Google search operators
- Search for PDF documents
- Search educational domains
- Search government domains
- Search keywords in page titles and URLs
- Search keywords within page content
- Search specific file extensions
- Generate directory-listing search queries
- Open generated queries directly in Google
- Clean and modern glassmorphism interface
- Lightweight client-side implementation
- No installation or server configuration required

---

## Search Operators

The tool generates the following query patterns:

| Operator | Description |
|---|---|
| `intitle:` | Searches for pages containing the keyword in the title |
| `inurl:` | Searches for pages containing the keyword in the URL |
| `intext:` | Searches for pages containing the keyword in the page content |
| `filetype:pdf` | Searches for PDF documents |
| `site:.edu` | Limits results to educational domains |
| `site:.gov` | Limits results to government domains |
| `ext:log` | Searches for files with a `.log` extension |
| `ext:sql` | Searches for files with a `.sql` extension |
| `"index of"` | Searches for publicly indexed directory listings |

---

## Technology Stack

- **HTML5** — Application structure
- **CSS3** — User interface and visual styling
- **JavaScript** — Query generation and application functionality
- **Google Search** — Execution of generated search queries

---

## Project Structure

```text
smart_information_retrieval_tool/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── screenshots/
│   ├── home.png
│   └── results.png
│
├── README.md
│
└── LICENSE
