/**
 * Range : https://developers.google.com/apps-script/reference/spreadsheet/range
 **/
/*
activate()	Range	Make this range the active range.
breakApart()	Range	Break any multi-column cells in the range into individual cells again.
canEdit()	Boolean	Determines whether the user has permission to edit every cell in the range.
clear()	Range	Clears the range of contents, formats, and data-validation rules.
clear(options)	Range	Clears the range of contents, format, data-validation rules, and/or comments, as specified with the given advanced options.
clearContent()	Range	Clears the content of the range, leaving the formatting intact.
clearDataValidations()	Range	Clears the data-validation rules for the range.
clearFormat()	Range	Clears formatting for this range.
clearNote()	Range	Clears the note in the given cell or cells.
copyFormatToRange(gridId, column, columnEnd, row, rowEnd)	void	Copy the formatting of the range to the given location.
copyFormatToRange(sheet, column, columnEnd, row, rowEnd)	void	Copy the formatting of the range to the given location.
copyTo(destination)	void	Copies the data from a range of cells to another range of cells.
copyTo(destination, options)	void	Copies the data from a range of cells to another range of cells.
copyValuesToRange(gridId, column, columnEnd, row, rowEnd)	void	Copy the content of the range to the given location.
copyValuesToRange(sheet, column, columnEnd, row, rowEnd)	void	Copy the content of the range to the given location.
getA1Notation()	String	Returns a string description of the range, in A1 notation.
getBackground()	String	Returns the background color of the top-left cell in the range (i.e., '#ffffff').
getBackgrounds()	String[][]	Returns the background colors of the cells in the range (i.e., '#ffffff').
getCell(row, column)	Range	Returns a given cell within a range.
getColumn()	Integer	Returns the starting column position for this range.
getDataSourceUrl()	String	Returns a URL for the data in this range, which can be used to create charts and queries.
getDataTable()	DataTable	Return the data inside this object as a DataTable.
getDataTable(firstRowIsHeader)	DataTable	Return the data inside this Range as a DataTable.
getDataValidation()	DataValidation	Returns the data-validation rule for the top-left cell in the range.
getDataValidations()	DataValidation[][]	Returns the data-validation rules for all cells in the range.
getDisplayValue()	String	Returns the displayed value of the top-left cell in the range.
getDisplayValues()	String[][]	Returns the rectangular grid of values for this range.
getFontColor()	String	Returns the font color of the cell in the top-left corner of the range, in CSS notation (like '#ffffff' or 'white').
getFontColors()	String[][]	Returns the font colors of the cells in the range in CSS notation (like '#ffffff' or 'white').
getFontFamilies()	String[][]	Returns the font families of the cells in the range.
getFontFamily()	String	Returns the font family of the cell in the top-left corner of the range.
getFontLine()	String	Gets the line style of the cell in the top-left corner of the range ('underline', 'line-through', or 'none').
getFontLines()	String[][]	Gets the line style of the cells in the range ('underline', 'line-through', or 'none').
getFontSize()	Integer	Returns the font size in point size of the cell in the top-left corner of the range.
getFontSizes()	Integer[][]	Returns the font sizes of the cells in the range.
getFontStyle()	String	Returns the font style ('italic' or 'normal' of the cell in the top-left corner of the range.
getFontStyles()	String[][]	Returns the font styles of the cells in the range.
getFontWeight()	String	Returns the font weight (normal/bold) of the cell in the top-left corner of the range.
getFontWeights()	String[][]	Returns the font weights of the cells in the range.
getFormula()	String	Returns the formula (A1 notation) for the top-left cell of the range, or an empty string if the cell is empty or doesn't contain a formula.
getFormulaR1C1()	String	Returns the formula (R1C1 notation) for a given cell, or null if none.
getFormulas()	String[][]	Returns the formulas (A1 notation) for the cells in the range.
getFormulasR1C1()	String[][]	Returns the formulas (R1C1 notation) for the cells in the range.
getGridId()	Integer	Returns the grid ID of the range's parent sheet.
getHeight()	Integer	Returns the height of the range.
getHorizontalAlignment()	String	Returns the horizontal alignment of the text (left/center/right) of the cell in the top-left corner of the range.
getHorizontalAlignments()	String[][]	Returns the horizontal alignments of the cells in the range.
getLastColumn()	Integer	Returns the end column position.
getLastRow()	Integer	Returns the end row position.
getMergedRanges()	Range[]	Returns an array of Range objects representing merged cells that either are fully within the current range, or contain at least one cell in the current range."
getNote()	String	Returns the note associated with the given range.
getNotes()	String[][]	Returns the notes associated with the cells in the range.
getNumColumns()	Integer	Returns the number of columns in this range.
getNumRows()	Integer	Returns the number of rows in this range.
getNumberFormat()	String	Get the number formatting of the top-left cell of the given range.
getNumberFormats()	String[][]	Returns the number formats for the cells in the range.
getRow()	Integer	Returns the row position for this range.
getRowIndex()	Integer	Returns the row position for this range.
getSheet()	Sheet	Returns the sheet this range belongs to.
getValue()	Object	Returns the value of the top-left cell in the range.
getValues()	Object[][]	Returns the rectangular grid of values for this range.
getVerticalAlignment()	String	Returns the vertical alignment (top/middle/bottom) of the cell in the top-left corner of the range.
getVerticalAlignments()	String[][]	Returns the vertical alignments of the cells in the range.
getWidth()	Integer	Returns the width of the range in columns.
getWrap()	Boolean	Returns the wrapping policy of the cell in the top-left corner of the range.
getWraps()	Boolean[][]	Returns the wrapping policy of the cells in the range.
isBlank()	Boolean	Returns true if the range is totally blank.
isEndColumnBounded()	Boolean	Determines whether the end of the range is bound to a particular column.
isEndRowBounded()	Boolean	Determines whether the end of the range is bound to a particular row.
isPartOfMerge()	Boolean	Returns true if the cells in the current range overlap any merged cells.
isStartColumnBounded()	Boolean	Determines whether the start of the range is bound to a particular column.
isStartRowBounded()	Boolean	Determines whether the start of the range is bound to a particular row.
merge()	Range	Merges the cells in the range together into a single block.
mergeAcross()	Range	Merge the cells in the range across the columns of the range.
mergeVertically()	Range	Merges the cells in the range together.
moveTo(target)	void	Cut and paste (both format and values) from this range to the target range.
offset(rowOffset, columnOffset)	Range	Returns a new range that is offset from this range by the given number of rows and columns (which can be negative).
offset(rowOffset, columnOffset, numRows)	Range	Returns a new range that is relative to the current range, whose upper left point is offset from the current range by the given rows and columns, and with the given height in cells.
offset(rowOffset, columnOffset, numRows, numColumns)	Range	Returns a new range that is relative to the current range, whose upper left point is offset from the current range by the given rows and columns, and with the given height and width in cells.
protect()	Protection	Creates an object that can protect the range from being edited except by users who have permission.
setBackground(color)	Range	Sets the background color of all cells in the range in CSS notation (like '#ffffff' or 'white').
setBackgroundRGB(red, green, blue)	Range	Sets the background to the given RGB color.
setBackgrounds(color)	Range	Sets a rectangular grid of background colors (must match dimensions of this range).
setBorder(top, left, bottom, right, vertical, horizontal)	Range	Sets the border property.
setBorder(top, left, bottom, right, vertical, horizontal, color, style)	Range	Sets the border property with color and/or style.
setDataValidation(rule)	Range	Sets one data-validation rule for all cells in the range.
setDataValidations(rules)	Range	Sets the data-validation rules for all cells in the range.
setFontColor(color)	Range	Sets the font color in CSS notation (like '#ffffff' or 'white').
setFontColors(colors)	Range	Sets a rectangular grid of font colors (must match dimensions of this range).
setFontFamilies(fontFamilies)	Range	Sets a rectangular grid of font families (must match dimensions of this range).
setFontFamily(fontFamily)	Range	Sets the font family, such as "Arial" or "Helvetica".
setFontLine(fontLine)	Range	Sets the line style of the given range ('underline', 'line-through', or 'none').
setFontLines(fontLines)	Range	Sets a rectangular grid of line styles (must match dimensions of this range).
setFontSize(size)	Range	Sets the font size, with the size being the point size to use.
setFontSizes(sizes)	Range	Sets a rectangular grid of font sizes (must match dimensions of this range).
setFontStyle(fontStyle)	Range	Set the font style for the given range ('italic' or 'normal').
setFontStyles(fontStyles)	Range	Sets a rectangular grid of font styles (must match dimensions of this range).
setFontWeight(fontWeight)	Range	Set the font weight for the given range (normal/bold).
setFontWeights(fontWeights)	Range	Sets a rectangular grid of font weights (must match dimensions of this range).
setFormula(formula)	Range	Updates the formula for this range.
setFormulaR1C1(formula)	Range	Updates the formula for this range.
setFormulas(formulas)	Range	Sets a rectangular grid of formulas (must match dimensions of this range).
setFormulasR1C1(formulas)	Range	Sets a rectangular grid of formulas (must match dimensions of this range).
setHorizontalAlignment(alignment)	Range	Set the horizontal (left to right) alignment for the given range (left/center/right).
setHorizontalAlignments(alignments)	Range	Sets a rectangular grid of horizontal alignments.
setNote(note)	Range	Sets the note to the given value.
setNotes(notes)	Range	Sets a rectangular grid of notes (must match dimensions of this range).
setNumberFormat(numberFormat)	Range	Sets the number or date format to the given formatting string.
setNumberFormats(numberFormats)	Range	Sets a rectangular grid of number or date formats (must match dimensions of this range).
*/

// --------------------------------------------------------------------------
// setValue(value)	Range	Sets the value of the range.
Blockly.Blocks['range_setvalue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("範囲");
    this.appendValueInput("Range")
        .setCheck("Range")
        .appendField("範囲");
    this.appendDummyInput()
        .appendField("に");
    this.appendValueInput("value")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("をセット");
    this.setInputsInline(true);
    this.setOutput(true, "Range");
    this.setColour(20);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['range_setvalue'] = function(block) {
  var value_range = Blockly.JavaScript.valueToCode(block, 'Range', Blockly.JavaScript.ORDER_NONE);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = value_range + '.setValue(' + value_value  + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

/*
setValues(values)	Range	Sets a rectangular grid of values (must match dimensions of this range).
setVerticalAlignment(alignment)	Range	Set the vertical (top to bottom) alignment for the given range (top/middle/bottom).
setVerticalAlignments(alignments)	Range	Sets a rectangular grid of vertical alignments (must match dimensions of this range).
setWrap(isWrapEnabled)	Range	Set the cell wrap of the given range.
setWraps(isWrapEnabled)	Range	Sets a rectangular grid of word wrap policies (must match dimensions of this range).
sort(sortSpecObj)	Range	Sorts the cells in the given range.
*/