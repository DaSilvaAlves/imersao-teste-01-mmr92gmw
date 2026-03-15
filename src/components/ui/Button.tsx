import React from 'react';

interface ButtonProps {
 _field: React.ReactNode;
  onClick: () => void;
}

const Button = ({, onClick }: ButtonProps) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;