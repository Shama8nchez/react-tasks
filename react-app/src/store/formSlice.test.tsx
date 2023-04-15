import formReducer, {
  addCard,
  FormState,
} from './formSlice'

describe('Form reducer', () => {
  const state: FormState = {
    cards: [],
    card: {
      name: "",
      birth: "",
      course: "",
      relocation: false,
      language: "",
      img: null,
    },
    note: "",
  }

  it('should handle initial state', () => {
    const initialState: FormState = state
    const action = { type: 'unknown' }
    const expectedState = initialState

    expect(formReducer(initialState, action)).toEqual(expectedState)
  })
})

