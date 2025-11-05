import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";

const FeaturedRecipes = () => {
    const recipes = [
        {
            title: "Lemon Cheesecake",
            description: "Light and creamy cheesecake topped with a zesty lemon glaze.",
            image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Fruit Smoothie Bowl",
            description: "Colorful and refreshing smoothie bowl packed with fresh fruits.",
            image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Fresh Garden Salad",
            description: "Crisp lettuce, tomatoes, and cucumber with a light vinaigrette.",
            image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Homemade Cupcakes",
            description: "Fluffy vanilla cupcakes with soft pastel frosting and sprinkles.",
            image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
        },
    ];

    return (
        <Box sx={{ pb: 2 }}>
            <Box sx={{ py: 8, borderRadius: "50px" }}>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ fontWeight: "bold", mb: 8, color: "#4E342E" }}
                >
                    Featured Recipes
                </Typography>

                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    sx={{
                        py: 8,
                        backgroundColor: "#FFF8F3",
                        borderRadius: "40px",
                        height: {
                            xs: "auto",
                            sm: "auto",
                            md: "auto",
                            lg: "40vh",
                        },
                        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                    }}
                >
                    {recipes.map((recipe, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={index}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Card
                                sx={{
                                    width: "100%",
                                    maxWidth: 300,
                                    height: 500,
                                    boxShadow: "none",
                                    borderRadius: "5px",
                                    overflow: "hidden",
                                    transition: "transform 0.5s ease, box-shadow 0.5s ease",
                                    backgroundColor: "transparent",
                                    backdropFilter: "blur(6px)",
                                    "&:hover": {
                                        transform: "translateY(-12px)",
                                        boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={recipe.image}
                                    alt={recipe.title}
                                    sx={{
                                        objectFit: "cover",
                                        transition: "transform 0.6s ease",
                                        "&:hover": { transform: "scale(1.06)" },
                                    }}
                                />
                                <CardContent sx={{ textAlign: "center", p: 3 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "600", color: "#8B4513", mb: 1 }}
                                    >
                                        {recipe.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "#555", mb: 2, lineHeight: 1.6 }}
                                    >
                                        {recipe.description}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            color: "#8B4513",
                                            borderColor: "#8B4513",
                                            borderRadius: "25px",
                                            px: 3,
                                            py: 1,
                                            transition: "all 0.4s ease",
                                            "&:hover": {
                                                backgroundColor: "#FFF8F3",
                                                borderColor: "#A0522D",
                                            },
                                        }}
                                    >
                                        View Recipe
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default FeaturedRecipes;
