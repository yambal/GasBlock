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