import React from 'react';

const NoCopy: React.FC = () => {
  // Prevent right-click context menu
  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Prevent copy event
  const handleCopy = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
     <div
      onContextMenu={handleContextMenu}
      onCopy={handleCopy}
      className="select-none"
    >
      <p>
        "This text cannot be selected, copied, or right-clicked."
      </p>
    </div>
  )
};

export default NoCopy;