import { create } from "zustand";

const CounterStore = create((set) => ({
    count:1,
    increase: () => set((state) => ({count:state.count + 1})),
    increaseBy: (value) => 
        set((state) => ({
        count:state.count + value
    })),
    increaseBy2: (value) => 
        set((state) => ({
        count:state.count + value
    })),
    increaseBy3: (value) => 
        set((state) => ({
        count:state.count + value
    })),
    decrease: () => set((state) => ({count:state.count - 1})),
    decreaseBy: (value) => 
        set((state) => ({
        count:state.count - value
    })),
    decreaseBy2: (value) => 
        set((state) => ({
        count:state.count - value
    })),
    decreaseBy3: (value) => 
        set((state) => ({
        count:state.count - value
    })),
}));

export default CounterStore;