# README

## To start the project:

* Install node 14.18 and run 'nvm use 14.18'

* Run 'yarn' to install dependencies

* To start the server run 'yarn dev' or 'npm run dev'

## To add navigation to Navbar:

* Add a new object to the navigation array with title as 'name', navigation path as 'href' and add another field 'current' with value false.

* To add a dropdown, add an array 'subitems' to the object with same format except the 'current' attribute.

## To add navigation to Sidebar:

* Add a new object to the 'sideNavigation' array with title as 'name' and navigation path as 'href'.

* To add a disclosure, add an array 'items' to the object with same format (for each sub object, add name and href attribute).
