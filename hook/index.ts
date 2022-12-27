import * as api from "../fetch/product"
import { useQuery} from "react-query"

const useAllProducts = () => {
    return useQuery("products", api.getAllProducts)
}

export {useAllProducts}
