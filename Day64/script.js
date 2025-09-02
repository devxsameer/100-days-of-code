const API_KEY = "1DQMpKn7bOCRb3nJq9w0xLIXA56UzOrS";

const imgContainer = document.querySelector("div.img");
const btn = document.querySelector("button");
const search = document.querySelector("input");
// Creating imgElement
const imgElement = document.createElement("img");

// Function to fetch gift using Giphy API
async function getGif(query = "cat") {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${encodeURIComponent(
        query
      )}`,
      {
        mode: "cors",
      }
    );
    const gifData = await response.json();
    const url = gifData?.data?.images?.fixed_width?.url;
    if (url) {
      imgElement.src = `${url}?cb=${Date.now()}`;
      imgElement.alt = query + " gif";
      imgContainer.innerHTML = imgElement.outerHTML;
    } else {
      imgContainer.innerHTML = "<p>No GIF found.</p>";
    }
  } catch (err) {
    console.error("Error fetching GIF:", err);
    imgContainer.innerHTML = "<p>Oops! Something went wrong.</p>";
  }
}
function handleBtnClick() {
  const query = search.value.trim();
  if (query !== "") {
    getGif(query);
  } else {
    getGif();
  }
}
window.addEventListener("DOMContentLoaded", getGif);
btn.addEventListener("click", handleBtnClick);
