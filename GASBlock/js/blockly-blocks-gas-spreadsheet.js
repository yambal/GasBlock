// ----------------------------------------------------------------
// addEditor(String)
Blockly.Blocks['spreadsheet_addeditor_emailaddress'] = {
    init: function() {
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("エディタを追加");
        this.appendValueInput("EMAIL")
            .setCheck("String")
            .appendField("emailAddress");
        this.setInputsInline(true);
        this.setOutput(true, "Spreadsheet");
        this.setColour(20);
        this.setTooltip('エディタのリストに与えられたユーザーを追加します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addEditor(String)');
    }
};
Blockly.JavaScript['spreadsheet_addeditor_emailaddress'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var value_email = Blockly.JavaScript.valueToCode(block, 'EMAIL', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.addEditor(' + value_email + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
// ----------------------------------------------------------------
// addEditor(User)
Blockly.Blocks['spreadsheet_addeditor_user'] = {
    init: function() {
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("エディタを追加");
        this.appendValueInput("USER")
            .setCheck("User")
            .appendField("ユーザー");
        this.setInputsInline(true);
        this.setOutput(true, "Spreadsheet");
        this.setColour(20);
        this.setTooltip('エディタのリストに与えられたユーザーを追加します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addEditor(User)');
    }
};
Blockly.JavaScript['spreadsheet_addeditor_user'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var value_user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.addEditor(' + value_user + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
*/

// ----------------------------------------------------------------
// addEditors(emailAddresses)
Blockly.Blocks['spreadsheet_addeditors_emailaddresses'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GAS.SS.IO.SS);
    this.appendValueInput("Spreadsheet")
        .setCheck(Blockly.TYPE.GAS.SS);
    this.appendDummyInput()
        .appendField("に");
    this.appendDummyInput()
        .appendField("編集者を追加");
    this.appendValueInput("emailAddresses")
        .setCheck("Array")
        .appendField("メールアドレス（リスト）");
    this.setInputsInline(true);
    this.setOutput(true, "Spreadsheet");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addEditors(String)');
  }
};
Blockly.JavaScript['spreadsheet_addeditors_emailaddresses'] = function(block) {
  var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
  var value_emailaddresses = Blockly.JavaScript.valueToCode(block, 'emailAddresses', Blockly.JavaScript.ORDER_NONE);
  var code = value_spreadsheet + '.addEditors(' + value_emailaddresses + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
// ----------------------------------------------------------------
// addMenu()
Blockly.Blocks['spreadsheet_addmenu'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("メニュー");
        this.appendValueInput("MENUNAME")
            .setCheck("String")
            .appendField("メニュー名");
        this.appendValueInput("SUBMENUES")
            .setCheck("Array")
            .appendField("サブメニュー");
        this.appendDummyInput()
            .appendField("を");
        this.appendValueInput("SPREADSHEET")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("に作成");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip('スプレッドシートUIで新しいメニューを作成します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addMenu(String,Object)');
    }
};
Blockly.JavaScript['spreadsheet_addmenu'] = function(block) {
    var value_menuname = Blockly.JavaScript.valueToCode(block, 'MENUNAME', Blockly.JavaScript.ORDER_NONE);
    var value_submenues = Blockly.JavaScript.valueToCode(block, 'SUBMENUES', Blockly.JavaScript.ORDER_NONE);
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'SPREADSHEET', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.addMenu(' + value_menuname + ', ' + value_submenues + ');\n';
    return code;
};
*/

// ----------------------------------------------------------------
// addViewer(String)
Blockly.Blocks['spreadsheet_addviewer_emailaddress'] = {
    init: function() {
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
        .appendField("に");
        this.appendDummyInput()
            .appendField("閲覧者を追加");
        this.appendValueInput("EMAIL")
            .setCheck("String")
            .appendField("emailAddress");
        this.setInputsInline(true);
        this.setOutput(true, "Spreadsheet");
        this.setColour(20);
        this.setTooltip('閲覧者のリストに与えられたユーザーを追加します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addViewer(String)');
    }
};
Blockly.JavaScript['spreadsheet_addviewer_emailaddress'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var value_email = Blockly.JavaScript.valueToCode(block, 'EMAIL', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.addViewer(' + value_email + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
// ----------------------------------------------------------------
// addEditor(User)
Blockly.Blocks['spreadsheet_addviewer_user'] = {
    init: function() {
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField("閲覧者を追加");
        this.appendValueInput("USER")
            .setCheck("User")
            .appendField("ユーザー");
        this.setInputsInline(true);
        this.setOutput(true, "Spreadsheet");
        this.setColour(20);
        this.setTooltip('閲覧者のリストに与えられたユーザーを追加します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addViewer(User)');
    }
};
Blockly.JavaScript['spreadsheet_addviewer_user'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var value_user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.addViewer(' + value_user + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
*/

// ----------------------------------------------------------------
// addViewers(String)
Blockly.Blocks['spreadsheet_addviewers_emailaddress'] = {
    init: function() {
        this.appendValueInput("Spreadsheet")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
        .appendField("に");
        this.appendDummyInput()
            .appendField("閲覧者を追加");
        this.appendValueInput("EMAILS")
            .setCheck("Array")
            .appendField("emailAddress（複数）");
        this.setInputsInline(true);
        this.setOutput(true, "Spreadsheet");
        this.setColour(20);
        this.setTooltip('閲覧者のリストに与えられたユーザー（複数）を追加します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#addViewers(String)');
    }
};
Blockly.JavaScript['spreadsheet_addviewers_emailaddress'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'Spreadsheet', Blockly.JavaScript.ORDER_NONE);
    var value_emails = Blockly.JavaScript.valueToCode(block, 'EMAILS', Blockly.JavaScript.ORDER_NONE);
    var code = value_spreadsheet + '.addViewers(' + value_emails + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

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
getRange(a1Notation)    Range   Returns the range as specified in A1 notation or R1C1 notation.
getRangeByName(name)    Range   Returns a named range, or null if no range with the given name is found.
getRowHeight(rowPosition)   Integer Gets the height in pixels of the given row.
getSheetByName(name)    Sheet   Returns a sheet with the given name.
getSheetId()    Integer Returns the ID of the sheet represented by this object.
getSheetName()  String  Returns the sheet name.
getSheetValues(startRow, startColumn, numRows, numColumns)  Object[][]  Returns the rectangular grid of values for this range starting at the given coordinates.
getSheets() Sheet[] Gets all the sheets in this spreadsheet.
getSpreadsheetLocale()  String  Gets the spreadsheet locale.
getSpreadsheetTimeZone()    String  Gets the time zone for the spreadsheet.
getUrl()    String  Returns the url for the given spreadsheet.
getViewers()    User[]  Gets the list of viewers and commenters for this Spreadsheet.
hideColumn(column)  void    Hides the columns in the given range.
hideRow(row)    void    Hides the rows in the given range.
insertColumnAfter(afterPosition)    Sheet   Inserts a column after the given column position.
insertColumnBefore(beforePosition)  Sheet   Inserts a column before the given column position.
insertColumnsAfter(afterPosition, howMany)  Sheet   Inserts a number of columns after the given column position.
insertColumnsBefore(beforePosition, howMany)    Sheet   Inserts a number of columns before the given column position.
insertImage(blob, column, row)  void    Inserts a Blob as an image in the document at a given row and column.
insertImage(blob, column, row, offsetX, offsetY)    void    Inserts a Blob as an image in the document at a given row and column, with a pixel offset.
insertImage(url, column, row)   void    Inserts an image in the document at a given row and column.
insertImage(url, column, row, offsetX, offsetY) void    Inserts an image in the document at a given row and column, with a pixel offset.
insertRowAfter(afterPosition)   Sheet   Inserts a row after the given row position.
insertRowBefore(beforePosition) Sheet   Inserts a row before the given row position.
insertRowsAfter(afterPosition, howMany) Sheet   Inserts a number of rows after the given row position.
insertRowsBefore(beforePosition, howMany)   Sheet   Inserts a number of rows before the given row position.
insertSheet()   Sheet   Inserts a new sheet in the spreadsheet, with a default name.
insertSheet(sheetIndex) Sheet   Inserts a new sheet in the spreadsheet at the given index.
insertSheet(sheetIndex, options)    Sheet   Inserts a new sheet in the spreadsheet at the given index and uses optional advanced arguments.
insertSheet(options)    Sheet   Inserts a new sheet in the spreadsheet, with a default name and uses optional advanced arguments.
insertSheet(sheetName)  Sheet   Inserts a new sheet in the spreadsheet with the given name.
insertSheet(sheetName, sheetIndex)  Sheet   Inserts a new sheet in the spreadsheet with the given name at the given index.
insertSheet(sheetName, sheetIndex, options) Sheet   Inserts a new sheet in the spreadsheet with the given name at the given index and uses optional advanced arguments.
insertSheet(sheetName, options) Sheet   Inserts a new sheet in the spreadsheet with the given name and uses optional advanced arguments.
moveActiveSheet(pos)    void    Moves the active sheet to the given position in the list of sheets.
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

/*
setActiveRange(range)   Range   Sets the active range for the active sheet.
setActiveSelection(range)   Range   Sets the active selection region for this sheet.
setActiveSelection(a1Notation)  Range   Sets the active selection, as specified in A1 notation or R1C1 notation.
setActiveSheet(sheet)   Sheet   Sets the given sheet to be the active sheet in the spreadsheet.
setColumnWidth(columnPosition, width)   Sheet   Sets the width of the given column in pixels.
setFrozenColumns(columns)   void    Freezes the given number of columns.
setFrozenRows(rows) void    Freezes the given number of rows.
setNamedRange(name, range)  void    Names a range.
setRowHeight(rowPosition, height)   Sheet   Sets the row height of the given row in pixels.
setSpreadsheetLocale(locale)    void    Sets the spreadsheet locale.
setSpreadsheetTimeZone(timezone)    void    Sets the time zone for the spreadsheet.
show(userInterface) void    Displays a custom user interface component in a dialog centered in the user's browser's viewport.
sort(columnPosition)    Sheet   Sorts a sheet by column, ascending.
sort(columnPosition, ascending) Sheet   Sorts a sheet by column.
toast(msg)  void    Shows a popup window in the lower right corner of the spreadsheet with the given message.
toast(msg, title)   void    Shows a popup window in the lower right corner of the spreadsheet with the given message and title.
toast(msg, title, timeoutSeconds)   void    Shows a popup window in the lower right corner of the spreadsheet with the given title and message, that stays visible for a certain length of time.
unhideColumn(column)    void    Unhides the column in the given range.
unhideRow(row)  void    Unhides the row in the given range.
updateMenu(name, subMenus)  void    Updates a menu that was added by addMenu(name, subMenus).
*/

