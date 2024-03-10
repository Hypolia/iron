import {Container} from "./ui/container";
import {Route, Routes} from "react-router";
import {ROUTER_SETTINGS} from "./router";

export function PageSettings() {
  return (
    <Container>
      <Routes>
        {ROUTER_SETTINGS.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Container>
  )
}
