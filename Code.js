function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Custom Menu")
    .addItem("Show Simple Sidebar", "showSimpleSidebar")
    .addItem("Show Buefy Sidebar", "showBuefySidebar")
    .addToUi();
}

function showSimpleSidebar() {
  var html = HtmlService.createHtmlOutputFromFile("SimpleSidebar").setTitle("TechLever");
  SpreadsheetApp.getUi().showSidebar(html);
}

function showBuefySidebar() {
  var html = HtmlService.createHtmlOutputFromFile("BuefySidebar").setTitle("TechLever");
  SpreadsheetApp.getUi().showSidebar(html);
}

function onEdit(e) {
  var range = e.range; // The cell that was edited
  var sheet = range.getSheet();
  if (sheet.getName() === "Sheet1" && range.getA1Notation() === 'A1') { // Check if the edited cell is A1 on Sheet1
    showBuefySidebar();
  }
  console.log("test");
}