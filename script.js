const repositories = [
  { id: 1, name: 'react', description: 'A JavaScript library for building user interfaces' },
  { id: 2, name: 'next.js', description: 'The React Framework' },
  { id: 3, name: 'vue', description: 'The Progressive JavaScript Framework' },
  { id: 4, name: 'angular', description: 'One framework. Mobile & desktop.' },
  // add more repositories if needed
];

const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  results.innerHTML = '';

  if (query === '') return;

  const filtered = repositories.filter(repo =>
    repo.name.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    results.innerHTML = '<li>No repositories found</li>';
    return;
  }

  filtered.forEach(repo => {
    const li = document.createElement('li');
    li.textContent = `${repo.name} — ${repo.description}`;
    li.onclick = () => alert(`You selected the repository: ${repo.name}`);
    results.appendChild(li);
  });
});
