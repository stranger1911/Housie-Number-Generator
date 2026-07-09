const ticketBox = document.querySelectorAll(".ticket-box");

const COLUMN_RANGES = [
  [1, 9],
  [10, 19],
  [20, 29],
  [30, 39],
  [40, 49],
  [50, 59],
  [60, 69],
  [70, 79],
  [80, 90],
];

let ticket = [];
let columnPools = [];
let columnCounts = [];
let rowCounts = [];

generateTicket();

function generateTicket() {
  initializeTicket();
  createColumnPools();
  assignColumnCounts();
  placeNumbers();
  sortColumns();
  renderTicket();
}

function initializeTicket() {
  ticket = [];

  for (let r = 0; r < 3; r++) {
    ticket.push(new Array(9).fill(null));
  }

  rowCounts = [0, 0, 0];
}

function createColumnPools() {
  columnPools = [];

  for (let c = 0; c < 9; c++) {
    let pool = [];

    let start = COLUMN_RANGES[c][0];
    let end = COLUMN_RANGES[c][1];

    for (let i = start; i <= end; i++) {
      pool.push(i);
    }

    shuffle(pool);

    columnPools.push(pool);
  }
}

function assignColumnCounts() {
  columnCounts = new Array(9).fill(1);

  let remaining = 6;

  while (remaining > 0) {
    let col = random(0, 8);

    if (columnCounts[col] < 3) {
      columnCounts[col]++;
      remaining--;
    }
  }
}

function placeNumbers() {
  for (let col = 0; col < 9; col++) {
    let count = columnCounts[col];

    if (count === 1) {
      placeSingle(col);
    }

    if (count === 2) {
      placeDouble(col);
    }

    if (count === 3) {
      placeTriple(col);
    }
  }

  balanceRows();
}

function placeSingle(col) {
  let rows = availableRows(1);

  if (rows.length === 0) {
    rows = leastFilledRows();
  }

  shuffle(rows);

  let row = rows[0];

  ticket[row][col] = columnPools[col].pop();

  rowCounts[row]++;
}

function placeDouble(col) {
  let rows = availableRows(2);

  if (rows.length < 2) {
    rows = leastFilledRows();
  }

  shuffle(rows);

  rows = rows.slice(0, 2);

  rows.forEach((row) => {
    ticket[row][col] = columnPools[col].pop();
    rowCounts[row]++;
  });
}

function placeTriple(col) {
  for (let row = 0; row < 3; row++) {
    ticket[row][col] = columnPools[col].pop();
    rowCounts[row]++;
  }
}

function availableRows(required) {
  let rows = [];

  for (let i = 0; i < 3; i++) {
    if (rowCounts[i] < 5) {
      rows.push(i);
    }
  }

  return rows;
}

function leastFilledRows() {
  let temp = [
    {
      row: 0,
      count: rowCounts[0],
    },
    {
      row: 1,
      count: rowCounts[1],
    },
    {
      row: 2,
      count: rowCounts[2],
    },
  ];

  temp.sort((a, b) => a.count - b.count);

  return temp.map((e) => e.row);
}

function balanceRows() {
  while (!rowsBalanced()) {
    let maxRow = rowCounts.indexOf(Math.max(...rowCounts));
    let minRow = rowCounts.indexOf(Math.min(...rowCounts));

    let moved = false;

    for (let col = 0; col < 9; col++) {
      if (
        ticket[maxRow][col] !== null &&
        ticket[minRow][col] === null &&
        columnFilled(col) >= 2
      ) {
        ticket[minRow][col] = ticket[maxRow][col];
        ticket[maxRow][col] = null;

        rowCounts[maxRow]--;
        rowCounts[minRow]++;

        moved = true;

        break;
      }
    }

    if (!moved) {
      break;
    }
  }
}

function rowsBalanced() {
  return rowCounts[0] === 5 && rowCounts[1] === 5 && rowCounts[2] === 5;
}

function columnFilled(col) {
  let count = 0;

  for (let row = 0; row < 3; row++) {
    if (ticket[row][col] !== null) {
      count++;
    }
  }

  return count;
}

function sortColumns() {
  for (let col = 0; col < 9; col++) {
    let values = [];

    for (let row = 0; row < 3; row++) {
      if (ticket[row][col] !== null) {
        values.push(ticket[row][col]);
      }
    }

    values.sort((a, b) => a - b);

    let index = 0;

    for (let row = 0; row < 3; row++) {
      if (ticket[row][col] !== null) {
        ticket[row][col] = values[index];
        index++;
      }
    }
  }
}

function renderTicket() {
  let index = 0;

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 9; col++) {
      if (ticket[row][col] === null) {
        ticketBox[index].innerHTML = "";
      } else {
        ticketBox[index].innerHTML = ticket[row][col];
      }

      index++;
    }
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = random(0, i);
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validateTicket() {
  if (rowCounts[0] !== 5) return false;
  if (rowCounts[1] !== 5) return false;
  if (rowCounts[2] !== 5) return false;

  for (let col = 0; col < 9; col++) {
    let count = 0;

    for (let row = 0; row < 3; row++) {
      if (ticket[row][col] !== null) {
        count++;
      }
    }

    if (count < 1 || count > 3) {
      return false;
    }
  }

  let used = new Set();

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 9; col++) {
      let value = ticket[row][col];

      if (value === null) {
        continue;
      }

      if (used.has(value)) {
        return false;
      }

      used.add(value);

      let start = COLUMN_RANGES[col][0];
      let end = COLUMN_RANGES[col][1];

      if (value < start || value > end) {
        return false;
      }
    }
  }

  for (let col = 0; col < 9; col++) {
    let values = [];

    for (let row = 0; row < 3; row++) {
      if (ticket[row][col] !== null) {
        values.push(ticket[row][col]);
      }
    }

    for (let i = 1; i < values.length; i++) {
      if (values[i] < values[i - 1]) {
        return false;
      }
    }
  }

  return true;
}

function clearTicket() {
  ticketBox.forEach((box) => {
    box.innerHTML = "";
    box.style.background = "#10395f";
    box.style.border = "1px solid yellowgreen";
    box.style.color = "yellowgreen";
  });
}

function regenerateUntilValid() {
  let valid = false;

  while (!valid) {
    clearTicket();

    initializeTicket();

    createColumnPools();

    assignColumnCounts();

    placeNumbers();

    sortColumns();

    valid = validateTicket();
  }

  renderTicket();
}

ticketBox.forEach((box) => {
  box.addEventListener("click", function () {
    if (this.innerHTML === "") {
      return;
    }

    if (this.classList.contains("marked")) {
      this.classList.remove("marked");
      this.style.background = "#10395f";
      this.style.color = "yellowgreen";
    } else {
      this.classList.add("marked");
      this.style.background = "red";
      this.style.color = "#fff";
    }
  });
});

const generateButton = document.querySelector("#generateTicket");

if (generateButton) {
  generateButton.addEventListener("click", regenerateUntilValid);
}

if (
  window.location.pathname.endsWith("/Housie-Number-Generator/ticket.html") ||
  window.location.pathname === "/Housie-Number-Generator/ticket.html"
) {
  regenerateUntilValid();
}
