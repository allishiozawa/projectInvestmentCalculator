const isNonEmptyArray = (arrayElement) => {
  return Array.isArray(arrayElement) && arrayElement.length > 0;
};

export const createtable = (columnsArray, dataArray, tableId) => {
  if (
    !isNonEmptyArray(columnsArray) ||
    !isNonEmptyArray(dataArray) ||
    !tableId
  ) {
    throw new Error(
      "For proper execution, a columns and line info arrays are needed"
    );
  }
  const tableElement = document.getElementById(tableId);
  if (!tableElement || tableElement.nodeName !== "TABLE") {
    throw new Error("Id doesn't match with any table elements");
  }

  createTableHeader(tableElement, columnsArray);
  createTableBody(tableReference, dataArray, columnsArray);
};

function createTableHeader(tableReference, columnsArray) {
  /*<table></table> ||
      <table>
        <thead></thead>
        <tbody></tbody>
      </table>  */
  function createTheadElement() {
    const thead = document.createElement("thead"); //<thead></thead>
    tableHeaderReference.appendChild(thead); // <table><thead></thead></table>
    return thead;
  }
  const tableHeaderReference =
    tableReference.querySelector("thead") ?? createTheadElement(tableReference);
  // <table><thead></thead></table>
  const headerRow = document.createElement("tr"); //<tr></tr>
  for (const tableColumnObject of columnsArray) {
    const headerElement = /*html*/ `<th class='text-center'>${tableColumnObject.columnLabel}</th>`;
    headerRow.innerHTML += headerElement;
  }
  //<tr><th class='text-center'>NameOfColumn</th>th class='text-center'>NameOfColumn</th></tr>
  tableHeaderReference.appendChild(headerRow);
}
function createTableBody(tableReference, tableItems, columnsArray) {
  function createTbodyElement(tableReference) {
    const tbody = document.createElement("tbody");
    tableReference.appendChild(tbody);
    return tbody;
  }
  const tableBodyReference =
    tableReference.querySelector("tbody") ?? createTbodyElement(tableReference);
  for (const [itemIndex, tableItem] of tableItems.entries()) {
    const tableRow = document.createElement("tr");

    for (const tableColumn of columnsArray) {
      tableRow.innerHTML += /*html*/ `<td class='text-center'>${
        tableItem[tableColumn.accessor]
      }</td>`;
    }
    tableBodyReference.appendChild(tableRow);
  }
}
