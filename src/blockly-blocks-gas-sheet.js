// activate()
// Activates this sheet.
Blockly.Blocks['sheet_activate'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET_ACTIVED);
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET);
        this.appendDummyInput()
            .appendField("をアクティブ");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(20);
        this.setTooltip('シートをアクティブにします');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#activate()');
    }
};
Blockly.JavaScript['sheet_activate'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.activate()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// appendRow(rowContents)
// Appends a row to the spreadsheet.
Blockly.Blocks['sheet_appendrow'] = {
    init: function() {
        this.appendValueInput("SHEET")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET);
        this.appendDummyInput()
            .appendField("の最後に");
        this.appendValueInput("ROWCONTENT")
            .setCheck("Array")
            .appendField(Blockly.Msg.GAS.SS.IO.ARRAY_OF_ROW_VALUES);
        this.appendDummyInput()
            .appendField("を");
        this.appendDummyInput()
            .appendField("追加");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(20);
        this.setTooltip('スプレッドシートに行を追加します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#appendRow(Object)');
    }
};
Blockly.JavaScript['sheet_appendrow'] = function(block) {
    var value_rowcontent = Blockly.JavaScript.valueToCode(block, 'ROWCONTENT', Blockly.JavaScript.ORDER_NONE);
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'SHEET', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.appendRow(' + value_rowcontent + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// autoResizeColumn()
// Sets the width of the given column to fit its contents
Blockly.Blocks['sheet_autoresizecolumn'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET);
        this.appendValueInput("SHEET")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET);
        this.appendDummyInput()
            .appendField("の");
        this.appendValueInput("COLUMN")
            .setCheck("Number")
            .appendField(Blockly.Msg.GAS.SS.IO.NUMBER_COL);
        this.appendDummyInput()
            .appendField("の幅をフィット");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(20);
        this.setTooltip('指定された列の幅を内容に合わせて設定します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#autoResizeColumn(Integer)');
    }
};
Blockly.JavaScript['sheet_autoresizecolumn'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'SHEET', Blockly.JavaScript.ORDER_NONE);
    var value_column = Blockly.JavaScript.valueToCode(block, 'COLUMN', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.autoResizeColumn(' + value_column + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
clear() Sheet   Clears the sheet of content and formatting information.
clear(options)  Sheet   Clears the sheet of contents and/or format, as specified with the given advanced options.
clearContents() Sheet   Clears the sheet of contents, while preserving formatting information.
clearFormats()  Sheet   Clears the sheet of formatting, while preserving contents.
clearNotes()    Sheet   Clears the sheet of all notes.
*/

// ----------------------------------------------------------------
// copyTo(spreadsheet)
// Copies the sheet to a given spreadsheet, which can be the same spreadsheet as the source.
Blockly.Blocks['sheet_copyto'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET_COPIED);
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET);
        this.appendDummyInput()
            .appendField("を");
        this.appendValueInput("spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("にコピー");
        this.setInputsInline(true);
        this.setOutput(true, "Sheet");
        this.setColour(20);
        this.setTooltip('シートを特定のスプレッドシートにコピーします。スプレッドシートはソースと同じスプレッドシートにすることができます。コピーした用紙の名前は「元の名前のコピー」となります。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#copyTo(Spreadsheet)');
    }
};
Blockly.JavaScript['sheet_copyto'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.copyTo(' + value_spreadsheet + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// deleteColumn(columnPosition)
// Deletes the column at the given column position.
Blockly.Blocks['sheet_deletecolumn'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET);
        this.appendValueInput("SHEET")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET);
        this.appendDummyInput()
            .appendField("の");
        this.appendValueInput("COLUMN")
            .setCheck("Number")
            .appendField(Blockly.Msg.GAS.SS.IO.NUMBER_COL);
        this.appendDummyInput()
            .appendField("を削除");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(20);
        this.setTooltip('指定された列位置の列を削除します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#deleteColumn(Integer)');
    }
};
Blockly.JavaScript['sheet_deletecolumn'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'SHEET', Blockly.JavaScript.ORDER_NONE);
    var value_column = Blockly.JavaScript.valueToCode(block, 'COLUMN', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.deleteColumn(' + value_column + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// deleteColumns(columnPosition, howMany)
// Deletes a number of columns starting at the given column position.
Blockly.Blocks['sheet_deletecolumns'] = {
    init: function() {
        this.appendValueInput("SHEET")
            .setCheck("Sheet")
            .appendField("シート");
        this.appendDummyInput()
            .appendField("の列を");
        this.appendValueInput("COLUMN")
            .setCheck("Number")
        this.appendDummyInput()
            .appendField("から");
        this.appendValueInput("HOWMANY")
            .setCheck("Number")
        this.appendDummyInput()
            .appendField("個削除");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('指定した列の位置（最初の列は 1）から、指定数の列を削除します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#deleteColumns(Integer,Integer)');
    }
};
Blockly.JavaScript['sheet_deletecolumns'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'SHEET', Blockly.JavaScript.ORDER_NONE);
    var value_column = Blockly.JavaScript.valueToCode(block, 'COLUMN', Blockly.JavaScript.ORDER_NONE);
    var value_howmany = Blockly.JavaScript.valueToCode(block, 'HOWMANY', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.deleteColumns(' + value_column + ', ' + value_howmany + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// deleteRow(rowPosition)
// Deletes the row at the given row position.
Blockly.Blocks['sheet_deleterow'] = {
    init: function() {
        this.appendValueInput("SHEET")
            .setCheck("Sheet")
            .appendField("シート");
        this.appendDummyInput()
            .appendField("の");
        this.appendValueInput("rowPosition")
            .setCheck("Number")
            .appendField("行");
        this.appendDummyInput()
            .appendField("を削除");
        this.setInputsInline(true);
        this.setOutput(true, "Sheet");
        this.setColour(20);
        this.setTooltip('指定された行（最初の行は 1）を削除します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#deleteRow(Integer)');
    }
};
Blockly.JavaScript['sheet_deleterow'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'SHEET', Blockly.JavaScript.ORDER_NONE);
    var value_rowposition = Blockly.JavaScript.valueToCode(block, 'rowPosition', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.deleteRow(' + value_rowposition + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// deleteRows(rowPosition, howMany)
// Deletes a number of rows starting at the given row position.
Blockly.Blocks['sheet_deleterows'] = {
    init: function() {
        this.appendValueInput("SHEET")
            .setCheck("Sheet")
            .appendField("シート");
        this.appendDummyInput()
            .appendField("の行を");
        this.appendValueInput("rowPosition")
            .setCheck("Number")
            .appendField("から");
        this.appendValueInput("HOWMANY")
            .setCheck("Number")
            .appendField("個削除");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('指定した行の位置（最初の列は 1）から、指定数の行を削除します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#deleteRows(Integer,Integer)');
    }
};
Blockly.JavaScript['sheet_deleterows'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'SHEET', Blockly.JavaScript.ORDER_ATOMIC);
    var value_rowposition = Blockly.JavaScript.valueToCode(block, 'rowPosition', Blockly.JavaScript.ORDER_ATOMIC);
    var value_howmany = Blockly.JavaScript.valueToCode(block, 'HOWMANY', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_sheet + '.deleteRows(' + value_rowposition + ', ' + value_howmany + ')';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

// ----------------------------------------------------------------
// getActiveCell()
// Returns the active cell in this sheet.
Blockly.Blocks['sheet_getactivecell'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("範囲");
        this.appendValueInput("Sheet")
            .setCheck("Sheet")
            .appendField("シート");
        this.appendDummyInput()
            .appendField("のアクティブなセルの範囲");
        this.setInputsInline(true);
        this.setOutput(true, "Range");
        this.setColour(20);
        this.setTooltip('シートのアクティブセルを返します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getActiveCell()');
    }
};

Blockly.JavaScript['sheet_getactivecell'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.getActiveCell()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// getActiveRange()
// Returns the active range for the active sheet.
Blockly.Blocks['sheet_getactiverange'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("範囲");
        this.appendValueInput("Sheet")
            .setCheck("Sheet")
            .appendField("シート");
        this.appendDummyInput()
            .appendField("のアクティブなセルの範囲");
        this.setInputsInline(true);
        this.setOutput(true, "Range");
        this.setColour(20);
        this.setTooltip('シートのアクティブセルを返します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#getActiveRange()');
    }
};
Blockly.JavaScript['sheet_getactiverange'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.getActiveRange()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
/*
getCharts() EmbeddedChart[] Returns an array of charts on this sheet.
getColumnWidth(columnPosition)  Integer Gets the width in pixels of the given column.
getDataRange()  Range   Returns a Range corresponding to the dimensions in which data is present.
getFrozenColumns()  Integer Returns the number of frozen columns.
getFrozenRows() Integer Returns the number of frozen rows.
getIndex()  Integer Gets the position of the sheet in its parent spreadsheet.
getLastColumn() Integer Returns the position of the last column that has content.
getLastRow()    Integer Returns the position of the last row that has content.
getMaxColumns() Integer Returns the current number of columns in the sheet, regardless of content.
getMaxRows()    Integer Returns the current number of rows in the sheet, regardless of content.
getName()   String  Returns the name of the sheet.
getNamedRanges()    NamedRange[]    Gets all the named ranges in this sheet.
getParent() Spreadsheet Returns the Spreadsheet that contains this sheet.
getProtections(type)    Protection[]    Gets an array of objects representing all protected ranges in the sheet, or a single-element array representing the protection on the sheet itself.

*/
// ----------------------------------------------------------------
// getRange(row, column)
// Returns the range with the top left cell at the given coordinates.
Blockly.Blocks['sheet_getrange_row_column'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("範囲");
        this.appendValueInput("Sheet")
            .setCheck("Sheet")
            .appendField("シート");
        this.appendDummyInput()
            .appendField("の");
        this.appendValueInput("row")
            .setCheck("Number")
            .appendField("行");
        this.appendValueInput("column")
            .setCheck("Number")
            .appendField("列");
        this.appendDummyInput()
            .appendField("の範囲");
        this.setInputsInline(true);
        this.setOutput(true, "Range");
        this.setColour(20);
        this.setTooltip('指定された座標にある範囲を返します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/sheet#getRange(Integer,Integer)');
    }
};
Blockly.JavaScript['sheet_getrange_row_column'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_NONE);
    var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.getRange(' + value_row + ',' + value_column + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
/*
getRange(row, column, numRows)  Range   Returns the range with the top left cell at the given coordinates, and with the given number of rows.
getRange(row, column, numRows, numColumns)  Range   Returns the range with the top left cell at the given coordinates with the given number of rows and columns.
getRange(a1Notation)    Range   Returns the range as specified in A1 notation or R1C1 notation.
getRowHeight(rowPosition)   Integer Gets the height in pixels of the given row.
getSheetId()    Integer Returns the ID of the sheet represented by this object.
getSheetName()  String  Returns the sheet name.
getSheetValues(startRow, startColumn, numRows, numColumns)  Object[][]  Returns the rectangular grid of values for this range starting at the given coordinates.
getTabColor()   String  Gets the sheet tab color, or null if the sheet tab has no color.
hideColumn(column)  void    Hides the columns in the given range.
hideColumns(columnIndex)    void    Hides the column at the given index.
hideColumns(columnIndex, numColumns)    void    Hides one or more consecutive columns starting at the given index.
hideRow(row)    void    Hides the rows in the given range.
hideRows(rowIndex)  void    Hides the row at the given index.
hideRows(rowIndex, numRows) void    Hides one or more consecutive rows starting at the given index.
hideSheet() Sheet   Hides this sheet.
insertChart(chart)  void    Adds a new chart to this sheet.
insertColumnAfter(afterPosition)    Sheet   Inserts a column after the given column position.
insertColumnBefore(beforePosition)  Sheet   Inserts a column before the given column position.
insertColumns(columnIndex)  void    Inserts a blank column in a sheet at the specified location.
insertColumns(columnIndex, numColumns)  void    Inserts one or more consecutive blank columns in a sheet starting at the specified location.
insertColumnsAfter(afterPosition, howMany)  Sheet   Inserts a number of columns after the given column position.
insertColumnsBefore(beforePosition, howMany)    Sheet   Inserts a number of columns before the given column position.
insertImage(blob, column, row)  void    Inserts a Blob as an image in the document at a given row and column.
insertImage(blob, column, row, offsetX, offsetY)    void    Inserts a Blob as an image in the document at a given row and column, with a pixel offset.
insertImage(url, column, row)   void    Inserts an image in the document at a given row and column.
insertImage(url, column, row, offsetX, offsetY) void    Inserts an image in the document at a given row and column, with a pixel offset.
insertRowAfter(afterPosition)   Sheet   Inserts a row after the given row position.
insertRowBefore(beforePosition) Sheet   Inserts a row before the given row position.
insertRows(rowIndex)    void    Inserts a blank row in a sheet at the specified location.
insertRows(rowIndex, numRows)   void    Inserts one or more consecutive blank rows in a sheet starting at the specified location.
insertRowsAfter(afterPosition, howMany) Sheet   Inserts a number of rows after the given row position.
insertRowsBefore(beforePosition, howMany)   Sheet   Inserts a number of rows before the given row position.
isSheetHidden() Boolean Returns true if the sheet is currently hidden.
newChart()  EmbeddedChartBuilder    Returns a builder to create a new chart for this sheet.
protect()   Protection  Creates an object that can protect the sheet from being edited except by users who have permission.
removeChart(chart)  void    Removes a chart from the parent sheet.
setActiveRange(range)   Range   Sets the active range for the active sheet.
setActiveSelection(range)   Range   Sets the active selection region for this sheet.
setActiveSelection(a1Notation)  Range   Sets the active selection, as specified in A1 notation or R1C1 notation.
setColumnWidth(columnPosition, width)   Sheet   Sets the width of the given column in pixels.
setFrozenColumns(columns)   void    Freezes the given number of columns.
setFrozenRows(rows) void    Freezes the given number of rows.
setName(name)   Sheet   Sets the sheet name.
setRowHeight(rowPosition, height)   Sheet   Sets the row height of the given row in pixels.
setTabColor(color)  Sheet   Sets the sheet tab color.
showColumns(columnIndex)    void    Unhides the column at the given index.
showColumns(columnIndex, numColumns)    void    Unhides one or more consecutive columns starting at the given index.
showRows(rowIndex)  void    Unhides the row at the given index.
showRows(rowIndex, numRows) void    Unhides one or more consecutive rows starting at the given index.
showSheet() Sheet   Makes the sheet visible.
sort(columnPosition)    Sheet   Sorts a sheet by column, ascending.
sort(columnPosition, ascending) Sheet   Sorts a sheet by column.
unhideColumn(column)    void    Unhides the column in the given range.
unhideRow(row)  void    Unhides the row in the given range.
updateChart(chart)  void    Updates the chart on this sheet.
 **/
