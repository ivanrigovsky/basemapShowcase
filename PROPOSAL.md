# Boston Neighborhood Mapping Project Proposal
### _The Joint Center for Housing Studies, Harvard University_

***

## Introduction

Thank you for your interest in partnering with _Mimio LLC_ for your website application project. We are excited to offer you our exceptional service, attention to detail, and expert web application construction.

Michael Amos<br>
Cofounder, Mimio LLC<br>
(443) 254-7042<br>
mamos@mimio.io


Clifton Campbell<br>
Cofounder, Mimio LLC<br>
(518) 727-8082<br>
clif@mimio.io


**Executive Summary:**

_The Joint Center for Housing Studies_ requires a full web application built to visualize socioeconomic data across tracts of the Boston Metro Area. This application will allow users to interact with a complex dataset in an easy-to-use and performant user interface.

_Mimio LLC_ is uniquely qualified to build the the desired application, due to our in-house web development experience, Geographic Information System expertise, and our past experience building web applications -- especiailly webmapping applications.

***

## General Project Structure

_Full Project Structure attached as Addendum A at end of document. Reference to "Project Structure" will always regard the full project structure_

- **Development of web application visualizing socioeconomic data across tracts of the Boston Metro Area:**
  - Visualization of as many as 50 variables varying across 4 years
  - User-defined tract selections
  - Double stacking selections for a pass/fail data visualization
  - In general, an attractive and highly functional User Interface for interacting with data
  - Utilization of modern web frameworks and webmapping tools, including Mapbox Graphics Library 
- **Web Analytics:**
  - web traffic assesments
  - [ETC ETC]
- **Cross-browser optimization**
- [FLESH THIS OUT MORE]

## Execution Timeline
- **Overview:**
  - _Start date:_ immediately
  - _Deliverable first major draft:_ mid February
  - _Review of first major draft:_ after delivery date mid-late February
  - _Site visit:_ late February
  - _Completion:_ late March
- **Recurring Items:**
  - _Deliverable demos:_ weekly, available every Monday
  - _General meetings:_ weekly, flexible day

## Project Costs
- **$30,000 base cost split into the following payments:**
  - 25% up front ($7,500)
  - 25% on delivery of first major draft by approximately mid February ($7,500)*
  - 50% upon completion of project in late March ($15,000)

'*' A first major draft shall be considered a version of the application which meets all items defined by the Project Structure and also functions resonably error free

- **Stipulations:**
  - If at over 600 hours completed building agreed upon project structure and the project has a significant number of hours remaining to be completed, the project completion date may be renegotiated to a reasonable point determined by both parties
  - At over 600 hours completed building agreed upon project structure, work will be handled at $50/hour, payed biweekly
  - Minor additions to project structure (work taking less than 3 hours) will be done free of charge
  - Any major additions to the project structure (defined as work taking more than 3 hours) will be handled separately at a rate of $50/hour
  - After final delivery, additional work will be delivered at a rate of $50/hour, payed biweekly
  - All hourly rates will be tracked exactly by _Mimio LLC_ using an industry time tracking tool and reported back to the The Joint Center for Housing Studies in a formal document

***

## Terms of Agreement


**Authorization:**

_The Joint Center for Housing Studies_ is engaging _Mimio LLC_ as a Limited Liability Company for the specific project outlined below:
- "Boston Neighborhood Mapping Project"

**Completion:**

_The Joint Center for Housing Studies_ and _Mimio LLC_ must work together to complete the project in a timely manner. Mimio LLC agrees to work expeditiously to meet all completion dates outlined above, primarily the completion of the project no later than March 31st or whatever date has been agreed upon.

**Payment:**

Fees to _The Joint Center for Housing Studies_ are due in accordance with the cost breakdown above.

**Revision During Execution:**

_The Joint Center for Housing Studies_ may be charged additional fees if it makes changes to the agreed upon project structure, scope, and objectives or if Mimio LLC exceeds more than 600 hours of work.

**Legal & License:**

_Mimio LLC_ warrants that the functionality contained in this project will meet _The Joint Center for Housing Studies_ requirements and that the operation will be reasonably error-free.

The entire risk as to the quality and performance of the project is with _The Joint Center for Housing Studies_. In no event will _Mimio LLC_ be liable to _The Joint Center for Housing Studies_ or any third party for any damages, including any lost profits, lost savings or other incidental, consequential or special damages arising out of the operation of or inability to operate the website, even if _Mimio LLC_ has been advised of the possibility of such damages.
If any provision of this agreement shall be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from this agreement and shall not affect the validity and enforceability of any remaining provisions.

**Copyrights & Trademarks:**

_Joint Center for Housing Studies_ represents to _Mimio LLC_ and unconditionally guarantees that any elements furnished to _Mimio LLC_ for inclusion in the project are owned by _The Joint Center for Housing Studies_, or that _The Joint Center for Housing Studies_ has permission from the rightful owner to use each of these elements, and will hold harmless, protect, and defend _Mimio LLC_ and its subcontractors from any claim or suit arising from the use of such elements furnished by _The Joint Center for Housing Studies_.

**Copyright to Project:**

_Mimio LLC_ guarantees that all aspects of design, construction of, and full code composing the project will be disclosed to _The Joint Center for Housing Studies_ upon completion. With the exception of signature _Mimio LLC_ web framework and user interface strategies, copyrights and ownership of the application will be the sole property of _The Joint Center for Housing Studies_. _Mimio LLC_ also retains the right to display graphics and other design elements as examples of its work in its portfolio.

**Sole Agreement:**

The agreement contained in this Contract constitutes the sole agreement between _Mimio LLC_ and _The Joint Center for Housing Studies_ regarding this project. Any additional work not specified in this contract must be authorized by a written change order. All prices specified in this contract will be honored for three (3) months and two (2) weeks after both parties sign this contract. Continued services after that time will require a new agreement.

**Initial Payment & Refund Policy**

This agreement begins with an initial payment indicated in the pricing table above. If _The Joint Center for Housing Studies_ halts work and applies for a refund within 4 days, work completed shall be billed at the hourly rate of $50/hour, and deducted from the initial payment, the balance of which shall be returned to _The Joint Center for Housing Studies_. If, at the time of the request for refund, work has been completed beyond the amount covered by the initial payment, _The Joint Center for Housing Studies_ shall be liable to pay for all work completed at the hourly rate stated above. No portion of this initial payment will be refunded unless requested within 4 days of signing this contract.

**Acceptance:**

_The Joint Center for Housing Studies_ Acceptance:

[UNDERLINE]


_Mimio LLC_ Acceptance:

[UNDERLINE]

***

## ADDENDUM A: Full Project Structure

### Requirements:
categorical map of data across tracts of the Boston Metro Area (BMA):
  - **As many as 50 variables varying across 4 years:** 
    - 4 years: 1990, 2000, 2010, 2014
    - 4 basic categories:
      - normal variable value (across all 4 years)
      - decile rank of tract for that variable (across all 4 years)
      - changes in values for certain time periods (ex: 2000 --> 2010, 1990 --> 2014)
      - decile rank of changes in values for certain time periods (ex: 2000 --> 2010, 1990 --> 2014)
  - **User-defined tract selections:**
    - tracts will default to entire BMA, but user will also be able to make tract subselections and map visualizations across those
    - the subselection is caused by filtering as such: user picks the `selection filter variable (SFV)` they want and then uses a slider to choose values within its whole value range -- tracts which fall within this `Selection Filter Variable Range` will be the subselection
    - for example: a user should be able to map income growth 1990-2014 for low-income tracts by defining a low-income tract as being in the bottom 4 deciles of tracts ranked by median tract income // via these steps:
      - user defines 'Decile of Income in 1990' as the `SFV`
      - user is then provided a slider based off the full range of the values within the `SFV` and selects tracts of deciles 1-4 as the `Selection Filter Variable Range`, areas outside of this filter are "greyed out"
      - with the subselection now shown, the user is now able to pick any variable to be the `data visualization variable` for mapping, in this case: 'Income Growth 1990-2014'
    - user should also be able to stack `SFVs` into a `Selection Filter Variable Stack`: 
      - up to 3 per stack
      - ex: a user should be able to create a two-variable stacked filter to look only at tracts that are low-income AND low-rent as of 2000 AND whatever
  - **Double stacking selections for a pass/fail data visualization:**
    - as well as the option of using a simple/single `Data Visualization Variable`, users will be granted the ability to cause a binary pass/fail (red/green) visualization based off of secondary selection
    - this could be done by taking the exact same logic from the `Selection Filter Variable Stacks`:
      - in essence this is like a doubling up of the `SFVS` stacks where the first `SFVS` causes the normal greying out and subselection and the second `SFVS` causes a visualization of its results within that subselection
      - for the user, the first `SVFS` would go on as normal // but the second would be some sort of special option/alternative in the Field selection area -- but perhaps with a very familiar UX to the one in the selection area
    - the data visualization `SVFS` will have a limit of 2 `SFVs` per stack whereas the normal `SVFS` will have 3 per stack

### Key Project Terms:
> - `Selection Filter Variable`: variable used to define the subselection of tracts
> - `Selection Filter Variable Range`: selected range of values defined by the user and returned for the `SFV` (this is intrinsic to an `SFV`, with the default being the whole range)
> - `Selection Filter Variable Stack`: when multiple `SFVs` and their associated ranges are used to define a tract subselection together
> - `Data Visualization Variable`: variables used to render the data visualizations

### Variables:
- Income:
  -	Median household income
  - Poverty rate of population 
- Housing Costs:
  - Median gross rent  
  - Median home value of owner occupied units  
  - Renter cost burden rate (share paying over 30% on housing)
  - Homeownership rate
- Education: 
  - Share of adults aged 25 and over with a Bachelor's degree
  - School enrollment rate for children age 5-17
- Demographics:
  - Share of pop by race/ethnicity (white, black, Hispanic, Asian/other)
  - Share of households headed by young adults aged 25-34
- Family Type:  
  - Share of households that are non-family / with children / married-couple families (3 variables)
