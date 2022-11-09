> [!multi-column]
>
>> [!stickies3]
>> **COUNTDOWN**
>> 
>> Le nouvel an commencera dans **<%+* let edate = moment("2023-01-01", "yyyy-MM-DD"); let from = moment().startOf('day'); edate.diff(from, "days") >= 0 ? tR += edate.diff(from, "days") : tR += edate.add(1, "year").diff(from, "days") %>** jours.
>> La session finira dans <%+* let edate = moment("2022-12-12", "yyyy-MM-DD"); let from = moment().startOf('day'); edate.diff(from, "days") >= 0 ? tR += edate.diff(from, "days") : tR += edate.add(1, "year").diff(from, "days") %> jours.
> 
>> [!stickies3|blue]
>> **Quick Access**
>> ### 📆 `$= '[['+ moment().format("YYYY-MM") +'|Ce mois]]'`
>> ### 📆 `$= '[['+ moment().format("YYYY") +'|Cette année]]'`
>>  
>
>> [!stickies3|pink]
>> ###### *La citation du jour.*
>>
>>一 Pourquoi ne cours-tu pas pour faire ce que ta nature exige ? Tu ne t'aimes pas assez. Ou alors tu aimerais aussi ta nature, et ce qu'elle exige de toi.
>>
>
>> [!stickies3|green]
>>  **Weather**
>> ###### [[link]]
>>  ```button
>>name Quick Switcher
>>type command
>>action Quick switcher: Open quick switcher
>>```
>



