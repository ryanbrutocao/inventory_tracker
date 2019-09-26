# inventory_tracker
### An app for tracking client inventory

#### Description of application
This application is built to allow a salesperson to track sales, client interactions, and inventory. 
The salesperson will enter client name (create a table for each client) that will keep track of client specific inventory/notes/sales etc.
When new client info is entered, salesperson will populate fields on the screen for:
-wine varietal
-wine vintage
-label (brand) name
  -vintage
  -varietal
-label count
-quantity (reserved)
-quantity labeled

-quantity/date/varietal shipped

-timestamped notes on the client that can be updated for each interaction
-records keeper that shows what date, what wines, and how much was labeled/sold/shipped. (to be displayed on client page)

#### Key functionality and features
-main wine inventory adding/updating
-all client wine sold needs to reduce available main inventory
-all client 'reserved' wines need to remove from the 'available inventory' tab which comes from the main inventory. This is to prevent from 'overselling' of any specific wine/vintage
-client inventory adding/updating
-main inventory adding/updating/deleting
-ability to add new clients
-ability to create notes about client interactions (quoted prices, wines we discussed, quantities discussed, timeline etc...)


#### Icebox

sales trends / inventory estimates
e-mail reminders for 'to-do' list and followups
samples sent tab to keep track of when/what samples were sent



--- I think this app can be built with handlebars and each cleint gets their own page of info that shows. We route the .handlebars file when the client name is chosen from a dropdown menu.

