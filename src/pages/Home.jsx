import { useEffect, useState } from "react"
import Card from "../components/Card"
import axios from "axios"
function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
      const fetchData = async () => {
          try {
               const res = await axios.get('https://fakestoreapi.com/products?limit=8')
               setData(res.data)
               console.log(res.data)
          } catch (error) {
              console.log('Error: ', error)
          }
      }

      fetchData()

  },[])

 

  return (
     <div className="font-jost">
              <div style={{ backgroundImage: "url('./slide_02.jpg')" }} className=" bg-secondary bg-center bg-cover lg:bg-contain bg-no-repeat flex items-center h-screen px-4 lg:px-40">
                    <div>
                          <h2 className="text-xl font-bold">New Collection</h2>
                          <h1 className="text-6xl lg:text-7xl font-bold mb-2">Luxury Without <br /> Labels</h1>
                          <p>Explore new-in product and best sellers</p>
                          <button className="bg-primary text-white px-8 py-2 mt-4">View Collection</button>
                    </div>
              </div>

              <div className="my-20 max-w-[90%] lg:max-w-5xl mx-auto">
                        <h2 className="text-center text-3xl font-bold">Best Seller</h2>
                        <p className="text-center">Explore our best seller products</p>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">

                               {
                                 data?.map(item => (
                                    <Card key={item.id} data={item}/>
                                 ))
                               } 
                                
                        </div>

                        <div className="flex justify-center mt-8">
                              <button className="bg-transparent px-8 py-2 border border-primary hover:bg-primary hover:text-white transition-all">Explore More</button>
                        </div>
              </div>
     </div>
  )
}

export default Home