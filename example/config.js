window.onload = init();

function init() {
    tableTest();
}

function tableTest() {
    let header = document.getElementById('tableHead');
    let body = document.getElementById("tableBody");

    //# We define the functions  
    let functionRow = [["onmouseover", "this.style.cursor='pointer'"], ["onclick", "console.log(this.childNodes[0].innerHTML)"]];
    let records = getRecords();

    objTable = new Table();
    objTable.setValue("table_head", header);
    objTable.setValue("table_body", body);

    //# Supports four properties: width, height, top, left. with measurements in px;
    //# width: 700px; height: 120px; top: 50px; left: 0px;
    objTable.setValue("table_measurements", [700, 120, 50, 0]);

    //# Column names
    objTable.setValue("name_each_col", ["Product", "Name Product", "Amount", "Price", "Date"]);

    //# width for each column
    objTable.setValue("width_each_col", [100, 250, 100, 100, 100]);

    //# array records
    objTable.setValue("records", records);

    //# function per line
    objTable.setValue("function_row", functionRow);

    //# column alignment 
    objTable.setValue("align_each_col", ["center", "left", "right", "right", "center"]);
    objTable.adjustTable();
}

function getRecords() {
return  [
    ["1", "Laptop", 1, "144.50", "05/12/22"],
    ["2", "Headphones", 2, "120.99", "05/12/22"],
    ["3", "Mechanical keyboard", 3, "160.99", "05/12/22"],
    ["4", "USB 3.0 Cable", 2, "19.99", "05/12/22"],
    ["5", "external hard disk drive", 2, "20.05", "05/12/22"],
    ["6", "DSLR", 2, "2.5", "05/12/22"],
    ["7", "DSLR Camera", 2, "134.5", "05/12/22"],
    ["8", "Tesla Powerwall 2", 2, "14.5", "05/12/22"],
    ["9", "Netgear Orbi Mesh WiFi", 2, "144.5", "05/12/22"],
    ["10", "Nvidia GTX 1080", 2, "1412.5", "05/12/22"],
    ["11", "Google Daydream VR", 2, "11.5", "05/12/22"],
    ["12", "Windows 10", 2, "99.99", "05/12/22"],
    ["13", "GoPro Karma", 2, "500", "05/12/22"],
    ["14", "Apple iPod", 2, "112.5", "05/12/22"],
    ["15", "Magic Wand", 2, "50.99", "05/12/22"],
    ["16", "Nintendo Game", 2, "1412.5", "05/12/22"],
    ["17", "TomTom GPS", 2, "200.99", "05/12/22"],
    ["18", "Apple Ipad", 2, "1112.5", "05/12/22"],
    ["19", "Sony PlayStation 5", 2, "1504.5", "05/12/22"],
    ["20", "USB 64GB", 2, "50", "05/12/22"]
 ];
}