import { generateClient } from "aws-amplify/api";
import { listProducts, getProduct } from "../graphql/queries";
const client = generateClient()

export const pullData = async () => {
    let allProducts = await client.graphql({
        query: listProducts
    })
    let products = JSON.parse(JSON.stringify(allProducts))
    return products['data']['listProducts']['items']
}