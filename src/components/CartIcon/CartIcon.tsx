import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

export default function CartIcon() {
  const { itemCount } = useCart();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleCartClick = () => {
    if (!isAuthenticated) {
      toast.error('Please login to access your cart', {
        style: {
          background: '#468847',
          color: '#fff',
        },
        iconTheme: {
          primary: '#fff',
          secondary: '#468847',
        },
      });
      navigate('/auth/login');
      return;
    }
    navigate('/cart');
  };

  return (
    <div 
      className="relative cursor-pointer hover:opacity-80 transition-opacity"
      onClick={handleCartClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </div>
  );
}