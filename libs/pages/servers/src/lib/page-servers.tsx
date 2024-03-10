import {Container} from "./ui/container";
import {Route, Routes} from "react-router";
import {ROUTER_SERVERS} from "./router";

export function PageServers() {
  return (
    <Container>
      <Routes>
        {ROUTER_SERVERS.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.component}
          />
        ))}
      </Routes>
    </Container>
  )
}
