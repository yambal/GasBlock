Blockly.Msg.GAS_LOGGER = "ロガー";
Blockly.Msg.GAS_LOGGER_LOG_HELP = "ログに追記する";

Blockly.Blocks['logger'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GAS_LOGGER);
    this.setInputsInline(true);
    this.setOutput(true, "Logger");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('https://developers.google.com/apps-script/reference/base/logger');
  }
};
Blockly.JavaScript['logger'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'Logger';
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Logger.log
Blockly.Blocks['logger_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ロガー");
    this.appendDummyInput()
        .appendField("クリアー");
    this.appendValueInput("Logger")
        .setCheck("Logger")
        .appendField("ロガー");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('https://developers.google.com/apps-script/reference/base/logger#clear()');
  }
};
Blockly.JavaScript['logger_clear'] = function(block) {
  var value_logger = Blockly.JavaScript.valueToCode(block, 'Logger', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = value_logger + '.clear();\n';
  return code;
};

// Logger.log
Blockly.Blocks['logger_log'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.GAS_LOGGER);
    this.appendDummyInput()
        .appendField("追記");
    this.appendValueInput("Logger")
        .setCheck("Logger")
        .appendField(Blockly.Msg.GAS_LOGGER);
    this.appendValueInput("String")
        .setCheck("String")
        .appendField("文字");
    this.setInputsInline(true);
    this.setOutput(true, "Logger");
    this.setColour(210);
    this.setTooltip(Blockly.Msg.GAS_LOGGER_LOG_HELP);
    this.setHelpUrl('https://developers.google.com/apps-script/reference/base/logger#getLog()');
  }
};
Blockly.JavaScript['logger_log'] = function(block) {
  var value_logger = Blockly.JavaScript.valueToCode(block, 'Logger', Blockly.JavaScript.ORDER_NONE);
  var value_string = Blockly.JavaScript.valueToCode(block, 'String', Blockly.JavaScript.ORDER_NONE);
  var code = value_logger + '.log(' + value_string + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// getlog
Blockly.Blocks['logger_getlog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ロガー");
    this.appendDummyInput()
        .appendField("取得");
    this.appendValueInput("Logger")
        .setCheck("Logger")
        .appendField("ロガー");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(210);
    this.setTooltip('現在のログメッセージの完全なリストを返します');
    this.setHelpUrl('https://developers.google.com/apps-script/reference/base/logger#getLog()');
  }
};
Blockly.JavaScript['logger_getlog'] = function(block) {
  var value_logger = Blockly.JavaScript.valueToCode(block, 'Logger', Blockly.JavaScript.ORDER_NONE);
  var code = value_logger + '.getLog()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// log(format, values)
Blockly.Blocks['logger_log_format__values_'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ロガー");
    this.appendDummyInput()
        .appendField("整形追記（スペニット）");
    this.appendValueInput("Logger")
        .setCheck("Logger")
        .appendField("ロガー");
    this.setInputsInline(true);
    this.setOutput(true, "Logger");
    this.setColour(210);
    this.setTooltip('提供されるフォーマットと値を使用してログに追記します');
    this.setHelpUrl('https://developers.google.com/apps-script/reference/base/logger#log(String,Object...)');
  }
};
Blockly.JavaScript['logger_log_format__values_'] = function(block) {
  var value_logger = Blockly.JavaScript.valueToCode(block, 'Logger', Blockly.JavaScript.ORDER_NONE);
  var code = value_logger + '.log("You are a member of %s, %s Google Groups.", 1.0, 2.0)';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};