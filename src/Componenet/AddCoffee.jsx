import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleAddCoffee = event =>{
         event.preventDefault();
         const form = event.target;

         const name = form.name.value;

        const quantity = form.quantity.value;
      
         const supplier = form.supplier.value;
         const taste = form.taste.value;
         const photo = form.photo.value;
         const coffee = {name, quantity, supplier, taste, photo}
        
         ///data sent the server

         fetch('http://localhost:5001/coffee', {
            method: 'POST',
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(coffee)
         })
         .then(res => res.json())
         .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Item added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
         })

    }
    return (
        <div>
            <form onSubmit={handleAddCoffee}>
                <div className="bg-slate-600 p-20 ">
                    <h2 className="text-3xl text-white">Add Coffee On the List </h2>
                    <div className="md:flex mb-8">
                        <label className="input md:w-1/2 input-bordered flex items-center gap-2">
                            Name:
                            <input type="text" name="name" className="grow" placeholder="Coffee Name" />
                        </label>
                        <label className="input md:w-1/2 input-bordered flex items-center gap-2">
                            Quatity:
                            <input type="text" name="quantity" className="grow" placeholder=" Available Quatity" />
                        </label>
                    </div>
                    <div className="md:flex mb-8">
                        <label className="input md:w-1/2 input-bordered flex items-center gap-2">
                        Supplier:
                            <input type="text" name="supplier" className="grow" placeholder="Supplier" />
                        </label>
                        <label className="input md:w-1/2 input-bordered flex items-center gap-2">
                        Taste:
                            <input type="text" name="taste" className="grow" placeholder="Taste" />
                        </label>
                    </div>
                    <div className="md:flex mb-8">
                        <label className="input md:w-full input-bordered flex items-center gap-2">
                            Photo URL:
                            <input type="text" name="photo" className="grow" placeholder="Photo url" />
                        </label>
                        
                    </div>
                    <input className="btn btn-neutral w-full" type="submit" value="Add coffee" />
                </div>
                
              
            </form>
        </div>
    );
};

export default AddCoffee;









