// ----------------------------------------------------------------
// addEditor(String)
Blockly.Blocks['spreadsheet_addeditor_emailaddress'] = {
    init: function() {
        this.appendValueInput("Spreadsheet")
            .setCheck("Spreadsheet")
            .appendField("スプレッドシート");
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

// ----------------------------------------------------------------
// addViewer(String)
Blockly.Blocks['spreadsheet_addviewer_emailaddress'] = {
    init: function() {
        this.appendValueInput("Spreadsheet")
            .setCheck("Spreadsheet")
            .appendField("スプレッドシート");
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

// ----------------------------------------------------------------
// addViewers(String)
Blockly.Blocks['spreadsheet_addviewers_emailaddress'] = {
    init: function() {
        this.appendValueInput("Spreadsheet")
            .setCheck("Spreadsheet")
            .appendField("スプレッドシート");
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
// addEditor(User)
Blockly.Blocks['spreadsheet_addeditor_user'] = {
    init: function() {
        this.appendValueInput("Spreadsheet")
            .setCheck("Spreadsheet")
            .appendField("スプレッドシート");
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

// ----------------------------------------------------------------
// addEditor(User)
Blockly.Blocks['spreadsheet_addviewer_user'] = {
    init: function() {
        this.appendValueInput("Spreadsheet")
            .setCheck("Spreadsheet")
            .appendField("スプレッドシート");
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
            .setCheck("Spreadsheet")
            .appendField("スプレッドシート");
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

// ----------------------------------------------------------------
Blockly.Blocks['spreadsheet_appendrow'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("シート");
        this.appendValueInput("ROWCONTENT")
            .setCheck("Array")
            .appendField("値の配列");
        this.appendDummyInput()
            .appendField("を");
        this.appendValueInput("SHEET")
            .setCheck("Sheet")
            .appendField("シート");
        this.appendDummyInput()
            .appendField("の最後に追加");
        this.setInputsInline(true);
        this.setOutput(true, "Sheet");
        this.setColour(20);
        this.setTooltip('シートに行を追加します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#appendRow(Object)');
    }
};
Blockly.JavaScript['spreadsheet_appendrow'] = function(block) {
    var value_rowcontent = Blockly.JavaScript.valueToCode(block, 'ROWCONTENT', Blockly.JavaScript.ORDER_NONE);
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'SHEET', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.appendRow(' + value_rowcontent + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// autoResizeColumn()
Blockly.Blocks['sheet_autoresizecolumn'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("シート");
        this.appendDummyInput()
            .appendField("列の幅をフィットする");
        this.appendValueInput("SHEET")
            .setCheck("Sheet")
            .appendField("シート");
        this.appendValueInput("COLUMN")
            .setCheck("Number")
            .appendField("列");
        this.setInputsInline(true);
        this.setOutput(true, "Sheet");
        this.setColour(20);
        this.setTooltip('列の幅をその内容に合わせてます');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#autoResizeColumn(Integer)');
    }
};
Blockly.JavaScript['sheet_autoresizecolumn'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'SHEET', Blockly.JavaScript.ORDER_NONE);
    var value_column = Blockly.JavaScript.valueToCode(block, 'COLUMN', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.autoResizeColumn(' + value_column + ');';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['spreadsheet_copy'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("スプレッドシート");
        this.appendDummyInput()
            .appendField("コピー");
        this.appendValueInput("SPREADSHEET")
            .setCheck("Spreadsheet")
            .appendField("スプレッドシート");
        this.appendValueInput("NEWNAME")
            .setCheck(null)
            .appendField("名前");
        this.setInputsInline(true);
        this.setOutput(true, "Spreadsheet");
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

Blockly.Blocks['spreadsheet_deleteactivesheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("シート");
        this.appendDummyInput()
            .appendField("削除");
        this.appendValueInput("SPREADSHEET")
            .setCheck("Spreadsheet")
            .appendField("スプレッドシート");
        this.appendDummyInput()
            .appendField("のアクティブなシート");
        this.setInputsInline(true);
        this.setOutput(true, "Sheet");
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

Blockly.Blocks['sheet_deletecolumn'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("シート");
        this.appendDummyInput()
            .appendField("列を削除する");
        this.appendValueInput("SHEET")
            .setCheck("Sheet")
            .appendField("シート");
        this.appendValueInput("COLUMN")
            .setCheck("Number")
            .appendField("列");
        this.setInputsInline(true);
        this.setOutput(true, "Sheet");
        this.setColour(20);
        this.setTooltip('指定した列の位置の列を削除します（最初の列は 1 となります）');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet#deleteColumn(Integer)');
    }
};
Blockly.JavaScript['sheet_deletecolumn'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'SHEET', Blockly.JavaScript.ORDER_NONE);
    var value_column = Blockly.JavaScript.valueToCode(block, 'COLUMN', Blockly.JavaScript.ORDER_NONE);
    var code = value_sheet + '.deleteColumn(' + value_column + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.Blocks['sheet_deletecolumns'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("シート");
        this.appendDummyInput()
            .appendField("列を削除");
        this.appendValueInput("SHEET")
            .setCheck("Sheet")
            .appendField("シート");
        this.appendValueInput("COLUMN")
            .setCheck("Number")
            .appendField("列");
        this.appendValueInput("HOWMANY")
            .setCheck("Number")
            .appendField("列数");
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

Blockly.Blocks['sheet_deleterow'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("シート");
        this.appendDummyInput()
            .appendField("行を削除");
        this.appendValueInput("SHEET")
            .setCheck("Sheet")
            .appendField("シート");
        this.appendValueInput("rowPosition")
            .setCheck("Number")
            .appendField("行");
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

Blockly.Blocks['sheet_deleterows'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("シート");
        this.appendDummyInput()
            .appendField("行を削除");
        this.appendValueInput("SHEET")
            .setCheck("Sheet")
            .appendField("シート");
        this.appendValueInput("rowPosition")
            .setCheck("Number")
            .appendField("行");
        this.appendValueInput("HOWMANY")
            .setCheck("Number")
            .appendField("行数");
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

Blockly.Blocks['spreadsheet_deletesheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("スプレッドシート");
        this.appendDummyInput()
            .appendField("シートを削除");
        this.appendValueInput("SpreadSheet")
            .setCheck("Spreadsheet")
            .appendField("スプレッドシート");
        this.appendValueInput("Sheet")
            .setCheck("Sheet")
            .appendField("のシート");
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

Blockly.Blocks['spreadsheet_duplicateactivesheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("シート");
        this.appendDummyInput()
            .appendField("複製");
        this.appendValueInput("Spreadsheet")
            .setCheck("Spreadsheet")
            .appendField("スプレッドシート");
        this.appendDummyInput()
            .appendField("のアクティブなシート");
        this.setInputsInline(true);
        this.setOutput(true, null);
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

Blockly.Blocks['sheet_getactivecell'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("範囲");
        this.appendDummyInput()
            .appendField("アクティブなセルの範囲を取得");
        this.appendValueInput("Sheet")
            .setCheck("Sheet")
            .appendField("シート");
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
