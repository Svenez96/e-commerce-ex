import { useState, useEffect } from 'react';
import { apiConfig } from '../config/api'

const Products = ({addToCart}) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(apiConfig.API_URL, {method:"GET"});
            if (!response.ok) throw new Error('API response error');
            const data = await response.json();
            setProducts(data.products);

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
        fetchData()
    }, []);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

    return (
    <>
        <div className='flex flex-wrap gap-8 p-4 justify-center' >
            {products.map(item => (
                <div className=' border rounded-lg bg-gray-100 bg-opacity-40 flex flex-col items-center'  key={item.id}>
                    <img src={item.thumbnail} alt={item.title} />
                    <h3 className='mb-4'>{item.title}</h3>
                    <div className='flex items-center space-x-10 mb-4'>
                    <p className='text-xl'>{item.price}</p>
                    <button className='px-8 py-2 rounded-md bg-cyan-600 hover:bg-blue-600 transition duration-200 ease-in-out text-white ' onClick={() => addToCart(item)}>Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    </>
    )
}

export default Products