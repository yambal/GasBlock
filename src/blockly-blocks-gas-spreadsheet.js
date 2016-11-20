/*
// ----------------------------------------------------------------
// addEditor(String)

// ----------------------------------------------------------------
// addEditor(User)

// ----------------------------------------------------------------
// addEditors(emailAddresses)

// ----------------------------------------------------------------
// addMenu()

// ----------------------------------------------------------------
// addViewer(String)

// ----------------------------------------------------------------
// addEditor(User)

// ----------------------------------------------------------------
// addViewers(String)

*/
// ----------------------------------------------------------------
// copy(name)
Blockly.Blocks['spreadsheet_copy'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.SS_COPY_ORIGINAL);
        this.appendValueInput("SPREADSHEET")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("を");
        this.appendValueInput("NEWNAME")
            .setCheck(null)
            .appendField(Blockly.Msg.GAS.SS.IO.STRING_NAME);
        this.appendDummyInput()
            .appendField("で複製");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SS);
        this.setColour(20);
        this.setTooltip('スプレッドシートをコピーします');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#copy(String)');
    }
};
Blockly.JavaScript['spreadsheet_copy'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'SPREADSHEET', Blockly.JavaScript.ORDER_NONE);
    var value_newname = Blockly.JavaScript.valueToCode(block, 'NEWNAME', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.copy(' + value_newname + ');';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// deleteActiveSheet()
Blockly.Blocks['spreadsheet_deleteactivesheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET_ACTIVED);
        this.appendDummyInput()
            .appendField("現在アクティブなシートを");
        this.appendValueInput("SPREADSHEET")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("から削除");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(20);
        this.setTooltip('現在アクティブなシートを削除します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#deleteActiveSheet()');
    }
};

Blockly.JavaScript['spreadsheet_deleteactivesheet'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'SPREADSHEET', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.deleteActiveSheet()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
deleteColumn(columnPosition)    Sheet   Deletes the column at the given column position.
deleteColumns(columnPosition, howMany)  void    Deletes a number of columns starting at the given column position.
deleteRow(rowPosition)  Sheet   Deletes the row at the given row position.
deleteRows(rowPosition, howMany)    void    Deletes a number of rows starting at the given row position. 
*/
// ----------------------------------------------------------------
// deleteSheet(sheet)
// Deletes the specified sheet.
Blockly.Blocks['spreadsheet_deletesheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.VOID);
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET);
        this.appendDummyInput()
            .appendField("を");
        this.appendValueInput("SpreadSheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("から削除");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('指定されたシートを削除します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#deleteSheet(Sheet)');
    }
};
Blockly.JavaScript['spreadsheet_deletesheet'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'SpreadSheet', Blockly.JavaScript.ORDER_NONE);
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.deleteSheet(' + value_sheet + ')';
    return code;
};

// ----------------------------------------------------------------
// duplicateActiveSheet()
// Duplicates the active sheet and makes it the active sheet.
Blockly.Blocks['spreadsheet_duplicateactivesheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET_COPIED);
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("のアクティブなシートを複製");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(20);
        this.setTooltip('アクティブなシートを複製し、その複製したシートをアクティブにします');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#duplicateActiveSheet()');
    }
};
Blockly.JavaScript['spreadsheet_duplicateactivesheet'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.duplicateActiveSheet()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
/*
getActiveCell() Range   Returns the active cell in this sheet.
getActiveRange()    Range   Returns the active range for the active sheet.

*/
// ----------------------------------------------------------------
// getActiveSheet()
// Gets the active sheet in a spreadsheet.
Blockly.Blocks['spreadsheet_getactivesheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET_ACTIVE);
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("のアクティブシート");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(20);
        this.setTooltip('スプレッドシート内のアクティブシートを取得します');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['spreadsheet_getactivesheet'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.getActiveSheet()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
/*
getAs(contentType)  Blob    Return the data inside this object as a blob converted to the specified content type.
getBlob()   Blob    Return the data inside this object as a blob.
getColumnWidth(columnPosition)  Integer Gets the width in pixels of the given column.
getDataRange()  Range   Returns a Range corresponding to the dimensions in which data is present.
getEditors()    User[]  Gets the list of editors for this Spreadsheet.
getFormUrl()    String  Returns the url for the form attached to the spreadsheet, null if there is no form.
getFrozenColumns()  Integer Returns the number of frozen columns.
getFrozenRows() Integer Returns the number of frozen rows.
*/
// ----------------------------------------------------------------
// getId() 
// Gets a unique identifier for this spreadsheet.
Blockly.Blocks['spreadsheet_getid'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.STRING_ID);
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("のID");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(20);
        this.setTooltip('このスプレッドシートの一意のIDを取得します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getId()');
    }
};
Blockly.JavaScript['spreadsheet_getid'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.getId()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// getName() 
// Gets the name of the document.
Blockly.Blocks['spreadsheet_getname'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.STRING_NAME);
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("の名前");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(20);
        this.setTooltip('ドキュメントの名前を取得します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getname');
    }
};
Blockly.JavaScript['spreadsheet_getname'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.getName()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
getNamedRanges()    NamedRange[]    Gets all the named ranges in this spreadsheet.
*/

// ----------------------------------------------------------------
// getNumSheets() 
// Returns the number of sheets in this spreadsheet.
Blockly.Blocks['spreadsheet_getnumsheets'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.NUMBER);
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("内のシート数");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(20);
        this.setTooltip('スプレッドシート内のシート数を返します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getnumsheets');
    }
};
Blockly.JavaScript['spreadsheet_getnumsheets'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.getNumSheets()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
getOwner()  User    Returns the owner of the document.
getProtections(type)    Protection[]    Gets an array of objects representing all protected ranges or sheets in the spreadsheet.
*/

// ----------------------------------------------------------------
// getRange(a1Notation) 
// Returns the range as specified in A1 notation or R1C1 notation.
Blockly.Blocks['spreadsheet_getrange_a1notation'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.RANGE);
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("の内");
        this.appendValueInput("a1Notation")
            .setCheck("String")
            .appendField(Blockly.Msg.GAS.SS.IO.STRING_A1NOTATION);
        this.appendDummyInput()
            .appendField("で指定された範囲");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.Msg.GAS.SS.IO.RANGE);
        this.setColour(20);
        this.setTooltip('A1表記またはR1C1表記で指定された範囲を返します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getrangea1notation');
    }
};
Blockly.JavaScript['spreadsheet_getrange_a1notation'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var value_a1notation = Blockly.JavaScript.valueToCode(block, 'a1Notation', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.getRange(' + value_a1notation + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
getRangeByName(name)    Range   Returns a named range, or null if no range with the given name is found.
getRowHeight(rowPosition)   Integer Gets the height in pixels of the given row.
*/

// ----------------------------------------------------------------
// getSheetByName(name)
// Returns a sheet with the given name.
Blockly.Blocks['spreadsheet_getsheetbyname'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET);
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("の");
        this.appendValueInput("name")
            .setCheck("String")
            .appendField(Blockly.Msg.GAS.SS.IO.STRING_NAME);
        this.appendDummyInput()
            .appendField("のシート");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(20);
        this.setTooltip('指定された名前のシートを返します。複数のシートが同じ名前を持つ場合一番左のものが返されます。指定された名前のシートがない場合はnullを返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getSheetByName(String)');
    }
};
Blockly.JavaScript['spreadsheet_getsheetbyname'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.getSheetByName(' + value_name + ')';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// getSheets()
// Gets all the sheets in this spreadsheet.
Blockly.Blocks['spreadsheet_getsheets'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.ARRAY_OF_SHEET);
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("の全てのシート");
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(20);
        this.setTooltip('スプレッドシート内のすべてのシートを取得します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getSheets()');
    }
};
Blockly.JavaScript['spreadsheet_getsheets'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.getSheets()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
getSpreadsheetLocale()  String  Gets the spreadsheet locale.
getSpreadsheetTimeZone()    String  Gets the time zone for the spreadsheet.
*/

// ----------------------------------------------------------------
//getUrl()
// Returns the url for the given spreadsheet.
Blockly.Blocks['spreadsheet_geturl'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.STRING_URL);
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("のURL");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(20);
        this.setTooltip('スプレッドシートのURLを返します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getUrl()');
    }
};
Blockly.JavaScript['spreadsheet_geturl'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.getUrl()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
getViewers()    User[]  Gets the list of viewers and commenters for this Spreadsheet.
hideColumn(column)  void    Hides the columns in the given range.
hideRow(row)    void    Hides the rows in the given range.
*/

// ----------------------------------------------------------------
// insertSheet()
// Inserts a new sheet in the spreadsheet, with a default name.
Blockly.Blocks['spreadsheet_insertsheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET);
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("に新しいシートを挿入");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(20);
        this.setTooltip('スプレッドシートにデフォルトの名前で新しいシートを挿入し、アクティブなシートになります。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertSheet()');
    }
};
Blockly.JavaScript['spreadsheet_insertsheet'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.insertSheet()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// insertSheet(sheetIndex)
// Inserts a new sheet in the spreadsheet at the given index.
Blockly.Blocks['spreadsheet_insertsheet_sheetindex'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET);
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("の");
        this.appendValueInput("sheetIndex")
            .setCheck("Number")
            .appendField(Blockly.Msg.GAS.SS.IO.NUMBER_SHEET_INDEX);
        this.appendDummyInput()
            .appendField("に新しいシートを挿入");
        this.setInputsInline(true);
        this.setOutput(true, "Sheet");
        this.setColour(20);
        this.setTooltip('スプレッドシートの指定されたインデックスに新しいシートを挿入し、アクティブなシートになります。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertSheet(Integer)');
    }
};
Blockly.JavaScript['spreadsheet_insertsheet_sheetindex'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var value_sheetindex = Blockly.JavaScript.valueToCode(block, 'sheetIndex', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.insertSheet(' + value_sheetindex + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
insertSheet(sheetIndex, options)    Sheet   Inserts a new sheet in the spreadsheet at the given index and uses optional advanced arguments.
insertSheet(options)    Sheet   Inserts a new sheet in the spreadsheet, with a default name and uses optional advanced arguments.
*/

// ----------------------------------------------------------------
// insertSheet(sheetName)
// Inserts a new sheet in the spreadsheet with the given name.
Blockly.Blocks['spreadsheet_insertsheet_sheetname'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET);
        this.appendValueInput("SpreadSheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("に");
        this.appendValueInput("SheetName")
            .setCheck("String")
            .appendField(Blockly.Msg.GAS.SS.IO.STRING_NAME);
        this.appendDummyInput()
            .appendField("で新しいシートを挿入");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(20);
        this.setTooltip('スプレッドシートに指定された名前の新しいシートを挿入し、アクティブなシートになります。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertSheet(String)');
    }
};
Blockly.JavaScript['spreadsheet_insertsheet_sheetname'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'SpreadSheet', Blockly.JavaScript.ORDER_NONE);
    var value_sheetname = Blockly.JavaScript.valueToCode(block, 'SheetName', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.insertSheet(' + value_sheetname + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// insertSheet(sheetName, sheetIndex)
// Inserts a new sheet in the spreadsheet with the given name at the given index.
Blockly.Blocks['spreadsheet_insertsheet_sheetname_sheetindex'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET);
        this.appendValueInput("SpreadSheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("の");
        this.appendValueInput("sheetIndex")
            .setCheck("Number")
            .appendField(Blockly.Msg.GAS.SS.IO.NUMBER_SHEET_INDEX);
        this.appendDummyInput()
            .appendField("に");
        this.appendValueInput("SheetName")
            .setCheck("String")
            .appendField(Blockly.Msg.GAS.SS.IO.STRING_NAME);
        this.appendDummyInput()
            .appendField("で新しいシートを挿入");
        this.setInputsInline(true);
        this.setOutput(true, "Sheet");
        this.setColour(20);
        this.setTooltip('スプレッドシートに指定されたインデックス/名前の新しいシートを挿入し、アクティブなシートになります。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertSheet(String,Integer)');
    }
}
Blockly.JavaScript['spreadsheet_insertsheet_sheetname_sheetindex'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'SpreadSheet', Blockly.JavaScript.ORDER_NONE);
    var value_sheetindex = Blockly.JavaScript.valueToCode(block, 'sheetIndex', Blockly.JavaScript.ORDER_NONE);
    var value_sheetname = Blockly.JavaScript.valueToCode(block, 'SheetName', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.insertSheet(' + value_sheetname + ', ' + value_sheetindex + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
/*
insertSheet(sheetName, sheetIndex, options) Sheet   Inserts a new sheet in the spreadsheet with the given name at the given index and uses optional advanced arguments.
insertSheet(sheetName, options) Sheet   Inserts a new sheet in the spreadsheet with the given name and uses optional advanced arguments.
removeEditor(emailAddress)  Spreadsheet Removes the given user from the list of editors for the Spreadsheet.
removeEditor(user)  Spreadsheet Removes the given user from the list of editors for the Spreadsheet.
removeMenu(name)    void    Removes a menu that was added by addMenu(name, subMenus).
removeNamedRange(name)  void    Deletes a named range with the given name.
removeViewer(emailAddress)  Spreadsheet Removes the given user from the list of viewers and commenters for the Spreadsheet.
removeViewer(user)  Spreadsheet Removes the given user from the list of viewers and commenters for the Spreadsheet.
*/

// ----------------------------------------------------------------
// rename(newName) 
// Renames the document.
Blockly.Blocks['spreadsheet_rename'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.VOID);
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("の名前を");
        this.appendValueInput("newName")
            .setCheck("String")
            .appendField(Blockly.Msg.GAS.SS.IO.STRING);
        this.appendDummyInput()
            .appendField("に変更");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('ドキュメントの名前を変更します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#renamenewname');
    }
};
Blockly.JavaScript['spreadsheet_rename'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var value_newname = Blockly.JavaScript.valueToCode(block, 'newName', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.rename(' + value_newname + ');\n';
    return code;
};

// ----------------------------------------------------------------
// renameActiveSheet(newName) 
// Renames the current active sheet to the given new name.
Blockly.Blocks['spreadsheet_renameactivesheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.VOID);
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("のアクティブなシートの名前を");
        this.appendValueInput("newName")
            .setCheck("String")
            .appendField(Blockly.Msg.GAS.SS.IO.STRING);
        this.appendDummyInput()
            .appendField("に変更");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('現在のアクティブなシートの名前を指定された新しい名前に変更します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#renameActiveSheet(String)');
    }
};
Blockly.JavaScript['spreadsheet_renameactivesheet'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var value_newname = Blockly.JavaScript.valueToCode(block, 'newName', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.renameActiveSheet(' + value_newname + ');\n';
    return code;
};

// ----------------------------------------------------------------
// setActiveSheet(sheet) 
// Sets the given sheet to be the active sheet in the spreadsheet.
Blockly.Blocks['spreadsheet_setactivesheet_sheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET);
        this.appendValueInput("SpreadSheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("の");
        this.appendValueInput("sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET);
        this.appendDummyInput()
            .appendField("をアクティブ");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(20);
        this.setTooltip('シートをスプレッドシート内のアクティブなシートに設定。シートが別のスプレッドシートに属していない場合、選択したシートが表示されます');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#setActiveSheet(Sheet)');
    }
};
Blockly.JavaScript['spreadsheet_setactivesheet_sheet'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'SpreadSheet', Blockly.JavaScript.ORDER_NONE);
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'sheet', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.setActiveSheet(' + value_sheet + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
setNamedRange(name, range)  void    Names a range.
setSpreadsheetLocale(locale)    void    Sets the spreadsheet locale.
setSpreadsheetTimeZone(timezone)    void    Sets the time zone for the spreadsheet.
show(userInterface) void    Displays a custom user interface component in a dialog centered in the user's browser's viewport.
*/

// ----------------------------------------------------------------
// toast(msg)
// Shows a popup window in the lower right corner of the spreadsheet with the given message.
Blockly.Blocks['spreadsheet_toast'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.VOID);
        this.appendValueInput("SpreadSheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("に");
        this.appendValueInput("msg")
            .setCheck("String")
            .appendField(Blockly.Msg.GAS.SS.IO.STRING_MSG);
        this.appendDummyInput()
            .appendField("を表示");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('メッセージのポップアップウィンドウを表示します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#toast(String)');
    }
};
Blockly.JavaScript['spreadsheet_toast'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'SpreadSheet', Blockly.JavaScript.ORDER_NONE);
    var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.toast(' + value_msg + ');\n';
    return code;
};

// ----------------------------------------------------------------
// toast(msg, title)
//Shows a popup window in the lower right corner of the spreadsheet with the given message and title.
Blockly.Blocks['spreadsheet_toast_msg_title'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.VOID);
        this.appendValueInput("SpreadSheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("に");
        this.appendValueInput("title")
            .setCheck("String")
            .appendField(Blockly.Msg.GAS.SS.IO.STRING_TITLE);
        this.appendValueInput("msg")
            .setCheck("String")
            .appendField(Blockly.Msg.GAS.SS.IO.STRING_MSG);
        this.appendDummyInput()
            .appendField("を表示");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('タイトル、メッセージのポップアップウィンドウを表示します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#toast(String,String)');
    }
};
Blockly.JavaScript['spreadsheet_toast_msg_title'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'SpreadSheet', Blockly.JavaScript.ORDER_NONE);
    var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_NONE);
    var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.toast(' + value_msg + ', ' + value_title + ');\n';
    return code;
};

// ----------------------------------------------------------------
// toast(msg, title, timeoutSeconds)
// Shows a popup window in the lower right corner of the spreadsheet with the given title and message, that stays visible for a certain length of time.
Blockly.Blocks['spreadsheet_toast_msg_title_timeoutseconds'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS.IO.VOID);
        this.appendValueInput("SpreadSheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("に");
        this.appendValueInput("title")
            .setCheck("String")
            .appendField(Blockly.Msg.GAS.SS.IO.STRING_TITLE);
        this.appendValueInput("msg")
            .setCheck("String")
            .appendField(Blockly.Msg.GAS.SS.IO.STRING_MSG)
        this.appendDummyInput()
            .appendField("を");
        this.appendValueInput("timeoutSeconds")
            .setCheck("Number")
            .appendField(Blockly.Msg.GAS.SS.IO.NUMBER_SHEET_SEC);
        this.appendDummyInput()
            .appendField("表示");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('タイトル、メッセージのポップアップウィンドウを、指定秒表示します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#toast(String,String,Number)');
    }
};
Blockly.JavaScript['spreadsheet_toast_msg_title_timeoutseconds'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'SpreadSheet', Blockly.JavaScript.ORDER_NONE);
    var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_NONE);
    var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_NONE);
    var value_timeoutseconds = Blockly.JavaScript.valueToCode(block, 'timeoutSeconds', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.toast(' + value_msg + ', ' + value_title + ', ' + value_timeoutseconds + ');\n';
    return code;
};

/*
unhideColumn(column)    void    Unhides the column in the given range.
unhideRow(row)  void    Unhides the row in the given range.
updateMenu(name, subMenus)  void    Updates a menu that was added by addMenu(name, subMenus).
*/
