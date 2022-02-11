import { useRouter } from 'next/router'

export const getDocumentMeta = () => {
  const router = useRouter()
  // Fetch from query
  const { plan } = router.query
  // Set and capitalize document title
  const title = String(plan).split("-").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")

  return { plan, title }
}