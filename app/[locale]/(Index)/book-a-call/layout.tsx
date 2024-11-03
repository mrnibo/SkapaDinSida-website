import React from "react";

interface BookACallLayoutProps {
  children: React.ReactNode;
}

const BookACallLayout: React.FC<BookACallLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default BookACallLayout;
