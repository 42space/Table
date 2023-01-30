const Table = function() {

    this.tableHead = "";
    this.tableBody = "";
    this.tableMeasurements = []; 
    this.nameEachCol  = []; 
    this.widthEachCol = [];  
    this.alignEachCol = []; 
    this.typeEachCol  = []; 
    this.functionPerCol = []; 
    this.functionRow = []; 
    this.row;
    this.records = [];  
 
    this.setValue = function(name, value)
    {
        if (name == "table_head") {
            this.tableHead    = value;
        }

        if (name == "table_body") {
            this.tableBody    = value;
        }

        if (name == "table_measurements") {
            this.tableMeasurements = value;
        }

        if (name == "name_each_col") {
            this.nameEachCol  = value;
        }

        if (name == "width_each_col") {
            this.widthEachCol = value;
        }

        if (name == "align_each_col") {
            this.alignEachCol = value;
        }

        if (name == "functionPerCol") {
            this.functionPerCol  = value;
        }

        if (name == "function_row") {
            this.functionRow  = value;
        }

        if (name == "records") {
            this.records = value;
        }
    }

    this.adjustTable = function()
    {
        this.tableHead.style.width = "500px";
        this.tableBody.style.width = "500px";
        if (this.tableMeasurements[0] != 0) {
            this.tableHead.style.width = this.tableMeasurements[0] + "px";
            this.tableBody.style.width = this.tableMeasurements[0] + "px";
        }

        this.tableBody.style.height = "100px";
        if (this.tableMeasurements[1] != 0) { 
            this.tableBody.style.height = this.tableMeasurements[1] + "px";
        }

        this.tableHead.style.top = "0px";
        this.tableBody.style.top = "19px";
        if (this.tableMeasurements[2] != 0) {
            this.tableHead.style.top = this.tableMeasurements[2] + "px";
            this.tableBody.style.top = 19 + this.tableMeasurements[2] + "px";
        }

        this.tableHead.style.left = "0px";
        this.tableBody.style.left = "0px";
        if (this.tableMeasurements[3] != 0) {
            this.tableHead.style.left = this.tableMeasurements[3] + "px";
            this.tableBody.style.left = this.tableMeasurements[3] + "px";
        }
        this.createHeader();
        this.createBody();
    }

    this.createBody = function()
    {
        this.createCol();
        this.createRow();
    }

    this.createCol = function()
    {
        this.row = document.createElement("div");
        for (let i = 0; i < this.nameEachCol.length; i++) {
            let col = document.createElement("div");
            col.style.width = this.widthEachCol[i] + "px";
            col.style.textAlign = "center";

            if (this.alignEachCol.length != 0) {
                col.style.textAlign = this.alignEachCol[i];
            }
            this.row.appendChild(col);
        }

        if (this.functionRow.length != 0) {
            for (let i = 0; i < this.functionRow.length; i++) {
                this.row.setAttribute(this.functionRow[i][0], this.functionRow[i][1]);
            }
        }
    }

    this.createRow = function() {
        for(let i = 0; i < this.records.length; i++) {
            let row = document.createElement("div");
            row.className = "table-body__row";
            row.appendChild(this.row.cloneNode(true));

            for (let c = 0; c < this.records[i].length; c++) {
                row.childNodes[0].childNodes[c].innerHTML = this.records[i][c];
            }
            this.tableBody.appendChild(row);
        }
    }

    this.createHeader = function()
    {
        let divHeader  = document.createElement("div");
        let widthTotal = 0;
        for (let i = 0; i < this.nameEachCol.length; i++) {
            let divColName = document.createElement("div");
            divColName.innerHTML = this.nameEachCol[i];
            divColName.style.width = this.widthEachCol[i] + "px";
            divColName.style.textAlign = "center";
            divHeader.appendChild(divColName);
            widthTotal += this.widthEachCol[i];
        }

        if (widthTotal < this.tableHead.offsetWidth) {
            let divColName = document.createElement("div");
            divColName.innerHTML = "&nbsp;";
            divColName.style.width = (this.tableHead.offsetWidth - widthTotal) + "px";
            this.tableBody.style.width = this.tableHead.offsetWidth + "px";
            divHeader.appendChild(divColName);
        }
        this.tableHead.appendChild(divHeader);
    }
}