"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export function Pagination({
  currentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
}: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex justify-center gap-2 mt-8">
      {hasPrevPage && (
        <Link
          href={createPageURL(currentPage - 1)}
          className="px-4 py-2 border rounded hover:bg-primary/80"
        >
          Previous
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={createPageURL(page)}
          className={`px-4 py-2 border rounded ${
            currentPage === page
              ? "bg-primary text-white"
              : "hover:bg-primary/80"
          }`}
        >
          {page}
        </Link>
      ))}

      {hasNextPage && (
        <Link
          href={createPageURL(currentPage + 1)}
          className="px-4 py-2 border rounded hover:bg-primary/80"
        >
          Next
        </Link>
      )}
    </div>
  );
}
