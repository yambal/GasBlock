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
| 実装 |	Method							|	Return type		|
| --- |:---:| ---:|
|Yes|	addEditor(emailAddress)				|	Spreadsheet		|
|None|	addEditor(user)						|	Spreadsheet		|
|Yes|	addEditors(emailAddresses)				|	Spreadsheet		|
|None|	addMenu(name, subMenus)				|	void			|
|Yes|	addViewer(emailAddress)				|	Spreadsheet		|
|None|	addViewer(user)					|	Spreadsheet		|
|Yes|	addViewers(emailAddresses)				|	Spreadsheet		|
|None|	appendRow(rowContents)				|	Sheet			|
|None|	autoResizeColumn(columnPosition)			|	Sheet			|
|Yes|	copy(name)						|	Spreadsheet		|
|Yes|	deleteActiveSheet()					|	Sheet			|
|None|	deleteColumn(columnPosition)				|	Sheet			|
|None|	deleteColumns(columnPosition, howMany)		|	void			|
|None|	deleteRow(rowPosition)					|	Sheet			|
|None|	deleteRows(rowPosition, howMany)			|	void			|
|Yes|	deleteSheet(sheet)					|	void			|
|Yes|	duplicateActiveSheet()					|	Sheet			|
|None|	getActiveCell()						|	Range			|
|None|	getActiveRange()					|	Range			|
|Yes|	getActiveSheet()					|	Sheet			|
|None|	getAs(contentType)					|	Blob			|
|None|	getBlob()						|	Blob			|
|None|	getColumnWidth(columnPosition)			|	Integer			|
|None|	getDataRange()					|	Range			|
|None|	getEditors()						|	User[]			|
|None|	getFormUrl()						|	String			|
|None|	getFrozenColumns()					|	Integer			|
|None|	getFrozenRows()					|	Intege			|
|None|	getId()							|	String			|
|None|	getLastColumn()					|	Integer			|
|None|	getLastRow()						|	Integer			|
|None|	getName()						|	String			|
|None|	getNamedRanges()					|	NamedRange[]		|
|None|	getNumSheets()					|	Integer			|
|None|	getOwner()						|	User			|
|None|	getProtections(type)					|	Protection[]		|
|None|	getRange(a1Notation)					|	Range			|
|None|	getRangeByName(name)				|	Range			|
|None|	getRowHeight(rowPosition)				|	Integer			|
|None|	getSheetByName(name)				|	Sheet			|
|None|	getSheetId()						|	Intege			|
|None|	getSheetName()					|	String			|
|None|	getSheetValues(startRow, startColumn, numRows, numColumns)		|	Object[][]		|
|None|	getSheets()						|	Sheet[]			|
|None|	getSpreadsheetLocale()				|	String			|
|None|	getSpreadsheetTimeZone()				|	String			|
|None|	getUrl()							|	String			|
|None|	getViewers()						|	User[]			|
|None|	hideColumn(column)					|	void			|
|None|	hideRow(row)						|	void			|
|None|	insertColumnAfter(afterPosition)			|	Sheet			|
|None|	insertColumnBefore(beforePosition)			|	Sheet			|
|None|	insertColumnsAfter(afterPosition, howMany)		|	Shee			|
|None|	insertColumnsBefore(beforePosition, howMany)		|	Sheet			|
|None|	insertImage(blob, column, row)				|	void			|
|None|	insertImage(blob, column, row, offsetX, offsetY)		|	void			|
|None|	insertImage(url, column, row)				|	void			|
|None|	insertImage(url, column, row, offsetX, offsetY)		|	void			|
|None|	insertRowAfter(afterPosition)				|	Sheet			|
|None|	insertRowBefore(beforePosition)			|	Shee			|
|None|	insertRowsAfter(afterPosition, howMany)		|	Sheet			|
|None|	insertRowsBefore(beforePosition, howMany)		|	Sheet			|
|None|	insertSheet()						|	Sheet			|
|None|	insertSheet(sheetIndex)					|	Sheet			|
|None|	insertSheet(sheetIndex, options)			|	Sheet			|
|None|	insertSheet(options)					|	Sheet			|
|None|	insertSheet(sheetName)				|	Sheet			|
|None|	insertSheet(sheetName, sheetIndex)			|	Sheet			|
|None|	insertSheet(sheetName, sheetIndex, options)		|	Sheet			|
|None|	insertSheet(sheetName, options)			|	Sheet			|
|None|	moveActiveSheet(pos)					|	void			|
|None|	removeEditor(emailAddress)				|	Spreadsheet		|
|None|	removeEditor(user)					|	Spreadsheet		|
|None|	removeMenu(name)					|	void			|
|None|	removeNamedRange(name)				|	void			|
|None|	removeViewer(emailAddress)				|	Spreadsheet		|
|None|	removeViewer(user)					|	Spreadsheet		|
|None|	rename(newName)					|	void			|
|None|	renameActiveSheet(newName)				|	void			|
|None|	setActiveRange(range)					|	Range			|
|None|	setActiveSelection(range)				|	Range			|
|None|	setActiveSelection(a1Notation)				|	Range			|
|None|	setActiveSheet(sheet)					|	Sheet			|
|None|	setColumnWidth(columnPosition, width)		|	Sheet			|
|None|	setFrozenColumns(columns)				|	void			|
|None|	setFrozenRows(rows)					|	void			|
|None|	setNamedRange(name, range)				|	void			|
|None|	setRowHeight(rowPosition, height)			|	Sheet			|
|None|	setSpreadsheetLocale(locale)				|	void			|
|None|	setSpreadsheetTimeZone(timezone)			|	void			|
|None|	show(userInterface)					|	void			|
|None|	sort(columnPosition)					|	Sheet			|
|None|	sort(columnPosition, ascending)			|	Sheet			|
|None|	toast(msg)						|	void			|
|None|	toast(msg, title)						|	void			|
|None|	toast(msg, title, timeoutSeconds)			|	void			|
|None|	unhideColumn(column)					|	void			|
|None|	unhideRow(row)					|	void			|
|None|	updateMenu(name, subMenus)				|	void			|