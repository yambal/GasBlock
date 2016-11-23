/* GAS */
Blockly.TYPE = {};
Blockly.TYPE.GAS = {};
Blockly.TYPE.GAS.SS = "Spreadsheet";
Blockly.TYPE.GAS.SHEET = "Sheet";
Blockly.TYPE.GAS.RANGE = "Range";
Blockly.TYPE.GAS.DATE = "Date";
Blockly.TYPE.GAS.UI = "UI";

Blockly.COLOR = {};
Blockly.COLOR.GAS = {};
Blockly.COLOR.GAS.SS = 75;
Blockly.COLOR.GAS.SEET = 60;
Blockly.COLOR.GAS.RANGE = 45;
Blockly.COLOR.GAS.ROWCOL = 30;
Blockly.COLOR.GAS.ROWINDEX = 15;
Blockly.COLOR.GAS.COLINDEX = 0;
Blockly.COLOR.GAS.TOAST = 160;

Blockly.IMG = {};
Blockly.IMG.ICON = {};
Blockly.IMG.ICON.GAS = {};
Blockly.IMG.ICON.GAS.SS = "img/SS.png";
Blockly.IMG.ICON.GAS.SEET = "img/Sheet.png";
Blockly.IMG.ICON.GAS.OP = "img/Option.png";
Blockly.IMG.ICON.GAS.ROWS = "img/Rows.png";
Blockly.IMG.ICON.GAS.COLS = "img/Columns.png";
Blockly.IMG.ICON.GAS.RANG = "img/Range.png";
Blockly.IMG.ICON.COM = {};
Blockly.IMG.ICON.COM.STR = "img/String.png";
Blockly.IMG.ICON.COM.NUM = "img/Number.png";
Blockly.IMG.ICON.COM.ARR = "img/Array.png";
Blockly.IMG.ICON.COM.TST = "img/Toast.png";

Blockly.Blocks['next'] = {
    init: function() {
        this.appendValueInput("INPUT")
            .setCheck(null)
            .appendField("");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['next'] = function(block) {
    var value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_input + ';\n';
    return code;
};

// ------------------------------------------------------------
// SpreadsheetApp.create()
Blockly.Blocks['spreadsheetapp_create'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"))
            .appendField("新規スプレッドシート作成");
        this.appendValueInput("NAME")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("名前")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.appendValueInput("ROWS")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.OP, 15, 15, "*"))
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.ROWS, 15, 15, "*"))
            .appendField("行数");
        this.appendValueInput("COLUMNS")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.OP, 15, 15, "*"))
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.COLS, 15, 15, "*"))
            .appendField("列数");
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SS);
        this.setColour(Blockly.COLOR.GAS.SS);
        this.setTooltip("与えられた名称で新しいスプレッドシートを作成します");
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#create(String)');
    }
};
Blockly.JavaScript['spreadsheetapp_create'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
    var value_rows = Blockly.JavaScript.valueToCode(block, 'ROWS', Blockly.JavaScript.ORDER_NONE);
    var value_columns = Blockly.JavaScript.valueToCode(block, 'COLUMNS', Blockly.JavaScript.ORDER_NONE);
    var code = 'SpreadsheetApp.create(' + value_name + ')';
    if (value_rows && value_columns) {
        code = 'SpreadsheetApp.create(' + value_name + ', ' + value_rows + ', ' + value_columns + ')';
    }
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// SpreadsheetApp.flush()
Blockly.Blocks['spreadsheetapp_flush'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("更新を適用");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip("保留中のすべてのスプレッドシートの変更を適用します");
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#flush()');
    }
};
Blockly.JavaScript['spreadsheetapp_flush'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'SpreadsheetApp.flush();\n';
    return code;
};

// ------------------------------------------------------------
// SpreadsheetApp.getActive()
Blockly.Blocks['spreadsheetapp_getactive'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"))
            .appendField("スプレッドシート取得");
        this.appendDummyInput()
            .appendField("現在アクティブなスプレッドシート");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SS);
        this.setColour(Blockly.COLOR.GAS.SS);
        this.setTooltip("現在アクティブなスプレッドシートを返します。スプレッドシートがない場合はnullを返します。");
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getActive()');
    }
};
Blockly.JavaScript['spreadsheetapp_getactive'] = function(block) {
    var code = 'SpreadsheetApp.getActive()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// SpreadsheetApp.getActiveRange()
Blockly.Blocks['spreadsheetapp_getactiverange'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲取得");
        this.appendDummyInput()
            .appendField("ユーザが選択した範囲");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip("ユーザが選択した範囲を返します。");
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getActiveRange()');
    }
};
Blockly.JavaScript['spreadsheetapp_getactiverange'] = function(block) {
    var code = 'SpreadsheetApp.getActiveRange()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// SpreadsheetApp.getActiveSheet()
Blockly.Blocks['spreadsheetapp_getactivesheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SEET, 15, 15, "*"))
            .appendField("シート取得");
        this.appendDummyInput()
            .appendField("現在のアクティブ");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.SEET);
        this.setTooltip("アクティブシートを取得します。スプレッドシート画面に表示されているシートです。");
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getActiveSheet()');
    }
};
Blockly.JavaScript['spreadsheetapp_getactivesheet'] = function(block) {
    var code = 'SpreadsheetApp.getActiveSheet()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// SpreadsheetApp.getActiveSpreadsheet()
Blockly.Blocks['spreadsheetapp_getactivespreadsheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"))
            .appendField("スプレッドシート取得");
        this.appendDummyInput()
            .appendField("現在アクティブなスプレッドシート");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SS);
        this.setColour(Blockly.COLOR.GAS.SS);
        this.setTooltip("現在アクティブなスプレッドシートを返します。スプレッドシートがない場合はnullを返します。");
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getActiveSpreadsheet()');
    }
};
Blockly.JavaScript['spreadsheetapp_getactivespreadsheet'] = function(block) {
    var code = 'SpreadsheetApp.getActiveSpreadsheet()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// SpreadsheetApp.getUi()
Blockly.Blocks['spreadsheetapp_getui'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("UI");
        this.appendDummyInput()
            .appendField("スプレッドシートのUI");
        this.setOutput(true, Blockly.TYPE.GAS.UI);
        this.setInputsInline(true);
        this.setColour(20);
        this.setTooltip("スプレッドシートのUI環境のインスタンスを返します");
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getUi()');
    }
};
Blockly.JavaScript['spreadsheetapp_getui'] = function(block) {
    var code = 'SpreadsheetApp.getUi()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
// ------------------------------------------------------------
// SpreadsheetApp.newDataValidation()
Blockly.Blocks['spreadsheetapp_newdatavalidation'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GAS_PREADSHEETAPP_NEW_DATA_VALIDATION);
    this.setOutput(true, "DataValidationBuilder");
    this.setColour(20);
    this.setTooltip(Blockly.Msg.GAS_PREADSHEETAPP_NEW_DATA_VALIDATION_HELP);
    this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#newDataValidation()');
  }
};
Blockly.JavaScript['spreadsheetapp_newdatavalidation'] = function(block) {
  var code = 'SpreadsheetApp.newDataValidation()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// ------------------------------------------------------------
// SpreadsheetApp.open()
Blockly.Blocks['spreadsheetapp_open'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GAS.SS.IO.SS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GAS_PREADSHEETAPP_OPEN);
    this.appendValueInput("File")
      .setCheck("File")
      .appendField("File");
    this.setInputsInline(true);
    this.setOutput(true, Blockly.TYPE.GAS.SS);
    this.setColour(20);
    this.setTooltip(Blockly.Msg.GAS_PREADSHEETAPP_OPEN_HELP);
    this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#open(File)');
  }
};
Blockly.JavaScript['spreadsheetapp_open'] = function(block) {
  var value_file = Blockly.JavaScript.valueToCode(block, 'File', Blockly.JavaScript.ORDER_NONE);
  var code = 'SpreadsheetApp.open(' + value_file + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
*/

// ------------------------------------------------------------
// SpreadsheetApp.openById()
Blockly.Blocks['spreadsheetapp_openbyid'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"))
            .appendField("スプレッドシート取得");
        this.appendValueInput("ID")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("ID")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SS);
        this.setColour(Blockly.COLOR.GAS.SS);
        this.setTooltip("指定したIDでスプレッドシートを開きます。");
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#openById(String)');
    }
};
Blockly.JavaScript['spreadsheetapp_openbyid'] = function(block) {
    var value_id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_NONE);
    var code = 'SpreadsheetApp.openById(' + value_id + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// SpreadsheetApp.openByUrl()
Blockly.Blocks['spreadsheetapp_openbyurl'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"))
            .appendField("スプレッドシート取得");
        this.appendValueInput("URL")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("URL")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SS);
        this.setColour(Blockly.COLOR.GAS.SS);
        this.setTooltip("指定したURLでスプレッドシートを開きます。");
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#openByUrl(String)');
    }
};
Blockly.JavaScript['spreadsheetapp_openbyurl'] = function(block) {
    var value_url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_NONE);
    var code = 'SpreadsheetApp.openByUrl(' + value_url + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// SpreadsheetApp.setActiveRange(range)
Blockly.Blocks['spreadsheetapp_setactiverange'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲選択");
        this.appendValueInput("RANGE")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲");
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip("アプリケーションのアクティブ範囲を設定します。スプレッドシートのUIには、選択した範囲を含むシートが表示され、選択した範囲で定義されたセルが選択されます。");
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#setActiveRange(Range)');
    }
};
Blockly.JavaScript['spreadsheetapp_setactiverange'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'RANGE', Blockly.JavaScript.ORDER_NONE);
    var code = 'SpreadsheetApp.setActiveRange(' + value_range + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// SpreadsheetApp.setActiveSheet(sheet)
Blockly.Blocks['spreadsheetapp_setactivesheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SEET, 15, 15, "*"))
            .appendField("シート選択");
        this.appendValueInput("SHEET")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SEET, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.SEET);
        this.setTooltip("アクティブシートに設定します。シートが別のスプレッドシートに属していない場合、スプレッドシートのUIには選択したシートが表示されます。");
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#setActiveSheet(Sheet)');
    }
};
Blockly.JavaScript['spreadsheetapp_setactivesheet'] = function(block) {
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'SHEET', Blockly.JavaScript.ORDER_NONE);
    var code = 'SpreadsheetApp.setActiveSheet(' + value_sheet + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// SpreadsheetApp.setActiveSpreadsheet(newActiveSpreadsheet)
Blockly.Blocks['spreadsheetapp_setactivespreadsheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("スプレッドシートをアクティブ");
        this.appendValueInput("SPREADSHEET")
            .setCheck(Blockly.TYPE.GAS.SS)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("スプレッドシート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SS, 15, 15, "*"));
        this.setInputsInline(false);
        this.setColour(Blockly.COLOR.GAS.SS);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip("アクティブなスプレッドシートを設定します。");
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#setActiveSpreadsheet(Spreadsheet)');
    }
};
Blockly.JavaScript['spreadsheetapp_setactivespreadsheet'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'SPREADSHEET', Blockly.JavaScript.ORDER_NONE);
    var code = 'SpreadsheetApp.setActiveSpreadsheet(' + value_spreadsheet + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
