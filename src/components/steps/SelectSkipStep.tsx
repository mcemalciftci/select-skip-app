import { useEffect, useState } from "react"
import SelectSkipCard from "../select-skip-card"
import { LoadingSpinner } from "../loading";
export const SelectSkipStep = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft").then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      return response.json()
    }).then((data) => {
      setLoading(false)
      setData(data)
    }).catch(() => {
      setLoading(false)
    })

  }, [])

  return (
    <div>
      <div className="flex justify-center items-center flex-col mb-10 gap-y-2 text-center">
        <h1 className="text-3xl font-bold ">Choose Your Skip Size</h1>
        <h4 className="text-lg font-bold text-gray-400">Select the skip size that best suits your needs</h4>
      </div>
      {loading ? (
          <LoadingSpinner />
      ) : <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  mb-80 sm:mb-24  w-full items-center justify-items-center">
        <SelectSkipCard cardDatas={data} />
      </div>}
      
    </div>
  )
}
