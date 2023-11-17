import tw, { styled } from 'twin.macro'

interface ButtonProps {
  $variant?: 'primary' | 'secondary'
  $isSmall?: boolean
}

const Button = styled.button<ButtonProps>(({ $variant, $isSmall }) => [
  // The common button styles
  tw`px-8 py-2 rounded transform duration-75`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 text-yellow-400)`,

  // Use props to conditionally style your components
  $variant === 'primary' && tw`btn-primary`,

  // Combine regular css with tailwind classes within backticks
  $variant === 'secondary' && tw` btn-secondary`,
])

export default Button
