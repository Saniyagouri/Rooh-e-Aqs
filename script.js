document.addEventListener("DOMContentLoaded", function() {
    // Sample array of poems (replace with your actual data)
    const poems = [
      {
        title: "The Essence",
        author: "Anonymous",
        content: "In the depths of truth,<br>The soul finds solace,<br>Amidst the chaos of life,<br>It's the essence we embrace."
      },
      {
        title: "Reflections",
        author: "John Doe",
        content: "A mirror to the soul,<br>Reflecting truth's grace,<br>In every word spoken,<br>A glimpse of eternity's face."
      }
      // Add more poems as needed
    ];
  
    const poemContainer = document.getElementById("poem-container");
  
    // Function to generate HTML for each poem
    function generatePoemHTML(poem) {
      return `
        <div class="poem">
          <h3>${poem.title}</h3>
          <p class="author">- ${poem.author}</p>
          <div class="content">${poem.content}</div>
        </div>
      `;
    }
  
    // Function to render poems on the page
    function renderPoems(poems) {
      const poemsHTML = poems.map(poem => generatePoemHTML(poem)).join("");
      poemContainer.innerHTML = poemsHTML;
    }
  
    // Initial render of poems
    renderPoems(poems);
  });
  