# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Create and add new custom ids column in Agents table where current internal ids column exists. 
Time estimate: 15 min.

2. Create and add new input functionality for facilities to input and save their custom ids. Create new method called `generateCustomId`. Modify the method to allow facilities to input their own custom id. Provide a prompt to the user to ask the user to type in a custom id they wish to use for the specific agent they have selected. Add a `selectAgent` function for the user to be able to select from the list of agents at the facility. Then insert new custom id value into the custom ids column in Agents table corresponding to the specific agent they are adding a custom id to. 
Time estimate: 3-4 hours 

3. Modify `getShiftsByFacility` and `generateReport` functions to incorporate new customids when fetching the Agent's metadata. 
When fetching the data in these two functions, make sure custom ids are included as a parameter to include into the report.
Time estimate: 45 min.

4. Test and check if new custom ids are being displayed correctly in the generated report. Generate a report and see if the pdf consists of new custom ids being printed and check the correct custom id is being printed that the facility expects. 
Time estimate: 15 min
