"use client";

import type { ReactNode } from "react";

type ClientProps = {
  children?: ReactNode;
};

export function Client({ children }: ClientProps) {
  return <>{children}</>;
}
