const username = 'dhruvattri'
const apiUrl = https//api.github.com/users/${username}/repos;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const reposContainer = document.getElementById('repos-container');
    data.forEach(repo => {
      const repoElement = document.createElement('div');
      repoElement.classList.add('repo');
      repoElement.innerHTML = `
        <h2>${repo.name}</h2>
        <p>${repo.description || 'No description available'}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;
      reposContainer.appendChild(repoElement);
    });
  })
  .catch(error => console.error('Error fetching data:', error));