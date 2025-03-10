// /src/components/contents/ReusableLoader.tsx

// External libraries
import React from "react";

interface LoaderProps {
  message: string;
}

const Loader: React.FC<LoaderProps> = ({ message }) => (
  <h4 className="text-left text-sm font-semibold text-footer-coklat">
    {message}
  </h4>
);

export default Loader;
