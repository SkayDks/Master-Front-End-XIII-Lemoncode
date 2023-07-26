import { render } from '@testing-library/vue'
import Card from './Card.vue'

describe('Card', () => {
  it('renders the card', () => {
    const { getByText } = render(Card)

    getByText('Cart 0')
  })
  
})