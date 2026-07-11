"use client";

import { useState } from "react";

interface Row {
  company: string;
  rating: string;
  price: string;
  warranty: string;
  pros: string;
  cons: string;
}

interface Column {
  key: keyof Row;
  label: string;
}

const columns: Column[] = [
  { key: "company", label: "Company" },
  { key: "rating", label: "Rating" },
  { key: "price", label: "Price per Watt" },
  { key: "warranty", label: "Warranty" },
  { key: "pros", label: "Pros" },
  { key: "cons", label: "Cons" },
];

export default function ComparisonTable({ rows }: { rows: Row[] }) {
  const [sortKey, setSortKey] = useState<keyof Row | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const sorted = [...rows].sort((a, b) => {
    if (!sortKey) return 0;
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    const cmp = aVal.localeCompare(bVal);
    return sortAsc ? cmp : -cmp;
  });

  const toggleSort = (key: keyof Row) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-warm-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-amber-500 text-white">
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => toggleSort(col.key)}
                className={`px-4 py-3.5 text-left font-semibold whitespace-nowrap ${
                  col.key !== "company"
                    ? "hidden lg:table-cell"
                    : ""
                } cursor-pointer hover:bg-amber-600 transition-colors`}
              >
                {col.label}
                {sortKey === col.key && (
                  <span className="ml-1">{sortAsc ? "↑" : "↓"}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, i) => (
            <tr
              key={row.company}
              className={`${
                i % 2 === 0 ? "bg-white" : "bg-warm-gray-50"
              } hover:bg-amber-50/50 transition-colors`}
            >
              <td className="px-4 py-4 font-semibold text-ink whitespace-nowrap">
                {row.company}
              </td>
              <td className="px-4 py-4 text-ink-muted sm:table-cell hidden lg:table-cell">
                {row.rating}
              </td>
              <td className="px-4 py-4 text-ink-muted sm:table-cell hidden lg:table-cell">
                {row.price}
              </td>
              <td className="px-4 py-4 text-ink-muted hidden lg:table-cell">
                {row.warranty}
              </td>
              <td className="px-4 py-4 text-ink-muted hidden lg:table-cell max-w-xs">
                {row.pros}
              </td>
              <td className="px-4 py-4 text-ink-muted hidden lg:table-cell max-w-xs">
                {row.cons}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
