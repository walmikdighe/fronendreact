
export function EventDemo(){


//     function handleInsertClick(e){
//         console.log(`
//            X Postion:${e.clientX}\n
//            Shift Key:${e.shiftKey}\n
//            Button Name:${e.target.name}\n
//            Button Class:${e.target.className}

//            `);

//     }


function handleDetailedClick(e,...details){
    let [id,name,stock,cities,rating]=details;

    console.log(`
        Id:${id}\n
        Name:${name}\n
        stock:${stock}\n
        cities:${cities}\n
        rating:${rating}
        `)

}

     return(
       <div className="container-fluid">
           <button onClick={(e)=>handleDetailedClick(e,1,"TV",true,['hydrabad','banglore'],10.01)} name="insert"  value="btnInsert" className="btn btn-primary mt-2">Insert</button>
         </div>
    )

 }