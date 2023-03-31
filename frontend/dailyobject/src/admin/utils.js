
import axios from "axios";


export const deleteProduct = async(id) => {
	
	try {
		await axios.delete(`http://localhost:8080/products/delete/${id}`);
		console.log("delete");
	} catch (error) {
		console.log(error);
	}
};


