class APICrud{


    getOne(apiUrlGet, id){
        fetch(apiUrlGet + `/${id}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
        })
        
    }

    getAll(apiUrlget){
        return fetch(apiUrlget)
        .then(response => {
            if(!response.ok){
                throw new Error("Error al obtener datos")
            }
            return response.json();
        })

        .catch(error =>{
            console.error(error)
        })
    }

    post(apiUrlPost,dataArray){
        fetch(apiUrlPost, {
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify({dataArray}),
        })
        .then(response => {
            if(!response.ok){
                throw new Error("Error intentando de hacer un post")
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
        
    }
    put(apiUrlPut, dataArray){
        fetch(apiUrlPut,{
            method:"PUT",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({dataArray})
        })

        .then(response => {
            if(!response.ok){
                throw new Error("Error al intentar actualizar datos")
            }
            return response.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })

    }

    delete(apiUrlDelete){
        fetch(apiUrlDelete, {
            method:"DELETE",
        })
    }


}

const apiCrud = new APICrud()
const apiUrl = `https://jsonplaceholder.typicode.com/posts`


var dataArray = {
    title:"perrillo",
    body:"perrilo chiquito",
    userId:10,
}
/*Get just One*/

/*apiCrud.getOne(apiUrl, 1)*/

/*Delete*/

/*apiCrud.delete(apiUrl)*/


/*Put*/

/*apiCrud.put(apiUrl, dataArray)*/

/*Post*/

/*apiCrud.post(apiUrl, dataArray)*/

/*GetAll*/
/*
apiCrud.getAll(apiUrl)
*/



var table = document.querySelector('table');


const showData = () => {
    apiCrud.getAll(apiUrl)
    .then(data => {
        const usuario = data;
        for (let i = 0; i < 5 && i < data.length; i++){
            console.log(data[i].id, data[i].title)
            const row = document.createElement('tr');
            const cellId = document.createElement('td');
            const cellTitle = document.createElement('td');
            const cellBody = document.createElement('td');


            cellId.textContent = data[i].id;
            cellTitle.textContent = data[i].title;
            cellBody.textContent = data[i].body;


            row.appendChild(cellId);
            row.appendChild(cellTitle);
            row.appendChild(cellBody);

            table.appendChild(row);
        }
        
    })
}
showData()
