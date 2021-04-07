import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const HotelsContext = React.createContext()

class HotelsContextProvider extends React.Component {
    state= {
        myHotel: [
            {
                id: uuidv4(),
                title: "Beach Hotel",
                avaibleRoom: 16,
                hotel_img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                hotel_room_img: [
                        "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
                        "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                        "https://images.unsplash.com/photo-1582582484783-0a7a9e45b0d6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                       ],    
                luks: false,
                maxCapacity: 39,
                breakfast: true,
                freeotopark: true,
                pool: true,
                wifi: true,
                gym: false,
                bar: true,
                beach: true,
                minigolf: false,
                price: 1730,
            },
    
            {
                id: uuidv4(),
                title: "Luxurios Hotel",
                avaibleRoom: 17,
                hotel_img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                hotel_room_img: [
                    "https://images.unsplash.com/photo-1559599238-308793637427?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1565330502637-963b256876c6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1349&q=80",
                    "https://images.unsplash.com/photo-1559599242-651c4e085efb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                ],  
                luks: true,
                maxCapacity: 51,
                breakfast: true,
                freeotopark: false,
                pool: true,
                wifi: true,
                gym: true,
                bar: false,
                beach: true,
                minigolf: false,
                price: 2670,
            },

            {
                id: uuidv4(),
                title: "Rich Hotel",
                avaibleRoom: 17,
                hotel_img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                hotel_room_img: [
                    "https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1582582588373-db70762e81cc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                ], 
                luks: true,
                maxCapacity: 49,
                breakfast: true,
                freeotopark: true,
                pool: false,
                wifi: true,
                gym: true,
                bar: false,
                beach: true,
                minigolf: false,
                price: 3599,
            },

            {
                id: uuidv4(),
                title: "Golden Hotel",
                avaibleRoom: 8,
                hotel_img: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1347&q=80",
                hotel_room_img: [
                    "https://images.unsplash.com/photo-1581404501824-b69dfb89f64c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1355&q=80",
                    "https://images.unsplash.com/photo-1507149833265-60c372daea22?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1355&q=80",
                ], 
                luks: true,
                maxCapacity: 53,
                breakfast: true,
                freeotopark: true,
                pool: false,
                wifi: true,
                gym: false,
                bar: true,
                beach: false,
                minigolf: true,
                price: 2799,
            },

            {
                id: uuidv4(),
                title: "Cutes Hotel",
                avaibleRoom: 12,
                hotel_img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                hotel_room_img: [
                    "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1387&q=80",
                ], 
                luks: false,
                maxCapacity: 43,
                breakfast: false,
                freeotopark: true,
                pool: true,
                wifi: false,
                gym: true,
                bar: true,
                beach: false,
                minigolf: true,
                price: 1999,
            },

            {
                id: uuidv4(),
                title: "Blue Origin Hotel",
                avaibleRoom: 15,
                hotel_img: "https://images.unsplash.com/flagged/photo-1552686234-8e47d5602508?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1326&q=80",
                hotel_room_img: [
                    "https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
                    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1387&q=80",
                ],
                luks: false,
                maxCapacity: 54,
                breakfast: false,
                freeotopark: true,
                pool: false,
                wifi: true,
                gym: true,
                bar: true,
                beach: true,
                minigolf: false,
                price: 2130,
            },

            {
                id: uuidv4(),
                title: "Panama Hotel",
                avaibleRoom: 13,
                hotel_img: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
                hotel_room_img: [
                    "https://images.unsplash.com/photo-1541123603104-512919d6a96c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                    "https://images.unsplash.com/photo-1575615599960-852d4ca19e1e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                ],
                luks: false,
                maxCapacity: 34,
                breakfast: true,
                freeotopark: false,
                pool: true,
                wifi: false,
                gym: true,
                bar: false,
                beach: true,
                minigolf: true,
                price: 1268,
            },
        ] ,
        myRooms: [
            {
                title: "Beach Hotel",
                cigarette: true,
                pets: false,
                airing: true,
                privatebeach: false,
                additionalbath: true,
                roomservice: false,
                nestedrooms: false,
                minibar: true,
                fridge: true,
                television: false,
                room_img: "https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                luks: false,
                breakfast: true,
                price: 2530,
            },
    
            {
                title: "Luxurios Hotel",
                cigarette: false,
                pets: true,
                room_img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                luks: false,
                breakfast: false,
                price: 1760,
            },

            {
                title: "Rich Hotel",
                cigarette: true,
                pets: true,
                room_img: "https://images.unsplash.com/photo-1576675784432-994941412b3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
                luks: true,
                price: 3599,
            },

            {
                title: "Golden Hotel",
                cigarette: false,
                pets: false,
                room_img: "https://images.unsplash.com/photo-1576675762999-2d8ee979aac4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80",
                luks: true,
                price: 2799,
            },

            {
                title: "Cutes Hotel",
                cigarette: true,
                pets: false,
                room_img: "https://images.unsplash.com/photo-1576675762919-b2197ab5d6bf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80",
                luks: false,
                price: 1999,
            },

            {
                title: "Blue Origin Hotel",
                cigarette: false,
                pets: true,
                room_img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1339&q=80",
                luks: true,
                price: 1865,
            },

            {
                title: "Panama Hotel",
                cigarette: true,
                pets: false,
                room_img: "https://images.unsplash.com/photo-1574873215043-44119461cb3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                luks: false,
                price: 1268,
            },
        ]
    }


    render() {
        return (
            <HotelsContext.Provider value={{...this.state}}>
                {this.props.children}
            </HotelsContext.Provider>
        )
    }
   
}

export default HotelsContextProvider
