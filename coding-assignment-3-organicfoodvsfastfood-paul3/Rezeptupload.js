window.onload = function()
{
    let xhr = new XMLHttpRequest();
    xhr.responseType = ‘json’;

    // xhr.onreadystatechange = function()
    // {
    //   if (xhr.readyState == 4 && xhr.status = 200) {
    //     console.log(JSON.parse(xhr.responseType));
    //   }


    xhr.open(‘POST’, 'file:///Users/if160118/Documents/coding-assignment-3-organicfoodvsfastfood-paul3/recipes.json');
    xhr.setRequestHeader("content-type","application/json");
    xhr.send(xhr.stringify(getRequestBody()));

}
