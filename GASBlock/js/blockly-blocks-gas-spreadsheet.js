/*
// ----------------------------------------------------------------
// addEditor(String)

// ----------------------------------------------------------------
// addEditor(User)

// ----------------------------------------------------------------
// addEditors(emailAddresses)
*/
// ----------------------------------------------------------------
// addMenu()
// Creates a new menu in the Spreadsheet UI. Each menu entry runs a user-defined function. Usually, you will want to call it from the onOpen function so that the menu is automatically created when the Spreadsheet is loaded.
Blockly.Blocks['spreadsheet_addmenu'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("メニューを作成");
    this.appendValueInput("SPREADSHEET")
      .setCheck(Blockly.TYPE.GAS.SS)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("スプレッドシート")
      .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
    this.appendValueInput("name")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("メニュー")
      .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
    this.appendValueInput("subMenus")
      .setCheck("Array")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("サブメニュー")
      .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.ARR, 15, 15, "*"));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.COLOR.GAS.UI);
    this.setTooltip('スプレッドシートのUIに新しいメニューを作成します。各メニュー項目は、ユーザー定義関数を実行します。通常、スプレッドシートがロードされたときにメニューが自動的に作成されるように、onOpen関数から呼び出す必要があります。');
    this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addMenu(String,Object)');
  }
};
Blockly.JavaScript['spreadsheet_addmenu'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'SPREADSHEET', Blockly.JavaScript.ORDER_NONE);
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_NONE);
  var value_submenus = Blockly.JavaScript.valueToCode(block, 'subMenus', Blockly.JavaScript.ORDER_NONE);
  var code = value_spreadsheet + '.addMenu(' + value_name + ', ' + value_submenus + ');\n';
  return code;
};

//
Blockly.Blocks['sheet_menu_tem'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("サブメニュー項目");
    this.appendValueInput("name")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("サブメニュー名")
        .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
    this.appendValueInput("function")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("呼び出し関数")
        .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
    this.setInputsInline(false);
    this.setOutput(true, "Object");
    this.setColour(Blockly.COLOR.GAS.UI);
    this.setTooltip('「メニューを作成」に使用するサブメニューの項目です。リストにして使用します。');
    this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addMenu(String,Object)');
  }
};
Blockly.JavaScript['sheet_menu_tem'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_NONE);
  var value_function = Blockly.JavaScript.valueToCode(block, 'function', Blockly.JavaScript.ORDER_NONE);
  var code = '{name:' + value_name + ',functionName:' + value_function + '}';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
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
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"))
            .appendField("スプレッドシート複製");
        this.appendValueInput("SPREADSHEET")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("複製元")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.appendValueInput("NEWNAME")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("名前")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SS);
        this.setColour(Blockly.COLOR.GAS.SS);
        this.setTooltip('スプレッドシートをコピーして新しいものを返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#copy(String)');
    }
};
Blockly.JavaScript['spreadsheet_copy'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'SPREADSHEET', Blockly.JavaScript.ORDER_NONE);
    var value_newname = Blockly.JavaScript.valueToCode(block, 'NEWNAME', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.copy(' + value_newname + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// deleteActiveSheet()
Blockly.Blocks['spreadsheet_deleteactivesheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SEET, 15, 15, "*"))
            .appendField("シート削除");
        this.appendValueInput("SPREADSHEET")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("対象スプレッドシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("でアクティブなシート");
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.SEET);
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
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SEET, 15, 15, "*"))
            .appendField("シート削除");
        this.appendValueInput("SpreadSheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("対象スプレッドシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("削除するシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SEET, 15, 15, "*"));
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.COLOR.GAS.SEET);
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
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SEET, 15, 15, "*"))
            .appendField("シート複製");
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("対象スプレッドシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("でアクティブなシート");
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.SEET);
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
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SEET, 15, 15, "*"))
            .appendField("シート取得");
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("対象スプレッドシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("のアクティブシート");
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.SEET);
        this.setTooltip('スプレッドシート内のアクティブシートを取得します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#getActiveSheet()');
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
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"))
            .appendField("スプレッドシートID取得");
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("スプレッドシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "String");
        this.setColour(Blockly.COLOR.GAS.SS);
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
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"))
            .appendField("スプレッドシート名取得");
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("スプレッドシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "String");
        this.setColour(Blockly.COLOR.GAS.SS);
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
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"))
            .appendField("シート数取得");
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("スプレッドシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setColour(Blockly.COLOR.GAS.SEET);
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
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲取得");
        this.appendValueInput("Spreadsheet")
            .setCheck([Blockly.TYPE.GAS.SS, Blockly.TYPE.GAS.SHEET])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("スプレッドシート/シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"))
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SEET, 15, 15, "*"));
        this.appendValueInput("a1Notation")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("A1/R1C1表記")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
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
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SEET, 15, 15, "*"))
            .appendField("シート取得");
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("スプレッドシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.appendValueInput("name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("名前")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.SEET);
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
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.ARR, 15, 15, "*"))
            .appendField("全てのシートを取得");
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("スプレッドシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Array");
        this.setColour(Blockly.COLOR.GAS.SEET);
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
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"))
            .appendField("スプレッドシートURL取得");
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("スプレッドシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "String");
        this.setColour(Blockly.COLOR.GAS.SS);
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
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SEET, 15, 15, "*"))
            .appendField("新しいシートを挿入");
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("スプレッドシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.appendValueInput("SheetName")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.OP, 15, 15, "*"))
            .appendField("名前")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.appendValueInput("sheetIndex")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.OP, 15, 15, "*"))
            .appendField("位置")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.SEET);
        this.setTooltip('スプレッドシートにデフォルトの名前で新しいシートを挿入し、アクティブなシートになります。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#insertSheet()');
    }
};
Blockly.JavaScript['spreadsheet_insertsheet'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var value_SheetName = Blockly.JavaScript.valueToCode(block, 'SheetName', Blockly.JavaScript.ORDER_NONE);
    var value_sheetIndex = Blockly.JavaScript.valueToCode(block, 'sheetIndex', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.insertSheet()';
    if (value_SheetName && !value_sheetIndex) {
        code = value_spreadsheet + '.insertSheet(' + value_SheetName + ')';
    }else if (!value_SheetName && value_sheetIndex){
        code = value_spreadsheet + '.insertSheet(' + value_sheetIndex + ')';
    }else if (value_SheetName && value_sheetIndex){
        code = value_spreadsheet + '.insertSheet('+ value_SheetName + ',' + value_sheetIndex + ')';
    }
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
insertSheet(sheetIndex, options)    Sheet   Inserts a new sheet in the spreadsheet at the given index and uses optional advanced arguments.
insertSheet(options)    Sheet   Inserts a new sheet in the spreadsheet, with a default name and uses optional advanced arguments.
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
            .appendField("スプレッドシート名変更");
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("スプレッドシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.appendValueInput("newName")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("名前")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.COLOR.GAS.SS);
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
            .appendField("シート名変更");
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("スプレッドシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.appendDummyInput()
            .appendField("のアクティブシート");
        this.appendValueInput("newName")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("名前")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.COLOR.GAS.SEET);
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
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SEET, 15, 15, "*"))
            .appendField("シートをアクティブ");
        this.appendValueInput("SpreadSheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("スプレッドシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.appendValueInput("sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SEET, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.SEET);
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
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.TST, 15, 15, "*"))
            .appendField("メッセージ表示");
        this.appendValueInput("SpreadSheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("スプレッドシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.appendValueInput("msg")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("メッセージ")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.appendValueInput("title")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.OP, 15, 15, "*"))
            .appendField("タイトル")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.appendValueInput("timeoutSeconds")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.OP, 15, 15, "*"))
            .appendField("秒")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.COLOR.GAS.TOAST);
        this.setTooltip('メッセージのポップアップウィンドウを表示します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#toast(String)');
    }
};
Blockly.JavaScript['spreadsheet_toast'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'SpreadSheet', Blockly.JavaScript.ORDER_NONE);
    var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_NONE);
    var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_NONE);
    var value_timeoutSeconds = Blockly.JavaScript.valueToCode(block, 'timeoutSeconds', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.toast(' + value_msg + ');\n';
    if(value_title && !value_timeoutSeconds){
        code = value_spreadsheet + '.toast(' + value_msg + ',' + value_title + ');\n';
    }else if(value_title && value_timeoutSeconds){
        code = value_spreadsheet + '.toast(' + value_msg + ',' + value_title + ',' + value_timeoutSeconds + ');\n';
    }
    return code;
};

/*
unhideColumn(column)    void    Unhides the column in the given range.
unhideRow(row)  void    Unhides the row in the given range.
updateMenu(name, subMenus)  void    Updates a menu that was added by addMenu(name, subMenus).
*/
