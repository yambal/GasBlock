Blockly.Blocks['getmember'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("メンバー");
    this.appendValueInput("Object")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(".");
    this.appendValueInput("Member")
        .setCheck("String");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(330);
    this.setTooltip('オブジェクトのメンバを取得します');
    //this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['getmember'] = function(block) {
  var value_object = Blockly.JavaScript.valueToCode(block, 'Object', Blockly.JavaScript.ORDER_NONE);
  var value_member = Blockly.JavaScript.valueToCode(block, 'Member', Blockly.JavaScript.ORDER_NONE);
  var code = value_object + '[' + value_member + ']';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['next'] = {
    init: function() {
        this.appendValueInput("INPUT")
            .setCheck(null)
            .appendField("");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('次の行');
    }
};
Blockly.JavaScript['next'] = function(block) {
    var value_input = Blockly.JavaScript.valueToCode(block, 'INPUT', Blockly.JavaScript.ORDER_ATOMIC);
    var code = value_input + ';\n';
    return code;
};


Blockly.Blocks['comment'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("コメント行");
    this.appendValueInput("comment")
        .setCheck("String")
        .appendField("コメント");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('コメント行');
  }
};
Blockly.JavaScript['comment'] = function(block) {
  var value_comment = Blockly.JavaScript.valueToCode(block, 'comment', Blockly.JavaScript.ORDER_NONE);
  var code = '// ' + value_comment + '\n';
  return code;
};