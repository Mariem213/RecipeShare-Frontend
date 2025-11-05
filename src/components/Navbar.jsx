import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Container } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        color: "#333",
      }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: "space-between", py: 1.5 }}>
          {/* Logo + Title */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <RestaurantMenuIcon sx={{ color: "#8B4513", fontSize: 32 }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#8B4513" }}>
              RecipeShare
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: "flex", gap: 3 }}>
            {["Home", "Recipes", "About", "Contact"].map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#333",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  "&:hover": { color: "#8B4513", transform: "scale(1.05)", background: "transparent" },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Auth Buttons */}
          <Box>
            <Button
              variant="outlined"
              sx={{
                mr: 2,
                borderColor: "#8B4513",
                color: "#8B4513",
                borderRadius: "25px",
                transition: "all 0.3s ease",
                "&:hover": { backgroundColor: "#FFF3E0", borderColor: "#A0522D" },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#8B4513",
                borderRadius: "25px",
                transition: "all 0.3s ease",
                "&:hover": { backgroundColor: "#A0522D", transform: "translateY(-2px)" },
              }}
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
