import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import FooterComponent from './components/Footer-Header/FooterComponent';
import HeaderComponent from './components/Footer-Header/HeaderComponent';

// user-components
import RoutesWithUserChatComponent from './components/user/RoutesWithUserChatComponent';

// import publicly available Page
import HomePage from './pages/homePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// import Protected User Page
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent';
import UserProfilePage from './pages/user/UserProfilePage';
import UserOrdersPage from './pages/user/UserOrdersPage';
import UserOrderDetailsPage from './pages/user/UserOrderDetailsPage';
import UserCartDetailsPage from './pages/user/UserCartDetailsPage';

// import Protected admin pages
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage';
import AdminChatsPage from './pages/admin/AdminChatsPage';
import AdminCreateProductPage from './pages/admin/AdminCreateProductPage';
import AdminEditProductPage from './pages/admin/AdminEditProductPage';
import AdminEditUserPage from './pages/admin/AdminEditUserPage';
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          {/* publicly avaliable routes:  */}
          <Route path="/" element={<HomePage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element="Page not exists 404" />
        </Route>
        {/* protected user routes */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrdersPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route
            path="/user/order-details"
            element={<UserOrderDetailsPage />}
          />
        </Route>

        {/* protected admin routes */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-users" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route
            path="/admin/create-products"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-products"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />
        </Route>
        <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        <Route path="/admin/chats" element={<AdminChatsPage />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;
