/**
 * Range : https://developers.google.com/apps-script/reference/spreadsheet/range
 **/

// ------------------------------------------------------------
// activate()
// Make this range the active range.
Blockly.Blocks['range_activate'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲をアクティブ");
        this.appendValueInput("RANGE")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('この範囲を有効範囲にします。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#activate()');
    }
};
Blockly.JavaScript['range_activate'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'RANGE', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.activate()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
breakApart()  Range Break any multi-column cells in the range into individual cells again.
Range範囲内のマルチカラムセルを個々のセルに再度分割します。

canEdit() Boolean Determines whether the user has permission to edit every cell in the range.
Booleanユーザーが範囲内のすべてのセルを編集する権限を持っているかどうかを決定します。
*/

// ------------------------------------------------------------
// clear()
// Clears the range of contents, formats, and data-validation rules.
Blockly.Blocks['range_clear'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲をクリア");
        this.appendValueInput("RANGE")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('範囲コンテンツ、フォーマット、およびデータ検証ルールの範囲をクリアします。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#clear()');
    }
};
Blockly.JavaScript['range_clear'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'RANGE', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.clear()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
clear(options)  Range Clears the range of contents, format, data-validation rules, and/or comments, as specified with the given advanced options.
範囲指定された詳細オプションで指定された内容、形式、データ検証規則、および/またはコメントの範囲をクリアします。
*/

// ------------------------------------------------------------
// clearContent()
// Clears the content of the range, leaving the formatting intact.
Blockly.Blocks['range_clearcntent'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲をクリア （書式維持）");
        this.appendValueInput("RANGE")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('範囲範囲の内容を消去し、書式設定はそのままにします。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#clearContent()');
    }
};
Blockly.JavaScript['range_clearcntent'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'RANGE', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.clearContent()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
clearDataValidations()  Range Clears the data-validation rules for the range.
clearFormat() Range Clears formatting for this range.
clearNote() Range Clears the note in the given cell or cells.
copyFormatToRange(gridId, column, columnEnd, row, rowEnd) void  Copy the formatting of the range to the given location.
copyFormatToRange(sheet, column, columnEnd, row, rowEnd)  void  Copy the formatting of the range to the given location.
*/

// ------------------------------------------------------------
// copyTo(destination)  
// Copies the data from a range of cells to another range of cells.
Blockly.Blocks['range_copyto'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("コピー");
        this.appendValueInput("Range")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("コピー元")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.appendValueInput("destination")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("コピー先")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('ある範囲のセルから別の範囲のセルにデータをコピーします。値とフォーマットの両方がコピーされます。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#copyTo(Range)');
    }
};
Blockly.JavaScript['range_copyto'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var value_destination = Blockly.JavaScript.valueToCode(block, 'destination', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.copyTo(' + value_destination + ');\n';
    return code;
};

/*
copyTo(destination, options)  void  Copies the data from a range of cells to another range of cells.
*/

// ------------------------------------------------------------
// value_rowend(gridId, column, columnEnd, row, rowEnd)
// Copy the content of the range to the given location.
Blockly.Blocks['range_copyvaluestorange_gridid'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("コピー");
        this.appendValueInput("Range")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("コピー元")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.appendValueInput("gridId")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("コピー先グリッドID")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("column")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("コピー先開始列番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("columnEnd")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("コピー先終了列番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("row")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("コピー先開始行番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("rowEnd")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("コピー先終了行番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('指定した場所に範囲の内容をコピーします。宛先がソース範囲よりも大きいか小さい場合、ソースはそれに応じて繰り返されるか、または切り捨てられます。 gridIdパラメーターの詳細については、getGridId（）を参照してください。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#copyFormatToRange(Integer,Integer,Integer,Integer,Integer)');
    }
};
Blockly.JavaScript['range_copyvaluestorange_gridid'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var value_gridid = Blockly.JavaScript.valueToCode(block, 'gridId', Blockly.JavaScript.ORDER_NONE);
    var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_NONE);
    var value_columnend = Blockly.JavaScript.valueToCode(block, 'columnEnd', Blockly.JavaScript.ORDER_NONE);
    var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_NONE);
    var value_rowend = Blockly.JavaScript.valueToCode(block, 'rowEnd', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.copyValuesToRange(' + value_gridid + ',' + value_column + ',' + value_columnend + ',' + value_row + ',' + value_rowend + ');\n';
    return code;
};

// ------------------------------------------------------------
// copyValuesToRange(sheet, column, columnEnd, row, rowEnd) 
// Copy the content of the range to the given location.
Blockly.Blocks['range_copyvaluestorange_sheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("コピー");
        this.appendValueInput("Range")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("コピー元")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.appendValueInput("Sheet")
            .setCheck(Blockly.TYPE.GAS.SHEET)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("コピー先シート")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SEET, 15, 15, "*"));
        this.appendValueInput("column")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("コピー先開始列番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("columnEnd")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("コピー先終了列番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("row")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("コピー先開始行番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("rowEnd")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("コピー先終了行番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('指定した場所に範囲の内容をコピーします。宛先がソース範囲よりも大きいか小さい場合、ソースはそれに応じて繰り返されるか、または切り捨てられます。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#copyValuesToRange(Sheet,Integer,Integer,Integer,Integer)');
    }
};
Blockly.JavaScript['range_copyvaluestorange_sheet'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var value_sheet = Blockly.JavaScript.valueToCode(block, 'Sheet', Blockly.JavaScript.ORDER_NONE);
    var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_NONE);
    var value_columnend = Blockly.JavaScript.valueToCode(block, 'columnEnd', Blockly.JavaScript.ORDER_NONE);
    var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_NONE);
    var value_rowend = Blockly.JavaScript.valueToCode(block, 'rowEnd', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.copyValuesToRange(' + value_sheet + ',' + value_column + ',' + value_columnend + ',' + value_row + ',' + value_rowend + ');\n';
    return code;
};

// ------------------------------------------------------------

//　getA1Notation()
// Returns a string description of the range, in A1 notation.
Blockly.Blocks['range_geta1notation'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"))
            .appendField("範囲のA1表記");
        this.appendValueInput("RANGE")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "String");
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('範囲の文字列の説明をA1表記で返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#getA1Notation()');
    }
};
Blockly.JavaScript['range_geta1notation'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'RANGE', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.getA1Notation()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
//　getBackground()
// Returns the background color of the top-left cell in the range (i.e., '#ffffff').
Blockly.Blocks['range_getbackground'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"))
            .appendField("範囲の左上の背景色");
        this.appendValueInput("Range")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "String");
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('範囲の左上のセルの背景色を返します（「#ffffff」など）。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#getBackground()');
    }
};
Blockly.JavaScript['range_getbackground'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.getBackground()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// getBackgrounds()
// Returns the background colors of the cells in the range (i.e., '#ffffff').
Blockly.Blocks['range_getbackgrounds'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.ARR, 15, 15, "*"))
            .appendField("背景色");
        this.appendValueInput("Range")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Array");
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('範囲内のセルの背景色を返します（「#ffffff」など）。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#getBackgrounds()');
    }
};
Blockly.JavaScript['range_getbackgrounds'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.getBackgrounds()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// getCell(row, column)
// Returns a given cell within a range.
Blockly.Blocks['range_getcell'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲内の範囲");
        this.appendValueInput("Range")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.appendValueInput("row")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲内行番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("column")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲内列番号")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('ある範囲内の指定されたセルを返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#getCell(Integer,Integer)');
    }
};
Blockly.JavaScript['range_getcell'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_NONE);
    var value_column = Blockly.JavaScript.valueToCode(block, 'column', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.getCell(' + value_row + ', ' + value_column + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// getColumn()
// Returns the starting column position for this range.
Blockly.Blocks['range_getcolumn'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.COLS, 15, 15, "*"))
            .appendField("範囲の列位置");
        this.appendValueInput("RANGE")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setColour(Blockly.COLOR.GAS.COLINDEX);
        this.setTooltip('この範囲の開始列を返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#getColumn()');
    }
};
Blockly.JavaScript['range_getcolumn'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'RANGE', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.getColumn()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
/*
getDataSourceUrl()  String  Returns a URL for the data in this range, which can be used to create charts and queries.
getDataTable()  DataTable Return the data inside this object as a DataTable.
getDataTable(firstRowIsHeader)  DataTable Return the data inside this Range as a DataTable.
getDataValidation() DataValidation  Returns the data-validation rule for the top-left cell in the range.
getDataValidations()  DataValidation[][]  Returns the data-validation rules for all cells in the range.
getDisplayValue() String  Returns the displayed value of the top-left cell in the range.
getDisplayValues()  String[][]  Returns the rectangular grid of values for this range.
getFontColor()  String  Returns the font color of the cell in the top-left corner of the range, in CSS notation (like '#ffffff' or 'white').
getFontColors() String[][]  Returns the font colors of the cells in the range in CSS notation (like '#ffffff' or 'white').
getFontFamilies() String[][]  Returns the font families of the cells in the range.
getFontFamily() String  Returns the font family of the cell in the top-left corner of the range.
getFontLine() String  Gets the line style of the cell in the top-left corner of the range ('underline', 'line-through', or 'none').
getFontLines()  String[][]  Gets the line style of the cells in the range ('underline', 'line-through', or 'none').
getFontSize() Integer Returns the font size in point size of the cell in the top-left corner of the range.
getFontSizes()  Integer[][] Returns the font sizes of the cells in the range.
getFontStyle()  String  Returns the font style ('italic' or 'normal' of the cell in the top-left corner of the range.
getFontStyles() String[][]  Returns the font styles of the cells in the range.
getFontWeight() String  Returns the font weight (normal/bold) of the cell in the top-left corner of the range.
getFontWeights()  String[][]  Returns the font weights of the cells in the range.
getFormula()  String  Returns the formula (A1 notation) for the top-left cell of the range, or an empty string if the cell is empty or doesn't contain a formula.
getFormulaR1C1()  String  Returns the formula (R1C1 notation) for a given cell, or null if none.
getFormulas() String[][]  Returns the formulas (A1 notation) for the cells in the range.
getFormulasR1C1() String[][]  Returns the formulas (R1C1 notation) for the cells in the range.
*/

// ------------------------------------------------------------
// getGridId() 
// Returns the grid ID of the range's parent sheet.
Blockly.Blocks['range_getgridid'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"))
            .appendField("グリッドID");
        this.appendValueInput("Range")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('グリッドIDを返します。スプレッドシートで作成された最初のグリッドIDは0で後続のシートのグリッドIDは増加し続け、削除されたシートのグリッドIDは再利用されません。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#getGridId()');
    }
};
Blockly.JavaScript['range_getgridid'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.getGridId()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
getHeight() Integer Returns the height of the range.
getHorizontalAlignment()  String  Returns the horizontal alignment of the text (left/center/right) of the cell in the top-left corner of the range.
getHorizontalAlignments() String[][]  Returns the horizontal alignments of the cells in the range.
*/

// ------------------------------------------------------------
// getLastColumn()
// Returns the end column position.
Blockly.Blocks['range_getlastcolumn'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"))
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.COLS, 15, 15, "*"))
            .appendField("最後の列位置");
        this.appendValueInput("Range")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setColour(Blockly.COLOR.GAS.COLINDEX);
        this.setTooltip('終了列の位置を返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#getLastColumn()');
    }
};
Blockly.JavaScript['range_getlastcolumn'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.getLastColumn()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// getLastRow()
//Returns the end row position.
Blockly.Blocks['range_getlastrow'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.ROWS, 15, 15, "*"))
            .appendField("最後の行位置");
        this.appendValueInput("Range")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setColour(Blockly.COLOR.GAS.ROWINDEX);
        this.setTooltip('終了行の位置を返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#getLastRow()');
    }
};
Blockly.JavaScript['range_getlastrow'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.getLastRow()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
getMergedRanges() Range[] Returns an array of Range objects representing merged cells that either are fully within the current range, or contain at least one cell in the current range."
getNote() String  Returns the note associated with the given range.
getNotes()  String[][]  Returns the notes associated with the cells in the range.
*/

// getNumColumns()
// Returns the number of columns in this range.
Blockly.Blocks['range_getnumcolumns'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.COLS, 15, 15, "*"))
            .appendField("範囲の列数");
        this.appendValueInput("Range")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setColour(Blockly.COLOR.GAS.COLINDEX);
        this.setTooltip('範囲の列数を返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#getNumColumns()');
    }
};
Blockly.JavaScript['range_getnumcolumns'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.getNumColumns()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// getNumRows()
// Returns the number of rows in this range.
Blockly.Blocks['range_getnumrows'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.ROWS, 15, 15, "*"))
            .appendField("範囲の行数");
        this.appendValueInput("Range")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setColour(Blockly.COLOR.GAS.ROWINDEX);
        this.setTooltip('範囲の行数を返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#getNumRows()');
    }
};
Blockly.JavaScript['range_getnumrows'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.getNumRows()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
getNumberFormat() String  Get the number formatting of the top-left cell of the given range.
getNumberFormats()  String[][]  Returns the number formats for the cells in the range.
*/

// ------------------------------------------------------------
// getRow()
// Returns the row position for this range.
Blockly.Blocks['range_getrow'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"))
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.ROWS, 15, 15, "*"))
            .appendField("範囲の行位置");
        this.appendValueInput("RANGE")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Number");
        this.setColour(Blockly.COLOR.GAS.ROWINDEX);
        this.setTooltip('この範囲の行位置を返します。 getRowIndex（）と同じです。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#getRow()');
    }
};
Blockly.JavaScript['range_getrow'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'RANGE', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.getRow()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
// ------------------------------------------------------------
// getRowIndex()
// Returns the row position for this range.
Blockly.Blocks['range_getrowindex'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"))
      .appendField("範囲の行位置");
    this.appendValueInput("RANGE")
      .setCheck(Blockly.TYPE.GAS.RANGE)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("範囲")
      .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(Blockly.COLOR.GAS.RANGE);
    this.setTooltip('この範囲の行位置を返します。 getRow（）と同じです。');
    this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#getRowIndex()');
  }
};
Blockly.JavaScript['range_getrowindex'] = function(block) {
  var value_range = Blockly.JavaScript.valueToCode(block, 'RANGE', Blockly.JavaScript.ORDER_NONE);
  var code = value_range + '.getRowIndex()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
*/

// ------------------------------------------------------------
// getSheet()
// Returns the sheet this range belongs to.
Blockly.Blocks['range_getsheet'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.SEET, 15, 15, "*"))
            .appendField("シート取得");
        this.appendValueInput("RANGE")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.SHEET);
        this.setColour(Blockly.COLOR.GAS.SEET);
        this.setTooltip('この範囲が属するシートを返します。。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#getSheet()');
    }
};
Blockly.JavaScript['range_getsheet'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'RANGE', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.getSheet()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// getValue()
// Returns the value of the top-left cell in the range.
Blockly.Blocks['range_getvalue'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("範囲の左上の値");
        this.appendValueInput("RANGE")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, null);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('範囲内の左上のセルの値を返します。値は、セルの値に応じて、Number、Boolean、Date、またはString型にすることができます。空のセルは空の文字列を返します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#getValue()');
    }
};
Blockly.JavaScript['range_getvalue'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'RANGE', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.getValue()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// getValues()
// Returns the rectangular grid of values for this range.
Blockly.Blocks['range_getvalues'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.ARR, 15, 15, "*"))
            .appendField("範囲の値");
        this.appendValueInput("RANGE")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, "Array");
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('範囲の値を行と列の2次元配列で返します。を返します。範囲は1,1から始まりますが、JavaScript配列は[0][0]から始まりまることに注意してください。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#getValues()');
    }
};
Blockly.JavaScript['range_getvalues'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'RANGE', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.getValues()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
getVerticalAlignment()  String  Returns the vertical alignment (top/middle/bottom) of the cell in the top-left corner of the range.
getVerticalAlignments() String[][]  Returns the vertical alignments of the cells in the range.
getWidth()  Integer Returns the width of the range in columns.
getWrap() Boolean Returns the wrapping policy of the cell in the top-left corner of the range.
getWraps()  Boolean[][] Returns the wrapping policy of the cells in the range.
isBlank() Boolean Returns true if the range is totally blank.
isEndColumnBounded()  Boolean Determines whether the end of the range is bound to a particular column.
isEndRowBounded() Boolean Determines whether the end of the range is bound to a particular row.
isPartOfMerge() Boolean Returns true if the cells in the current range overlap any merged cells.
isStartColumnBounded()  Boolean Determines whether the start of the range is bound to a particular column.
isStartRowBounded() Boolean Determines whether the start of the range is bound to a particular row.
merge() Range Merges the cells in the range together into a single block.
mergeAcross() Range Merge the cells in the range across the columns of the range.
mergeVertically() Range Merges the cells in the range together.
*/

// moveTo(target)  void  Cut and paste (both format and values) from this range to the target range.
Blockly.Blocks['range_moveto'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("移動");
        this.appendValueInput("Range")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("移動元")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.appendValueInput("destination")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("移動先")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('この範囲からターゲット範囲にカットアンドペースト（形式と値の両方）します。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#moveTo(Range)');
    }
};
Blockly.JavaScript['range_moveto'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var value_destination = Blockly.JavaScript.valueToCode(block, 'destination', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.moveTo(' + value_destination + ');\n';
    return code;
};

/*
offset(rowOffset, columnOffset) Range Returns a new range that is offset from this range by the given number of rows and columns (which can be negative).
offset(rowOffset, columnOffset, numRows)  Range Returns a new range that is relative to the current range, whose upper left point is offset from the current range by the given rows and columns, and with the given height in cells.
offset(rowOffset, columnOffset, numRows, numColumns)  Range Returns a new range that is relative to the current range, whose upper left point is offset from the current range by the given rows and columns, and with the given height and width in cells.
protect() Protection  Creates an object that can protect the range from being edited except by users who have permission.
*/

// ------------------------------------------------------------
// setBackground(color)
// Sets the background color of all cells in the range in CSS notation (like '#ffffff' or 'white').
Blockly.Blocks['range_setbackground'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("背景色を設定");
        this.appendValueInput("Range")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.appendValueInput("Color")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Color")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.STR, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('範囲内のすべてのセルの背景色をCSS表記で設定します（「#ffffff」など）。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#setBackground(String)');
    }
};
Blockly.JavaScript['range_setbackground'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var value_color = Blockly.JavaScript.valueToCode(block, 'Color', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.setBackground(' + value_color + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ------------------------------------------------------------
// setBackgroundRGB(red, green, blue)
// Sets the background to the given RGB color.
Blockly.Blocks['range_setbackgroundrgb'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("背景色を設定");
        this.appendValueInput("Range")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.appendValueInput("red")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Red")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("green")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Green")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.appendValueInput("blue")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Blue")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.NUM, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('指定されたRGBカラーに背景を設定します。これは文字列の色をとるsetBackground呼び出しの便利なラッパーです。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#setBackgroundRGB(Integer,Integer,Integer)');
    }
};
Blockly.JavaScript['range_setbackgroundrgb'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var value_red = Blockly.JavaScript.valueToCode(block, 'red', Blockly.JavaScript.ORDER_NONE);
    var value_green = Blockly.JavaScript.valueToCode(block, 'green', Blockly.JavaScript.ORDER_NONE);
    var value_blue = Blockly.JavaScript.valueToCode(block, 'blue', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.setBackgroundRGB(' + value_red + ',' + value_green + ', ' + value_blue + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
setBackgrounds(color) Range Sets a rectangular grid of background colors (must match dimensions of this range).
setBorder(top, left, bottom, right, vertical, horizontal) Range Sets the border property.
setBorder(top, left, bottom, right, vertical, horizontal, color, style) Range Sets the border property with color and/or style.
setDataValidation(rule) Range Sets one data-validation rule for all cells in the range.
setDataValidations(rules) Range Sets the data-validation rules for all cells in the range.
setFontColor(color) Range Sets the font color in CSS notation (like '#ffffff' or 'white').
setFontColors(colors) Range Sets a rectangular grid of font colors (must match dimensions of this range).
setFontFamilies(fontFamilies) Range Sets a rectangular grid of font families (must match dimensions of this range).
setFontFamily(fontFamily) Range Sets the font family, such as "Arial" or "Helvetica".
setFontLine(fontLine) Range Sets the line style of the given range ('underline', 'line-through', or 'none').
setFontLines(fontLines) Range Sets a rectangular grid of line styles (must match dimensions of this range).
setFontSize(size) Range Sets the font size, with the size being the point size to use.
setFontSizes(sizes) Range Sets a rectangular grid of font sizes (must match dimensions of this range).
setFontStyle(fontStyle) Range Set the font style for the given range ('italic' or 'normal').
setFontStyles(fontStyles) Range Sets a rectangular grid of font styles (must match dimensions of this range).
setFontWeight(fontWeight) Range Set the font weight for the given range (normal/bold).
setFontWeights(fontWeights) Range Sets a rectangular grid of font weights (must match dimensions of this range).
setFormula(formula) Range Updates the formula for this range.
setFormulaR1C1(formula) Range Updates the formula for this range.
setFormulas(formulas) Range Sets a rectangular grid of formulas (must match dimensions of this range).
setFormulasR1C1(formulas) Range Sets a rectangular grid of formulas (must match dimensions of this range).
setHorizontalAlignment(alignment) Range Set the horizontal (left to right) alignment for the given range (left/center/right).
setHorizontalAlignments(alignments) Range Sets a rectangular grid of horizontal alignments.
setNote(note) Range Sets the note to the given value.
setNotes(notes) Range Sets a rectangular grid of notes (must match dimensions of this range).
setNumberFormat(numberFormat) Range Sets the number or date format to the given formatting string.
setNumberFormats(numberFormats) Range Sets a rectangular grid of number or date formats (must match dimensions of this range).
*/

// --------------------------------------------------------------------------
// setValue(value)  Range Sets the value of the range.
Blockly.Blocks['range_setvalue'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲に値をセット");
        this.appendValueInput("Range")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.appendValueInput("value")
            .setCheck(["Boolean", "String", "Number", Blockly.TYPE.GAS.DATE])
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("値");
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('範囲の値を設定します。値は、数値、文字列、ブール値または日付にすることができます。 =で始まる場合は、式として解釈されます。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#setValue(Object)');
    }
};
Blockly.JavaScript['range_setvalue'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.setValue(' + value_value + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// --------------------------------------------------------------------------
// setValues(values)
// Sets a rectangular grid of values (must match dimensions of this range).
Blockly.Blocks['range_setvalues'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"))
            .appendField("範囲に値をセット");
        this.appendValueInput("Range")
            .setCheck(Blockly.TYPE.GAS.RANGE)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("範囲")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.GAS.RANG, 15, 15, "*"));
        this.appendValueInput("values")
            .setCheck("Array")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("値")
            .appendField(new Blockly.FieldImage(Blockly.IMG.ICON.COM.ARR, 15, 15, "*"));
        this.setInputsInline(false);
        this.setOutput(true, Blockly.TYPE.GAS.RANGE);
        this.setColour(Blockly.COLOR.GAS.RANGE);
        this.setTooltip('範囲の値を設定します。値は、数値、文字列、ブール値または日付にすることができます。 =で始まる場合は、式として解釈されます。');
        this.setHelpUrl('https://developers.google.com/apps-script/reference/spreadsheet/range#setValue(Object)');
    }
};
Blockly.JavaScript['range_setvalues'] = function(block) {
    var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
    var value_values = Blockly.JavaScript.valueToCode(block, 'values', Blockly.JavaScript.ORDER_NONE);
    var code = value_range + '.setValue(' + value_values + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
/*
setVerticalAlignment(alignment) Range Set the vertical (top to bottom) alignment for the given range (top/middle/bottom).
setVerticalAlignments(alignments) Range Sets a rectangular grid of vertical alignments (must match dimensions of this range).
setWrap(isWrapEnabled)  Range Set the cell wrap of the given range.
setWraps(isWrapEnabled) Range Sets a rectangular grid of word wrap policies (must match dimensions of this range).
sort(sortSpecObj) Range Sorts the cells in the given range.
*/
