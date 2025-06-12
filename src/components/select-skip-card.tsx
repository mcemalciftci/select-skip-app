"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useMainContext } from "@/context/MainContext"
import type { SelectCardType } from "@/types/select-card-type"
import { AlertTriangle, ArrowRight, Calendar, Check, Truck } from "lucide-react"

export default function SelectSkipCard({ cardDatas }: { cardDatas: SelectCardType[] }) {
    const { selectedCard, setSelectedCard } = useMainContext();
    return (<>
        {cardDatas?.map((cardData) => {
            return (

                <Card onClick={() => { setSelectedCard(cardData) }} className={"w-72   shadow-2xl backdrop-blur-sm  overflow-x-hidden cursor-pointer hover:scale-105  " + (selectedCard?.id === cardData.id ? " border-2 border-blue-600" : "")} key={cardData.id}>

                    <CardContent className=" space-y-4  flex flex-wrap items-start justify-between">

                        <div className="h-36 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 relative  flex w-full rounded-2xl">
                            <div className="absolute top-4 right-4 z-10">
                                <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-3 py-1 text-sm shadow-lg">
                                    {cardData.size} Yards
                                </Badge>
                            </div>
                            {/* Warning badge */}
                            {!cardData.allowed_on_road && <div className="absolute bottom-4 left-3">
                                <Badge
                                    variant="destructive"
                                    className="bg-red-500/90 text-white font-medium px-3 py-1 text-xs shadow-lg backdrop-blur-sm"
                                >
                                    <AlertTriangle className="w-3 h-3 mr-1" />
                                    Not Allowed On The Road
                                </Badge>
                            </div>}
                        </div>
                        <h3 className="text-xl font-bold">{cardData?.size} Yard Skip</h3>
                        <div className="flex items-center text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            14 day hire period
                        </div>

                        <div className="flex items-center gap-2 text-xs">
                            <Truck className="w-4 h-4" />
                            <span>Delivery & Collection Included</span>
                        </div>

                        <div>
                            <div className="text-2xl font-bold">£ {cardData?.price_before_vat}</div>
                            <div className="text-sm">Total cost</div>
                        </div>

                        <Button

                            className={`cursor-pointer w-full font-medium text-sm py-2 rounded-lg shadow-md transition-all duration-200 transform hover:scale-[1.02]
                            ${selectedCard?.id === cardData.id
                                    ?
                                    "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                                    :
                                    "bg-zinc-700 text-white"}
                            `}
                        >
                            <div className="flex items-center gap-2 justify-center">
                                {selectedCard?.id === cardData.id ? (
                                    <>
                                        <span className="font-semibold">Selected</span>
                                        <Check className="w-4 h-4" strokeWidth={4} />
                                    </>
                                ) : (
                                    <>
                                        <span>Select This Skip</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </div>
                        </Button>

                    </CardContent>
                </Card>
            )
        })}

    </>
    )
}
