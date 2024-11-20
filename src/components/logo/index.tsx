const Logo = () => {
  return (
    <img
      src="/images/logo/TEV_logo.webp" // Replace with your logo path
      alt="Logo"
      style={{
        maxWidth: "100%",
        maxHeight: "100%", // Ensures the image fits within the container
        objectFit: "contain",
        height: 400,
      }}
    />
  );
};

export default Logo;
