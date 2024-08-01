step-1: create a react-project with name as app_store
step-2: create folder and file structure.
step-3: create a class AppStore and export it.
step-4: create a state with propeties tabid and appId 
step-5: return the componets 
step-6: to display the list of Tabs we are calling a map function with TabItem list and return the key and item also.
step-7: to dislay the all the apps we are calling the map function with appsList list and passing th key with object.
step-8: creating a order list in AppItem to display the m items with imageUrl, name, category.

-- by appling above all the apps will display and all the tab will also but the they can't display based on clicking on tabs by defacult all apps will dispaly to apply based on tabs apps will dispaly we follow the below steps.

step-9: create a method called updateIdMethod to update the state of tabid and pass it to TabItem 
step-10: access the method and create a array function to call this method and pass the id to it.

step-11: to display the apps based on tabls id we are creating method call updateAppsState and we are filter all the apps which caegory is match with tabid and then are return a filter list 

step-12: to all the updateAppsState we are creting a variable and calling it then we are replacing the applist from map method to that variabl name so that based on tabls id it will dispay.

----------now appling the functionality of search ---------------------
step-13:  