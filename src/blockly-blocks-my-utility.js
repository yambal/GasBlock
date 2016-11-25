Blockly.Blocks['myutility_getdate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("現在の Date インスタンスを生成");
    this.setOutput(true, "Date");
    this.setColour(Blockly.COLOR.GAS.MY_UTILIRIES);
    this.setTooltip('現在の Date インスタンスを生成');
    this.setHelpUrl('https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date');
  }
};
Blockly.JavaScript['myutility_getdate'] = function(block) {
  var code = 'new Date()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['myutility_date_gethours'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"))
        .appendField("「時」を返す");
    this.appendValueInput("Date")
        .setCheck("Date")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Date");
    this.setOutput(true, "Number");
    this.setColour(Blockly.COLOR.GAS.MY_UTILIRIES);
    this.setTooltip('地方時に基づき、与えた日時の「時」を表す 0 から 23 の間の整数値。');
    this.setHelpUrl('https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours');
  }
};
Blockly.JavaScript['myutility_date_gethours'] = function(block) {
  var value_date = Blockly.JavaScript.valueToCode(block, 'Date', Blockly.JavaScript.ORDER_NONE);
  var code = value_date + '.getHours()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['myutility_date_getminutes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"))
        .appendField("「分」を返す");
    this.appendValueInput("Date")
        .setCheck("Date")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Date");
    this.setOutput(true, "Number");
    this.setColour(Blockly.COLOR.GAS.MY_UTILIRIES);
    this.setTooltip('地方時に基づき、与えた日時の「分」を表す 0 から 59 までの間の整数値。');
    this.setHelpUrl('https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours');
  }
};
Blockly.JavaScript['myutility_date_getminutes'] = function(block) {
  var value_date = Blockly.JavaScript.valueToCode(block, 'Date', Blockly.JavaScript.ORDER_NONE);
  var code = value_date + '.getMinutes()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['myutility_date_getseconds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"))
        .appendField("「秒」を返す");
    this.appendValueInput("Date")
        .setCheck("Date")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Date");
    this.setOutput(true, "Number");
    this.setColour(Blockly.COLOR.GAS.MY_UTILIRIES);
    this.setTooltip('地方時に基づき、与えた日付の「秒」を表す 0 から 59 までの間の整数値。');
    this.setHelpUrl('https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds');
  }
};
Blockly.JavaScript['myutility_date_getseconds'] = function(block) {
  var value_date = Blockly.JavaScript.valueToCode(block, 'Date', Blockly.JavaScript.ORDER_NONE);
  var code = value_date + '.getSeconds()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['myutility_str_slice'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"))
        .appendField("文字列の一部分を取り出し");
    this.appendValueInput("string")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("文字列")
        .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
    this.appendValueInput("beginSlice")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("開始インデックス")
        .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
    this.appendValueInput("endSlice")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.OP, 15, 15, "*"))
        .appendField("終了インデックス")
        .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
    this.setOutput(true, "String");
    this.setColour(Blockly.COLOR.GAS.MY_UTILIRIES);
    this.setTooltip('文字列の一部分を取り出し、新しい文字列を返します。');
    this.setHelpUrl('https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/slice');
  }
};

Blockly.JavaScript['myutility_str_slice'] = function(block) {
  var value_string = Blockly.JavaScript.valueToCode(block, 'string', Blockly.JavaScript.ORDER_NONE);
  var value_beginslice = Blockly.JavaScript.valueToCode(block, 'beginSlice', Blockly.JavaScript.ORDER_NONE);
  var value_endslice = Blockly.JavaScript.valueToCode(block, 'endSlice', Blockly.JavaScript.ORDER_NONE);
  var code = 'String(' + value_string + ').slice(' + value_beginslice + ')';
  if(value_endslice){
    code = 'String(' + value_string + ').slice(' + value_beginslice + ',' + value_endslice + ')';
  }
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['myutility_date_parseint'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"))
        .appendField("数に変換");
    this.appendValueInput("Date")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("変換元");
    this.setOutput(true, "Number");
    this.setColour(Blockly.COLOR.GAS.MY_UTILIRIES);
    this.setTooltip('地方時に基づき、与えた日付の「秒」を表す 0 から 59 までの間の整数値。');
    this.setHelpUrl('https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds');
  }
};
Blockly.JavaScript['myutility_date_parseint'] = function(block) {
  var value_date = Blockly.JavaScript.valueToCode(block, 'Date', Blockly.JavaScript.ORDER_NONE);
  var code = 'parseInt(' + value_date + ', 10)';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};