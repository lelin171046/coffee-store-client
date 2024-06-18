import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    console.log(coffee);
    const {_id, name, quantity, supplier, taste, photo } = coffee;

    const handleDelete = _id =>{
        console.log(_id);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
            //   swalWithBootstrapButtons.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            fetch(`http://localhost:5001/coffee/${_id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data =>{
                if(data.deletedCount > 0){
                    swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        const remining =  coffees.filter(cof => cof._id !==_id);
                        setCoffees(remining)
                }
              })
              
            console.log('delete action');
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
              });
            }
          });

         
    }
    return (
        <div>
            <div className="card lg:card-side bg-slate-500 shadow-xl">
                <figure className="w-56 "><img src={photo} alt="Album" /></figure>
                <div className="flex justify-between w-full mx-3">
                    <div className="">
                        <p>Name: {name}</p>
                        <p>Quantity: {quantity}</p>
                        <p>Taste: {taste}</p>
                        <p>Supplier: {supplier}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-4">
                            <button className="btn join-item">View</button>
                           <Link to={`update/${_id}`}>
                           <button className="btn join-item">Edit</button>
                           </Link>
                            <button
                            onClick={()=> handleDelete(_id)}
                            className="btn join-item bg-red-400">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;