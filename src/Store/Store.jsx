import { configureStore } from "@reduxjs/toolkit";

import ActionSlice from "./ActionSlice";

export const Store = configureStore({ reducer: { data: ActionSlice } });
