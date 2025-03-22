import { Link } from 'react-router-dom';

export default function EmailVerification() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Verify Your Email Address</h2>
      </div>
      
      <div className="text-center text-gray-600 text-sm mb-6">
        Non ultrices lectus a nunc blandit. Quisque arcu arcu, tristique a ut at sem.
      </div>
      
      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Verification Code"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-[#468847] text-white rounded-md hover:bg-[#3a7139]"
        >
          VERIFY ME
        </button>

        <div className="text-center">
          <Link to="#" className="text-[#468847] text-sm">
            Resend Code
          </Link>
        </div>
      </form>
    </div>
  );
}