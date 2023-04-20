// Calling of Fetch Api to fetch data from JSON

fetch('books.json')
.then((data) => data.json()) //Json
.then((objectData) => { //Data as Objects
    // console.table(objectData[0].author);
    let tableData = "";
    objectData.map((values) => {
        tableData += `<tr id="tablerows">
            <td>${values.title}</td>
            <td>${values.author}</td>
            <td>${values.year}</td>
            <td>${values.language}</td>
            <td>
                <a href=${values.link}>Know More</a>
            </td>
      </tr>`
    })
    document.getElementById('tablebody').innerHTML = tableData;
})  
.catch((error) => {
    console.log(`Error occures while fetching data ${error}`);
    document.getElementById('bookssection').innerHTML = 'Error Loading Data'
})
