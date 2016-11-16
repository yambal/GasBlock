/* GAS */
Blockly.Msg.GAS_NEWSPREADSHEET = "スプレッドシート";
Blockly.Msg.GAS_NEWSPREADSHEET_OPTION_ROWS = "[行数]";
Blockly.Msg.GAS_NEWSPREADSHEET_OPTION_COLUMNS = "[列数]";
Blockly.Msg.GAS_NEWSPREADSHEET_HELP = "与えられた名称で新しいスプレッドシートを作成します";
Blockly.Msg.GAS_PREADSHEETAPP_FLUSH = "更新を適用";
Blockly.Msg.GAS_PREADSHEETAPP_FLUSH_HELP = "保留中のすべてのスプレッドシートの変更を適用します";
Blockly.Msg.GAS_PREADSHEETAPP_GETACTIVE = "スプレッドシート";
Blockly.Msg.GAS_PREADSHEETAPP_GETACTIVE_HELP = "現在アクティブなスプレッドシートを返し、無い場合はnullを返します";
Blockly.Msg.GAS_PREADSHEETAPP_GETACTIVESPREADSHEET = "スプレッドシート";
Blockly.Msg.GAS_PREADSHEETAPP_GETACTIVESPREADSHEET_HELP = "現在アクティブなスプレッドシートを返し、無い場合はnullを返します";
Blockly.Msg.GAS_PREADSHEETAPP_GETACTIVERANGE = "範囲";
Blockly.Msg.GAS_PREADSHEETAPP_GETACTIVERANGE_HELP = "アクティブシートで選択した範囲を返します";
Blockly.Msg.GAS_PREADSHEETAPP_GETACTIVESHEET = "シート";
Blockly.Msg.GAS_PREADSHEETAPP_GETACTIVESHEET_HELP = "スプレッドシート内のアクティブなシートを取得します";
Blockly.Msg.GAS_PREADSHEETAPP_GETUI = "UI";
Blockly.Msg.GAS_PREADSHEETAPP_GETUI_HELP = "メニュー、ダイアログ、およびサイドバーのような機能を追加することがでます";
Blockly.Msg.GAS_PREADSHEETAPP_NEW_DATA_VALIDATION = "データ検証ためのルールビルダー";
Blockly.Msg.GAS_PREADSHEETAPP_NEW_DATA_VALIDATION_HELP = "データ検証ルールのためのビルダーを作成します";
Blockly.Msg.GAS_PREADSHEETAPP_OPEN = "スプレッドシート";
Blockly.Msg.GAS_PREADSHEETAPP_OPEN_HELP = "指定されたFileオブジェクトに対応するスプレッドシートを開きます";
Blockly.Msg.GAS_PREADSHEETAPP_OPENBYID = "スプレッドシート";
Blockly.Msg.GAS_PREADSHEETAPP_OPENBYID_HELP = "指定したIDのスプレッドシートを開きます";
Blockly.Msg.GAS_PREADSHEETAPP_OPENBYURL = "スプレッドシート";
Blockly.Msg.GAS_PREADSHEETAPP_OPENBYURL_HELP = "指定されたURLでスプレッドシートを開きます";
Blockly.Msg.GAS_PREADSHEETAPP_SETACTIVERANGE = "範囲";
Blockly.Msg.GAS_PREADSHEETAPP_SETACTIVERANGE_HELP = "アクティブな範囲を設定します。選択した範囲を含むシートが表示され、セルを選択します";
Blockly.Msg.GAS_PREADSHEETAPP_SETACTIVESHEET = "シート";
Blockly.Msg.GAS_PREADSHEETAPP_SETACTIVESHEET_HELP = "スプレッドシート内のアクティブなシートを設定します";
Blockly.Msg.GAS_PREADSHEETAPP_SETACTIVESPREADSHEET = "スプレッドシート";
Blockly.Msg.GAS_PREADSHEETAPP_SETACTIVESPREADSHEET_HELP = "アクティブなスプレッドシートを設定します";

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
        .appendField(Blockly.Msg.GAS_NEWSPREADSHEET);
    this.appendDummyInput()
        .appendField("新規");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("名前");
    this.appendValueInput("ROWS")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GAS_NEWSPREADSHEET_OPTION_ROWS);
    this.appendValueInput("COLUMNS")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.GAS_NEWSPREADSHEET_OPTION_COLUMNS);
    this.setInputsInline(true);
    this.setOutput(true, "Spreadsheet");
    this.setColour(20);
    this.setTooltip(Blockly.Msg.GAS_NEWSPREADSHEET_HELP);
    this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#create(String)');
  }
};
Blockly.JavaScript['spreadsheetapp_create'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE);
  var value_rows = Blockly.JavaScript.valueToCode(block, 'ROWS', Blockly.JavaScript.ORDER_NONE);
  var value_columns = Blockly.JavaScript.valueToCode(block, 'COLUMNS', Blockly.JavaScript.ORDER_NONE);
  var code = 'SpreadsheetApp.create(' + value_name + ')';
  if(value_rows && value_columns){
  	code = 'SpreadsheetApp.create(' + value_name + ', ' + value_rows + ', ' + value_columns + ')';
  }
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// SpreadsheetApp.flush()
Blockly.Blocks['spreadsheetapp_flush'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GAS_PREADSHEETAPP_FLUSH);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip(Blockly.Msg.GAS_PREADSHEETAPP_FLUSH_HELP);
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
        .appendField(Blockly.Msg.GAS_PREADSHEETAPP_GETACTIVE);
    this.appendDummyInput()
        .appendField("現在のアクティブ");
    this.appendDummyInput()
        .appendField("getActive()");
    this.setInputsInline(true);
    this.setOutput(true, "Spreadsheet");
    this.setColour(20);
    this.setTooltip(Blockly.Msg.GAS_PREADSHEETAPP_GETACTIVE_HELP);
    this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getActive()');
  }
};

Blockly.JavaScript['spreadsheetapp_getactive'] = function(block) {
  var code = 'SpreadsheetApp.getActive()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// SpreadsheetApp.getActiveSpreadsheet()
Blockly.Blocks['spreadsheetapp_getactivespreadsheet'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GAS_PREADSHEETAPP_GETACTIVESPREADSHEET);
    this.appendDummyInput()
        .appendField("現在のアクティブ");
    this.appendDummyInput()
        .appendField("getActiveSpreadsheet()");
    this.setInputsInline(true);
    this.setOutput(true, "Spreadsheet");
    this.setColour(20);
    this.setTooltip(Blockly.Msg.GAS_PREADSHEETAPP_GETACTIVESPREADSHEET_HELP);
    this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getActiveSpreadsheet()');
  }
};
Blockly.JavaScript['spreadsheetapp_getactivespreadsheet'] = function(block) {
  var code = 'SpreadsheetApp.getActiveSpreadsheet()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// SpreadsheetApp.getActiveRange()
Blockly.Blocks['spreadsheetapp_getactiverange'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GAS_PREADSHEETAPP_GETACTIVERANGE);
    this.appendDummyInput()
        .appendField("選択されている範囲");
    this.setInputsInline(true);
    this.setOutput(true, "Range");
    this.setColour(20);
    this.setTooltip(Blockly.Msg.GAS_PREADSHEETAPP_GETACTIVERANGE_HELP);
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
        .appendField(Blockly.Msg.GAS_PREADSHEETAPP_GETACTIVESHEET);
    this.appendDummyInput()
        .appendField("現在のアクティブ");
    this.setInputsInline(true);
    this.setOutput(true, "Sheet");
    this.setColour(20);
    this.setTooltip(Blockly.Msg.GAS_PREADSHEETAPP_GETACTIVESHEET_HELP);
    this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getActiveSheet()');
  }
};

Blockly.JavaScript['spreadsheetapp_getactivesheet'] = function(block) {
  var code = 'SpreadsheetApp.getActiveSheet()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// SpreadsheetApp.getUi()
Blockly.Blocks['spreadsheetapp_getui'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GAS_PREADSHEETAPP_GETUI);
    this.setOutput(true, "Ui");
    this.setColour(20);
    this.setTooltip(Blockly.Msg.GAS_PREADSHEETAPP_GETUI.HELP);
    this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getUi()');
  }
};
Blockly.JavaScript['spreadsheetapp_getui'] = function(block) {
  var code = 'SpreadsheetApp.getUi()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

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
        .appendField(Blockly.Msg.GAS_PREADSHEETAPP_OPEN);
    this.appendValueInput("File")
        .setCheck("File")
        .appendField("File");
    this.setInputsInline(true);
    this.setOutput(true, "Spreadsheet");
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

// ------------------------------------------------------------
// SpreadsheetApp.openById()
Blockly.Blocks['spreadsheetapp_openbyid'] = {
  init: function() {
  	this.appendDummyInput()
        .appendField(Blockly.Msg.GAS_PREADSHEETAPP_OPENBYID);
    this.appendValueInput("ID")
        .setCheck("String")
        .appendField("ID");
    this.setInputsInline(true);
    this.setOutput(true, "Spreadsheet");
    this.setColour(20);
    this.setTooltip(Blockly.Msg.GAS_PREADSHEETAPP_OPENBYID_HELP);
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
        .appendField(Blockly.Msg.GAS_PREADSHEETAPP_OPENBYURL);
    this.appendValueInput("URL")
        .setCheck("String")
        .appendField("URL");
    this.setInputsInline(true);
    this.setOutput(true, "Spreadsheet");
    this.setColour(20);
    this.setTooltip(Blockly.Msg.GAS_PREADSHEETAPP_OPENBYURL_HELP);
    this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#openByUrl(String)');
  }
};
Blockly.JavaScript['spreadsheetapp_openbyurl'] = function(block) {
  var value_url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_NONE);
  var code = 'SpreadsheetApp.openByUrl(' + value_url + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['spreadsheetapp_setactiverange'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GAS_PREADSHEETAPP_SETACTIVERANGE);
    this.appendDummyInput()
        .appendField("アクティブな範囲を設定");
    this.appendValueInput("RANGE")
        .setCheck("Range")
        .appendField("範囲");
    this.setInputsInline(true);
    this.setOutput(true, "Range");
    this.setColour(20);
    this.setTooltip(Blockly.Msg.GAS_PREADSHEETAPP_SETACTIVERANGE_HELP);
    this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#setActiveRange(Range)');
  }
};
Blockly.JavaScript['spreadsheetapp_setactiverange'] = function(block) {
  var value_range = Blockly.JavaScript.valueToCode(block, 'RANGE', Blockly.JavaScript.ORDER_NONE);
  var code = 'SpreadsheetApp.setActiveRange(' + value_range + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['spreadsheetapp_setactivesheet'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GAS_PREADSHEETAPP_SETACTIVESHEET);
    this.appendDummyInput()
        .appendField("アクティブなシートを設定");
    this.appendValueInput("SHEET")
        .setCheck("Sheet")
        .appendField("シート");
    this.setInputsInline(true);
    this.setOutput(true, "Sheet");
    this.setColour(20);
    this.setTooltip(Blockly.Msg.GAS_PREADSHEETAPP_SETACTIVESHEET_HELP);
    this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#setActiveSheet(Sheet)');
  }
};
Blockly.JavaScript['spreadsheetapp_setactivesheet'] = function(block) {
  var value_sheet = Blockly.JavaScript.valueToCode(block, 'SHEET', Blockly.JavaScript.ORDER_NONE);
  var code = 'SpreadsheetApp.setActiveSheet(' + value_sheet + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['spreadsheetapp_setactivespreadsheet'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GAS_PREADSHEETAPP_SETACTIVESPREADSHEET);
    this.appendDummyInput()
        .appendField("アクティブなスプレッドシートを設定");
    this.appendValueInput("SPREADSHEET")
        .setCheck("Spreadsheet")
        .appendField("スプレッドシート");
    this.setInputsInline(true);
    this.setOutput(true, "Spreadsheet");
    this.setColour(20);
    this.setTooltip(Blockly.Msg.GAS_PREADSHEETAPP_SETACTIVESPREADSHEET_HELP);
    this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#setActiveSpreadsheet(Spreadsheet)');
  }
};
Blockly.JavaScript['spreadsheetapp_setactivespreadsheet'] = function(block) {
  var value_spreadsheet = Blockly.JavaScript.valueToCode(block, 'SPREADSHEET', Blockly.JavaScript.ORDER_NONE);
  var code = 'SpreadsheetApp.setActiveSpreadsheet(' + value_spreadsheet + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};