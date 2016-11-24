// Blockly Color.picker
Blockly.Blocks['utilities_colorpicker'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"))
            .appendField("色")
            .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
        this.setOutput(true, "String");
        //this.setColour(Blockly.COLOR.GAS.UTILIRIES);
        this.setTooltip('色を指定します');
    }
};
Blockly.JavaScript['utilities_colorpicker'] = function(block) {
    var colour_name = block.getFieldValue('NAME');
    var code = '"' + colour_name + '"';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//Sleep
Blockly.Blocks['utilities_sleep'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("待機");
        this.appendValueInput("milliseconds")
            .setCheck("Number")
            .appendField("ミリ秒")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.COLOR.GAS.UTILIRIES);
        this.setTooltip('指定されたミリ秒数の間スリープします。指定したミリ秒間、スクリプトをただちにスリープ状態にします。許可される最大値は300000（5分）です。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/utilities/utilities#sleep(Integer)');
    }
};
Blockly.JavaScript['utilities_sleep'] = function(block) {
    var value_milliseconds = Blockly.JavaScript.valueToCode(block, 'milliseconds', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'Utilities.sleep(' + value_milliseconds + ');\n';
    return code;
};
