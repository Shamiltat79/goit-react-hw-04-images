import axios from "axios"; 




export const fetchImage = async (request, page, perPage) => {
    try {
        const response = await axios.get(`https://pixabay.com/api/?q=${request}&page=${page}&key=33196746-3c53ba3d329df844fee4c0829&image_type=photo&orientation=horizontal&per_page=${perPage}` 
        )  
        const data = response.data;
        
        return data;
        
    } catch (error) {
        console.log(error)
    }
    
}