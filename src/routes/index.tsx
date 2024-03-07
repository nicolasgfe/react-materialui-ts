import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAppThemeContext } from "../shered/contexts/ThemeContext";

export const AppRoutes = () => {
  const {toggleTheme} = useAppThemeContext();
   return(
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleTheme}>teste</Button>}/>

      <Route path="*" element={<Navigate to={"/pagina-inicial"}></Navigate>}/> 
    </Routes>
  )
 };