// /src/components/contents/ReusableLoader.tsx

// External libraries
import React from "react";

interface LoaderProps {
  message: string;
}

const Loader: React.FC<LoaderProps> = ({ message }) => (
  <span className="text-left text-sm font-semibold text-footer-coklat">
    {message}
  </span>
);

export default Loader;
