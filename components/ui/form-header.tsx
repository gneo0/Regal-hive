import { FormHeaderProps } from "@/typings";

export default function FormHeader({ className, children }: FormHeaderProps) {
  return (
    <p className={className}>{children}</p>
  )
}
