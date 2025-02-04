import { CardMedia, Grid2 } from "@mui/material";

const Categories = () => {
  const data = [
    "Cups And Saucers",
    "Mugs",
    "Platters",
    "Bowls",
    "Tea Sets",
    "Cups and Cookie Plates",
  ];

  const toSlug = (text: any) => {
    return text.toLowerCase().replace(/\s+/g, "-");
  };

  return (
    <Grid2
      container
      spacing={4}
      padding={2}
      className={"justify-center items-center"}
    >
      {data.map((item, index) => {
        return (
          <Grid2
            key={index}
            size={{
              xs: 6,
              md: 1.5,
            }}
            className="flex items-center flex-col"
          >
            <CardMedia
              className="bg-slate-300 w-32 h-32 rounded-full mb-2 cursor-pointer"
              image={`${
                process.env.NEXT_PUBLIC_AMAZON_S3
              }/tev/categories/${toSlug(item)}.webp`}
              title={`${item}`}
            />
            <small className="uppercase font-bold text-ellipsis whitespace-nowrap overflow-hidden">
              {item}
            </small>
          </Grid2>
        );
      })}
    </Grid2>
  );
};

export default Categories;
