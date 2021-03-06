const CODES = {
  A: 65,
  Z: 90
}

function toCell(content = '') {
  return `
    <div class="cell" contenteditable>${content}</div>
  `
}

function toCol(col) {
  return `
    <div class="column">${col}</div>
  `
}

function createRow(rowNumbers, content) {
  return `
    <div class="row">
      <div class="row-info">${rowNumbers}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode( CODES.A + index ) 
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(el => toCol(el))
      .join('')

  rows.push(createRow('', cols))
  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')

    rows.push(createRow(i + 1, cells)) 
  }
  return rows.join('')
}