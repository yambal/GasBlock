// ----------------------------------------------------------------
// onOpen
Blockly.Blocks['gas_trigger_onopen'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("開いた時");
        this.appendStatementInput("onOpen")
            .setCheck(null)
            .appendField(new Blockly.FieldVariable("e"), "event");
        this.setColour(Blockly.COLOR.GAS.TRIGGER);
        this.setTooltip('編集権限を持つスプレッドシート、ドキュメント、またはフォームを開くと自動的に実行されます。 （フォームに反応するときにトリガーは実行されません）。');
        this.setHelpUrl('https://developers.google.com/apps-script/guides/triggers/');
    }
};
Blockly.JavaScript['gas_trigger_onopen'] = function(block) {
    var variable_event = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('event'), Blockly.Variables.NAME_TYPE);
    var statements_onopen = Blockly.JavaScript.statementToCode(block, 'onOpen');
    var code = 'function onOpen(' + variable_event + ') {\n' + statements_onopen + '};\n';
    return code;
};

// ----------------------------------------------------------------
// onEdit
Blockly.Blocks['gas_trigger_onedit'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("編集した時");
        this.appendStatementInput("onEdit")
            .setCheck(null)
            .appendField(new Blockly.FieldVariable("e"), "event");
        this.setColour(Blockly.COLOR.GAS.TRIGGER);
        this.setTooltip('スプレッドシート内のセルの値を変更すると自動的に実行されます。');
        this.setHelpUrl('https://developers.google.com/apps-script/guides/triggers/');
    }
};
Blockly.JavaScript['gas_trigger_onedit'] = function(block) {
    var variable_event = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('event'), Blockly.Variables.NAME_TYPE);
    var statements_onedit = Blockly.JavaScript.statementToCode(block, 'onEdit');
    var code = 'function onEdit(' + variable_event + ') {\n' + statements_onedit + '};\n';
    return code;
};

