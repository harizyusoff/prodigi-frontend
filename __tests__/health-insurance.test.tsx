// Sample unit test for testing insurance plans rendered properly in the insurance catalog page
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { insurancePlansData } from '../mock-data/main'
import HealthInsurance from '../pages/products/health-insurance'

describe('HealthInsurance', () => {
  it('Render a catalog of insurance plans by checking on its title', () => {
    render(<HealthInsurance />)

    // Iterate the title from the mock data
    insurancePlansData.forEach((plan) => {
      const titleInMockData = plan.title
      // Get title match in the document rendered with the mock data in the insurance catalog page
      const titleInPage = screen.getByText(
        titleInMockData,
        { selector: 'p'}
      )
      
      expect(titleInPage).toBeInTheDocument()
    })
  })
})