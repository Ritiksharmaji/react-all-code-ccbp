npm install @reduxjs/toolkit react-redux

## -  it means in redux toolkit not required the actions

Great question!

Yes, **in Redux Toolkit**, **you don’t need to manually define separate action creators** like you do in plain Redux. Here's what happens instead:

---

### 🔥 In Plain Redux:

You must define:

* **Action Types**
* **Action Creators**
* **Reducers**

```js
// actionTypes.js
export const INCREMENT = 'INCREMENT';

// actions.js
export const increment = () => ({ type: INCREMENT });

// reducer.js
function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
}
```

---

### ✅ In Redux Toolkit:

You only define a **slice**, and Redux Toolkit:

* Automatically generates **action types**
* Automatically creates **action creators**

```js
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  },
});

// Action creators auto-generated
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

---

### ✨ Summary:

| Feature             | Plain Redux | Redux Toolkit    |
| ------------------- | ----------- | ---------------- |
| Action Types        | ✅ Required  | ❌ Auto-generated |
| Action Creators     | ✅ Required  | ❌ Auto-generated |
| Reducer Boilerplate | ✅ Verbose   | ✅ Simplified     |

So yes, **Redux Toolkit saves time** by eliminating manual action and type definitions 🎉

Let me know if you'd like to compare it side-by-side with plain Redux in a sample app!
