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

## How It Works

The application follows a simple workflow:

```text
User enters keyword
        │
        ▼
Input validation
        │
        ▼
Keyword processing
        │
        ▼
Search query generation
        │
        ▼
Queries displayed as cards
        │
        ▼
User selects "Search"
        │
        ▼
Google Search opens in a new tab
```

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
```

---

## Getting Started

### Prerequisites

The application requires only a modern web browser.

No additional frameworks, libraries, databases, or servers are required.

### Installation

Clone the repository:

```bash
git clone https://github.com/varunsamala2006/Smart_Information_retrieval_tool.git
```

Navigate to the project directory:

```bash
cd Smart_Information_retrieval_tool
```

Open `index.html` in your preferred web browser.

---

## Usage

1. Open the application.
2. Enter a keyword in the search field.
3. Click the **Generate** button.
4. Review the generated search queries.
5. Click **Search** beside any query.
6. The selected query will open in a new Google Search tab.

---

## Example

Enter the following keyword:

```text
cyber security
```

The tool generates queries such as:

```text
intitle:"cyber security"
inurl:"cyber security"
intext:"cyber security"
filetype:pdf "cyber security"
site:.edu "cyber security"
site:.gov "cyber security"
"cyber security" ext:log
"cyber security" ext:sql
"cyber security" "index of"
```

---

## Screenshots

### Home Page

![Home Page](screenshots/home.png)

### Generated Search Queries

![Generated Results](screenshots/results.png)

---

## Benefits

- Simplifies advanced search query creation
- Saves time when performing repetitive searches
- Helps beginners learn search operators
- Provides a simple and accessible interface
- Requires no backend infrastructure
- Easy to customize and extend

---

## Use Cases

The tool can be used for:

- Academic research
- Technical research
- Information discovery
- Finding publicly available documents
- Learning advanced search operators
- Educational demonstrations
- Search-engine research
- Authorized security research

---

## Limitations

- Search results depend on Google's indexing and search behavior.
- The application does not retrieve or analyze search results itself.
- Search queries are currently based on predefined templates.
- The application does not store search history.
- No backend or persistent database is included.
- The current version focuses on Google Search.

---

## Future Enhancements

Possible improvements include:

- Custom search operators
- Copy-to-clipboard functionality
- Search history
- Saved search queries
- Multiple search engine support
- Query customization
- Export generated queries
- Additional search operators
- Dark/light theme support
- Improved mobile responsiveness

---

## Security and Responsible Use

This project is intended for legitimate information retrieval, educational purposes, research, and authorized security testing.

The application only generates search queries. It does not bypass authentication, circumvent access controls, exploit vulnerabilities, or provide unauthorized access to systems.

Users are responsible for ensuring that their activities comply with applicable laws, regulations, website terms of service, and organizational policies.

---

## Contributing

Contributions and suggestions are welcome.

### Contribution Workflow

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Test the application locally.
5. Commit your changes:

```bash
git add .
git commit -m "Add your feature"
```

6. Push your branch:

```bash
git push origin feature/your-feature
```

7. Open a Pull Request.

---

## License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more information.

---

## Author

**Varun Samala**

GitHub: [@varunsamala2006](https://github.com/varunsamala2006)

---

## Acknowledgements

This project was developed as a learning project focused on:

- Web development
- JavaScript programming
- Information retrieval
- Search-engine operators
- User interface design

---

## Project Status

**Active Development**

The current version provides the core functionality for generating and launching predefined advanced search queries. Future versions may introduce additional search operators, customization options, and user-experience improvements.

---

If you find this project useful, consider giving the repository a ⭐.
