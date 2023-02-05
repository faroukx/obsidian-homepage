%%code and counting and notes%%
%%Using Rainbel plugin%%


<p class="stickies";>
<b> COUNTDOWN <font color="#ff0000"><font color="#ff0000">IMPORTANT</font></font> </b><br>
Important  | <%+* let edate = moment("2023-12-31", "yyyy-MM-DD"); let from = moment().startOf('day'); edate.diff(from, "days") >= 0 ? tR += edate.diff(from, "days") : tR += edate.add(1, "year").diff(from, "days") %> days.</br>
<!-- --- -->
</p>

<p class="stickies";>
<b> COUNTDOWN <font color="#0070c0">MEETINGS</font> </b><br>
Business | <%+* let edate = moment("2022-02-08", "yyyy-MM-DD"); let from = moment().startOf('day'); edate.diff(from, "days") >= 0 ? tR += edate.diff(from, "days") : tR += edate.add(1, "year").diff(from, "days") %> days.</br>
 Personal in <%+* let edate = moment("2023-03-01", "yyyy-MM-DD"); let from = moment().startOf('day'); edate.diff(from, "days") >= 0 ? tR += edate.diff(from, "days") : tR += edate.add(1, "year").diff(from, "days") %> days.</br>
<!-- --- -->
</p>





%%BLANK TEMPLATE HERE%%

%%%%
<p class="stickies";>
<b> COUNTDOWN </b><br>
Jour | <%+* let edate = moment("2021-12-12", "yyyy-MM-DD"); let from = moment().startOf('day'); edate.diff(from, "days") >= 0 ? tR += edate.diff(from, "days") : tR += edate.add(1, "year").diff(from, "days") %> jours.</br>
Semaine | <%+* let edate = moment("2022-12-12", "yyyy-MM-DD"); let from = moment().startOf('week'); edate.diff(from, "weeks") >= 0 ? tR += edate.diff(from, "weeks") : tR += edate.add(1, "week").diff(from, "weeks") %> semaines.</br>
Mois | <%+* let edate = moment("2022-12-01", "yyyy-MM-DD"); let from = moment().startOf('month'); edate.diff(from, "months") >= 0 ? tR += edate.diff(from, "month") : tR += edate.add(1, "year").diff(from, "months") %> mois.</br>
Ensemble | <%+* let edate = moment("2022-12-01", "yyyy-MM-DD"); let from = moment().startOf('month'); edate.diff(from, "months") >= 0 ? tR += edate.diff(from, "month") : tR += edate.add(1, "year").diff(from, "months") %> mois | <%+* let edate = moment("2022-12-12", "yyyy-MM-DD"); let from = moment().startOf('week'); edate.diff(from, "weeks") >= 0 ? tR += edate.diff(from, "weeks") : tR += edate.add(1, "week").diff(from, "weeks") %> semaines | <%+* let edate = moment("2021-12-12", "yyyy-MM-DD"); let from = moment().startOf('day'); edate.diff(from, "days") >= 0 ? tR += edate.diff(from, "days") : tR += edate.add(1, "year").diff(from, "days") %> jours </br>
<!-- --- -->
</p>
%%%%

