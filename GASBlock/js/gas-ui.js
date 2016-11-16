// ------------------------------------------------
// alert(prompt, buttons)
Blockly.Blocks['ui_alert_prompt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("クリックしたボタン");
    this.appendValueInput("UI")
        .setCheck("UI")
        .appendField("UI");
    this.appendDummyInput()
        .appendField("に");
    this.appendValueInput("prompt")
        .setCheck("String")
        .appendField("アラート");
    this.appendDummyInput()
        .appendField("を表示");
    this.setInputsInline(true);
    this.setOutput(true, "Button");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['ui_alert_prompt'] = function(block) {
  var value_ui = Blockly.JavaScript.valueToCode(block, 'UI', Blockly.JavaScript.ORDER_NONE);
  var value_prompt = Blockly.JavaScript.valueToCode(block, 'prompt', Blockly.JavaScript.ORDER_NONE);
  var code = value_ui + '.alert(' + value_prompt + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------
// alert(prompt, buttons)
Blockly.Blocks['alert_prompt_buttons'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("クリックしたボタン");
    this.appendValueInput("UI")
        .setCheck("UI")
        .appendField("UI");
    this.appendDummyInput()
        .appendField("に");
    this.appendValueInput("prompt")
        .setCheck("String")
        .appendField("アラート");
    this.appendDummyInput()
        .appendField("と");
    this.appendValueInput("ButtonSet")
        .setCheck("ButtonSet")
        .appendField("ボタンセット");
    this.appendDummyInput()
        .appendField("を表示");
    this.setInputsInline(true);
    this.setOutput(true, "Button");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['alert_prompt_buttons'] = function(block) {
  var value_ui = Blockly.JavaScript.valueToCode(block, 'UI', Blockly.JavaScript.ORDER_NONE);
  var value_prompt = Blockly.JavaScript.valueToCode(block, 'prompt', Blockly.JavaScript.ORDER_NONE);
  var value_buttonset = Blockly.JavaScript.valueToCode(block, 'ButtonSet', Blockly.JavaScript.ORDER_NONE);
  var code = value_ui + '.alert(' + value_prompt + ', ' + value_buttonset + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------
// alert(title, prompt, buttons)
Blockly.Blocks['alert_title_prompt_buttons'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("クリックしたボタン");
    this.appendValueInput("UI")
        .setCheck("UI")
        .appendField("UI");
    this.appendDummyInput()
        .appendField("に");
    this.appendValueInput("title")
        .setCheck("String")
        .appendField("タイトル");
    this.appendValueInput("prompt")
        .setCheck("String")
        .appendField("アラート");
    this.appendValueInput("buttons")
        .setCheck("ButtonSet")
        .appendField("ボタンセット");
    this.appendDummyInput()
        .appendField("を表示する");
    this.setInputsInline(true);
    this.setOutput(true, "Button");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['alert_title_prompt_buttons'] = function(block) {
  var value_ui = Blockly.JavaScript.valueToCode(block, 'UI', Blockly.JavaScript.ORDER_NONE);
  var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_NONE);
  var value_prompt = Blockly.JavaScript.valueToCode(block, 'prompt', Blockly.JavaScript.ORDER_NONE);
  var value_buttonset = Blockly.JavaScript.valueToCode(block, 'buttons', Blockly.JavaScript.ORDER_NONE);
  var code = value_ui + '.alert(' + value_title + ',' + value_prompt + ', ' + value_buttonset + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


//
Blockly.Blocks['promptresponse_getresponsetext'] = {
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
Blockly.JavaScript['promptresponse_getresponsetext'] = function(block) {
  var value_promptresponse = Blockly.JavaScript.valueToCode(block, 'PromptResponse', Blockly.JavaScript.ORDER_NONE);
  var code = value_promptresponse　+ '.getResponseText()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['promptresponse_getselectedbutton'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ボタン");
    this.appendValueInput("PromptResponse")
        .setCheck("PromptResponse")
        .appendField("入力欄の応答");
    this.appendDummyInput()
        .appendField("のボタン");
    this.setInputsInline(true);
    this.setOutput(true, "Button");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['promptresponse_getselectedbutton'] = function(block) {
  var value_promptresponse = Blockly.JavaScript.valueToCode(block, 'PromptResponse', Blockly.JavaScript.ORDER_NONE);
  var code = value_promptresponse　+ '.getSelectedButton()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------
// alert(prompt, buttons)
Blockly.Blocks['ui_prompt_prompt'] = {
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
Blockly.JavaScript['ui_prompt_prompt'] = function(block) {
  var value_ui = Blockly.JavaScript.valueToCode(block, 'UI', Blockly.JavaScript.ORDER_NONE);
  var value_prompt = Blockly.JavaScript.valueToCode(block, 'prompt', Blockly.JavaScript.ORDER_NONE);
  var code = value_ui + '.prompt(' + value_prompt + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};



Blockly.Blocks['button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ボタン");
    this.appendValueInput("UI")
        .setCheck("UI")
        .appendField("UI");
    this.appendDummyInput()
        .appendField("のボタン");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["CLOSE", "CLOSE"], ["OK", "OK"], ["CANCEL", "CANCEL"], ["YES", "YES"], ["NO", "NO"]]), "Button");
    this.setInputsInline(true);
    this.setOutput(true, "Button");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['button'] = function(block) {
  var value_ui = Blockly.JavaScript.valueToCode(block, 'UI', Blockly.JavaScript.ORDER_NONE);
  var dropdown_button = block.getFieldValue('Button');
  var code = value_ui + '.Button.' + dropdown_button;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};




//
Blockly.Blocks['alert_button_set'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ボタンセット");
    this.appendValueInput("UI")
        .setCheck("UI")
        .appendField("UI");
    this.appendDummyInput()
        .appendField("の");
    this.appendDummyInput()
        .appendField("ボタンセット")
        .appendField(new Blockly.FieldDropdown([["OK", "OPTIONNAME"], ["OK, CANCEL", "OK_CANCEL"], ["YES, NO", "YES_NO"], ["YES, NO, CANCEL", "YES_NO_CANCEL"]]), "ButtonSet");
    this.setInputsInline(true);
    this.setOutput(true, "ButtonSet");
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['alert_button_set'] = function(block) {
　　var value_ui = Blockly.JavaScript.valueToCode(block, 'UI', Blockly.JavaScript.ORDER_NONE);
  var dropdown_buttonset = block.getFieldValue('ButtonSet');
  var code = value_ui + '.ButtonSet.' + dropdown_buttonset;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

