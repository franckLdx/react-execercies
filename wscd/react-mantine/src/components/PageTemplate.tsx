import { FC, ReactNode } from "react";
import { PageHeader } from "@/pageHeader/PageHeader";

interface PageTemplateProps {
  children: ReactNode
}

export const PageTemplate: FC<PageTemplateProps> = ({ children }) => (
  <>
    <PageHeader />
    {children}
  </>
)