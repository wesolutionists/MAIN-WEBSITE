export interface Solution {
  number: string
  name: string
  promise: string
  price: string
  monthly: string
  featured: boolean
  features: string[]
  cta: string
}

export const solutions: Solution[] = [
  {
    number: '01',
    name: 'Digital Foundation',
    promise: 'Your foundation, built to convert.',
    price: '$299',
    monthly: '$99',
    featured: false,
    features: [
      'Custom Websites',
      'E-commerce Websites',
      'Meta Ads Systems',
      'Creative Strategy',
      'Lead Generation',
    ],
    cta: 'Start Building',
  },
  {
    number: '02',
    name: 'AI Workforce',
    promise: 'A team that never clocks out.',
    price: '$799+',
    monthly: '$199',
    featured: true,
    features: [
      'AI Voice Agents',
      'AI Chatbots',
      'AI Customer Support',
      'AI Follow-Up Agents',
      'AI Receptionist Agents',
    ],
    cta: 'Build Your Workforce',
  },
  {
    number: '03',
    name: 'AI Business Systems',
    promise: 'Software built around how you work.',
    price: '$1,499+',
    monthly: '$399',
    featured: false,
    features: [
      'Home Services OS',
      'Real Estate OS',
      'E-commerce OS',
      'Business Automation Systems',
      'CUSTOM BUSINESS SYSTEMS',
    ],
    cta: 'Build Your System',
  },
]
