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
|Yes		|	addEditor(emailAddress)				|	Spreadsheet		|
|None		|	addEditor(user)						|	Spreadsheet		|
|Yes		|	addEditors(emailAddresses)				|	Spreadsheet		|
|None		|	addMenu(name, subMenus)				|	void			|
|Yes		|	addViewer(emailAddress)				|	Spreadsheet		|
|None		|	addViewer(user)					|	Spreadsheet		|
|Yes		|	addViewers(emailAddresses)				|	Spreadsheet		|
|Class Sheet	|	appendRow(rowContents)				|	Sheet			|
|Class Sheet	|	autoResizeColumn(columnPosition)			|	Sheet			|
|Yes		|	copy(name)						|	Spreadsheet		|
|Yes		|	deleteActiveSheet()					|	Sheet			|
|Class Sheet	|	deleteColumn(columnPosition)				|	Sheet			|
|Class Sheet	|	deleteColumns(columnPosition, howMany)		|	void			|
|Class Sheet	|	deleteRow(rowPosition)					|	Sheet			|
|Class Sheet	|	deleteRows(rowPosition, howMany)			|	void			|
|Yes		|	deleteSheet(sheet)					|	void			|
|Yes		|	duplicateActiveSheet()					|	Sheet			|
|Class Sheet	|	getActiveCell()						|	Range			|
|Class Sheet	|	getActiveRange()					|	Range			|
|Yes		|	getActiveSheet()					|	Sheet			|
|None		|	getAs(contentType)					|	Blob			|
|None		|	getBlob()						|	Blob			|
|Class Sheet	|	getColumnWidth(columnPosition)			|	Integer			|
|Class Sheet	|	getDataRange()					|	Range			|
|None		|	getEditors()						|	User[]			|
|None		|	getFormUrl()						|	String			|
|Class Sheet	|	getFrozenColumns()					|	Integer			|
|Class Sheet	|	getFrozenRows()					|	Intege			|
|None		|	getId()							|	String			|
|Class Sheet	|	getLastColumn()					|	Integer			|
|Class Sheet	|	getLastRow()						|	Integer			|
|None		|	getName()						|	String			|
|None		|	getNamedRanges()					|	NamedRange[]		|
|None		|	getNumSheets()					|	Integer			|
|None		|	getOwner()						|	User			|
|None		|	getProtections(type)					|	Protection[]		|
|Class Sheet	|	getRange(a1Notation)					|	Range			|
|None		|	getRangeByName(name)				|	Range			|
|Class Sheet	|	getRowHeight(rowPosition)				|	Integer			|
|None		|	getSheetByName(name)				|	Sheet			|
|Class Sheet	|	getSheetId()						|	Intege			|
|Class Sheet	|	getSheetName()					|	String			|
|Class Sheet	|	getSheetValues(startRow, startColumn, numRows, numColumns)	|	Object[][]		|
|None		|	getSheets()						|	Sheet[]			|
|None		|	getSpreadsheetLocale()				|	String			|
|None		|	getSpreadsheetTimeZone()				|	String			|
|None		|	getUrl()							|	String			|
|None		|	getViewers()						|	User[]			|
|Class Sheet	|	hideColumn(column)					|	void			|
|Class Sheet	|	hideRow(row)						|	void			|
|Class Sheet	|	insertColumnAfter(afterPosition)			|	Sheet			|
|Class Sheet	|	insertColumnBefore(beforePosition)			|	Sheet			|
|Class Sheet	|	insertColumnsAfter(afterPosition, howMany)		|	Shee			|
|Class Sheet	|	insertColumnsBefore(beforePosition, howMany)		|	Sheet			|
|Class Sheet	|	insertImage(blob, column, row)				|	void			|
|Class Sheet	|	insertImage(blob, column, row, offsetX, offsetY)		|	void			|
|Class Sheet	|	insertImage(url, column, row)				|	void			|
|Class Sheet	|	insertImage(url, column, row, offsetX, offsetY)		|	void			|
|Class Sheet	|	insertRowAfter(afterPosition)				|	Sheet			|
|Class Sheet	|	insertRowBefore(beforePosition)			|	Shee			|
|Class Sheet	|	insertRowsAfter(afterPosition, howMany)		|	Sheet			|
|Class Sheet	|	insertRowsBefore(beforePosition, howMany)		|	Sheet			|
|None		|	insertSheet()						|	Sheet			|
|None		|	insertSheet(sheetIndex)					|	Sheet			|
|None		|	insertSheet(sheetIndex, options)			|	Sheet			|
|None		|	insertSheet(options)					|	Sheet			|
|None		|	insertSheet(sheetName)				|	Sheet			|
|None		|	insertSheet(sheetName, sheetIndex)			|	Sheet			|
|None		|	insertSheet(sheetName, sheetIndex, options)		|	Sheet			|
|None		|	insertSheet(sheetName, options)			|	Sheet			|
|None		|	moveActiveSheet(pos)					|	void			|
|None		|	removeEditor(emailAddress)				|	Spreadsheet		|
|None		|	removeEditor(user)					|	Spreadsheet		|
|None		|	removeMenu(name)					|	void			|
|None		|	removeNamedRange(name)				|	void			|
|None		|	removeViewer(emailAddress)				|	Spreadsheet		|
|None		|	removeViewer(user)					|	Spreadsheet		|
|None		|	rename(newName)					|	void			|
|None		|	renameActiveSheet(newName)				|	void			|
|Class Sheet	|	setActiveRange(range)					|	Range			|
|Class Sheet	|	setActiveSelection(range)				|	Range			|
|Class Sheet	|	setActiveSelection(a1Notation)				|	Range			|
|None		|	setActiveSheet(sheet)					|	Sheet			|
|Class Sheet	|	setColumnWidth(columnPosition, width)		|	Sheet			|
|Class Sheet	|	setFrozenColumns(columns)				|	void			|
|Class Sheet	|	setFrozenRows(rows)					|	void			|
|None		|	setNamedRange(name, range)				|	void			|
|Class Sheet	|	setRowHeight(rowPosition, height)			|	Sheet			|
|None		|	setSpreadsheetLocale(locale)				|	void			|
|None		|	setSpreadsheetTimeZone(timezone)			|	void			|
|None		|	show(userInterface)					|	void			|
|Class Sheet	|	sort(columnPosition)					|	Sheet			|
|Class Sheet	|	sort(columnPosition, ascending)			|	Sheet			|
|None		|	toast(msg)						|	void			|
|None		|	toast(msg, title)						|	void			|
|None		|	toast(msg, title, timeoutSeconds)			|	void			|
|Class Sheet	|	unhideColumn(column)					|	void			|
|Class Sheet	|	unhideRow(row)					|	void			|
|None		|	updateMenu(name, subMenus)				|	void			|