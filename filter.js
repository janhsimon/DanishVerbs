const invisibleStyleClassName = "hidden";

function initVerbs() {
  const table = document.getElementById('verbTable');

  for (let verb = 0; verb < verbs.length; verb++) {
    const row = document.createElement('tr');
    for (let verbForm = 0; verbForm < verbs[verb].length; verbForm++) {
      const cell = document.createElement('td');
      cell.innerText = verbs[verb][verbForm];
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  updateVerbCountLabel(verbs.length);
}

function filterVerbs() {
  const table = document.getElementById('verbTable');
  const rows = table.getElementsByTagName('tr'); // first row is the headers
  const filterString = document.getElementById('filterInput').value; 

  let verbsInFilter = 0;
  for (let verb = 0; verb < verbs.length; verb++) {
    const row = rows[verb + 1]; // ignore the first row with the headers
    if (isVerbInFilter(filterString, verbs[verb])) {
      row.classList.remove(invisibleStyleClassName);
      verbsInFilter++;
    }
    else {
      row.className = invisibleStyleClassName;
    }
  }

  updateVerbCountLabel(verbsInFilter);
}

function isVerbInFilter(filterString, verbForms) {
  for (let verbForm = 0; verbForm < verbForms.length; verbForm++) {
    if (verbForms[verbForm].includes(filterString)) {
      return true;
    }
  }

  return false;
}

function updateVerbCountLabel(verbsInFilter) {
  const label = document.getElementById('verbCountLabel');

  if (verbsInFilter == verbs.length) {
    label.innerText = "Showing all " + verbs.length + " verbs.";
  }
  else {
    label.innerText = "Showing " + verbsInFilter + " of " + verbs.length + " verbs.";
  }
}