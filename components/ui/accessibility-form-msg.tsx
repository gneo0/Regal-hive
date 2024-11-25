export default function AccessibilityFormMsg({ message }: { message: string | undefined }) {
  return (
    <p aria-live="polite" className="sr-only" role="status">{message}</p>
  )
}
