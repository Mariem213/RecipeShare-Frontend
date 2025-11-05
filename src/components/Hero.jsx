import React from "react";
import { Box, Typography, Button, Stack, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#FFF8F3",
        pb: 23,
        overflow: "hidden",
      }}
    >
      {/* Main Content */}
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 10,
            flexWrap: "wrap",
          }}
        >
          {/* Left Content */}
          <Box sx={{ maxWidth: "520px" }}>
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#4E342E", mb: 2 }}>
              Discover <span style={{ color: "#8B4513" }}>Delicious Recipes</span>
            </Typography>
            <Typography variant="body1" sx={{ color: "#555", mb: 3, lineHeight: 1.8, width: "95%" }}>
              Your go-to destination for mouth-watering recipes made with love and the freshest
              ingredients. Experience the art of cooking with RecipeShare.
            </Typography>

            {/* Buttons */}
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#8B4513",
                  px: 4,
                  py: 1.3,
                  borderRadius: "30px",
                  transition: "all 0.4s ease",
                  fontWeight: "600",
                  "&:hover": {
                    backgroundColor: "#A0522D",
                    transform: "translateY(-4px)",
                    boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
                  },
                }}
              >
                ORDER NOW
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#8B4513",
                  borderColor: "#8B4513",
                  px: 4,
                  py: 1.3,
                  borderRadius: "30px",
                  fontWeight: "600",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    backgroundColor: "#FFF3E0",
                    borderColor: "#A0522D",
                    transform: "translateY(-4px)",
                    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                  },
                }}
              >
                EXPLORE MORE
              </Button>
            </Stack>
          </Box>

          {/* Right Image */}
          <Box
            sx={{
              position: "relative",
              width: { xs: "250px", md: "350px" },
              height: { xs: "250px", md: "350px" },
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: { xs: 5, md: 0 },
              zIndex: 2,
              "&::before": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: "4px solid transparent",
                borderTopColor: "#A0522D",
                borderRightColor: "#8B4513",
                borderBottomColor: "#D2691E",
                borderLeftColor: "#CD853F",
                animation: "spinBorder 3s linear infinite",
              },
              "@keyframes spinBorder": {
                from: { transform: "rotate(0deg)" },
                to: { transform: "rotate(360deg)" },
              },
            }}
          >
            <Box
              component="img"
              src="../hero.jpg"
              alt="Delicious Food"
              sx={{
                width: "90%",
                height: "90%",
                borderRadius: "50%",
                objectFit: "cover",
                animation: "spinImage 10s linear infinite",
                "@keyframes spinImage": {
                  from: { transform: "rotate(0deg)" },
                  to: { transform: "rotate(360deg)" },
                },
                boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* Wave Shape */}
      <Box
        component="svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,224L40,229.3C80,235,160,245,240,234.7C320,224,400,192,480,186.7C560,181,640,203,720,197.3C800,192,880,160,960,149.3C1040,139,1120,149,1200,165.3C1280,181,1360,203,1400,213.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </Box>
    </Box>
  );
};

export default HeroSection;
