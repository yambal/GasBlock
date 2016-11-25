// ------------------------------------------------
// alert(prompt, gas_buttons)
Blockly.Blocks['gas_ui_alert_prompt'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.BTN, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.DIALOG, 15, 15, "*"))
            .appendField("アラート");
        this.appendValueInput("UI")
            .setCheck("UI")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("UI")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.DIALOG, 15, 15, "*"));
        this.appendValueInput("prompt")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("メッセージ")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.appendValueInput("gas_buttonSet")
            .setCheck(Blockly.TYPE.GAS.BUTTON_SET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.OP, 15, 15, "*"))
            .appendField("ボタンセット")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.BUTTON);
        this.setColour(Blockly.COLOR.GAS.UI);
        this.setTooltip('指定されたメッセージとボタンのセットを持つダイアログボックスをユーザのエディタで開きます。このメソッドは、ダイアログが開いている間にサーバーサイドスクリプトを中断します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/base/ui#alert(String)');
    }
};
Blockly.JavaScript['gas_ui_alert_prompt'] = function(block) {
    var value_ui = Blockly.JavaScript.valueToCode(block, 'UI', Blockly.JavaScript.ORDER_NONE);
    var value_prompt = Blockly.JavaScript.valueToCode(block, 'prompt', Blockly.JavaScript.ORDER_NONE);
    var value_gas_buttonset = Blockly.JavaScript.valueToCode(block, 'gas_buttonSet', Blockly.JavaScript.ORDER_NONE);
    var code = value_ui + '.alert(' + value_prompt + ')';
    if (value_gas_buttonset) {
        code = value_ui + '.alert(' + value_prompt + ',' + value_gas_buttonset + ')';
    }
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------
// alert(title, prompt, gas_buttons)
Blockly.Blocks['gas_alert_title_prompt_gas_buttons'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.BTN, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.DIALOG, 15, 15, "*"))
            .appendField("アラート");
        this.appendValueInput("UI")
            .setCheck("UI")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("UI")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.DIALOG, 15, 15, "*"));
        this.appendValueInput("title")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("タイトル")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.appendValueInput("prompt")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("メッセージ")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.appendValueInput("gas_buttons")
            .setCheck(Blockly.TYPE.GAS.BUTTON_SET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("ボタンセット")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.BTNSET, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.BUTTON);
        this.setColour(Blockly.COLOR.GAS.UI);
        this.setTooltip('');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/base/ui#alert(String,ButtonSet)');
    }
};
Blockly.JavaScript['gas_alert_title_prompt_gas_buttons'] = function(block) {
    var value_ui = Blockly.JavaScript.valueToCode(block, 'UI', Blockly.JavaScript.ORDER_NONE);
    var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_NONE);
    var value_prompt = Blockly.JavaScript.valueToCode(block, 'prompt', Blockly.JavaScript.ORDER_NONE);
    var value_gas_buttonset = Blockly.JavaScript.valueToCode(block, 'gas_buttons', Blockly.JavaScript.ORDER_NONE);
    var code = value_ui + '.alert(' + value_title + ',' + value_prompt + ', ' + value_gas_buttonset + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


/*
Blockly.Blocks['gas_promptresponse_getresponsetext'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("テキスト");
        this.appendValueInput("PromptResponse")
            .setCheck("PromptResponse")
            .appendField("入力欄の応答");
        this.appendDummyInput()
            .appendField("のテキスト");
        this.setInputsInline(true);
        this.setOutput(true, "String");
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['gas_promptresponse_getresponsetext'] = function(block) {
    var value_promptresponse = Blockly.JavaScript.valueToCode(block, 'PromptResponse', Blockly.JavaScript.ORDER_NONE);
    var code = value_promptresponse　 + '.getResponseText()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.Blocks['gas_promptresponse_getselectedgas_button'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("ボタン");
        this.appendValueInput("PromptResponse")
            .setCheck("PromptResponse")
            .appendField("入力欄の応答");
        this.appendDummyInput()
            .appendField("のボタン");
        this.setInputsInline(true);
        this.setOutput(true, Blockly.TYPE.GAS.BUTTON);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['gas_promptresponse_getselectedgas_button'] = function(block) {
    var value_promptresponse = Blockly.JavaScript.valueToCode(block, 'PromptResponse', Blockly.JavaScript.ORDER_NONE);
    var code = value_promptresponse　 + '.getSelectedgas_button()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------
// alert(prompt, gas_buttons)
Blockly.Blocks['gas_ui_prompt_prompt'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("入力欄の応答");
        this.appendValueInput("UI")
            .setCheck("UI")
            .appendField("UI");
        this.appendDummyInput()
            .appendField("に");
        this.appendValueInput("prompt")
            .setCheck("String")
            .appendField("メッセージ");
        this.appendDummyInput()
            .appendField("と入力欄を表示");
        this.setInputsInline(true);
        this.setOutput(true, "PromptResponse");
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
Blockly.JavaScript['gas_ui_prompt_prompt'] = function(block) {
    var value_ui = Blockly.JavaScript.valueToCode(block, 'UI', Blockly.JavaScript.ORDER_NONE);
    var value_prompt = Blockly.JavaScript.valueToCode(block, 'prompt', Blockly.JavaScript.ORDER_NONE);
    var code = value_ui + '.prompt(' + value_prompt + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
*/

Blockly.Blocks['gas_button'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.BTN, 15, 15, "*"))
            .appendField("ボタン")
            .appendField(new Blockly.FieldDropdown([
                ["CLOSE", "CLOSE"],
                ["OK", "OK"],
                ["CANCEL", "CANCEL"],
                ["YES", "YES"],
                ["NO", "NO"]
            ]), "gas_button");
        this.appendValueInput("UI")
            .setCheck("UI")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("UI")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.DIALOG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.BUTTON);
        this.setColour(Blockly.COLOR.GAS.UI);
        this.setTooltip('ボタンを返します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/base/gas_button');
    }
};
Blockly.JavaScript['gas_button'] = function(block) {
    var value_ui = Blockly.JavaScript.valueToCode(block, 'UI', Blockly.JavaScript.ORDER_NONE);
    var dropdown_gas_button = block.getFieldValue('gas_button');
    var code = value_ui + '.gas_button.' + dropdown_gas_button;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


//
Blockly.Blocks['alert_gas_button_set'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.BTNSET, 15, 15, "*"))
            .appendField("ボタンセット")
            .appendField(new Blockly.FieldDropdown([
                ["OK", "OK"],
                ["OK, CANCEL", "OK_CANCEL"],
                ["YES, NO", "YES_NO"],
                ["YES, NO, CANCEL", "YES_NO_CANCEL"]
            ]), "gas_buttonSet");
        this.appendValueInput("UI")
            .setCheck("UI")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("UI")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.DIALOG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.BUTTON_SET);
        this.setColour(Blockly.COLOR.GAS.UI);
        this.setTooltip('ボタンセットを返します');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/base/gas_button-set');
    }
};
Blockly.JavaScript['alert_gas_button_set'] = function(block) {　　
    var value_ui = Blockly.JavaScript.valueToCode(block, 'UI', Blockly.JavaScript.ORDER_NONE);
    var dropdown_gas_buttonset = block.getFieldValue('gas_buttonSet');
    var code = value_ui + '.gas_buttonSet.' + dropdown_gas_buttonset;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
