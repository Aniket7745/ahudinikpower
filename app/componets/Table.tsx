"use client";

export default function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  if (!headers || !rows) return null;

  return (
    <div className="overflow-x-auto mt-3 border border-gray-200 bg-white">
      <table className="w-full border-collapse text-[14px]">
        <thead className="bg-blue-50 text-blue-700 border-b border-gray-200">
          <tr>
            {headers.map((head, i) => (
              <th
                key={i}
                className={`p-3 ${
                  i === 0 ? "text-left" : "text-right"
                } font-semibold`}
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-t border-gray-200 ${
                i % 2 === 0 ? "bg-white" : "bg-[#fdfdff]"
              }`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`p-3 ${
                    j === 0 ? "text-left" : "text-right"
                  } text-gray-800`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
