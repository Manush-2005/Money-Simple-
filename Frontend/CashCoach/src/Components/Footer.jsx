import React from "react";


const Footer =()=>{
   <>
    <div className="mb-4">
        <a href="/pricing" className="mr-4">Pricing</a>
        <a href="/faqs" className="mr-4">FAQs</a>
        <a href="/privacy-policy" className="mr-4">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
    </div>
    <div className="mb-4">
        <a href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
    </div>
    <div className="mb-4">
        <a href="https://facebook.com/yourwebsite" className="mr-4"><i className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/yourwebsite" className="mr-4"><i className="fab fa-twitter"></i></a>
        <a href="https://instagram.com/yourwebsite"><i className="fab fa-instagram"></i></a>
    </div>
    <div>
        <form>
            <label htmlFor="newsletter" className="block mb-2">Sign up for our newsletter:</label>
            <input type="email" id="newsletter" className="bg-white text-black rounded p-2 mb-2" placeholder="Your email address" />
            <button type="submit" className="bg-blue-900 text-white py-2 px-4 rounded">Sign Up</button>
        </form>
    </div>
    </>


}
export default Footer;