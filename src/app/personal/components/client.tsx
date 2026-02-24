"use client";

import type { ReactNode } from "react";

type PersonalClientProps = {
  children?: ReactNode;
};

export function PersonalClient({ children }: PersonalClientProps) {
  return <>{children}</>;
}
