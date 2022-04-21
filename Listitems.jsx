const Listitems = (props) => {
    const {items, handleDelete}=props;
    let length=items.length;
    const listItems= length ?(items.map((item)=>{
        return(
            <div key={item.id}>
                <span>{item.task}</span>
                <span>{item.time}</span>
                <span onClick={()=>handleDelete(item.id)}>&times;</span>


                 


            </div>
        )
    })):(
        <p>there is nothing to show</p>
    )



    return ( 
        <div className="listitems">
            {listItems}




             
        </div>
     );
}
 
export default Listitems;
