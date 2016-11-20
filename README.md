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
|None|	newDataValidation()					|	DataValidationBuilder	|
|None|	open(file)						|	Spreadsheet		|
|Yes|	openById(id)						|	Spreadsheet		|
|Yes|	openByUrl(url)						|	Spreadsheet		|
|Yes|	setActiveRange(range)					|	Range			|
|Yes|	setActiveSheet(sheet)					|	Sheet			|
|Yes|	setActiveSpreadsheet(newActiveSpreadsheet)		|	void			|

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
|None		|	addEditor(emailAddress)				|	Spreadsheet		|
|None		|	addEditor(user)						|	Spreadsheet		|
|None		|	addEditors(emailAddresses)				|	Spreadsheet		|
|None		|	addMenu(name, subMenus)				|	void			|
|None		|	addViewer(emailAddress)				|	Spreadsheet		|
|None		|	addViewer(user)					|	Spreadsheet		|
|None		|	addViewers(emailAddresses)				|	Spreadsheet		|
|None		|	getAs(contentType)					|	Blob			|
|None		|	getBlob()						|	Blob			|
|None		|	getEditors()						|	User[]			|
|None		|	getFormUrl()						|	String			|
|None		|	getNamedRanges()					|	NamedRange[]		|
|None		|	getOwner()						|	User			|
|None		|	getProtections(type)					|	Protection[]		|
|None		|	getRangeByName(name)				|	Range			|
|None		|	getSpreadsheetLocale()				|	String			|
|None		|	getSpreadsheetTimeZone()				|	String			|
|None		|	getViewers()						|	User[]			|
|None		|	insertSheet(sheetIndex, options)			|	Sheet			|
|None		|	insertSheet(options)					|	Sheet			|
|None		|	insertSheet(sheetName, sheetIndex, options)		|	Sheet			|
|None		|	insertSheet(sheetName, options)			|	Sheet			|
|None		|	removeEditor(emailAddress)				|	Spreadsheet		|
|None		|	removeEditor(user)					|	Spreadsheet		|
|None		|	removeMenu(name)					|	void			|
|None		|	removeNamedRange(name)				|	void			|
|None		|	removeViewer(emailAddress)				|	Spreadsheet		|
|None		|	removeViewer(user)					|	Spreadsheet		|
|None		|	setNamedRange(name, range)				|	void			|
|None		|	setSpreadsheetLocale(locale)				|	void			|
|None		|	setSpreadsheetTimeZone(timezone)			|	void			|
|None		|	show(userInterface)					|	void			|
|None		|	updateMenu(name, subMenus)				|	void			|

## Class Sheet
| 実装 |	Method | Return type |
| --- |:---:| ---:|
| Yes | activate() | Sheet |
| Yes | appendRow(rowContents) | Sheet |
| Yes | autoResizeColumn(columnPosition) | Sheet |
| No | clear() | Sheet |
| No | clear(options) | Sheet |
| No | clearContents() | Sheet |
| No | clearFormats() | Sheet |
| No | clearNotes() | Sheet |
| Yes | copyTo(spreadsheet) | Sheet |
| Yes | deleteColumn(columnPosition) | Sheet |
| Yes | deleteColumns(columnPosition,howMany) | void |
| Yes | deleteRow(rowPosition) | Sheet |
| Yes | deleteRows(rowPosition,howMany) | void |
| No | getActiveCell() | Range |
| No | getActiveRange() | Range |
| No | getCharts() | EmbeddedChart[] |
| No | getColumnWidth(columnPosition) | Integer |
| No | getDataRange() | Range |
| No | getFrozenColumns() | Integer |
| No | getFrozenRows() | Integer |
| No | getIndex() | Integer |
| No | getLastColumn() | Integer |
| No | getLastRow() | Integer |
| No | getMaxColumns() | Integer |
| No | getMaxRows() | Integer |
| No | getName() | String |
| No | getNamedRanges() | NamedRange[] |
| No | getParent() | Spreadsheet |
| No | getProtections(type) | Protection[] |
| No | getRange(row, column) | Range |
| No | getRange(row, column, numRows) | Range |
| No | getRange(row, column, numRows,numColumns) | Range |
| No | getRange(a1Notation) | Range |
| No | getRowHeight(rowPosition) | Integer |
| No | getSheetId() | Integer |
| No | getSheetName() | String |
| No | getSheetValues(startRow,startColumn, numRows,numColumns) | Object[][] |
| No | getTabColor() | String |
| No | hideColumn(column) | void |
| No | hideColumns(columnIndex) | void |
| No | hideColumns(columnIndex,numColumns) | void |
| No | hideRow(row) | void |
| No | hideRows(rowIndex) | void |
| No | hideRows(rowIndex, numRows) | void |
| No | hideSheet() | Sheet |
| No | insertChart(chart) | void |
| No | insertColumnAfter(afterPosition) | Sheet |
| No | insertColumnBefore(beforePosition) | Sheet |
| No | insertColumns(columnIndex) | void |
| No | insertColumns(columnIndex,numColumns) | void |
| No | insertColumnsAfter(afterPosition, howMany) | Sheet |
| No | insertColumnsBefore(beforePosition, howMany) | Sheet |
| No | insertImage(blob, column, row) | void |
| No | insertImage(blob, column, row,offsetX, offsetY) | void |
| No | insertImage(url, column, row) | void |
| No | insertImage(url, column, row,offsetX, offsetY) | void |
| No | insertRowAfter(afterPosition) | Sheet |
| No | insertRowBefore(beforePosition) | Sheet |
| No | insertRows(rowIndex) | void |
| No | insertRows(rowIndex, numRows) | void |
| No | insertRowsAfter(afterPosition,howMany) | Sheet |
| No | insertRowsBefore(beforePosition, howMany) | Sheet |
| No | isSheetHidden() | Boolean |
| No | newChart() | EmbeddedChartBuilder |
| No | protect() | Protection |
| No | removeChart(chart) | void |
| No | setActiveRange(range) | Range |
| No | setActiveSelection(range) | Range |
| No | setActiveSelection(a1Notation) | Range |
| No | setColumnWidth(columnPosition,width) | Sheet |
| No | setFrozenColumns(columns) | void |
| No | setFrozenRows(rows) | void |
| No | setName(name) | Sheet |
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