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