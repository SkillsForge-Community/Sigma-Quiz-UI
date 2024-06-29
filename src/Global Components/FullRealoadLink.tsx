import React from "react";

type FullReloadLinkProps = {
  to: string;
  children: React.ReactNode;
};

function FullReloadLink({ to, children }: FullReloadLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = to;
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export default FullReloadLink;
