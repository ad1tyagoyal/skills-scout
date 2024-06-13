"use client";
import { useState } from "react";

interface HeadingDropdownProps {
  heading: string;
  dropdownItems: string[];
}

export default function HeadingDropdown({
  heading,
  dropdownItems,
}: HeadingDropdownProps) {
  const [selectedIdx, setSelectedOption] = useState(0);
  return (
    <div style={{ textAlign: "left" }}>
      <h5 className="fw-bold">{heading}</h5>
      <div className="dropdown d-grid gap-2">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {dropdownItems[selectedIdx]}
        </button>
        <ul className="dropdown-menu">
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <a
                className="dropdown-item"
                onClick={() => {
                  setSelectedOption(index);
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
