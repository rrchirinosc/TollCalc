Notes in regards to the project

The notes (1-5) below were written yesterday as I did the test and reflect the state I thought the push code had.

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Today I decided to improve the project not for the purpose of the test itself but for myself
since it sits publicly in github.

To my surprise I realized that the actual code for TollCal had not been pushed correctly - which I 
think was some error with VisualStudio and the fact that I named my branch master rather than main.

I could not fix the errors with the branch so I recreated the TollCalc repo, updated it and pushed the 
corresponding changes to the congestion-tax-calculator.

Please note that this is not an attempt to cheat on the test since the timestamps are clear and obviously I spent
more than 4 hours to have the project as it it right now.

Finally note that GetTax() is still not fixed.

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


1. The GetTax function is not finished. It does not handle correctly toll passes on the same day, in other words 
it does not handle correctly the 60 minute in between tolls rule.

2. Ideally, the toll passing data should be stored in a database. This database would identify a vehicle by its
registration number, contain the type of vehicle it is and the toll passing data pertaining to it.

3. The database handling could be part of the CongestionTaxCalculator lib which would only need to expose 
a function to receive the vehicle registration string and return the corresponding fee.

4. I introuduced an incomplete fee model that I ended up not using.

5. In order to support other city tax rules, the lib would have a way to retrieve or have stored different profiles 
for these cities and expose an api to set the city to evaluate prior to any other calculations. 
