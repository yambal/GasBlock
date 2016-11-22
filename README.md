# GasBlock
GasBlock

https://rawgit.com/yambal/GasBlock/master/GASBlock/index.html

## Class SpreadsheetApp
| 実装 |	Method							|	Return type		|
| --- |:---:| ---:|
|Yes|	create(name)						|	Spreadsheet		|
|Yes|	create(name, rows, columns)				|	Spreadsheet		|
|Yes|	flush()							|	void			|
|Yes|	getActive()						|	Spreadsheet		|
|Yes|	getActiveRange()					|	Range			|
|Yes|	getActiveSheet()					|	Sheet			|
|Yes|	getActiveSpreadsheet()					|	Spreadsheet		|
|Yes|	getUi()							|	Ui			|
|Yes|	openById(id)						|	Spreadsheet		|
|Yes|	openByUrl(url)						|	Spreadsheet		|
|Yes|	setActiveRange(range)					|	Range			|
|Yes|	setActiveSheet(sheet)					|	Sheet			|
|Yes|	setActiveSpreadsheet(newActiveSpreadsheet)		|	void			|
|No|	newDataValidation()					|	DataValidationBuilder	|
|No|	open(file)						|	Spreadsheet		|

## Class Spreadsheet
| 実装 |	Method									|	Return type		|
| --- |:---:| ---:|
|Yes		|	copy(name)						|	Spreadsheet		|
|Yes		|	deleteActiveSheet()					|	Sheet			|
|Yes		|	deleteSheet(sheet)					|	void			|
|Yes		|	duplicateActiveSheet()					|	Sheet			|
|Yes		|	getActiveSheet()					|	Sheet			|
|Yes		|	getId()							|	String			|
|Yes		|	getName()						|	String			|
|Yes		|	getNumSheets()					|	Integer			|
|Yes		|	getRange(a1Notation)					|	Range			|
|Yes		|	getSheetByName(name)				|	Sheet			|
|Yes		|	getSheets()						|	Sheet[]			|
|Yes		|	getUrl()							|	String			|
|Yes		|	insertSheet()						|	Sheet			|
|Yes		|	insertSheet(sheetIndex)					|	Sheet			|
|Yes		|	insertSheet(sheetName)				|	Sheet			|
|Yes		|	insertSheet(sheetName, sheetIndex)			|	Sheet			|
|Yes		|	rename(newName)					|	void			|
|Yes		|	renameActiveSheet(newName)				|	void			|
|Yes		|	setActiveSheet(sheet)					|	Sheet			|
|Yes		|	toast(msg)						|	void			|
|Yes		|	toast(msg, title)						|	void			|
|Yes		|	toast(msg, title, timeoutSeconds)			|	void			|
|No		|	addEditor(emailAddress)				|	Spreadsheet		|
|No		|	addEditor(user)						|	Spreadsheet		|
|No		|	addEditors(emailAddresses)				|	Spreadsheet		|
|No		|	addMenu(name, subMenus)				|	void			|
|No		|	addViewer(emailAddress)				|	Spreadsheet		|
|No		|	addViewer(user)					|	Spreadsheet		|
|No		|	addViewers(emailAddresses)				|	Spreadsheet		|
|No		|	getAs(contentType)					|	Blob			|
|No		|	getBlob()						|	Blob			|
|No		|	getEditors()						|	User[]			|
|No		|	getFormUrl()						|	String			|
|No		|	getNamedRanges()					|	NamedRange[]		|
|No		|	getOwner()						|	User			|
|No		|	getProtections(type)					|	Protection[]		|
|No		|	getRangeByName(name)				|	Range			|
|No		|	getSpreadsheetLocale()				|	String			|
|No		|	getSpreadsheetTimeZone()				|	String			|
|No		|	getViewers()						|	User[]			|
|No		|	insertSheet(sheetIndex, options)			|	Sheet			|
|No		|	insertSheet(options)					|	Sheet			|
|No		|	insertSheet(sheetName, sheetIndex, options)		|	Sheet			|
|No		|	insertSheet(sheetName, options)			|	Sheet			|
|No		|	removeEditor(emailAddress)				|	Spreadsheet		|
|No		|	removeEditor(user)					|	Spreadsheet		|
|No		|	removeMenu(name)					|	void			|
|No		|	removeNamedRange(name)				|	void			|
|No		|	removeViewer(emailAddress)				|	Spreadsheet		|
|No		|	removeViewer(user)					|	Spreadsheet		|
|No		|	setNamedRange(name, range)				|	void			|
|No		|	setSpreadsheetLocale(locale)				|	void			|
|No		|	setSpreadsheetTimeZone(timezone)			|	void			|
|No		|	show(userInterface)					|	void			|
|No		|	updateMenu(name, subMenus)				|	void			|

## Class Sheet
| 実装 |	Method | Return type |
| --- |:---:| ---:|
| Yes | activate() | Sheet |
| Yes | appendRow(rowContents) | Sheet |
| Yes | autoResizeColumn(columnPosition) | Sheet |
| Yes | copyTo(spreadsheet) | Sheet |
| Yes | deleteColumn(columnPosition) | Sheet |
| Yes | deleteColumns(columnPosition,howMany) | void |
| Yes | deleteRow(rowPosition) | Sheet |
| Yes | deleteRows(rowPosition,howMany) | void |
| Yes | getActiveCell() | Range |
| Yes | getActiveRange() | Range |
| Yes | getDataRange() | Range |
| Yes | getIndex() | Integer |
| Yes | getLastColumn() | Integer |
| Yes | getLastRow() | Integer |
| Yes | getName() | String |
| Yes | getRange(row, column) | Range |
| Yes | getRange(row, column, numRows) | Range |
| Yes | getRange(row, column, numRows,numColumns) | Range |
| Yes | getRange(a1Notation) | Range |
| Yes | getSheetId() | Integer |
| Yes | getSheetName() | String |
| Yes | getSheetValues(startRow,startColumn, numRows,numColumns) | Object[][] |
| Yes | insertColumnAfter(afterPosition) | Sheet |
| Yes | insertColumnBefore(beforePosition) | Sheet |
| Yes | insertColumns(columnIndex) | void |
| Yes | insertColumns(columnIndex,numColumns) | void |
| Yes | insertColumnsAfter(afterPosition, howMany) | Sheet |
| Yes | insertColumnsBefore(beforePosition, howMany) | Sheet |
| Yes | insertRowAfter(afterPosition) | Sheet |
| Yes | insertRowBefore(beforePosition) | Sheet |
| Yes | insertRows(rowIndex) | void |
| Yes | insertRows(rowIndex, numRows) | void |
| Yes | insertRowsAfter(afterPosition,howMany) | Sheet |
| Yes | insertRowsBefore(beforePosition, howMany) | Sheet |
| Yes | setActiveRange(range) | Range |
| Yes | setActiveSelection(range) | Range |
| Yes | setActiveSelection(a1Notation) | Range |
| Yes | setName(name) | Sheet |
| No | clear() | Sheet |
| No | clear(options) | Sheet |
| No | clearContents() | Sheet |
| No | clearFormats() | Sheet |
| No | clearNotes() | Sheet |
| No | getCharts() | EmbeddedChart[] |
| No | getColumnWidth(columnPosition) | Integer |
| No | getFrozenColumns() | Integer |
| No | getFrozenRows() | Integer |
| No | getMaxColumns() | Integer |
| No | getMaxRows() | Integer |
| No | getNamedRanges() | NamedRange[] |
| No | getParent() | Spreadsheet |
| No | getProtections(type) | Protection[] |
| No | getRowHeight(rowPosition) | Integer |
| No | getTabColor() | String |
| No | hideColumn(column) | void |
| No | hideColumns(columnIndex) | void |
| No | hideColumns(columnIndex,numColumns) | void |
| No | hideRow(row) | void |
| No | hideRows(rowIndex) | void |
| No | hideRows(rowIndex, numRows) | void |
| No | hideSheet() | Sheet |
| No | insertChart(chart) | void |
| No | insertImage(blob, column, row) | void |
| No | insertImage(blob, column, row,offsetX, offsetY) | void |
| No | insertImage(url, column, row) | void |
| No | insertImage(url, column, row,offsetX, offsetY) | void |
| No | isSheetHidden() | Boolean |
| No | newChart() | EmbeddedChartBuilder |
| No | protect() | Protection |
| No | removeChart(chart) | void |
| No | setColumnWidth(columnPosition,width) | Sheet |
| No | setFrozenColumns(columns) | void |
| No | setFrozenRows(rows) | void |
| No | setRowHeight(rowPosition,height) | Sheet |
| No | setTabColor(color) | Sheet |
| No | showColumns(columnIndex) | void |
| No | showColumns(columnIndex,numColumns) | void |
| No | showRows(rowIndex) | void |
| No | showRows(rowIndex, numRows) | void |
| No | showSheet() | Sheet |
| No | sort(columnPosition) | Sheet |
| No | sort(columnPosition,ascending) | Sheet |
| No | unhideColumn(column) | void |
| No | unhideRow(row) | void |
| No | updateChart(chart) | void |

## Class Range
| 実装 |	Method | Return type |
| --- |:---:| ---:|
| No | activate() | Range |
| No | breakApart() | Range |
| No | canEdit() | Boolean |
| No | clear() | Range |
| No | clear(options) | Range |
| No | clearContent() | Range |
| No | clearDataValidations() | Range |
| No | clearFormat() | Range |
| No | clearNote() | Range |
| No | copyFormatToRange(gridId,column, columnEnd,row, rowEnd) | void |
| No | copyFormatToRange(sheet,column, columnEnd,row, rowEnd) | void |
| No | copyTo(destination) | void |
| No | copyTo(destination,options) | void |
| No | copyValuesToRange(gridId,column, columnEnd,row, rowEnd) | void |
| No | copyValuesToRange(sheet,column, columnEnd,row, rowEnd) | void |
| No | getA1Notation() | String |
| No | getBackground() | String |
| No | getBackgrounds() | String[][] |
| No | getCell(row, column) | Range |
| No | getColumn() | Integer |
| No | getDataSourceUrl() | String |
| No | getDataTable() | DataTable |
| No | getDataTable(firstRowIsHeader) | DataTable |
| No | getDataValidation() | DataValidation |
| No | getDataValidations() | DataValidation[][] |
| No | getDisplayValue() | String |
| No | getDisplayValues() | String[][] |
| No | getFontColor() | String |
| No | getFontColors() | String[][] |
| No | getFontFamilies() | String[][] |
| No | getFontFamily() | String |
| No | getFontLine() | String |
| No | getFontLines() | String[][] |
| No | getFontSize() | Integer |
| No | getFontSizes() | Integer[][] |
| No | getFontStyle() | String |
| No | getFontStyles() | String[][] |
| No | getFontWeight() | String |
| No | getFontWeights() | String[][] |
| No | getFormula() | String |
| No | getFormulaR1C1() | String |
| No | getFormulas() | String[][] |
| No | getFormulasR1C1() | String[][] |
| No | getGridId() | Integer |
| No | getHeight() | Integer |
| No | getHorizontalAlignment() | String |
| No | getHorizontalAlignments() | String[][] |
| No | getLastColumn() | Integer |
| No | getLastRow() | Integer |
| No | getMergedRanges() | Range[] |
| No | getNote() | String |
| No | getNotes() | String[][] |
| No | getNumColumns() | Integer |
| No | getNumRows() | Integer |
| No | getNumberFormat() | String |
| No | getNumberFormats() | String[][] |
| No | getRow() | Integer |
| No | getRowIndex() | Integer |
| No | getSheet() | Sheet |
| No | getValue() | Object |
| No | getValues() | Object[][] |
| No | getVerticalAlignment() | String |
| No | getVerticalAlignments() | String[][] |
| No | getWidth() | Integer |
| No | getWrap() | Boolean |
| No | getWraps() | Boolean[][] |
| No | isBlank() | Boolean |
| No | isEndColumnBounded() | Boolean |
| No | isEndRowBounded() | Boolean |
| No | isPartOfMerge() | Boolean |
| No | isStartColumnBounded() | Boolean |
| No | isStartRowBounded() | Boolean |
| No | merge() | Range |
| No | mergeAcross() | Range |
| No | mergeVertically() | Range |
| No | moveTo(target) | void |
| No | offset(rowOffset,columnOffset) | Range |
| No | offset(rowOffset,columnOffset, numRows) | Range |
| No | offset(rowOffset,columnOffset, numRows,numColumns) | Range |
| No | protect() | Protection |
| No | setBackground(color) | Range |
| No | setBackgroundRGB(red,green, blue) | Range |
| No | setBackgrounds(color) | Range |
| No | setBorder(top, left,bottom, right,vertical, horizontal) | Range |
| No | setBorder(top, left,bottom, right,vertical, horizontal,color, style) | Range |
| No | setDataValidation(rule) | Range |
| No | setDataValidations(rules) | Range |
| No | setFontColor(color) | Range |
| No | setFontColors(colors) | Range |
| No | setFontFamilies(fontFamilies) | Range |
| No | setFontFamily(fontFamily) | Range |
| No | setFontLine(fontLine) | Range |
| No | setFontLines(fontLines) | Range |
| No | setFontSize(size) | Range |
| No | setFontSizes(sizes) | Range |
| No | setFontStyle(fontStyle) | Range |
| No | setFontStyles(fontStyles) | Range |
| No | setFontWeight(fontWeight) | Range |
| No | setFontWeights(fontWeights) | Range |
| No | setFormula(formula) | Range |
| No | setFormulaR1C1(formula) | Range |
| No | setFormulas(formulas) | Range |
| No | setFormulasR1C1(formulas) | Range |
| No | setHorizontalAlignment(alignment) | Range |
| No | setHorizontalAlignments(alignments) | Range |
| No | setNote(note) | Range |
| No | setNotes(notes) | Range |
| No | setNumberFormat(numberFormat) | Range |
| No | setNumberFormats(numberFormats) | Range |
| No | setValue(value) | Range |
| No | setValues(values) | Range |
| No | setVerticalAlignment(alignment) | Range |
| No | setVerticalAlignments(alignments) | Range |
| No | setWrap(isWrapEnabled) | Range |
| No | setWraps(isWrapEnabled) | Range |
| No | sort(sortSpecObj) | Range |