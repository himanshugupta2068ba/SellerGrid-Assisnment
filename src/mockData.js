/** Hardcoded showcase data — replace with API in production */

export const summary = {
  totalReviews: 12847,
  avgRating: 4.1,
  periodLabel: 'Last 30 days',
}

export const sentiment = {
  good: 62,
  moderate: 24,
  bad: 14,
}

export const platforms = [
  {
    id: 'amazon',
    name: 'Amazon',
    reviews: 4521,
    good: 58,
    moderate: 28,
    bad: 14,
  },
  {
    id: 'flipkart',
    name: 'Flipkart',
    reviews: 3180,
    good: 65,
    moderate: 22,
    bad: 13,
  },
  {
    id: 'google',
    name: 'Google Reviews',
    reviews: 2104,
    good: 71,
    moderate: 19,
    bad: 10,
  },
  {
    id: 'trustpilot',
    name: 'Trustpilot',
    reviews: 1892,
    good: 54,
    moderate: 26,
    bad: 20,
  },
  {
    id: 'instagram',
    name: 'Instagram / DMs',
    reviews: 1150,
    good: 48,
    moderate: 31,
    bad: 21,
  },
]

export const topIssues = [
  { label: 'Late or delayed delivery', mentions: 1842, trend: '+12%' },
  { label: 'Packaging damaged on arrival', mentions: 956, trend: '+3%' },
  { label: 'Sizing / fit not as expected', mentions: 721, trend: '-5%' },
  { label: 'Customer support response time', mentions: 604, trend: '+8%' },
  { label: 'Product color differs from photos', mentions: 412, trend: 'flat' },
]

export const topPros = [
  { label: 'Value for money', mentions: 2103, trend: '+6%' },
  { label: 'Fast shipping (when on time)', mentions: 1588, trend: '+4%' },
  { label: 'Product quality & finish', mentions: 1420, trend: '+2%' },
  { label: 'Easy returns process', mentions: 891, trend: '+11%' },
  { label: 'Accurate product description', mentions: 756, trend: 'flat' },
]

export const recentReviews = [
  {
    id: 1,
    platform: 'Amazon',
    rating: 5,
    snippet: 'Great quality for the price. Arrived two days early.',
    sentiment: 'good',
    date: 'Mar 21, 2025',
  },
  {
    id: 2,
    platform: 'Flipkart',
    rating: 2,
    snippet: 'Box was crushed. Item works but disappointing unboxing.',
    sentiment: 'bad',
    date: 'Mar 20, 2025',
  },
  {
    id: 3,
    platform: 'Google Reviews',
    rating: 4,
    snippet: 'Solid product. Support took 48h to reply — acceptable.',
    sentiment: 'moderate',
    date: 'Mar 20, 2025',
  },
  {
    id: 4,
    platform: 'Trustpilot',
    rating: 5,
    snippet: 'Third purchase. Consistent quality every time.',
    sentiment: 'good',
    date: 'Mar 19, 2025',
  },
  {
    id: 5,
    platform: 'Instagram',
    rating: 3,
    snippet: 'Love the design. Size runs small — check chart.',
    sentiment: 'moderate',
    date: 'Mar 18, 2025',
  },
]
