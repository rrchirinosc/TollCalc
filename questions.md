Notes in regards to the project

1. The GetTax function is not finished. It does not handle correctly toll passes on the same day, in other words 
it does not handle correctly the 60 minute in between tolls rule.

2. Ideally, the toll passing data should be stored in a database. This database would identify a vehicle by its
registration number, contain the type of vehicle it is and the toll passing data pertaining to it.

3. The database handling could be part of the CongestionTaxCalculator lib which would only need to expose 
a function to receive the vehicle registration string and return the corresponding fee.

4. I introuduced an incomplete fee model that I ended up not using.

5. In order to support other city tax rules, the lib would have a way to retrieve or have stored different profiles 
for these cities and expose an api to set the city to evaluate prior to any other calculations. 
