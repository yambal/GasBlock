/* GAS */
Blockly.Msg.GAS = {};
Blockly.Msg.GAS.SS = {};
Blockly.Msg.GAS.SS.IO = {};
Blockly.Msg.GAS.SS_AP = {};
Blockly.Msg.GAS.HELP = {};
Blockly.Msg.GAS.UI = {};

Blockly.Msg.GAS.SS.IO.STRING = "[テキスト]";
Blockly.Msg.GAS.SS.IO.VOID = "[×]";
Blockly.Msg.GAS.SS.IO.SS = "[スプレッドシート]";
Blockly.Msg.GAS.SS.IO.SHEET = "[シート]";
Blockly.Msg.GAS.SS.IO.RANGE = "[範囲]";
Blockly.Msg.GAS.SS.IO.NUMBER = "[数]";
Blockly.Msg.GAS.SS.IO.ARRAY = "[リスト]";
Blockly.Msg.GAS.SS.IO.STRING_NAME = "名前" + Blockly.Msg.GAS.SS.IO.STRING;
Blockly.Msg.GAS.SS.IO.STRING_ID = "ID" + Blockly.Msg.GAS.SS.IO.STRING;
Blockly.Msg.GAS.SS.IO.STRING_URL = "URL" + Blockly.Msg.GAS.SS.IO.STRING;
Blockly.Msg.GAS.SS.IO.STRING_A1NOTATION = "a1Notation" + Blockly.Msg.GAS.SS.IO.STRING;
Blockly.Msg.GAS.SS.IO.STRING_TITLE = "タイトル" + Blockly.Msg.GAS.SS.IO.STRING;
Blockly.Msg.GAS.SS.IO.STRING_MSG = "メッセージ" + Blockly.Msg.GAS.SS.IO.STRING;
Blockly.Msg.GAS.SS.IO.RANGE_ACTIVED = "アクティブになった" + Blockly.Msg.GAS.SS.IO.RANGE;
Blockly.Msg.GAS.SS.IO.SHEET_ACTIVE = "アクティブな" + Blockly.Msg.GAS.SS.IO.SHEET;
Blockly.Msg.GAS.SS.IO.SHEET_ACTIVED = "アクティブになった" + Blockly.Msg.GAS.SS.IO.SHEET;
Blockly.Msg.GAS.SS.IO.SHEET_COPIED = "コピーした" + Blockly.Msg.GAS.SS.IO.SHEET;
Blockly.Msg.GAS.SS.IO.SS_ACTIVED = "アクティブになった" + Blockly.Msg.GAS.SS.IO.SS;
Blockly.Msg.GAS.SS.IO.SS_COPY_ORIGINAL = "複製元" + Blockly.Msg.GAS.SS.IO.SS;
Blockly.Msg.GAS.SS.IO.NUMBER_ROW_LENGTH = "行数" + Blockly.Msg.GAS.SS.IO.NUMBER;
Blockly.Msg.GAS.SS.IO.NUMBER_ROW = "行" + Blockly.Msg.GAS.SS.IO.NUMBER;
Blockly.Msg.GAS.SS.IO.NUMBER_COL_LENGTH = "列数" + Blockly.Msg.GAS.SS.IO.NUMBER;
Blockly.Msg.GAS.SS.IO.NUMBER_COL = "列" + Blockly.Msg.GAS.SS.IO.NUMBER;
Blockly.Msg.GAS.SS.IO.NUMBER_SHEET_INDEX = "シートインデックス" + Blockly.Msg.GAS.SS.IO.NUMBER;
Blockly.Msg.GAS.SS.IO.NUMBER_SHEET_SEC = "秒" + Blockly.Msg.GAS.SS.IO.NUMBER;
Blockly.Msg.GAS.SS.IO.ARRAY_OF_SHEET = "シート" + Blockly.Msg.GAS.SS.IO.ARRAY;
Blockly.Msg.GAS.SS.IO.ARRAY_OF_ROW_VALUES = "行" + Blockly.Msg.GAS.SS.IO.ARRAY;
Blockly.Msg.GAS.UI.UI = "[UI]";

Blockly.TYPE = {};
Blockly.TYPE.GAS = {};
Blockly.TYPE.GAS.SS = "Spreadsheet";
Blockly.TYPE.GAS.SHEET = "Sheet";
Blockly.TYPE.GAS.RANGE = "Range";
Blockly.TYPE.GAS.UI = "UI";

Blockly.Msg.GAS.SS_AP.CREATE = "新規作成";
Blockly.Msg.GAS.HELP.SS_CREATE = "与えられた名称で新しいスプレッドシートを作成します";

Blockly.Msg.GAS.SS_AP.FLUSH = "更新を適用";
Blockly.Msg.GAS.HELP.FLUSH = "保留中のすべてのスプレッドシートの変更を適用します";

Blockly.Msg.GAS.SS_AP.GETACTIVE = "現在アクティブなスプレッドシート";
Blockly.Msg.GAS.HELP.GETACTIVE = "現在アクティブなスプレッドシートを返し、無い場合はnullを返します";

Blockly.Msg.GAS.SS_AP.GETACTIVESPREADSHEET = "現在アクティブなスプレッドシート";
Blockly.Msg.GAS.HELP.GETACTIVESPREADSHEET = "現在アクティブなスプレッドシートを返し、無い場合はnullを返します";

Blockly.Msg.GAS.SS_AP.GETACTIVESHEET = "現在のアクティブ";
Blockly.Msg.GAS.HELP.GETACTIVESHEET = "スプレッドシート内のアクティブなシートを取得します";

Blockly.Msg.GAS.SS_AP.GETACTIVERANGE = "選択されている範囲";
Blockly.Msg.GAS.HELP.GETACTIVERANGE = "アクティブシートで選択した範囲を返します";

Blockly.Msg.GAS.SS_AP.GETUI = "スプレッドシートのUI";
Blockly.Msg.GAS.HELP.GETUI = "スプレッドシートのUI環境のインスタンスを返します";

Blockly.Msg.GAS.SS_AP.OPENBYID = "スプレッドシート";
Blockly.Msg.GAS.HELP.OPENBYID = "指定したIDのスプレッドシートを開きます";

Blockly.Msg.GAS.SS_AP.OPENBYURL = "スプレッドシート";
Blockly.Msg.GAS.HELP.OPENBYURL = "指定されたURLでスプレッドシートを開きます";

Blockly.Msg.GAS.SS_AP.SETACTIVERANGE = "をアクティブ";
Blockly.Msg.GAS.HELP.SETACTIVERANGE = "アクティブな範囲を設定します。選択した範囲を含むシートが表示され、セルを選択します";

Blockly.Msg.GAS.SS_AP.SETACTIVESHEET = "をアクティブ";
Blockly.Msg.GAS.HELP.SETACTIVESHEET = "スプレッドシート内のアクティブなシートを設定します";

Blockly.Msg.GAS.SS_AP.SETACTIVE_SPREADSHEET = "をアクティブ";
Blockly.Msg.GAS.HELP.SETACTIVESPREADSHEET = "アクティブなスプレッドシートを設定します";

/*
Blockly.Msg.GAS_PREADSHEETAPP_NEW_DATA_VALIDATION = "データ検証ためのルールビルダー";
Blockly.Msg.GAS_PREADSHEETAPP_NEW_DATA_VALIDATION_HELP = "データ検証ルールのためのビルダーを作成します";
Blockly.Msg.GAS_PREADSHEETAPP_OPEN = "スプレッドシート";
Blockly.Msg.GAS_PREADSHEETAPP_OPEN_HELP = "指定されたFileオブジェクトに対応するスプレッドシートを開きます";
*/

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
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS_AP.CREATE);
        this.appendValueInput("NAME")
            .setCheck("String")
            .appendField(Blockly.Msg.GAS.SS.IO.STRING_NAME);
        this.appendValueInput("ROWS")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.GAS.SS.IO.NUMBER_ROW_LENGTH);
        this.appendValueInput("COLUMNS")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.GAS.SS.IO.NUMBER_COL_LENGTH);
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SS);
        this.setColour(20);
        this.setTooltip(Blockly.Msg.GAS.HELP.SS_CREATE);
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
            .appendField(Blockly.Msg.GAS.SS.IO.VOID);
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS_AP.FLUSH);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(20);
        this.setTooltip(Blockly.Msg.GAS.HELP.FLUSH);
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
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS_AP.GETACTIVE);
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SS);
        this.setColour(20);
        this.setTooltip(Blockly.Msg.GAS.HELP.GETACTIVE);
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
            .appendField(Blockly.Msg.GAS.SS.IO.RANGE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS_AP.GETACTIVERANGE);
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(20);
        this.setTooltip(Blockly.Msg.GAS.HELP.GETACTIVERANGE);
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
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET);
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS_AP.GETACTIVESHEET);
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(20);
        this.setTooltip(Blockly.Msg.GAS.HELP.GETACTIVESHEET);
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
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS_AP.GETACTIVESPREADSHEET);
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SS);
        this.setColour(20);
        this.setTooltip(Blockly.Msg.GAS.HELP.GETACTIVESPREADSHEET);
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
            .appendField(Blockly.Msg.GAS.UI.UI);
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS_AP.GETUI);
        this.setOutput(true, Blockly.TYPE.GAS.UI);
        this.setInputsInline(true);
        this.setColour(20);
        this.setTooltip(Blockly.Msg.GAS.HELP.GETUI);
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
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS_AP.OPENBYID);
        this.appendValueInput("ID")
            .setCheck("String")
            .appendField(Blockly.Msg.GAS.SS.IO.STRING_ID);
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SS);
        this.setColour(20);
        this.setTooltip(Blockly.Msg.GAS.HELP.OPENBYID);
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
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS_AP.OPENBYURL);
        this.appendValueInput("URL")
            .setCheck("String")
            .appendField(Blockly.Msg.GAS.SS.IO.STRING_URL);
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SS);
        this.setColour(20);
        this.setTooltip(Blockly.Msg.GAS.HELP.OPENBYURL);
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
            .appendField(Blockly.Msg.GAS.SS.IO.RANGE_ACTIVED);
        this.appendValueInput("RANGE")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .appendField(Blockly.Msg.GAS.SS.IO.RANGE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS_AP.SETACTIVERANGE);
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(20);
        this.setTooltip(Blockly.Msg.GAS.HELP.SETACTIVERANGE);
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
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET_ACTIVED);
        this.appendValueInput("SHEET")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .appendField(Blockly.Msg.GAS.SS.IO.SHEET);
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS_AP.SETACTIVESHEET);
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(20);
        this.setTooltip(Blockly.Msg.GAS.HELP.SETACTIVESHEET);
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
            .appendField(Blockly.Msg.GAS.SS.IO.VOID);
        this.appendValueInput("SPREADSHEET")
            .setCheck(Blockly.TYPE.GAS.SS)
            .appendField(Blockly.Msg.GAS.SS.IO.SS);
        this.appendDummyInput()
            .appendField(Blockly.Msg.GAS.SS_AP.SETACTIVE_SPREADSHEET);
        this.setInputsInline(true);
        this.setColour(20);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.GAS.HELP.SETACTIVESPREADSHEET);
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#setActiveSpreadsheet(Spreadsheet)');
    }
};
Blockly.JavaScript['spreadsheetapp_setactivespreadsheet'] = function(block) {
    var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'SPREADSHEET', Blockly.JavaScript.ORDER_NONE);
    var code = 'SpreadsheetApp.setActiveSpreadsheet(' + value_spreadsheet + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
