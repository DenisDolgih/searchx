searchx
test task for Matrix Global
deployed at https://searchx-a5674.web.app/
1. There are an input where you can type.
2. Input supports autocompletion only for words from fake database "title" field. These words are "react", "angular", "jquer", "vue" etc.
3. Results are shown on selection (by clicking on a result item or by pressing the Enter key).
4. Suggested inputs are indicated which of the them are already in your searching history.
5. Once the screen loads the search input is autofocused.
6. Once you focus out the input, the list with the autocompleted items will close, BUT still keep the items in memory. Not in localstorage, just in memory. After refreshing all data gets lost.
7. Once you focus the input if there are autocomplete items in memory they will be shown.
8. There is “Remove” button – by clicking it you will remove the relevant item from your searching history, the item colour will change from purple to black because the item won’t be in your searching history anymore.
9. Once you select an item from the autocomplete shown OR press enter, you you'll get the items which title contains the text/query.
10. The search input is preserved after search action (you are still able to type and perform a new search).
11. There is result meta data (below the search input it tells you how many results you have and how long it takes to perform the search)
