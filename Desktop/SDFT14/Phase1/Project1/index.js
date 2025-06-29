function getCriminal() {
    fetch("https://api.fbi.gov/wanted/v1/list")
        .then(resp => resp.json())
        .then(data => {
            const items = data.items;
            const searchMkora = document.getElementById("searchMkora").value.toLowerCase();
            const resultsContainer = document.getElementById("resultsContainer");
            resultsContainer.innerHTML = '';

            const criminalHeading = document.createElement("h1");
            criminalHeading.textContent = `Search Results For "${searchMkora}"`;
            resultsContainer.appendChild(criminalHeading);

            items.forEach(item => {
            if (item.title.toLowerCase().includes(searchMkora)) {
             const criminalDiv = document.createElement("div");
                 criminalDiv.className = "criminal";

            const title = document.createElement("h2");
             title.textContent = item.title;

              const img = document.createElement("img");
                  img.src = item.images?.[0]?.original || '';
                  img.alt = item.title;
                  img.width = 200;

                    const reward = document.createElement("p");
                    reward.textContent = item.reward_text || "No reward listed.";

                    criminalDiv.appendChild(title);
                    criminalDiv.appendChild(img);
                    criminalDiv.appendChild(reward);
                    resultsContainer.appendChild(criminalDiv);
                }
            });
        })
        .catch(err => {
            console.error("Error fetching data:", err);
        });
}

document.getElementById("searchBarBtn").addEventListener("click", function (e) {
    e.preventDefault();
    getCriminal();
});


