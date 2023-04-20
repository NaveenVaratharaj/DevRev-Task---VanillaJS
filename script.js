alert("I am linked")

fetch('books.json')
.then((data) => data.json())
.then((objectData) => {
    console.table(objectData[0].author);
    let tableData = "";
    objectData.map((values) => {
        tableData += `<tr>
            <td>${values.author}</td>
            <td>${values.title}</td>
            <td>${values.year}</td>
            <td>${values.language}</td>
            <td>
                <a href=${values.link}>Wikipedia</a>
            </td>
      </tr>`
    })
    document.getElementById('tablebody').innerHTML = tableData;
})  
.catch((error) => {
    console.log(`Error occures while fetching data ${error}`);
    document.getElementById('bookssection').innerHTML = 'Error Loading Data'
})
