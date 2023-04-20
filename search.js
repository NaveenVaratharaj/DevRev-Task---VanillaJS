function searchBooks()
{
    const searchInput = document.getElementById('search');
    //console.log(searchInput)
    const rows = document.querySelectorAll("table tbody tr");

    for(let i=0; i<rows.length; i++)
    {
        const rowData = rows[i].innerHTML;
        // console.table(rowData);
    }
    searchInput.addEventListener("keyup", function (event) {
        const userQuery = event.target.value.toLowerCase();
        var count = 0;
        rows.forEach((row) => {
            row.querySelector("td").textContent.toLowerCase().startsWith(userQuery)
            ? (row.style.display = "table-row", ++count)
            : (row.style.display = "none");
        });
        document.getElementById('countResult').innerHTML = `${count} Books Found`
    })
}
