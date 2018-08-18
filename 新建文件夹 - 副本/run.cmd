@echo on
rd /s /q F:\Jsdoc\apidoc
.\node_modules\.bin\jsdoc -t .\jaguarjs-jsdoc-master -r .\scripts -d .\apidoc

@pause