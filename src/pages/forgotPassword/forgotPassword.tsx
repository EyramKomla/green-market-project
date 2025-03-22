import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Forget Password</h2>
      </div>
      
      <div className="text-center text-gray-600 text-sm mb-6">
        Enter the email address or mobile phone number associated with your Green Market account.
      </div>
      
      <form className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-[#468847] text-white rounded-md hover:bg-[#3a7139]"
        >
          SEND CODE
        </button>
      </form>

      <div className="text-center space-y-2">
        <div>
          <span className="text-gray-600">Already have account? </span>
          <Link to="/signin" className="text-[#468847]">
            Sign In
          </Link>
        </div>
        <div>
          <span className="text-gray-600">Don't have account? </span>
          <Link to="/signup" className="text-[#468847]">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}