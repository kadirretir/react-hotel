import React from 'react'

export const HotelsContext = React.createContext()

class HotelsContextProvider extends React.Component {
    state= {
        myHotel: [
            {
                title: "Beach Hotel",
                avaibleRoom: 19,
                hotel_img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                family: false,
                price: 2530,
            },
    
            {
                title: "Luxurios Hotel",
                avaibleRoom: 7,
                hotel_img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                family: true,
                price: 1760,
            },

            {
                title: "Rich Hotel",
                avaibleRoom: 17,
                hotel_img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                family: true,
                price: 3599,
            },

            {
                title: "Golden Hotel",
                avaibleRoom: 3,
                hotel_img: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1347&q=80",
                family: true,
                price: 2799,
            },

            {
                title: "Cutes Hotel",
                avaibleRoom: 12,
                hotel_img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                family: false,
                price: 1999,
            },

            {
                title: "Blue Origin Hotel",
                avaibleRoom: 2,
                hotel_img: "https://images.unsplash.com/flagged/photo-1552686234-8e47d5602508?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1326&q=80",
                family: true,
                price: 1865,
            },

            {
                title: "Panama Hotel",
                avaibleRoom: 7,
                hotel_img: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
                family: false,
                price: 1268,
            },
        ] ,
        myRooms: [
            {
                title: "Beach Hotel",
                cigarette: true,
                pets: false,
                room_img: "https://images.unsplash.com/flagged/photo-1573168710865-2e4c680d921a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                family: false,
                price: 2530,
            },
    
            {
                title: "Luxurios Hotel",
                cigarette: false,
                pets: true,
                room_img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                family: false,
                price: 1760,
            },

            {
                title: "Rich Hotel",
                cigarette: true,
                pets: true,
                room_img: "https://images.unsplash.com/photo-1576675784432-994941412b3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
                family: true,
                price: 3599,
            },

            {
                title: "Golden Hotel",
                cigarette: false,
                pets: false,
                room_img: "https://images.unsplash.com/photo-1576675762999-2d8ee979aac4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80",
                family: true,
                price: 2799,
            },

            {
                title: "Cutes Hotel",
                cigarette: true,
                pets: false,
                room_img: "https://images.unsplash.com/photo-1576675762919-b2197ab5d6bf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80",
                family: false,
                price: 1999,
            },

            {
                title: "Blue Origin Hotel",
                cigarette: false,
                pets: true,
                room_img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1339&q=80",
                family: true,
                price: 1865,
            },

            {
                title: "Panama Hotel",
                cigarette: true,
                pets: false,
                room_img: "https://images.unsplash.com/photo-1574873215043-44119461cb3b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                family: false,
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
