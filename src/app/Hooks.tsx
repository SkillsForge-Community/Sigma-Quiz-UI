import { AppDispatch,RootStore } from "./store";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { UseDispatch,useSelector } from "react-redux";
export const useAppDispatch=()=>useDispatch<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<RootStore>=useSelector