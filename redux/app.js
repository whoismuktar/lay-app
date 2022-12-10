import { AiFillFire } from "react-icons/ai";
import { GiHighPunch, GiNewspaper } from "react-icons/gi";
import { BiTrendingUp } from "react-icons/bi";
import { MdUpcoming } from "react-icons/md";
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  menuItems: [
    {
      title: "Trending",
      // icon: <BiTrendingUp />,
      icon: '',
      id: "trending"

    },
    {
      title: "Bant",
      // icon: <GiHighPunch />,
      icon: '',
      id: "bant"
    },
    {
      title: "Hot",
      // icon: <AiFillFire />,
      icon: '',
      id: "hot"
    },
    {
      title: "New Releases",
      // icon: <GiNewspaper />,
      icon: '',
      id: "newReleases"

    },
    {
      title: "Coming Soon",
      // icon: <MdUpcoming />,
      icon: '',
      id: "comingSoon"

    },
  ]
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = appSlice.actions

export default appSlice.reducer