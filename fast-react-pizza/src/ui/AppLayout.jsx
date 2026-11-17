import { Outlet, useNavigation } from "react-router";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import LoadingIndicator from "./LoadingIndicator";

function AppLayout() {
  const navigation = useNavigation();
  console.log(navigation);

  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <LoadingIndicator />}
      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
