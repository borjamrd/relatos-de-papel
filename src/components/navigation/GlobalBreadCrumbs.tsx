import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";

const routeConfig = [
  { path: "/home", label: "Inicio" },
  { path: "/books/:bookId", label: "Detalles del Libro", dynamic: true },
  { path: "/cart", label: "Carrito" },
  { path: "/checkout", label: "Checkout" },
];

const GlobalBreadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  return (
    <div className="container mx-auto py-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild href="/">
              <Link to="/home">Inicio</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathSegments
            .map((_, index) => {
              const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
              const route = routeConfig.find((route) =>
                route.dynamic
                  ? path.startsWith(route.path.split(":")[0])
                  : route.path === path
              );

              if (route) {
                const label = route.label;
                const isCurrent = index === pathSegments.length - 1;

                return (
                  <Fragment key={`breadcrumb-item-fragment-${path}`}>
                    {location.pathname !== "/" && index > 0 && (
                      <BreadcrumbSeparator key={`separator-${index}`} />
                    )}
                    <BreadcrumbItem key={path}>
                      {" "}
                     
                      {isCurrent ? (
                        <BreadcrumbPage>{label}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild href={path}>
                          <Link to={path}>{label}</Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </Fragment>
                );
              }
              return null;
            })
            .filter(Boolean)}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default GlobalBreadcrumbs;
