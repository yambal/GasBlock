
// ----------------------------------------------------------------
// Logger.log
Blockly.Blocks['gas_logger_clear'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.LOG, 15, 15, "*"))
            .appendField("ログをクリアー");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(210);
        this.setTooltip('ログをクリアする');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/base/logger#clear()');
    }
};
Blockly.JavaScript['gas_logger_clear'] = function(block) {
    var code = 'Logger.clear();\n';
    return code;
};

// ----------------------------------------------------------------
// Logger.log
Blockly.Blocks['gas_logger_log'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.LOG, 15, 15, "*"))
            .appendField("ログに追記");
        this.appendValueInput("String")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.setInputsInline(true);
        this.setOutput(true, "Logger");
        this.setColour(210);
        this.setTooltip("文字列をログコンソールに書き込みます。");
        this.setHelpUrl('https://developers.google.com/apps-script/reference/base/logger#log(Object)');
    }
};
Blockly.JavaScript['gas_logger_log'] = function(block) {
    var value_logger = Blockly.JavaScript.valueToCode(block, 'Logger', Blockly.JavaScript.ORDER_NONE);
    var value_string = Blockly.JavaScript.valueToCode(block, 'String', Blockly.JavaScript.ORDER_NONE);
    var code = 'Logger.log(' + value_string + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ----------------------------------------------------------------
// getlog
Blockly.Blocks['gas_logger_getlog'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.LOG, 15, 15, "*"))
            .appendField("ログを取得");
        this.setInputsInline(false);
        this.setOutput(true, "String");
        this.setColour(210);
        this.setTooltip('現在のログメッセージの完全なリストを返します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/base/logger#getLog()');
    }
};
Blockly.JavaScript['gas_logger_getlog'] = function(block) {
    var value_logger = Blockly.JavaScript.valueToCode(block, 'Logger', Blockly.JavaScript.ORDER_NONE);
    var code = value_logger + 'Logger.getLog()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};