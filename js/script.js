function generateDorks() {

    const keyword =
        document.getElementById("keyword").value.trim();

    const resultsDiv =
        document.getElementById("results");

    resultsDiv.innerHTML = "";

    if (!keyword) {
        alert("Enter a keyword!");
        return;
    }

    const dorks = [
        `intitle:"${keyword}"`,
        `inurl:"${keyword}"`,
        `intext:"${keyword}"`,
        `filetype:pdf "${keyword}"`,
        `site:.edu "${keyword}"`,
        `site:.gov "${keyword}"`,
        `"${keyword}" ext:log`,
        `"${keyword}" ext:sql`,
        `"${keyword}" "index of"`
    ];

    dorks.forEach(dork => {

        const div = document.createElement("div");
        div.className = "dork";

        const span = document.createElement("span");
        span.textContent = dork;

        const link = document.createElement("a");

        link.href =
            "https://www.google.com/search?q="
            + encodeURIComponent(dork);

        link.target = "_blank";
        link.textContent = "Search";

        div.appendChild(span);
        div.appendChild(link);

        resultsDiv.appendChild(div);
    });
}